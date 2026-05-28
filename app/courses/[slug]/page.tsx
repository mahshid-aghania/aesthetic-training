import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Clock, Award, Users, CheckCircle2, ArrowLeft } from "lucide-react"

const courseImages: Record<string, string> = {
  "plasma-prp": "/images/courses/plasma-prp.jpg",
  "botox-filler": "/images/courses/botox-filler.jpg",
  "medical-aesthetician": "/images/courses/medical-aesthetician.jpg",
  "laser-technician": "/images/courses/laser-technician.jpg",
  "microneedling": "/images/courses/microneedling.jpg",
  "micropigmentation": "/images/courses/micropigmentation.jpg",
  "skin-care": "/images/courses/skin-care.jpg",
  "butt-lift": "/images/courses/body-contouring.jpg",
  "aesthetic-diploma": "/images/courses/aesthetic-diploma.jpg",
  "advanced-laser-technician": "/images/courses/advanced-laser.jpg",
  "medical-aesthetic": "/images/courses/medical-specialist.jpg",
}

const coursesData: Record<string, {
  title: string
  subtitle: string
  duration: string
  level: string
  price: string
  overview: string
  whoIsItFor: string[]
  curriculum: { module: string; topics: string[] }[]
  certification: string
  prerequisites: string[]
}> = {
  "plasma-prp": {
    title: "Plasma PRP",
    subtitle: "Platelet-Rich Plasma Therapy Certification",
    duration: "2 Days",
    level: "Intermediate",
    price: "$1,800",
    overview: "Master the art and science of platelet-rich plasma therapy, one of the most sought-after regenerative treatments in aesthetic medicine. This intensive two-day program provides comprehensive training in PRP preparation, injection techniques, and treatment protocols for facial rejuvenation, hair restoration, and skin healing.",
    whoIsItFor: [
      "Licensed nurses and nurse practitioners",
      "Physician assistants",
      "Medical aestheticians with injection experience",
      "Physicians expanding their aesthetic practice",
    ],
    curriculum: [
      {
        module: "Day 1: Foundations",
        topics: ["PRP science and mechanisms", "Blood draw techniques", "Centrifuge operation and protocols", "Safety and sterility standards"],
      },
      {
        module: "Day 2: Clinical Application",
        topics: ["Facial rejuvenation protocols", "Hair restoration techniques", "Combination therapies", "Hands-on practice with live models"],
      },
    ],
    certification: "Upon successful completion, graduates receive the Ziba Aesthetics Training Institute PRP Practitioner Certification, recognized by major aesthetic medicine associations.",
    prerequisites: ["Valid healthcare license", "Basic injection training", "Current CPR certification"],
  },
  "botox-filler": {
    title: "Botox & Filler",
    subtitle: "Injectable Aesthetics Certification",
    duration: "5 Days",
    level: "All Levels",
    price: "$4,500",
    overview: "Our flagship injectable training program provides comprehensive education in neurotoxin and dermal filler administration. From facial anatomy to advanced contouring techniques, this course prepares you to deliver safe, beautiful results that clients trust.",
    whoIsItFor: [
      "Nurses and nurse practitioners",
      "Physicians and physician assistants",
      "Dentists and dental specialists",
      "Beginners seeking foundational training",
      "Experienced injectors refining techniques",
    ],
    curriculum: [
      {
        module: "Days 1-2: Foundations",
        topics: ["Advanced facial anatomy", "Product pharmacology", "Patient assessment", "Injection fundamentals"],
      },
      {
        module: "Days 3-4: Advanced Techniques",
        topics: ["Upper face neurotoxin treatment", "Mid and lower face contouring", "Lip augmentation mastery", "Combination approaches"],
      },
      {
        module: "Day 5: Clinical Practice",
        topics: ["Hands-on injections with live patients", "Complication prevention and management", "Practice building essentials"],
      },
    ],
    certification: "Graduates earn the Ziba Aesthetics Training Institute Injectable Certification, qualifying them to perform neurotoxin and filler treatments in accordance with their scope of practice.",
    prerequisites: ["Valid healthcare license permitting injections", "Current CPR certification"],
  },
  "medical-aesthetician": {
    title: "Medical Aesthetician",
    subtitle: "Professional Skincare Certification",
    duration: "8 Weeks",
    level: "Beginner",
    price: "$6,500",
    overview: "Launch your career in medical aesthetics with our comprehensive Medical Aesthetician program. This foundational course covers everything from skin science to professional treatment protocols, preparing you to work confidently in clinical settings.",
    whoIsItFor: [
      "Career changers entering aesthetics",
      "Licensed estheticians seeking medical training",
      "Spa professionals upgrading credentials",
      "Recent graduates starting their aesthetic journey",
    ],
    curriculum: [
      {
        module: "Weeks 1-2: Skin Science",
        topics: ["Skin anatomy and physiology", "Skin types and conditions", "Product chemistry fundamentals", "Consultation techniques"],
      },
      {
        module: "Weeks 3-4: Core Treatments",
        topics: ["Professional facials", "Chemical peels", "Dermaplaning", "Microdermabrasion"],
      },
      {
        module: "Weeks 5-6: Advanced Protocols",
        topics: ["LED therapy", "Ultrasound treatments", "Treatment customization", "Home care prescriptions"],
      },
      {
        module: "Weeks 7-8: Clinical Practice",
        topics: ["Client management", "Documentation standards", "Business essentials", "Supervised clinical hours"],
      },
    ],
    certification: "Graduates receive the Medical Aesthetician Certificate, qualifying them to work in medical spas, dermatology practices, and plastic surgery clinics.",
    prerequisites: ["High school diploma or equivalent", "Background check clearance"],
  },
  "laser-technician": {
    title: "Laser Technician",
    subtitle: "Medical Laser Certification",
    duration: "4 Weeks",
    level: "Intermediate",
    price: "$5,200",
    overview: "Become a certified laser technician with comprehensive training in laser physics, skin typing, treatment protocols, and safety standards. This program prepares you to operate laser devices safely and effectively across multiple treatment applications.",
    whoIsItFor: [
      "Licensed estheticians",
      "Nurses entering aesthetics",
      "Medical assistants",
      "Spa professionals seeking advancement",
    ],
    curriculum: [
      {
        module: "Week 1: Laser Fundamentals",
        topics: ["Laser physics and terminology", "Skin typing and assessment", "Safety protocols and regulations", "Device operation basics"],
      },
      {
        module: "Week 2: Hair Removal",
        topics: ["Hair growth cycles", "Treatment planning", "Parameter selection", "Client education"],
      },
      {
        module: "Week 3: Skin Treatments",
        topics: ["Photofacial treatments", "Skin rejuvenation protocols", "Pigmentation treatments", "Vascular lesion treatment"],
      },
      {
        module: "Week 4: Clinical Practice",
        topics: ["Supervised treatments", "Client consultations", "Documentation requirements", "Certification exam preparation"],
      },
    ],
    certification: "Graduates receive state-recognized Laser Technician Certification, meeting regulatory requirements for laser operation in clinical settings.",
    prerequisites: ["Licensed esthetician or healthcare credential", "Current CPR certification"],
  },
  "microneedling": {
    title: "Microneedling",
    subtitle: "Collagen Induction Therapy Certification",
    duration: "2 Days",
    level: "Intermediate",
    price: "$1,500",
    overview: "Master microneedling techniques for skin rejuvenation, scar treatment, and product penetration enhancement. This hands-on program covers device operation, depth protocols, and combination therapies including PRP microneedling.",
    whoIsItFor: [
      "Licensed estheticians",
      "Nurses and nurse practitioners",
      "Medical aestheticians",
      "Practitioners adding services",
    ],
    curriculum: [
      {
        module: "Day 1: Theory & Technique",
        topics: ["Collagen induction science", "Device types and selection", "Depth protocols by treatment area", "Contraindications and safety"],
      },
      {
        module: "Day 2: Clinical Application",
        topics: ["Face and neck treatments", "Scar revision protocols", "PRP combination therapy", "Hands-on practice sessions"],
      },
    ],
    certification: "Graduates receive the Microneedling Practitioner Certification, qualifying them to perform collagen induction therapy treatments.",
    prerequisites: ["Licensed esthetician or healthcare credential", "Basic anatomy knowledge"],
  },
  "micropigmentation": {
    title: "Micropigmentation",
    subtitle: "Permanent Makeup Artistry Certification",
    duration: "5 Days",
    level: "Beginner",
    price: "$3,800",
    overview: "Develop your artistry in permanent makeup with comprehensive training in brows, lips, and eyeliner techniques. This program combines color theory, facial mapping, and machine techniques to prepare you for a rewarding career in micropigmentation.",
    whoIsItFor: [
      "Makeup artists expanding services",
      "Estheticians adding specialization",
      "Beauty professionals seeking new skills",
      "Career changers with artistic ability",
    ],
    curriculum: [
      {
        module: "Days 1-2: Foundations",
        topics: ["Color theory and selection", "Facial mapping and symmetry", "Skin anatomy for PMU", "Sanitation and safety"],
      },
      {
        module: "Days 3-4: Technique Mastery",
        topics: ["Brow shaping and filling", "Lip blush techniques", "Eyeliner application", "Machine operation and needle selection"],
      },
      {
        module: "Day 5: Practical Application",
        topics: ["Live model practice", "Touch-up protocols", "Client consultation", "Portfolio development"],
      },
    ],
    certification: "Graduates earn the Permanent Makeup Artist Certification, meeting requirements for professional micropigmentation practice.",
    prerequisites: ["High school diploma", "Portfolio demonstrating artistic ability preferred"],
  },
  "skin-care": {
    title: "Skin Care",
    subtitle: "Professional Skincare Fundamentals",
    duration: "4 Weeks",
    level: "Beginner",
    price: "$3,200",
    overview: "Build a strong foundation in professional skincare with comprehensive training in facial techniques, product knowledge, and treatment planning. This program prepares you for entry-level positions in spas, salons, and skincare clinics.",
    whoIsItFor: [
      "Aspiring estheticians",
      "Spa reception staff seeking advancement",
      "Beauty enthusiasts pursuing careers",
      "Retail professionals in skincare",
    ],
    curriculum: [
      {
        module: "Week 1: Skin Fundamentals",
        topics: ["Skin anatomy basics", "Skin types identification", "Product ingredients", "Consultation skills"],
      },
      {
        module: "Week 2: Facial Techniques",
        topics: ["Cleansing methods", "Extraction techniques", "Massage movements", "Mask application"],
      },
      {
        module: "Week 3: Treatment Planning",
        topics: ["Condition assessment", "Treatment customization", "Home care recommendations", "Client education"],
      },
      {
        module: "Week 4: Professional Practice",
        topics: ["Sanitation standards", "Business basics", "Client retention", "Supervised practice"],
      },
    ],
    certification: "Graduates receive the Professional Skincare Certificate, preparing them for further esthetician licensing or spa employment.",
    prerequisites: ["High school diploma or equivalent", "Genuine interest in skincare"],
  },
  "butt-lift": {
    title: "Non-Surgical Butt Lift",
    subtitle: "Body Contouring Specialist Certification",
    duration: "2 Days",
    level: "Advanced",
    price: "$2,200",
    overview: "Master non-invasive body contouring techniques using vacuum therapy and radiofrequency technologies. This advanced program teaches safe, effective protocols for gluteal enhancement without surgery.",
    whoIsItFor: [
      "Licensed estheticians with body treatment experience",
      "Nurses in aesthetic practice",
      "Medical spa practitioners",
      "Body contouring specialists",
    ],
    curriculum: [
      {
        module: "Day 1: Theory & Assessment",
        topics: ["Body contouring science", "Client assessment protocols", "Device technology overview", "Treatment planning"],
      },
      {
        module: "Day 2: Hands-On Training",
        topics: ["Vacuum therapy techniques", "RF treatment protocols", "Combination approaches", "Results documentation"],
      },
    ],
    certification: "Graduates receive the Body Contouring Specialist Certification, qualifying them to perform non-surgical gluteal enhancement treatments.",
    prerequisites: ["Licensed esthetician or healthcare credential", "Body treatment experience", "Device training certification"],
  },
  "aesthetic-diploma": {
    title: "Aesthetic Diploma",
    subtitle: "Comprehensive Medical Aesthetics Program",
    duration: "16 Weeks",
    level: "Comprehensive",
    price: "$18,500",
    overview: "Our flagship comprehensive program prepares you for a successful career in medical aesthetics with training across all major treatment modalities. From injectables to lasers, skincare to business fundamentals, this immersive program provides everything you need to excel in the industry.",
    whoIsItFor: [
      "Career changers committed to aesthetics",
      "Healthcare professionals transitioning to aesthetics",
      "Estheticians seeking comprehensive medical training",
      "Entrepreneurs planning aesthetic businesses",
    ],
    curriculum: [
      {
        module: "Weeks 1-4: Foundations",
        topics: ["Skin science and anatomy", "Professional facials and peels", "Microdermabrasion and dermaplaning", "Client consultation mastery"],
      },
      {
        module: "Weeks 5-8: Medical Treatments",
        topics: ["Microneedling certification", "Laser technician training", "Body contouring techniques", "Device operation and safety"],
      },
      {
        module: "Weeks 9-12: Injectable Training",
        topics: ["Neurotoxin administration", "Dermal filler techniques", "PRP therapy", "Complication management"],
      },
      {
        module: "Weeks 13-16: Clinical & Business",
        topics: ["Clinical practicum hours", "Business planning", "Marketing fundamentals", "Career placement support"],
      },
    ],
    certification: "Graduates receive the Ziba Aesthetics Training Institute Diploma in Medical Aesthetics, our most comprehensive credential recognized throughout the industry.",
    prerequisites: ["High school diploma", "Interview with admissions", "Background check"],
  },
  "advanced-laser-technician": {
    title: "Advanced Medical Laser Technician",
    subtitle: "Multi-Platform Laser Certification",
    duration: "6 Weeks",
    level: "Advanced",
    price: "$7,800",
    overview: "Elevate your laser expertise with advanced training across multiple device platforms and complex treatment protocols. This program is designed for experienced laser technicians seeking mastery in the field.",
    whoIsItFor: [
      "Certified laser technicians",
      "Nurses with laser experience",
      "Medical aestheticians advancing skills",
      "Practice owners expanding services",
    ],
    curriculum: [
      {
        module: "Weeks 1-2: Advanced Platforms",
        topics: ["Multi-platform operation", "Advanced parameter selection", "Complex skin typing", "Combination therapies"],
      },
      {
        module: "Weeks 3-4: Specialty Treatments",
        topics: ["Tattoo removal protocols", "Advanced vascular treatments", "Resurfacing techniques", "Scar revision"],
      },
      {
        module: "Weeks 5-6: Mastery & Leadership",
        topics: ["Complex case management", "Treatment planning excellence", "Staff training skills", "Quality assurance"],
      },
    ],
    certification: "Graduates receive the Advanced Laser Technician Certification, qualifying them for senior laser positions and training roles.",
    prerequisites: ["Current laser technician certification", "Minimum 100 treatment hours", "CPR certification"],
  },
  "medical-aesthetic": {
    title: "Medical Aesthetic Specialist",
    subtitle: "Elite Practitioner Certification",
    duration: "12 Weeks",
    level: "Advanced",
    price: "$14,500",
    overview: "Achieve mastery in comprehensive aesthetic medicine with our elite specialist program. This advanced certification is designed for experienced practitioners seeking to become true experts in the field.",
    whoIsItFor: [
      "Experienced injectors seeking mastery",
      "Nurses with aesthetic backgrounds",
      "Practitioners building expertise",
      "Aesthetic professionals pursuing excellence",
    ],
    curriculum: [
      {
        module: "Weeks 1-4: Injectable Mastery",
        topics: ["Advanced facial assessment", "Complex injection techniques", "Full face rejuvenation", "Complication mastery"],
      },
      {
        module: "Weeks 5-8: Device Excellence",
        topics: ["Multi-modality treatments", "Advanced laser protocols", "Energy-based devices", "Combination approaches"],
      },
      {
        module: "Weeks 9-12: Practice Leadership",
        topics: ["Treatment planning excellence", "Patient relationship mastery", "Practice management", "Mentorship and training"],
      },
    ],
    certification: "Graduates receive the Medical Aesthetic Specialist Certification, the highest credential offered by Ziba Aesthetics Training Institute.",
    prerequisites: ["Healthcare license", "Minimum 2 years aesthetic experience", "Portfolio review"],
  },
}

