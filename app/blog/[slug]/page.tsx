import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { getBlogPostBySlug, getRelatedPosts, getMezogelPosts, getLaserPosts, getAllBlogSlugs, type BlogPost } from "@/lib/blog-data"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ArrowLeft, Clock, Calendar, MapPin, Phone, ExternalLink, ArrowRight } from "lucide-react"

export const dynamic = 'force-dynamic'

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  
  if (!post) {
    return {
      title: "Article Not Found | Ziba Aesthetics Training Institute",
    }
  }

  return {
    title: post.seoTitle,
    description: post.metaDescription,
    keywords: [post.primaryKeyword, ...post.secondaryKeywords].join(", "),
    openGraph: {
      title: post.seoTitle,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.publishedAt,
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(slug, 3)
  const mezogelPosts = getMezogelPosts(slug, 6)
  const laserPosts = getLaserPosts(slug, 6)

  return (
    <main className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-muted/30 border-b border-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/blog" className="hover:text-foreground transition-colors flex items-center gap-1">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
            <span>/</span>
            <span className="text-foreground">{post.category}</span>
          </nav>
        </div>
      </div>

      {/* Article Header */}
      <article>
        <header className="py-12 lg:py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Badge variant="outline">{post.category}</Badge>
              <Badge variant="secondary">{post.searchIntent}</Badge>
            </div>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-tight text-foreground">
              {post.title}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              {post.excerpt}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                  month: 'long', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="max-w-4xl mx-auto px-6 lg:px-8 -mt-4 mb-12">
          <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-muted">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-6 lg:px-8 pb-16">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {post.content.introduction}
            </p>

            {/* Content Sections */}
            {post.content.sections.map((section, index) => (
              <section key={index} className="mb-12">
                <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-4">
                  {section.h2}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {section.content}
                </p>
                {section.subsections?.map((subsection, subIndex) => (
                  <div key={subIndex} className="mb-6 pl-4 border-l-2 border-muted">
                    <h3 className="font-serif text-xl font-medium text-foreground mb-2">
                      {subsection.h3}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {subsection.content}
                    </p>
                  </div>
                ))}
              </section>
            ))}

            {/* Local Footer CTA */}
            <div className="bg-foreground text-background p-8 rounded-lg my-12">
              <div className="flex items-start gap-4 mb-4">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-serif text-xl font-medium mb-2">
                    Ziba Aesthetics Training Institute
                  </h3>
                  <p className="text-background/80 text-sm leading-relaxed">
                    {post.content.localFooter}
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Link
                  href="/courses"
                  className="inline-flex items-center justify-center px-6 py-3 bg-background text-foreground text-sm font-medium hover:bg-background/90 transition-colors rounded"
                >
                  View Our Courses
                </Link>
                <a
                  href="tel:+14163187447"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-background/30 text-background text-sm font-medium hover:bg-background/10 transition-colors rounded"
                >
                  <Phone className="h-4 w-4" />
                  (416) 318-7447
                </a>
              </div>
            </div>

            {/* FAQ Section */}
            <section className="my-12">
              <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-6">
                Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {post.faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`}>
                    <AccordionTrigger className="text-left font-medium text-foreground">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>

            {/* Mezogel Booster Internal Links */}
            {mezogelPosts.length > 0 && (
              <section className="my-12 bg-muted/40 rounded-lg p-6 border border-border">
                <h2 className="font-serif text-xl font-medium text-foreground mb-1">
                  More Mezogel Booster Articles
                </h2>
                <p className="text-sm text-muted-foreground mb-5">Continue learning about Mezogel Booster treatments and training</p>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {mezogelPosts.map((mp) => (
                    <li key={mp.slug}>
                      <Link
                        href={`/blog/${mp.slug}`}
                        className="flex items-start gap-3 p-3 rounded-md hover:bg-background transition-colors group border border-transparent hover:border-border"
                      >
                        <ArrowRight className="h-4 w-4 mt-1 flex-shrink-0 text-muted-foreground group-hover:text-foreground transition-colors" />
                        <div>
                          <span className="text-sm font-medium text-foreground leading-snug group-hover:underline underline-offset-2">
                            {mp.title}
                          </span>
                          <p className="text-xs text-muted-foreground mt-0.5">{mp.readTime}</p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-4 border-t border-border">
                  <Link
                    href="/blog"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    View all blog articles
                  </Link>
                </div>
              </section>
            )}

            {/* Laser Training Internal Links */}
            {laserPosts.length > 0 && (
              <section className="my-12 bg-muted/40 rounded-lg p-6 border border-border">
                <h2 className="font-serif text-xl font-medium text-foreground mb-1">
                  More Laser Training Articles
                </h2>
                <p className="text-sm text-muted-foreground mb-5">Continue learning about laser training, certification, and aesthetic careers</p>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {laserPosts.map((lp) => (
                    <li key={lp.slug}>
                      <Link
                        href={`/blog/${lp.slug}`}
                        className="flex items-start gap-3 p-3 rounded-md hover:bg-background transition-colors group border border-transparent hover:border-border"
                      >
                        <ArrowRight className="h-4 w-4 mt-1 flex-shrink-0 text-muted-foreground group-hover:text-foreground transition-colors" />
                        <div>
                          <span className="text-sm font-medium text-foreground leading-snug group-hover:underline underline-offset-2">
                            {lp.title}
                          </span>
                          <p className="text-xs text-muted-foreground mt-0.5">{lp.readTime}</p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-4 border-t border-border">
                  <Link
                    href="/blog"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    View all blog articles
                  </Link>
                </div>
              </section>
            )}

            {/* Links Section */}
            <div className="grid md:grid-cols-2 gap-8 my-12">
              {/* Internal Links */}
              <div className="bg-muted/50 p-6 rounded-lg">
                <h3 className="font-serif text-lg font-medium text-foreground mb-4">
                  Related Programs
                </h3>
                <ul className="space-y-2">
                  {post.internalLinks.map((link, index) => (
                    <li key={index}>
                      <Link 
                        href={link.href}
                        className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                      >
                        <ArrowRight className="h-4 w-4" />
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* External Resources */}
              <div className="bg-muted/50 p-6 rounded-lg">
                <h3 className="font-serif text-lg font-medium text-foreground mb-4">
                  External Resources
                </h3>
                <ul className="space-y-3">
                  {post.externalLinks.map((link, index) => (
                    <li key={index}>
                      <div className="flex items-start gap-2">
                        <ExternalLink className="h-4 w-4 mt-1 flex-shrink-0 text-muted-foreground" />
                        <div>
                          <span className="text-foreground font-medium">{link.text}</span>
                          <p className="text-sm text-muted-foreground">{link.description}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Keywords/Tags */}
            <div className="border-t border-border pt-8 mt-12">
              <h4 className="text-sm font-medium text-muted-foreground mb-3">Related Topics</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs">
                  {post.primaryKeyword}
                </Badge>
                {post.secondaryKeywords.slice(0, 5).map((keyword, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {keyword}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-12">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <RelatedPostCard key={relatedPost.id} post={relatedPost} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-background/60 mb-4">
            Start Your Journey
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6">
            Ready to begin your aesthetic career?
          </h2>
          <p className="text-background/70 max-w-xl mx-auto mb-10">
            Join Ziba Aesthetics Training Institute and transform your career with industry-leading medical aesthetics education.
          </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/admissions"
                    className="inline-flex items-center justify-center px-8 py-4 bg-background text-foreground font-medium tracking-wide hover:bg-background/90 transition-colors"
                  >
                    Apply Now
                  </Link>
                  <a
                    href="https://zibamedicalaesthetics.janeapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 border border-background/30 text-background font-medium tracking-wide hover:bg-background/10 transition-colors"
                  >
                    Book a Consultation
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
        </div>
      </section>
    </main>
  )
}

function RelatedPostCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group">
      <Card className="h-full border-0 shadow-none bg-transparent">
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-muted mb-4">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <CardContent className="p-0">
          <Badge variant="outline" className="mb-3 text-xs">
            {post.category}
          </Badge>
          <h3 className="font-serif text-lg font-medium text-foreground group-hover:text-foreground/80 transition-colors leading-snug mb-2">
            {post.title}
          </h3>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {post.readTime}
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
