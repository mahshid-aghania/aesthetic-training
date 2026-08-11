import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Clock, Award, Users } from "lucide-react"

export const metadata = {
  title: "Courses & Certifications | Ziba Aesthetics Training Institute",
  description: "Explore our professional medical aesthetics training programs including Certificate and Diploma programs in Botox, Fillers, Laser, PRP, Tattoo Removal, and more.",
}

const certificatePrograms = [
  {
    slug: "botox-filler",
    title: "Botox & Filler",
    duration: "5 Days",
    level: "Certificate",
    image: "/images/courses/botox-filler.jpg",
    description: "Comprehensive training in neurotoxin and dermal filler injections for facial aesthetics and contouring. Open to medical professionals only.",
    highlights: ["Facial anatomy", "Botox & filler techniques", "Danger zones", "Client consultation"],
  },
  {
    slug: "plasma-prp",
    title: "Plasma PRP",
    duration: "2 Days",
    level: "Certificate",
    image: "/images/courses/plasma-prp.jpg",
    description: "Master platelet-rich plasma therapy for facial rejuvenation, hair restoration, and skin healing treatments. Open to medical professionals only.",
    highlights: ["Blood draw techniques", "PRP preparation protocols", "Injection techniques", "Safety and sterility"],
  },
  {
    slug: "prp-certificate",
    title: "PRP Certificate Program",
    duration: "1 Day",
    level: "Certificate",
    image: "/images/courses/plasma-prp.jpg",
    description: "One-day certificate training in platelet-rich plasma therapy. Open to medical professionals only.",
    highlights: ["PRP science", "Blood draw protocols", "Facial applications", "Hands-on practice"],
  },
  {
    slug: "tattoo-removal",
    title: "Tattoo Removal Certificate Program",
    duration: "1 Day",
    level: "Certificate",
    image: "/images/courses/advanced-laser.jpg",
    description: "One-day theory and hands-on training in laser tattoo removal techniques.",
    highlights: ["Laser-skin interaction", "Device operation", "Client consultation", "Aftercare protocols"],
  },
  {
    slug: "microneedling",
    title: "Microneedling",
    duration: "2 Days",
    level: "Certificate",
    image: "/images/courses/microneedling.jpg",
    description: "Advanced collagen induction therapy training for skin rejuvenation and scar treatment.",
    highlights: ["Device operation", "Depth protocols", "PRP combination", "Aftercare management"],
  },
  {
    slug: "micropigmentation",
    title: "Micropigmentation",
    duration: "5 Days",
    level: "Certificate",
    image: "/images/courses/micropigmentation.jpg",
    description: "Professional permanent makeup training covering brows, lips, and eyeliner techniques.",
    highlights: ["Color theory", "Brow mapping", "Machine techniques", "Touch-up protocols"],
  },
  {
    slug: "butt-lift",
    title: "Non-Surgical Butt Lift",
    duration: "2 Days",
    level: "Certificate",
    image: "/images/courses/body-contouring.jpg",
    description: "Advanced body contouring techniques using vacuum therapy and radiofrequency technologies.",
    highlights: ["Vacuum therapy", "RF treatments", "Client assessment", "Treatment protocols"],
  },
  {
    slug: "skin-care",
    title: "Skin Care",
    duration: "4 Weeks",
    level: "Certificate",
    image: "/images/courses/skin-care.jpg",
    description: "Comprehensive skincare training covering facials, treatments, and product knowledge.",
    highlights: ["Facial techniques", "Product chemistry", "Treatment planning", "Home care protocols"],
  },
]