export async function generateStaticParams() {
  return Object.keys(coursesData).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const course = coursesData[slug]
  if (!course) return { title: "Course Not Found" }
  return {
    title: `${course.title} | Ziba Aesthetics Training Institute`,
    description: course.overview.substring(0, 160),
  }
}

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const course = coursesData[slug]

  if (!course) {
    notFound()
  }

  return (
    <>
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Image */}
        <section className="relative h-[40vh] min-h-[320px] max-h-[480px]">
          <Image
            src={courseImages[slug] || "/placeholder.svg"}
            alt={course.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
            <div className="max-w-7xl mx-auto">
              <Link 
                href="/courses" 
                className="inline-flex items-center text-sm text-foreground/80 hover:text-foreground mb-4 transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Courses
              </Link>
            </div>
          </div>
        </section>

        {/* Course Info */}
        <section className="py-16 lg:py-24 bg-secondary/50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
              <div className="lg:col-span-2">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                  {course.subtitle}
                </p>
                <h1 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-6">
                  {course.title}
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {course.overview}
                </p>
              </div>
              
              {/* Course Info Card */}
              <div className="bg-card border border-border p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">Duration</p>
                      <p className="font-medium text-foreground">{course.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">Level</p>
                      <p className="font-medium text-foreground">{course.level}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">Class Size</p>
                      <p className="font-medium text-foreground">Max 8 Students</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Investment</p>
                    <p className="font-serif text-3xl font-medium text-foreground">{course.price}</p>
                  </div>
                  <Button 
                    asChild 
                    className="w-full bg-foreground text-background hover:bg-foreground/90"
                  >
                    <Link href="/admissions">Enroll Now</Link>
                  </Button>
                  <Button 
                    asChild 
                    variant="outline" 
                    className="w-full border-foreground/20 bg-transparent"
                  >
                    <a href="https://zibamedicalaesthetics.janeapp.com/" target="_blank" rel="noopener noreferrer">Book a Consultation</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who Is It For */}
        <section className="py-16 lg:py-24 border-b border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground">
                  Who is this course for?
                </h2>
              </div>
              <div className="lg:col-span-2">
                <ul className="space-y-4">
                  {course.whoIsItFor.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Curriculum */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-12">
              Curriculum
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {course.curriculum.map((module) => (
                <div key={module.module} className="bg-secondary/30 p-8">
                  <h3 className="font-serif text-xl font-medium text-foreground mb-6">
                    {module.module}
                  </h3>
                  <ul className="space-y-3">
                    {module.topics.map((topic) => (
                      <li key={topic} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-foreground/40 shrink-0 mt-2" />
                        <span className="text-sm text-muted-foreground">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certification */}
        <section className="py-16 lg:py-24 bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground">
                  Certification
                </h2>
              </div>
              <div className="lg:col-span-2">
                <p className="text-muted-foreground leading-relaxed">
                  {course.certification}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Prerequisites */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground">
                  Prerequisites
                </h2>
              </div>
              <div className="lg:col-span-2">
                <ul className="space-y-4">
                  {course.prerequisites.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-foreground text-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6">
              Ready to enroll in {course.title}?
            </h2>
            <p className="text-background/70 max-w-xl mx-auto mb-10">
              Take the next step in your aesthetic career. Our admissions team is ready to 
              help you get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-background text-foreground hover:bg-background/90"
              >
                <Link href="/admissions">Start Application</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-background/30 text-background hover:bg-background/10 bg-transparent"
              >
                <Link href="/contact">Schedule a Call</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
