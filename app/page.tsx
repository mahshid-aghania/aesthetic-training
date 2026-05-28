import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ArrowRight, Award, Users, BookOpen, Shield, MapPin, Phone, Clock, CheckCircle2 } from "lucide-react"

const trustIndicators = [
  { number: "15+", label: "Years of Excellence" },
  { number: "5,000+", label: "Certified Graduates" },
  { number: "98%", label: "Student Success Rate" },
  { number: "50+", label: "Industry Partners" },
]

const featuredCourses = [
  {
    title: "Botox & Filler Training",
    description: "Master injectable techniques with hands-on Botox training in Toronto. Learn from industry experts at our Thornhill clinic.",
    href: "/courses/botox-filler",
    image: "/images/courses/botox-filler.jpg",
  },
  {
    title: "Medical Aesthetician Certification",
    description: "Comprehensive medical aesthetics certification for advanced skincare and aesthetic treatments in the GTA.",
    href: "/courses/medical-aesthetician",
    image: "/images/courses/medical-aesthetician.jpg",
  },
  {
    title: "Laser Technician Course",
    description: "Industry-recognized laser training in Toronto with safety protocols and hands-on practice.",
    href: "/courses/laser-technician",
    image: "/images/courses/laser-technician.jpg",
  },
  {
    title: "Aesthetic Diploma Program",
    description: "Our flagship medical aesthetics diploma covering the full spectrum of aesthetic treatments in Ontario.",
    href: "/courses/aesthetic-diploma",
    image: "/images/courses/aesthetic-diploma.jpg",
  },
]

const whyChooseUs = [
  {
    icon: Award,
    title: "Industry-Recognized Certifications",
    description: "Graduate with credentials respected by employers and clients across Toronto, Ontario, and Canada.",
  },
  {
    icon: Users,
    title: "Small Class Sizes",
    description: "Personalized attention ensures you master every technique with confidence at our Thornhill training centre.",
  },
  {
    icon: BookOpen,
    title: "Hands-On Training",
    description: "Practice on real clients under expert supervision from day one at our state-of-the-art facility.",
  },
  {
    icon: Shield,
    title: "Safety-First Approach",
    description: "Learn proper protocols and techniques that prioritize client wellbeing and meet Ontario health standards.",
  },
]

const faqs = [
  {
    question: "What is the best Botox training in Toronto?",
    answer: "Ziba Aesthetics Training Institute offers the best Botox training in Toronto and Thornhill with hands-on experience at our partner clinic, Ziba Medical Aesthetics. Our comprehensive program includes facial anatomy, injection techniques, safety protocols, and practice on real clients. Students graduate with industry-recognized certification accepted throughout Ontario and Canada."
  },
  {
    question: "Do I need a license for aesthetic training in Ontario?",
    answer: "In Ontario, medical aesthetic procedures like Botox and filler injections must be performed under medical supervision. Our training programs provide the certification needed to work in medical spas, clinics, and aesthetic practices across Ontario. We guide you through the regulatory requirements and help you understand scope of practice guidelines for nurses, medical aestheticians, and healthcare professionals."
  },
  {
    question: "Where can I get hands-on filler training near North York?",
    answer: "Our training centre in Thornhill is conveniently located just minutes from North York, Toronto, and Markham. We offer hands-on filler training with real client practice at our partner clinic, Ziba Medical Aesthetics. Students learn dermal filler techniques including lip augmentation, cheek enhancement, and facial contouring under expert supervision."
  },
  {
    question: "How long does aesthetic certification take in Toronto?",
    answer: "Our aesthetic certification programs range from 1-day intensive workshops to comprehensive diploma programs spanning several weeks. Botox and filler certification can be completed in 2-3 days of intensive training. Our full Medical Aesthetician Diploma takes 8-12 weeks depending on your schedule. All programs include both theory and hands-on clinical practice at our Thornhill location."
  },
  {
    question: "What careers can I pursue after medical aesthetics training?",
    answer: "Graduates of our Toronto medical aesthetics training programs work in medical spas, dermatology clinics, plastic surgery practices, and wellness centres across the GTA. Many start their own aesthetic practices or mobile services. Career paths include aesthetic nurse, medical aesthetician, laser technician, and injectable specialist with competitive salaries in the growing beauty and wellness industry."
  },
  {
    question: "How much does Botox training cost in Toronto?",
    answer: "Our Botox and filler training programs in Toronto start from competitive rates that include all materials, certification, and hands-on practice. We offer flexible payment plans and financing options for students. Contact us for current pricing and upcoming course dates at our Thornhill training centre. Group discounts are available for clinic teams."
  },
]

