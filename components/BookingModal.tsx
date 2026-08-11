"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2, Send } from "lucide-react"

const courseOptions = [
  "Botox & Filler Training",
  "Medical Aesthetician Certification",
  "Laser Technician Course",
  "Aesthetic Diploma Program",
  "Other / Not Sure Yet",
]

interface BookingModalProps {
  children: React.ReactNode
}

export function BookingModal({ children }: BookingModalProps) {
  const [open, setOpen] = useState(false)
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    courseInterest: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState("submitting")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, type: "consultation" }),
      })

      if (!response.ok) throw new Error("Request failed")

      setFormState("success")
      setFormData({ firstName: "", lastName: "", email: "", phone: "", courseInterest: "", message: "" })
    } catch {
      setFormState("error")
    }
  }

  const handleOpenChange = (value: boolean) => {
    setOpen(value)
    if (!value) setFormState("idle")
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl font-medium">
            Book a Consultation
          </DialogTitle>
          <p className="text-sm text-muted-foreground pt-1">
            Fill out the form below and our team will reach out within 24 hours to confirm your appointment.
          </p>
        </DialogHeader>

        {formState === "success" ? (
          <div className="py-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
              <CheckCircle2 className="h-8 w-8 text-accent" />
            </div>
            <h3 className="font-serif text-xl font-medium text-foreground mb-2">Request Received!</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Thank you! We&apos;ll be in touch within 24 hours to confirm your consultation.
            </p>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Close
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 pt-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="b-firstName">First Name <span className="text-red-500">*</span></Label>
                <Input
                  id="b-firstName"
                  required
                  placeholder="Sarah"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="b-lastName">Last Name <span className="text-red-500">*</span></Label>
                <Input
                  id="b-lastName"
                  required
                  placeholder="Johnson"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="b-email">Email Address <span className="text-red-500">*</span></Label>
              <Input
                id="b-email"
                type="email"
                required
                placeholder="sarah@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="b-phone">Phone Number</Label>
              <Input
                id="b-phone"
                type="tel"
                placeholder="(416) 555-0123"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="b-course">Course Interest</Label>
              <Select
                value={formData.courseInterest}
                onValueChange={(value) => setFormData({ ...formData, courseInterest: value })}
              >
                <SelectTrigger id="b-course">
                  <SelectValue placeholder="Select a program (optional)" />
                </SelectTrigger>
                <SelectContent>
                  {courseOptions.map((course) => (
                    <SelectItem key={course} value={course}>
                      {course}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="b-message">Message</Label>
              <Textarea
                id="b-message"
                placeholder="Any questions or details about your availability..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={3}
              />
            </div>

            {formState === "error" && (
              <p className="text-sm text-red-500">
                Something went wrong. Please try again or call us at (416) 318-7447.
              </p>
            )}

            <Button
              type="submit"
              disabled={formState === "submitting"}
              className="w-full bg-foreground text-background hover:bg-foreground/90"
            >
              {formState === "submitting" ? "Sending..." : (
                <>Send Request <Send className="ml-2 h-4 w-4" /></>
              )}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
