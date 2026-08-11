import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, courseInterest, message, type } = body

    // Validate required fields
    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    const isBooking = type === "consultation"
    const subjectLabel = isBooking ? "Consultation Request" : "Contact Form Submission"

    // Format the email content
    const emailContent = `
New ${subjectLabel} from Aesthetic Training Website

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone || "Not provided"}${isBooking ? `
Course Interest: ${courseInterest || "Not specified"}
Message: ${message || "None"}` : ""}

---
This message was sent from the form at aesthetictraining.ca
    `.trim()

    // Send email using Resend
    const resendApiKey = process.env.RESEND_API_KEY

    if (!resendApiKey) {
      console.error("[v0] RESEND_API_KEY is not configured")
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      )
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "Aesthetic Training Website <onboarding@resend.dev>",
        to: ["mahshid.aghania@gmail.com"],
        reply_to: email,
        subject: `New ${subjectLabel} - ${firstName} ${lastName}`,
        text: emailContent,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error("[v0] Resend API error:", errorData)
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] Contact form error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
