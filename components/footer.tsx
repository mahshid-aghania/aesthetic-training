import Link from "next/link"

const footerLinks = {
  programs: [
    { href: "/courses/botox-filler", label: "Botox & Filler" },
    { href: "/courses/laser-technician", label: "Laser Technician" },
    { href: "/courses/microneedling", label: "Microneedling" },
    { href: "/courses/aesthetic-diploma", label: "Aesthetic Diploma" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/trainer", label: "Meet the Trainer" },
    { href: "/why-train-with-us", label: "Why Train With Us" },
    { href: "/blog", label: "Blog" },
    { href: "/admissions", label: "Admissions" },
    { href: "/contact", label: "Contact" },
    { href: "https://zibamedicalaesthetics.janeapp.com/", label: "Book Online", external: true },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl font-medium">Ziba</span>
              <span className="block text-xs uppercase tracking-[0.2em] text-background/60 mt-1">
                Aesthetics Training Institute
              </span>
            </Link>
            <p className="mt-6 text-sm text-background/70 leading-relaxed max-w-xs">
              Transforming careers through excellence in medical aesthetics education.
            </p>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.15em] text-background/50 mb-6">
              Programs
            </h3>
            <ul className="space-y-3">
              {footerLinks.programs.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/80 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.15em] text-background/50 mb-6">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-background/80 hover:text-background transition-colors inline-flex items-center gap-1"
                    >
                      {link.label}
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-background/80 hover:text-background transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.15em] text-background/50 mb-6">
              Contact
            </h3>
            <div className="space-y-3 text-sm text-background/80">
              <p className="font-medium text-background">World on Yonge</p>
              <p>7191 Yonge St Unit 701</p>
              <p>Markham, ON L3T 0C4</p>
              <p className="pt-2">
                <a href="tel:+14163187447" className="hover:text-background transition-colors">
                  (416) 318-7447
                </a>
              </p>
              <p>
                <a href="mailto:info@zibaesthetics.com" className="hover:text-background transition-colors">
                  info@zibaesthetics.com
                </a>
              </p>
              <p>
                <a href="https://zibaaesthetics.ca" target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors">
                  zibaaesthetics.ca
                </a>
              </p>
            </div>
            
            {/* Mini Google Map */}
            <div className="mt-6">
              <a 
                href="https://www.google.com/maps/dir//7191+Yonge+St+Unit+701,+Markham,+ON+L3T+0C4,+Canada"
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden border border-background/20 hover:border-background/40 transition-colors"
              >
                <div className="aspect-[4/3] w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2877.5611!2d-79.4228!3d43.8071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2d4a74b9c271%3A0x4a6e4c5b4f7b4c5b!2s7191%20Yonge%20St%20Unit%20701%2C%20Markham%2C%20ON%20L3T%200C4%2C%20Canada!5e0!3m2!1sen!2sca!4v1707000000000!5m2!1sen!2sca"
                    width="100%"
                    height="100%"
                    style={{ border: 0, pointerEvents: "none" }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ziba Aesthetics Location"
                  />
                </div>
              </a>
              <a 
                href="https://www.google.com/maps/dir//7191+Yonge+St+Unit+701,+Markham,+ON+L3T+0C4,+Canada"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-2 text-xs text-background/50 hover:text-background/80 transition-colors"
              >
                Get Directions
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-background/50">
            © {new Date().getFullYear()} Ziba Aesthetics Training Institute. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-background/50 hover:text-background/80 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-6 border-t border-background/10">
          <p className="text-xs text-background/40 text-center leading-relaxed max-w-3xl mx-auto">
            Ziba Aesthetics Training Institute is an independent education provider and an authorized licensed training partner. All certifications are issued in accordance with the academy&apos;s standards.
          </p>
        </div>
      </div>
    </footer>
  )
}
