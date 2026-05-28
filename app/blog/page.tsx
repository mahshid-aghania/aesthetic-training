import Link from "next/link"
import Image from "next/image"
import { blogPosts, blogCategories } from "@/lib/blog-data"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Clock, Calendar } from "lucide-react"

export const metadata = {
  title: "Blog | Ziba Aesthetics Training Institute",
  description: "Expert insights on medical aesthetics training, certification guides, career advice, and industry trends. Resources for aspiring aesthetic practitioners in Toronto and the GTA.",
  keywords: "medical aesthetics blog, aesthetics training articles, Toronto beauty training, career advice aesthetics, aesthetic certification guide",
}

export default function BlogPage() {
  const featuredPost = blogPosts[0]
  const recentPosts = blogPosts.slice(1, 7)
  const remainingPosts = blogPosts.slice(7)

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">
              Insights & Resources
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-foreground">
              Expert guidance for your aesthetic career
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Training guides, certification requirements, career advice, and industry insights 
              for aspiring medical aesthetics professionals in Toronto and the GTA.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {blogCategories.map((category) => (
              <Badge 
                key={category} 
                variant={category === "All" ? "default" : "outline"}
                className="px-4 py-2 text-sm cursor-pointer hover:bg-foreground hover:text-background transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link href={`/blog/${featuredPost.slug}`} className="group block">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-muted">
                <Image
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <Badge className="absolute top-4 left-4 bg-foreground text-background">
                  Featured
                </Badge>
              </div>
              <div>
                <Badge variant="outline" className="mb-4">
                  {featuredPost.category}
                </Badge>
                <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground group-hover:text-foreground/80 transition-colors leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="mt-6 flex items-center gap-6 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {new Date(featuredPost.publishedAt).toLocaleDateString('en-US', { 
                      month: 'long', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {featuredPost.readTime}
                  </span>
                </div>
                <div className="mt-6 inline-flex items-center gap-2 text-foreground font-medium group-hover:gap-3 transition-all">
                  Read Article
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Recent Posts Grid */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground">
              Recent Articles
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-12">
            All Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {remainingPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-background/60 mb-4">
            Ready to Start?
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6">
            Begin your aesthetic career journey
          </h2>
          <p className="text-background/70 max-w-xl mx-auto mb-10">
            Explore our comprehensive training programs and take the first step toward your new career in medical aesthetics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/courses"
              className="inline-flex items-center justify-center px-8 py-4 bg-background text-foreground font-medium tracking-wide hover:bg-background/90 transition-colors"
            >
              View Courses
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-background/30 text-background font-medium tracking-wide hover:bg-background/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

function BlogCard({ post }: { post: typeof blogPosts[0] }) {
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
          <h3 className="font-serif text-xl font-medium text-foreground group-hover:text-foreground/80 transition-colors leading-snug mb-2">
            {post.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric', 
                year: 'numeric' 
              })}
            </span>
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
