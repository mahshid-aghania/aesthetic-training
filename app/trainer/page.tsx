import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Award, BookOpen, Users, Heart, Sparkles, GraduationCap } from "lucide-react"

export const metadata: Metadata = {
  title: "Meet Your Trainer | Dr. Mahshid Seraji | Ziba Aesthetics Training Institute",
  description: "Learn from Dr. Mahshid Seraji, an International Medical Graduate and highly experienced Medical Aesthetician. Founder of Ziba Medical Aesthetics with years of clinical and aesthetic practice.",
}

const expertise = [
  {
    icon: Sparkles,
    title: "Laser Technician",
    description: "Advanced laser treatments and safety protocols"
  },
  {
    icon: Award,
    title: "Botox & Dermal Fillers",
    description: "Injectable techniques with precision and artistry"
  },
  {
    icon: Heart,
    title: "Microneedling",
    description: "Collagen induction therapy and skin rejuvenation"
  },
  {
    icon: BookOpen,
    title: "Skincare",
    description: "Medical-grade facials and treatment protocols"
  },
  {
    icon: Users,
    title: "Microblading & PMU",
    description: "Permanent makeup and micropigmentation artistry"
  },
  {
    icon: GraduationCap,
    title: "Professional Training",
    description: "Comprehensive education for aesthetic practitioners"
  },
]

const values = [
  { label: "Evidence-Based", description: "Treatments grounded in scientific research" },
  { label: "Personalized Care", description: "Tailored approach for each client" },
  { label: "Safety First", description: "Rigorous protocols and standards" },
  { label: "Natural Results", description: "Refined, subtle enhancements" },
]

export default function TrainerPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/3 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image Column */}
            <div className="order-2 lg:order-1 relative">
              <div className="relative">
                {/* Decorative Frame */}
                <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 via-transparent to-accent/10 rounded-2xl transform rotate-2 transition-transform duration-700 hover:rotate-0" />
                <div className="absolute -inset-4 border border-accent/20 rounded-2xl transform -rotate-1 transition-transform duration-700 hover:rotate-0" />
                
                {/* Main Image */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl shadow-2xl">
                  <Image
                    src="/images/trainer/mahshid-seraji.png"
                    alt="Dr. Mahshid Seraji - Founder & Lead Trainer at Ziba Aesthetics Training Institute"
                    fill
                    className="object-cover object-top transition-transform duration-700 hover:scale-105"
                    priority
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent" />
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 bg-background border border-border shadow-xl rounded-xl p-4 transform transition-transform duration-500 hover:scale-105">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">Founder</p>
                  <p className="font-serif text-lg font-medium text-foreground">Ziba Medical Aesthetics</p>
                </div>
              </div>
            </div>
            
            {/* Content Column */}
            <div className="order-1 lg:order-2">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full">
                  <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  <span className="text-xs uppercase tracking-[0.2em] text-accent font-medium">
                    Meet Your Trainer
                  </span>
                </div>
                
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-foreground">
                  Dr. Mahshid Seraji
                </h1>
                
                <p className="text-lg text-accent font-medium">
                  International Medical Graduate & Medical Aesthetician
                </p>
                
                <div className="w-16 h-px bg-accent/30" />
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Dr. Mahshid is an International Medical Graduate and highly experienced Medical 
                  Aesthetician with many years of clinical and aesthetic practice. As the founder 
                  of <span className="text-foreground font-medium">Ziba Medical Aesthetics</span>, 
                  she is dedicated to delivering evidence-based, personalized treatments with a 
                  strong emphasis on safety, precision, and natural, refined results.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  Each client experience begins with a comprehensive consultation to ensure the 
                  highest standard of care. This same philosophy of excellence extends to our 
                  professional training programs.
                </p>
                
                <div className="pt-4 flex flex-wrap gap-4">
                  <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90">
                    <Link href="/courses">Explore Training Programs</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="bg-transparent">
                    <a href="https://zibamedicalaesthetics.janeapp.com/" target="_blank" rel="noopener noreferrer">Book a Consultation</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 lg:py-32 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">
              Training Philosophy
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
              Excellence Through Education
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              In addition to clinical services, Dr. Mahshid and her team offer advanced professional 
              training programs designed for aestheticians, nurses, physicians, and makeup artists 
              seeking high-level education and hands-on expertise.
            </p>
          </div>
          
          {/* Values Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={value.label}
                className="group relative bg-background border border-border rounded-xl p-6 text-center transition-all duration-500 hover:shadow-lg hover:border-accent/30 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                <div className="relative">
                  <h3 className="font-medium text-foreground mb-2">{value.label}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">
                Areas of Expertise
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
                Comprehensive Training Programs
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our training programs cover the full spectrum of medical aesthetics, from foundational 
                techniques to advanced procedures. Each course combines theoretical knowledge with 
                extensive hands-on practice.
              </p>
              <Button asChild className="bg-foreground text-background hover:bg-foreground/90">
                <Link href="/courses">View All Courses</Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {expertise.map((item, index) => (
                <div 
                  key={item.title}
                  className="group relative bg-secondary/50 border border-border rounded-xl p-6 transition-all duration-500 hover:bg-background hover:shadow-lg hover:border-accent/30"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-4 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                    <item.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-medium text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 lg:py-32 bg-foreground text-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <svg className="w-12 h-12 mx-auto mb-8 text-background/20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed mb-8">
            My mission is to empower the next generation of aesthetic practitioners with the 
            knowledge, skills, and confidence to deliver exceptional results while prioritizing 
            patient safety above all else.
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-px bg-background/20" />
            <p className="text-background/60">Dr. Mahshid Seraji</p>
            <div className="w-16 h-px bg-background/20" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative bg-secondary/50 border border-border rounded-2xl p-12 lg:p-16 overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />
            
            <div className="relative max-w-2xl mx-auto text-center">
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">
                Start Your Journey
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
                Learn from the Best
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Join our professional training programs and gain the expertise you need to excel 
                in the medical aesthetics industry. Whether you&apos;re starting your career or 
                advancing your skills, we&apos;re here to guide you every step of the way.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90">
                  <Link href="/admissions">Apply Now</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
