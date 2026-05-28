import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Award, Heart, Target, Sparkles } from "lucide-react"

export const metadata = {
  title: "About Us | Ziba Aesthetics Training Institute",
  description: "Learn about Ziba Aesthetics Training Institute's mission to transform careers through excellence in medical aesthetics education.",
}

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We hold ourselves and our students to the highest standards of professional practice and ethical conduct.",
  },
  {
    icon: Heart,
    title: "Compassion",
    description: "Patient care and safety are at the heart of everything we teach. We believe in treatments that enhance, not alter.",
  },
  {
    icon: Sparkles,
    title: "Innovation",
    description: "We continuously evolve our curriculum to reflect the latest advances in aesthetic medicine and technology.",
  },
  {
    icon: Award,
    title: "Integrity",
    description: "We are committed to honest, transparent education that prepares our students for real-world success.",
  },
]

const team = [
  {
    name: "Dr. Alexandra Chen",
    role: "Founder & Medical Director",
    bio: "Board-certified dermatologist with 20+ years in aesthetic medicine. Pioneer in non-invasive facial rejuvenation techniques.",
  },
  {
    name: "Dr. Michael Roberts",
    role: "Director of Injectable Training",
    bio: "Internationally recognized expert in neurotoxins and dermal fillers. Former clinical instructor at UCLA Medical Center.",
  },
  {
    name: "Sarah Mitchell, RN",
    role: "Lead Aesthetics Instructor",
    bio: "Certified aesthetic nurse specialist with expertise in laser treatments and advanced skincare protocols.",
  },
]

export default function AboutPage() {
  return (
    <>
      <Navigation />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="py-24 lg:py-32 bg-secondary/50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">
                About Ziba Aesthetics Training Institute
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-foreground">
                Where science meets artistry in aesthetic education
              </h1>
              <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
                Ziba Aesthetics Training Institute is at the forefront of medical aesthetics 
                education, training the next generation of practitioners who combine clinical excellence 
                with an artistic eye.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                  Our Mission
                </p>
                <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
                  Empowering practitioners to transform lives safely and beautifully
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We believe that exceptional aesthetic outcomes begin with exceptional education. 
                  Our mission is to provide comprehensive, hands-on training that empowers beauty 
                  professionals and healthcare practitioners to deliver safe, effective, and 
                  transformative treatments.
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                  Our Vision
                </p>
                <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
                  Setting the global standard for aesthetic education
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We envision a world where every aesthetic practitioner has access to world-class 
                  training that prioritizes patient safety, clinical excellence, and ethical practice. 
                  We are committed to advancing the field through research, innovation, and the 
                  cultivation of true masters in aesthetic medicine.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 lg:py-32 bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                Our Values
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground">
                Principles that guide everything we do
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div key={value.title}>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary border border-border mb-6">
                    <value.icon className="h-5 w-5 text-foreground" />
                  </div>
                  <h3 className="font-serif text-xl font-medium text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                Our Leadership
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground">
                Learn from the best in the industry
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Our instructors are practicing professionals with decades of combined experience 
                in medical aesthetics, ensuring you learn the most current techniques and best practices.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member) => (
                <div key={member.name} className="bg-secondary/50 p-8">
                  <div className="w-20 h-20 rounded-full bg-muted mb-6" />
                  <h3 className="font-serif text-xl font-medium text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-sm text-accent-foreground mt-1 mb-4">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 lg:py-32 bg-secondary/50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
              Ready to join our community?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-10">
              Discover how Ziba Aesthetics Training Institute can help you achieve your career goals in medical aesthetics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-foreground text-background hover:bg-foreground/90"
              >
                <Link href="/courses">Explore Our Programs</Link>
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