const diplomaPrograms = [
  {
    slug: "aesthetic-diploma",
    title: "Aesthetic Diploma",
    duration: "16 Weeks",
    level: "Diploma",
    image: "/images/courses/aesthetic-diploma.jpg",
    description: "Our flagship comprehensive program covering the full spectrum of medical aesthetics practice.",
    highlights: ["All core treatments", "Business training", "Clinical practicum", "Career placement"],
    featured: true,
  },
  {
    slug: "medical-aesthetic",
    title: "Medical Aesthetic Specialist",
    duration: "12 Weeks",
    level: "Diploma",
    image: "/images/courses/medical-specialist.jpg",
    description: "Elite certification for practitioners seeking mastery in comprehensive aesthetic medicine.",
    highlights: ["Injectable mastery", "Device expertise", "Treatment planning", "Patient management"],
  },
  {
    slug: "advanced-laser-technician",
    title: "Advanced Medical Laser Technician",
    duration: "6 Weeks",
    level: "Diploma",
    image: "/images/courses/advanced-laser.jpg",
    description: "Advanced laser certification covering multiple modalities and complex treatment protocols.",
    highlights: ["Multi-platform training", "Complex cases", "Combination therapies", "Advanced safety"],
  },
  {
    slug: "laser-technician",
    title: "Laser Technician",
    duration: "4 Weeks",
    level: "Diploma",
    image: "/images/courses/laser-technician.jpg",
    description: "Industry-recognized certification in laser hair removal, skin rejuvenation, and safety protocols.",
    highlights: ["Laser physics", "Skin typing", "Treatment protocols", "Safety compliance"],
  },
  {
    slug: "medical-aesthetician",
    title: "Medical Aesthetician",
    duration: "8 Weeks",
    level: "Diploma",
    image: "/images/courses/medical-aesthetician.jpg",
    description: "Foundational program covering skincare science, treatment protocols, and professional practice standards.",
    highlights: ["Skin analysis", "Chemical peels", "Dermaplaning", "Client consultation"],
  },
]

function CourseCard({ course }: { course: typeof certificatePrograms[0] }) {
  return (
    <Link
      href={`/courses/${course.slug}`}
      className="group bg-card border border-border overflow-hidden hover:border-foreground/20 transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={course.image || "/placeholder.svg"}
          alt={course.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
      </div>
      <div className="p-6 lg:p-8">
        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
          <span className="px-2 py-1 bg-secondary rounded">{course.duration}</span>
          <span>{course.level}</span>
        </div>
        <h3 className="font-serif text-xl font-medium text-foreground mb-3">
          {course.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-6">
          {course.description}
        </p>
        <div className="flex items-center text-sm text-foreground font-medium">
          View Details
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  )
}

export default function CoursesPage() {
  const featuredDiploma = diplomaPrograms.find((c) => c.featured)!
  const otherDiplomas = diplomaPrograms.filter((c) => !c.featured)

  return (
    <>
      <Navigation />

      <main className="pt-20">
        {/* Hero */}
        <section className="py-24 lg:py-32 bg-secondary/50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">
                Courses & Certifications
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-foreground">
                Professional training programs for every career stage
              </h1>
              <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
                From focused one-day certificates to comprehensive multi-week diplomas, our programs
                are designed to elevate your skills and advance your career in medical aesthetics.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Diploma */}
        <section className="py-16 border-b border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="bg-foreground text-background p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                <div className="max-w-2xl">
                  <p className="text-xs uppercase tracking-[0.2em] text-background/60 mb-3">
                    Featured Diploma Program
                  </p>
                  <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">
                    Aesthetic Diploma
                  </h2>
                  <p className="text-background/80 leading-relaxed">
                    Our comprehensive 16-week program prepares you for a successful career in medical
                    aesthetics with training across all major treatment modalities, business fundamentals,
                    and clinical practicum.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-4 text-sm text-background/70">
                    <span className="flex items-center gap-2">
                      <Clock className="h-4 w-4" /> 16 Weeks
                    </span>
                    <span className="flex items-center gap-2">
                      <Award className="h-4 w-4" /> Full Diploma
                    </span>
                    <span className="flex items-center gap-2">
                      <Users className="h-4 w-4" /> Small Classes
                    </span>
                  </div>
                </div>
                <Button
                  asChild
                  size="lg"
                  className="bg-background text-foreground hover:bg-background/90 shrink-0"
                >
                  <Link href="/courses/aesthetic-diploma">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Diploma Programs */}
        <section className="py-24 lg:py-32 border-b border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground">
                Diploma Programs
              </h2>
              <p className="mt-4 text-muted-foreground">
                Comprehensive multi-week programs leading to a recognized diploma credential.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherDiplomas.map((course) => (
                <CourseCard key={course.slug} course={course} />
              ))}
            </div>
          </div>
        </section>

        {/* Certificate Programs */}
        <section className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground">
                Certificate Programs
              </h2>
              <p className="mt-4 text-muted-foreground">
                Focused certificate training — from one-day intensives to multi-week courses — designed to add or deepen a specific skill.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificatePrograms.map((course) => (
                <CourseCard key={course.slug} course={course} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 lg:py-32 bg-secondary/50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
              Not sure which program is right for you?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-10">
              Schedule a free consultation with our admissions team to discuss your goals
              and find the perfect program for your career path.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90"
            >
              <Link href="/contact">Book a Consultation</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
