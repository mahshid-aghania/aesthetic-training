"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/", label: "Home" },
  { 
    href: "/about", 
    label: "About",
    children: [
      { href: "/about", label: "About Us" },
      { href: "/why-train-with-us", label: "Why Train With Us" },
      { href: "/trainer", label: "Meet the Trainer" },
    ]
  },
  { href: "/courses", label: "Courses" },
  { href: "/blog", label: "Blog" },
  { href: "/admissions", label: "Admissions" },
  { href: "/contact", label: "Contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-serif text-2xl font-medium tracking-tight text-foreground">
              Ziba
            </span>
            <span className="hidden sm:inline-block text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Aesthetics Training Institute
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              link.children ? (
                <div key={link.href} className="relative group">
                  <button className="flex items-center gap-1 text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300">
                    {link.label}
                    <ChevronDown className="h-3 w-3 transition-transform group-hover:rotate-180" />
                  </button>
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-background border border-border shadow-lg py-2 min-w-[200px]">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button asChild variant="outline" className="text-sm tracking-wide px-6 bg-transparent">
              <a href="https://zibamedicalaesthetics.janeapp.com/" target="_blank" rel="noopener noreferrer">Book Online</a>
            </Button>
            <Button asChild className="bg-foreground text-background hover:bg-foreground/90 text-sm tracking-wide px-6">
              <Link href="/admissions">Enroll Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-6 border-t border-border">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                link.children ? (
                  <div key={link.href} className="py-2">
                    <span className="text-lg font-medium text-foreground">{link.label}</span>
                    <div className="mt-2 ml-4 flex flex-col gap-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setIsOpen(false)}
                          className="text-base text-muted-foreground hover:text-foreground transition-colors py-1"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg text-muted-foreground hover:text-foreground transition-colors py-2"
                  >
                    {link.label}
                  </Link>
                )
              ))}
              <Button asChild variant="outline" className="mt-4 bg-transparent">
                <a href="https://zibamedicalaesthetics.janeapp.com/" target="_blank" rel="noopener noreferrer">Book Online</a>
              </Button>
              <Button asChild className="bg-foreground text-background hover:bg-foreground/90">
                <Link href="/admissions">Enroll Now</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
