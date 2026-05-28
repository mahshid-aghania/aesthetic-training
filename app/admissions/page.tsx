import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FileText, Users, Calendar, CreditCard, CheckCircle2, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Admissions | Ziba Aesthetics Training Institute",
  description: "Begin your journey in medical aesthetics. Learn about our enrollment process, requirements, and financing options.",
}

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Submit Application",
    description: "Complete our online application with your background information, career goals, and program of interest.",
  },
  {
    number: "02",
    icon: Users,
    title: "Admissions Interview",
    description: "Meet with our admissions team to discuss your goals and ensure the program is the right fit for your career path.",
  },
  {
    number: "03",
    icon: Calendar,
    title: "Select Your Start Date",
    description: "Choose from our upcoming cohort dates and reserve your spot in the class.",
  },
  {
    number: "04",
    icon: CreditCard,
    title: "Complete Enrollment",
    description: "Finalize your enrollment with tuition payment or financing arrangement and prepare for your first day.",
  },
]

const requirements = {
  general: [
    "High school diploma or equivalent (GED)",
    "Valid government-issued photo ID",
    "Pass background check clearance",
    "English language proficiency",
  ],
  healthcare: [
    "Current healthcare license (RN, LPN, NP, PA, MD, DO, DDS)",
    "Current CPR/BLS certification",
    "Professional liability insurance (or obtained before clinical)",
    "Letters of recommendation (2)",
  ],
  esthetician: [
    "State esthetician license",
    "Current CPR/BLS certification",
    "Portfolio of work (if applicable)",
    "Professional references",
  ],
}

const financing = [
  {
    title: "Payment Plans",
    description: "Split your tuition into manageable monthly installments with 0% interest for qualified applicants.",
  },
  {
    title: "Partner Financing",
    description: "We've partnered with leading education lenders to offer competitive rates and flexible terms.",
  },
  {
    title: "Employer Sponsorship",
    description: "Many employers offer tuition assistance. We can provide documentation for your employer.",
  },
  {
    title: "Early Payment Discount",
    description: "Save 5% on tuition when you pay in full at enrollment.",
  },
]

const upcomingDates = [
  { program: "Aesthetic Diploma", date: "March 3, 2026", spots: 4 },
  { program: "Botox & Filler Certification", date: "February 10, 2026", spots: 6 },
  { program: "Laser Technician", date: "February 24, 2026", spots: 5 },
  { program: "Medical Aesthetician", date: "March 17, 2026", spots: 3 },
]

export default function AdmissionsPage() {
  return (
    <>
      <Navigation />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="py-24 lg:py-32 bg-secondary/50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">
                Admissions
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-foreground">
                Your journey starts here
              </h1>
              <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
                Take the first step toward a rewarding career in medical aesthetics. 
                Our admissions process is designed to be straightforward and supportive.
              </p>
              <div className="mt-10">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-foreground text-background hover:bg-foreground/90"
                >
                  <Link href="/contact">
                    Start Your Application
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Enrollment Steps */}
        <section className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                How to Enroll
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground">
                Simple steps to get started
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={step.title} className="relative">
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-border -translate-x-4" />
                  )}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary border border-border">
                      <step.icon className="h-6 w-6 text-foreground" />
                    </div>
                    <span className="font-serif text-4xl font-light text-muted-foreground/30">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-medium text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="py-24 lg:py-32 bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                Prerequisites
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground">
                Admission requirements
              </h2>
              <p className="mt-4 text-muted-foreground">
                Requirements vary by program. Below are the general requirements and additional 
                requirements for specific tracks.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-background p-8 border border-border">
                <h3 className="font-serif text-xl font-medium text-foreground mb-6">
                  General Requirements
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  All applicants must meet these baseline requirements.
                </p>
                <ul className="space-y-3">
                  {requirements.general.map((req) => (
                    <li key={req} className="flex items-start gap-3">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-background p-8 border border-border">
                <h3 className="font-serif text-xl font-medium text-foreground mb-6">
                  Healthcare Professionals
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Additional requirements for injectable and advanced programs.
                </p>
                <ul className="space-y-3">
                  {requirements.healthcare.map((req) => (
                    <li key={req} className="flex items-start gap-3">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-background p-8 border border-border">
                <h3 className="font-serif text-xl font-medium text-foreground mb-6">
                  Esthetician Track
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Requirements for non-injectable aesthetic programs.
                </p>
                <ul className="space-y-3">
                  {requirements.esthetician.map((req) => (
                    <li key={req} className="flex items-start gap-3">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Dates */}
        <section className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                  Upcoming Cohorts
                </p>
                <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
                  Start dates
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Classes fill quickly due to our small class sizes. Reserve your spot 
                  early to secure your preferred start date.
                </p>
                <Button 
                  asChild 
                  variant="outline"
                  className="border-foreground/20 bg-transparent"
                >
                  <Link href="/courses">View All Programs</Link>
                </Button>
              </div>
              <div className="space-y-4">
                {upcomingDates.map((item) => (
                  <div 
                    key={`${item.program}-${item.date}`}
                    className="flex items-center justify-between p-6 bg-secondary/30 border border-border"
                  >
                    <div>
                      <p className="font-medium text-foreground">{item.program}</p>
                      <p className="text-sm text-muted-foreground">{item.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-accent">{item.spots} spots left</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Financing */}
        <section className="py-24 lg:py-32 bg-secondary/50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                Financing Options
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground">
                Invest in your future
              </h2>
              <p className="mt-4 text-muted-foreground">
                We offer flexible payment options to help make your education accessible. 
                Our admissions team can help you find the best solution for your situation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {financing.map((option) => (
                <div key={option.title} className="bg-card p-8 border border-border">
                  <h3 className="font-serif text-xl font-medium text-foreground mb-3">
                    {option.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {option.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 lg:py-32 bg-foreground text-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6">
              Ready to take the next step?
            </h2>
            <p className="text-background/70 max-w-xl mx-auto mb-10">
              Our admissions team is here to guide you through the process and answer 
              any questions you may have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-background text-foreground hover:bg-background/90"
              >
                <Link href="/contact">Start Application</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-background/30 text-background hover:bg-background/10 bg-transparent"
              >
                <a href="https://zibamedicalaesthetics.janeapp.com/" target="_blank" rel="noopener noreferrer">Book a Consultation</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
