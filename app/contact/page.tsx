"use client"

import React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    lines: ["World on Yonge", "7191 Yonge St Unit 701", "Markham, ON L3T 0C4"],
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["(416) 318-7447", "Mon-Fri, 9am-6pm ET"],
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["info@zibaesthetics.com", "admissions@zibaesthetics.com"],
  },
  {
    icon: Clock,
    title: "Office Hours",
    lines: ["Monday - Friday: 9am - 6pm", "Saturday: 10am - 2pm"],
  },
]


export default function ContactPage() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState("submitting")
    setErrorMessage("")
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      setFormState("success")
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      })
    } catch {
      setFormState("error")
      setErrorMessage("Failed to send message. Please try again or email us directly at mahshid.aghania@gmail.com")
    }
  }

  return (
    <>
      <Navigation />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="py-24 lg:py-32 bg-secondary/50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">
                Contact Us
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-foreground">
                {"Let's start a conversation"}
              </h1>
              <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
                Have questions about our programs? Ready to schedule a tour? Our team is 
                here to help you take the next step in your aesthetic career.
              </p>
              <div className="mt-10">
                <a 
                  href="https://zibamedicalaesthetics.janeapp.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-foreground text-background font-medium tracking-wide hover:bg-foreground/90 transition-colors"
                >
                  Book Online
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-16">
              {/* Form */}
              <div className="lg:col-span-3">
                <h2 className="font-serif text-2xl font-medium text-foreground mb-8">
                  Send us a message
                </h2>

                {formState === "success" ? (
                  <div className="bg-secondary/50 border border-border p-12 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                      <CheckCircle2 className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="font-serif text-2xl font-medium text-foreground mb-4">
                      Message Sent!
                    </h3>
                    <p className="text-muted-foreground mb-8">
                      Thank you for reaching out. Our team will get back to you within 24 hours.
                    </p>
                    <Button 
                      onClick={() => setFormState("idle")}
                      variant="outline"
                      className="border-foreground/20"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : formState === "error" ? (
                  <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 p-12 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/30 mb-6">
                      <svg className="h-8 w-8 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <h3 className="font-serif text-2xl font-medium text-foreground mb-4">
                      Something went wrong
                    </h3>
                    <p className="text-muted-foreground mb-8">
                      {errorMessage}
                    </p>
                    <Button 
                      onClick={() => setFormState("idle")}
                      variant="outline"
                      className="border-foreground/20"
                    >
                      Try Again
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-sm text-foreground">
                          First Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="firstName"
                          required
                          placeholder="e.g. Sarah"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          className="bg-background border-border focus:border-foreground"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-sm text-foreground">
                          Family Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="lastName"
                          required
                          placeholder="e.g. Johnson"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          className="bg-background border-border focus:border-foreground"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm text-foreground">
                        Email Address <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        placeholder="e.g. sarah@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-background border-border focus:border-foreground"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm text-foreground">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="e.g. (416) 555-0123"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-background border-border focus:border-foreground"
                      />
                    </div>

                    <Button 
                      type="submit"
                      disabled={formState === "submitting"}
                      className="w-full sm:w-auto bg-foreground text-background hover:bg-foreground/90 px-8"
                    >
                      {formState === "submitting" ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>

              {/* Contact Info */}
              <div className="lg:col-span-2">
                <h2 className="font-serif text-2xl font-medium text-foreground mb-8">
                  Get in touch
                </h2>
                <div className="space-y-8">
                  {contactInfo.map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="shrink-0">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary">
                          <item.icon className="h-5 w-5 text-foreground" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground mb-2">{item.title}</h3>
                        {item.lines.map((line) => (
                          <p key={line} className="text-sm text-muted-foreground">
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Mini Map Preview */}
                <div className="mt-12 aspect-video bg-secondary border border-border overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2877.5611!2d-79.4228!3d43.8071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2d4a74b9c271%3A0x4a6e4c5b4f7b4c5b!2s7191%20Yonge%20St%20Unit%20701%2C%20Markham%2C%20ON%20L3T%200C4%2C%20Canada!5e0!3m2!1sen!2sca!4v1707000000000!5m2!1sen!2sca"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ziba Aesthetics Training Institute Location"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Find Us on Google Map - Full Width Section */}
        <section className="py-24 lg:py-32 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">
                Find Us
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-4">
                Visit Our Training Centre
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Conveniently located in Markham, Ontario, our state-of-the-art facility is easily 
                accessible from Toronto, Thornhill, Richmond Hill, and Aurora.
              </p>
            </div>
            
            <div className="bg-background border border-border overflow-hidden shadow-sm">
              <div className="aspect-[21/9] w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2877.5611!2d-79.4228!3d43.8071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2d4a74b9c271%3A0x4a6e4c5b4f7b4c5b!2s7191%20Yonge%20St%20Unit%20701%2C%20Markham%2C%20ON%20L3T%200C4%2C%20Canada!5e0!3m2!1sen!2sca!4v1707000000000!5m2!1sen!2sca"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ziba Aesthetics Training Institute Location - Full Map"
                />
              </div>
              <div className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border">
                <div className="flex items-center gap-3 text-center sm:text-left">
                  <MapPin className="h-5 w-5 text-accent shrink-0" />
                  <span className="text-foreground font-medium">
                    World on Yonge - 7191 Yonge St Unit 701, Markham, ON L3T 0C4
                  </span>
                </div>
                <a
                  href="https://www.google.com/maps/dir//7191+Yonge+St+Unit+701,+Markham,+ON+L3T+0C4,+Canada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
                >
                  Get Directions
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Service Areas */}
            <div className="mt-12 text-center">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                Serving Students From
              </p>
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                {["Toronto", "Markham", "Thornhill", "Richmond Hill", "Aurora", "Vaughan", "North York", "Scarborough"].map((area) => (
                  <span key={area}>{area}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Social Links */}
        <section className="py-16 bg-card border-t border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
              Follow Us
            </p>
            <div className="flex justify-center gap-6">
              {["Instagram", "Facebook", "LinkedIn", "YouTube"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
