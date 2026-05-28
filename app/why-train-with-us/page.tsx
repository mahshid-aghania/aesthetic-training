import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Users, Award, BookOpen, Shield, Briefcase, Heart, CheckCircle2 } from "lucide-react"

export const metadata = {
  title: "Why Train With Us | Ziba Aesthetics Training Institute",
  description: "Discover why Ziba Aesthetics Training Institute is the premier choice for medical aesthetics education. Small classes, hands-on training, and industry-recognized certifications.",
}

const advantages = [
  {
    icon: Users,
    title: "Small Class Sizes",
    description: "With a maximum of 8 students per class, you receive personalized attention and ample hands-on practice time.",
    stat: "8",
    statLabel: "Max students per class",
  },
  {
    icon: BookOpen,
    title: "Hands-On Training",
    description: "Practice on real clients from day one under expert supervision. We believe mastery comes through doing.",
    stat: "70%",
    statLabel: "Practical training",
  },
  {
    icon: Award,
    title: "Industry Recognition",
    description: "Our certifications are respected by employers, insurers, and clients worldwide.",
    stat: "50+",
    statLabel: "Partner clinics",
  },
  {
    icon: Briefcase,
    title: "Career Support",
    description: "From resume building to job placement assistance, we support your journey beyond graduation.",
    stat: "92%",
    statLabel: "Employment rate",
  },
]

const testimonials = [
  {
    quote: "The hands-on training at Ziba gave me the confidence to start my own practice. The instructors truly care about your success.",
    name: "Dr. Jennifer Martinez",
    role: "Aesthetic Physician, Class of 2023",
  },
  {
    quote: "After completing the Aesthetic Diploma, I tripled my income within a year. The investment was absolutely worth it.",
    name: "Sarah Chen, RN",
    role: "Nurse Injector, Class of 2022",
  },
  {
    quote: "The curriculum was comprehensive and current. I felt prepared for every situation I encountered in my first year of practice.",
    name: "Michael Torres",
    role: "Laser Technician, Class of 2023",
  },
]

const benefits = [
  "State-of-the-art training facilities",
  "Latest devices and technology",
  "Comprehensive course materials included",
  "Flexible scheduling options",
  "Payment plans available",
  "Lifetime access to alumni resources",
  "Continuing education discounts",
  "Networking opportunities",
]

export default function WhyTrainPage() {
  return (
    <>
      <Navigation />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="py-24 lg:py-32 bg-secondary/50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">
                Why Ziba Aesthetics Training Institute
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-foreground">
                Education that prepares you for real-world success
              </h1>
              <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
                We believe great aesthetic practitioners are made, not born. Our immersive, 
                hands-on approach to education has produced over 5,000 successful graduates 
                who are transforming the industry.
              </p>
            </div>
          </div>
        </section>

        {/* Key Advantages */}
        <section className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {advantages.map((item) => (
                <div key={item.title} className="bg-card border border-border p-8 lg:p-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary">
                      <item.icon className="h-5 w-5 text-foreground" />
                    </div>
                    <div className="text-right">
                      <p className="font-serif text-4xl font-medium text-foreground">{item.stat}</p>
                      <p className="text-xs text-muted-foreground">{item.statLabel}</p>
                    </div>
                  </div>
                  <h3 className="font-serif text-xl font-medium text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-24 lg:py-32 bg-foreground text-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-background/60 mb-4">
                  Our Approach
                </p>
                <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6">
                  Safety-first, results-focused education
                </h2>
                <p className="text-background/80 leading-relaxed mb-8">
                  At Ziba Aesthetics Training Institute, we believe that exceptional outcomes begin with 
                  exceptional safety practices. Our curriculum emphasizes proper technique, 
                  patient assessment, and complication management alongside the artistry of 
                  aesthetic treatments.
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full border border-background/20">
                    <Shield className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium">Zero serious incidents</p>
                    <p className="text-sm text-background/60">In supervised student treatments</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-background/10 p-6 rounded">
                  <p className="font-serif text-4xl font-medium">15+</p>
                  <p className="text-sm text-background/70 mt-2">Years of Excellence</p>
                </div>
                <div className="bg-background/10 p-6 rounded">
                  <p className="font-serif text-4xl font-medium">5,000+</p>
                  <p className="text-sm text-background/70 mt-2">Certified Graduates</p>
                </div>
                <div className="bg-background/10 p-6 rounded">
                  <p className="font-serif text-4xl font-medium">98%</p>
                  <p className="text-sm text-background/70 mt-2">Student Satisfaction</p>
                </div>
                <div className="bg-background/10 p-6 rounded">
                  <p className="font-serif text-4xl font-medium">4.9</p>
                  <p className="text-sm text-background/70 mt-2">Average Rating</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                Student Success
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground">
                Hear from our graduates
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div key={testimonial.name} className="bg-secondary/30 p-8">
                  <Heart className="h-8 w-8 text-accent/50 mb-6" />
                  <p className="text-foreground leading-relaxed mb-8 italic">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-medium text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Benefits */}
        <section className="py-24 lg:py-32 bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                  What You Get
                </p>
                <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
                  Everything you need to succeed
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Your tuition includes more than just classroom instruction. We provide 
                  comprehensive support from enrollment through career launch and beyond.
                </p>
              </div>
              <div>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
              Ready to transform your career?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-10">
              Join the thousands of successful graduates who chose Ziba Aesthetics Training Institute 
              for their medical aesthetics education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-foreground text-background hover:bg-foreground/90"
              >
                <Link href="/courses">Explore Programs</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-foreground/20 bg-transparent"
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