const serviceAreas = [
  "Toronto",
  "Thornhill", 
  "North York",
  "Markham",
  "Richmond Hill",
  "Vaughan",
  "Scarborough",
  "Mississauga",
]

export default function HomePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Ziba Aesthetics Training Institute",
    "description": "Premier medical aesthetics training in Toronto, Thornhill, and the GTA. Offering Botox, filler, laser, and aesthetic certification courses.",
    "url": "https://zibaaesthetics.ca",
    "telephone": "+1-416-318-7447",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "7191 Yonge St Unit 701",
      "addressLocality": "Markham",
      "addressRegion": "ON",
      "postalCode": "L3T 0C4",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.8071,
      "longitude": -79.4228
    },
    "location": {
      "@type": "Place",
      "name": "World on Yonge",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "7191 Yonge St Unit 701",
        "addressLocality": "Markham",
        "addressRegion": "ON",
        "postalCode": "L3T 0C4",
        "addressCountry": "CA"
      }
    },
    "areaServed": serviceAreas.map(area => ({
      "@type": "City",
      "name": area
    }))
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center pt-20">
          <div className="absolute inset-0 bg-secondary/50" />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">
                Premier Medical Aesthetics Training in the GTA
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] tracking-tight text-foreground text-balance">
                Medical Aesthetic Training in Toronto &amp; Thornhill
              </h1>
              <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Master the art and science of aesthetic medicine with industry-leading education, 
                hands-on training at our Thornhill clinic, and certifications recognized across Ontario and Canada.
              </p>
              <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-foreground text-background hover:bg-foreground/90 text-sm tracking-wide px-8 py-6"
                >
                  <Link href="/courses">
                    View Courses
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg" 
                  className="border-foreground/20 text-foreground hover:bg-foreground/5 text-sm tracking-wide px-8 py-6 bg-transparent"
                >
                  <Link href="/admissions">Enroll Now</Link>
                </Button>
              </div>
              <p className="mt-8 text-sm text-muted-foreground">
                Serving Toronto, North York, Markham, Richmond Hill, Vaughan &amp; the GTA
              </p>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="border-y border-border bg-card">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {trustIndicators.map((item) => (
                <div key={item.label} className="text-center">
                  <p className="font-serif text-4xl md:text-5xl font-medium text-foreground">
                    {item.number}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground tracking-wide">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Courses */}
        <section className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                Our Programs
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
                Professional aesthetic certifications in Toronto
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Industry-recognized training programs designed for healthcare professionals, nurses, and aspiring aestheticians in Ontario.
              </p>
            </div>

            <div className="mt-16 grid md:grid-cols-2 gap-6">
              {featuredCourses.map((course) => (
                <Link
                  key={course.title}
                  href={course.href}
                  className="group relative bg-card border border-border overflow-hidden hover:border-foreground/20 transition-all duration-300"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
                  </div>
                  <div className="p-8 lg:p-10">
                    <h3 className="font-serif text-2xl font-medium text-foreground group-hover:text-accent-foreground transition-colors">
                      {course.title}
                    </h3>
                    <p className="mt-4 text-muted-foreground leading-relaxed">
                      {course.description}
                    </p>
                    <div className="mt-6 flex items-center text-sm text-foreground font-medium">
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-foreground/20 text-foreground hover:bg-foreground/5 bg-transparent"
              >
                <Link href="/courses">View All Courses</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 lg:py-32 bg-secondary/50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                Why Ziba
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
                Toronto&apos;s premier medical aesthetics education
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item) => (
                <div key={item.title} className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-card border border-border mb-6">
                    <item.icon className="h-6 w-6 text-foreground" />
                  </div>
                  <h3 className="font-serif text-xl font-medium text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Content Block */}
        <section className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-8 text-center">
                Best Medical Aesthetic Training in Toronto, Thornhill &amp; North York
              </h2>
              
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p className="leading-relaxed">
                  Ziba Aesthetics Training Institute is the leading provider of <strong className="text-foreground">medical aesthetics training in Toronto</strong> and the Greater Toronto Area. Located in the heart of Thornhill, our state-of-the-art training facility offers comprehensive certification programs for healthcare professionals, registered nurses, and aspiring medical aestheticians looking to advance their careers in the rapidly growing aesthetic medicine industry.
                </p>

                <p className="leading-relaxed">
                  Our <Link href="/courses/botox-filler" className="text-foreground underline underline-offset-4 hover:text-foreground/80">Botox and filler training courses</Link> provide hands-on experience with real clients at our partner clinic, <a href="https://zibamedicalaesthetics.ca" target="_blank" rel="noopener noreferrer" className="text-foreground underline underline-offset-4 hover:text-foreground/80">Ziba Medical Aesthetics</a>. Students learn essential injection techniques, facial anatomy, patient assessment, and safety protocols under the supervision of experienced practitioners. Our Toronto Botox certification is recognized throughout Ontario and prepares graduates for immediate employment in medical spas, dermatology clinics, and aesthetic practices.
                </p>

                <h3 className="font-serif text-2xl font-medium text-foreground mt-10 mb-4">
                  Comprehensive Aesthetic Training Programs
                </h3>

                <p className="leading-relaxed">
                  Whether you are seeking <strong className="text-foreground">filler training in North York</strong>, laser technician certification, or a complete medical aesthetician diploma, our programs are designed to meet the needs of both beginners and experienced practitioners. We offer flexible scheduling options including weekend intensive courses for working professionals and comprehensive diploma programs for those seeking a career change into the aesthetic industry.
                </p>

                <p className="leading-relaxed">
                  Our curriculum covers the full spectrum of medical aesthetic treatments including neurotoxin injections (Botox, Dysport, Xeomin), dermal fillers (Juvederm, Restylane, Teoxane), <Link href="/courses/prp" className="text-foreground underline underline-offset-4 hover:text-foreground/80">PRP therapy</Link>, <Link href="/courses/microneedling" className="text-foreground underline underline-offset-4 hover:text-foreground/80">microneedling</Link>, chemical peels, and advanced laser treatments. Students gain practical experience with the latest technologies and techniques used in top Toronto aesthetic clinics.
                </p>

                <div className="bg-secondary/50 p-6 rounded-lg border border-border my-8">
                  <h4 className="font-serif text-xl font-medium text-foreground mb-4">Our Training Includes:</h4>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {[
                      "Facial anatomy and assessment",
                      "Injection techniques and protocols",
                      "Patient consultation skills",
                      "Complication management",
                      "Business and marketing training",
                      "Hands-on practice with real clients",
                      "Industry-recognized certification",
                      "Ongoing support and mentorship"
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-foreground flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <h3 className="font-serif text-2xl font-medium text-foreground mt-10 mb-4">
                  Why Choose Ziba for Your Aesthetic Education
                </h3>

                <p className="leading-relaxed">
                  As the top-rated <strong className="text-foreground">aesthetic training centre in Thornhill</strong>, we combine theoretical knowledge with extensive practical experience. Our small class sizes ensure personalized attention, while our partnership with Ziba Medical Aesthetics provides students with access to a real clinical environment. This hands-on approach sets our graduates apart in the competitive Toronto job market.
                </p>

                <p className="leading-relaxed">
                  Our instructors are active practitioners in the aesthetic field, bringing current industry knowledge and real-world experience to every class. We stay updated on the latest techniques, products, and safety guidelines to ensure our students receive the most relevant training available in Ontario.
                </p>

                <h3 className="font-serif text-2xl font-medium text-foreground mt-10 mb-4">
                  Serving the Greater Toronto Area
                </h3>

                <p className="leading-relaxed">
                  Conveniently located on Yonge Street in Thornhill, our training centre is easily accessible from across the GTA. We welcome students from Toronto, North York, Markham, Richmond Hill, Vaughan, Scarborough, Mississauga, and throughout Ontario. Many students travel from across Canada to attend our renowned programs, known for producing skilled practitioners who excel in their careers.
                </p>

                <p className="leading-relaxed">
                  Ready to start your career in medical aesthetics? <Link href="/contact" className="text-foreground underline underline-offset-4 hover:text-foreground/80">Contact us today</Link> to learn about upcoming course dates, financing options, and enrollment requirements. Visit our <Link href="/blog" className="text-foreground underline underline-offset-4 hover:text-foreground/80">blog</Link> for the latest articles on aesthetic treatments, including our comprehensive guides to <Link href="/blog/mezogel-booster-treatment-toronto" className="text-foreground underline underline-offset-4 hover:text-foreground/80">Mezogel Booster treatments</Link> and other cutting-edge procedures.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 lg:py-32 bg-secondary/50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                Frequently Asked Questions
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
                Common questions about aesthetic training in Toronto
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-card border border-border px-6 rounded-lg"
                  >
                    <AccordionTrigger className="text-left font-serif text-lg font-medium text-foreground hover:no-underline py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Local Trust Section */}
        <section className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                  Visit Our Training Centre
                </p>
                <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
                  Located in Thornhill, serving the GTA
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Our modern training facility is conveniently located on Yonge Street in Thornhill, 
                  with easy access from Highway 407 and public transit. We partner with 
                  <a href="https://zibamedicalaesthetics.ca" target="_blank" rel="noopener noreferrer" className="text-foreground underline underline-offset-4 hover:text-foreground/80 mx-1">Ziba Medical Aesthetics</a>
                  to provide hands-on training in a real clinical environment.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Address</p>
                      <p className="text-muted-foreground">World on Yonge</p>
                      <p className="text-muted-foreground">7191 Yonge St Unit 701, Markham, ON L3T 0C4</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                      <Phone className="h-5 w-5 text-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <a href="tel:+14163187447" className="text-muted-foreground hover:text-foreground transition-colors">
                        (416) 318-7447
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                      <Clock className="h-5 w-5 text-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Hours</p>
                      <p className="text-muted-foreground">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {serviceAreas.map((area) => (
                    <span 
                      key={area}
                      className="px-3 py-1 text-sm bg-secondary text-foreground rounded-full"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="aspect-[4/3] bg-secondary/50 rounded-lg border border-border overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878.7344!2d-79.4228!3d43.8071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2d1234567890%3A0x0!2s7191%20Yonge%20St%20Unit%20701%2C%20Markham%2C%20ON!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ziba Aesthetics Training Institute Location"
                    className="grayscale"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="bg-foreground text-background p-12 lg:p-20 text-center">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-balance">
                Ready to begin your aesthetic career in Toronto?
              </h2>
              <p className="mt-6 text-background/70 max-w-xl mx-auto leading-relaxed">
                Join thousands of successful graduates who have transformed their careers 
                with Ziba Aesthetics Training Institute. Start your journey today.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-background text-foreground hover:bg-background/90 text-sm tracking-wide px-8"
                >
                  <Link href="/admissions">Start Your Application</Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg" 
                  className="border-background/30 text-background hover:bg-background/10 text-sm tracking-wide px-8 bg-transparent"
                >
                  <a href="https://zibamedicalaesthetics.janeapp.com/" target="_blank" rel="noopener noreferrer">Book a Consultation</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
