import prisma from "@/lib/prisma";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Calendar, Clock, MapPin, ArrowLeft, Share2, BookOpen, GraduationCap, Globe, User, ChevronRight, Sparkles, Heart } from "lucide-react";
import Link from "next/link";

// Generate static params for all blog posts
export async function generateStaticParams() {
  const blogPosts = await prisma.blogPost.findMany({
    where: { publishedAt: { not: null } },
    select: { slug: true },
  });

  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Revalidate every hour
export const revalidate = 3600;

// Add metadata for better SEO
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = await prisma.blogPost.findUnique({
    where: { slug },
    include: {
      country: {
        select: { country: true },
      },
    },
  });

  if (!blog) {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: `${blog.title} | Suyan Education Blog`,
    description: blog.excerpt || `Read about ${blog.title} on Suyan Education's blog. Expert insights on study abroad opportunities.`,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      type: 'article',
      publishedTime: blog.publishedAt,
      authors: ['Suyan Education'],
      images: blog.coverImage ? [blog.coverImage] : [],
    },
  };
}

export default async function BlogDetailsPage({ params }) {
  const { slug } = await params;

  if (!slug || typeof slug !== "string") {
    notFound();
  }

  const blog = await prisma.blogPost.findUnique({
    where: { slug },
    include: {
      country: {
        select: {
          country: true,
          slug: true,
        },
      },
    },
  });

  if (!blog) {
    notFound();
  }

  // Fetch related blog posts
  const relatedBlogs = await prisma.blogPost.findMany({
    where: {
      AND: [
        { slug: { not: slug } },
        { publishedAt: { not: null } },
      ],
    },
    take: 3,
    orderBy: { publishedAt: 'desc' },
    include: {
      country: {
        select: {
          country: true,
        },
      },
    },
  });

  const publishedDate = blog.publishedAt ? new Date(blog.publishedAt) : null;
  
  // Parse content into paragraphs
  const contentParagraphs = blog.content ? blog.content.split('\n').filter(p => p.trim().length > 0) : [];

  return (
    <main className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-20">
        {/* Elegant Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-red-50/20 to-blue-50/10" />
        
        {/* Subtle Gradient Orbs */}
        <div className="absolute -top-60 -left-60 w-[800px] h-[800px] bg-gradient-to-br from-red-100/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-60 -right-60 w-[800px] h-[800px] bg-gradient-to-tr from-blue-100/10 to-transparent rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-gray-600 hover:text-red-600 font-medium transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Blog</span>
            </Link>
          </div>

          {/* Main Content */}
          <div className="mb-12">
            {/* Category */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-50 text-red-700 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-3 h-3" />
              <span>{blog.country?.country || 'Study Abroad'}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {blog.title}
            </h1>

            {/* Excerpt */}
            {blog.excerpt && (
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl">
                {blog.excerpt}
              </p>
            )}

            {/* Author & Meta Information */}
            <div className="flex items-center gap-6 mb-12">
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-100 to-blue-100 flex items-center justify-center">
                  <User className="w-5 h-5 text-gray-700" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Suyan Education</div>
                  <div className="text-sm text-gray-500">Study Abroad Experts</div>
                </div>
              </div>

              {/* Divider */}
              <div className="w-px h-6 bg-gray-200"></div>

              {/* Date & Time */}
              <div className="flex flex-wrap items-center gap-4">
                {publishedDate && (
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">
                      {publishedDate.toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </span>
                  </div>
                )}
                
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">5 min read</span>
                </div>

                {blog.country && (
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{blog.country.country}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Cover Image */}
          {blog.coverImage && (
            <div className="relative mb-12">
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={blog.coverImage}
                  alt={blog.title}
                  width={1200}
                  height={600}
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                  priority
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
              </div>
              
              {/* Image Credit */}
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-500 italic">Photo by Suyan Education</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Content Section */}
      <section className="relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {contentParagraphs.map((paragraph, index) => {
              // Check if it's a heading
              if (paragraph.startsWith('# ')) {
                return (
                  <h2 key={index} className="text-3xl font-bold text-gray-900 mt-12 mb-6 first:mt-0">
                    {paragraph.substring(2)}
                  </h2>
                );
              }
              
              if (paragraph.startsWith('## ')) {
                return (
                  <h3 key={index} className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                    {paragraph.substring(3)}
                  </h3>
                );
              }
              
              if (paragraph.startsWith('### ')) {
                return (
                  <h4 key={index} className="text-xl font-bold text-gray-900 mt-8 mb-3">
                    {paragraph.substring(4)}
                  </h4>
                );
              }
              
              // Regular paragraph
              return (
                <p key={index} className="text-gray-700 leading-relaxed mb-6">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Share & Action Buttons */}
          <div className="mt-16 pt-12 border-t border-gray-100">
            <div className="flex items-center justify-between gap-4">
              {/* Like Button */}
              <button className="group flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-red-600 transition-colors">
                <Heart className="w-5 h-5 group-hover:fill-red-600 group-hover:scale-110 transition-all" />
                <span className="font-medium">Like this article</span>
              </button>

              {/* Share Button */}
              <button className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-50 to-blue-50 text-gray-800 hover:from-red-100 hover:to-blue-100 rounded-full font-semibold transition-all">
                <Share2 className="w-4 h-4" />
                <span>Share Article</span>
              </button>

              {/* Explore Destination Button */}
              {blog.country && (
                <Link
                  href={`/destinations/${blog.country.slug}`}
                  className="group flex items-center gap-2 px-6 py-3 bg-red-600 text-white hover:bg-red-700 rounded-full font-semibold transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  <span>Explore {blog.country.country}</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Author Bio */}
      <section className="relative py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-red-100 to-blue-100 flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-8 h-8 text-gray-700" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">About the Author</h3>
                <p className="text-gray-600 leading-relaxed">
                  Suyan Education is a leading study abroad consultancy with expertise in global education opportunities. 
                  With years of experience guiding students to their dream destinations, we provide comprehensive support 
                  for university admissions, visa processing, and career planning.
                </p>
                <div className="mt-4">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 text-red-600 font-semibold hover:text-red-700 transition-colors"
                  >
                    <span>Learn more about us</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-red-600 to-blue-800 rounded-2xl p-12 shadow-xl">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-lg text-red-100 mb-8 max-w-2xl mx-auto">
              Get personalized guidance from our expert counselors for university admissions, visa processes, and career planning.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-bold rounded-full hover:shadow-lg transition-shadow"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-colors"
              >
                <span>Our Services</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedBlogs.length > 0 && (
        <section className="relative py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Continue Reading
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover more helpful articles for your study abroad journey
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedBlogs.map((relatedBlog) => {
                const blogImage = relatedBlog.coverImage || relatedBlog.imageUrl;
                const published = relatedBlog.publishedAt ? new Date(relatedBlog.publishedAt) : null;
                
                return (
                  <Link
                    key={relatedBlog.id}
                    href={`/blog/${relatedBlog.slug}`}
                    className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-red-300 hover:shadow-lg transition-all duration-300 block"
                  >
                    {/* Blog Image */}
                    <div className="relative w-full h-48">
                      {blogImage ? (
                        <Image
                          src={blogImage}
                          alt={relatedBlog.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-red-50 to-blue-50 flex items-center justify-center">
                          <BookOpen className="w-12 h-12 text-gray-300" />
                        </div>
                      )}
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                      
                      {/* Country Badge */}
                      {relatedBlog.country?.country && (
                        <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-800">
                          {relatedBlog.country.country}
                        </div>
                      )}
                    </div>
                    
                    {/* Blog Content */}
                    <div className="p-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors line-clamp-2">
                        {relatedBlog.title}
                      </h4>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {relatedBlog.excerpt || 'Read this insightful article about study abroad opportunities.'}
                      </p>
                      
                      {/* Meta Info */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          {published && (
                            <span>
                              {published.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                            </span>
                          )}
                        </div>
                        <div className="text-red-600 font-semibold text-sm flex items-center gap-1">
                          <span>Read</span>
                          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* View All Button */}
            <div className="text-center mt-12">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold rounded-full hover:shadow-lg transition-all"
              >
                <span>View All Blog Posts</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}