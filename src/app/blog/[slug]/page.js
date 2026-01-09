import prisma from "@/lib/prisma";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Calendar, Clock, MapPin, ArrowLeft, Share2, BookOpen, GraduationCap, Globe } from "lucide-react";
import Link from "next/link";

export default async function BlogDetailsPage({ params }) {
  // ✅ FIX: unwrap params
  const { slug } = await params;

  // Safety guard
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
        { slug: { not: slug } }, // Exclude current blog
        { publishedAt: { not: null } }, // Only published blogs
      ],
    },
    take: 3, // Get 3 related posts
    orderBy: { publishedAt: 'desc' }, // Most recent first
    include: {
      country: {
        select: {
          country: true,
        },
      },
    },
  });

  const publishedDate = blog.publishedAt ? new Date(blog.publishedAt) : null;

  return (
    <main className="w-full overflow-hidden">
      {/* Hero Section - Single Column Layout */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-24">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-red-50 to-blue-50" />
        
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-red-100/30 to-transparent" />
        <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-100/30 to-transparent" />
        
        {/* Floating Circles */}
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-red-200/20 to-pink-200/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-blue-200/20 to-cyan-200/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          {/* Back Button */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 hover:text-red-600 hover:border-red-200 transition-all mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Blogs</span>
          </Link>

          {/* Country Badge */}
          {blog.country && (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-50 to-blue-50 border border-red-100 mb-6">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">
                {blog.country.country}
              </span>
            </div>
          )}

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
              {blog.title}
            </span>
          </h1>

          {/* Decorative Lines */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-red-400 rounded-full"></div>
            <div className="w-8 h-1 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full"></div>
            <div className="w-4 h-1 bg-gradient-to-r from-red-300 to-red-200 rounded-full"></div>
          </div>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 mb-8">
            {publishedDate && (
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar className="w-5 h-5 text-red-500" />
                <span className="font-medium">
                  {publishedDate.toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
            )}
            
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="w-5 h-5 text-blue-500" />
              <span className="font-medium">5 min read</span>
            </div>

            {blog.country && (
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-5 h-5 text-red-500" />
                <span className="font-medium">{blog.country.country}</span>
              </div>
            )}
          </div>

          {/* Excerpt */}
          {blog.excerpt && (
            <p className="text-xl text-gray-700 leading-relaxed mb-10">
              {blog.excerpt}
            </p>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-2xl font-semibold hover:shadow-xl hover:scale-105 transition-all">
              <Share2 className="w-5 h-5" />
              <span>Share Article</span>
            </button>
            
            <Link
              href={`/destinations/${blog.country?.slug || 'japan'}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-800 font-semibold rounded-2xl border-2 border-gray-200 hover:border-red-300 hover:shadow-xl transition-all"
            >
              <Globe className="w-5 h-5" />
              <span>Explore {blog.country?.country || 'Destination'}</span>
            </Link>
          </div>

          {/* Cover Image - Centered Below Content */}
          {blog.coverImage && (
            <div className="relative mt-8">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                {/* Gradient Border Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-pink-500 to-blue-500 rounded-3xl blur opacity-30"></div>
                
                {/* Image Container */}
                <div className="relative rounded-3xl overflow-hidden border-8 border-white">
                  <Image
                    src={blog.coverImage}
                    alt={blog.title}
                    width={1200}
                    height={600}
                    className="w-full h-[400px] lg:h-[500px] object-cover"
                    priority
                  />
                </div>
              </div>
              
              {/* Floating Author Info */}
              <div className="absolute -bottom-6 left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-400 rounded-xl flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Suyan Education</div>
                    <div className="text-xs text-gray-500">Expert Guidance</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Content Section */}
      <section className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl border-2 border-gray-100 p-8 sm:p-10 shadow-xl">
          <article
            className="prose prose-xl max-w-none"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>

        {/* Tags Section */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-lg font-semibold text-gray-900">Tags:</span>
            {['Study Abroad', 'Education', 'Guidance', blog.country?.country, 'Tips']
              .filter(Boolean)
              .map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-red-50 to-blue-50 text-gray-700 rounded-full font-medium hover:from-red-100 hover:to-blue-100 transition-all"
                >
                  {tag}
                </span>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-b from-gray-50/50 to-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-red-600 to-blue-950 rounded-3xl p-12 shadow-2xl">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Need Personalized Study Abroad Guidance?
            </h3>
            <p className="text-xl text-red-100 mb-10 max-w-2xl mx-auto">
              Our expert counselors are here to help you with university admissions, visa processes, and career planning.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-12 py-5 bg-white text-gray-900 font-bold rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/destinations"
                className="inline-flex items-center justify-center px-12 py-5 bg-transparent border-2 border-white text-white font-bold rounded-2xl hover:bg-white/10 transition-all duration-300"
              >
                Browse Destinations
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts Section */}
      {relatedBlogs.length > 0 && (
        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
                You Might Also Like
              </span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore more helpful articles and guides for your study abroad journey
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedBlogs.map((relatedBlog) => {
              // Check what image field is available
              const blogImage = relatedBlog.coverImage || relatedBlog.imageUrl;
              
              return (
                <Link
                  key={relatedBlog.id}
                  href={`/blog/${relatedBlog.slug}`}
                  className="group bg-gradient-to-br from-white to-gray-50 rounded-3xl border-2 border-gray-100 p-6 hover:border-red-300 hover:shadow-xl transition-all duration-500 block"
                >
                  {/* Blog Image or Placeholder */}
                  <div className="relative w-full h-48 mb-4 rounded-2xl overflow-hidden">
                    {blogImage ? (
                      <Image
                        src={blogImage}
                        alt={relatedBlog.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-red-100 to-blue-100 rounded-2xl flex items-center justify-center">
                        <BookOpen className="w-12 h-12 text-red-300" />
                      </div>
                    )}
                  </div>
                  
                  {/* Blog Content */}
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors line-clamp-2">
                    {relatedBlog.title}
                  </h4>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {relatedBlog.excerpt || 'Read this insightful article about study abroad opportunities.'}
                  </p>
                  
                  {/* Meta Info */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      {relatedBlog.country?.country && (
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {relatedBlog.country.country}
                        </span>
                      )}
                    </div>
                    <div className="inline-flex items-center gap-2 text-red-600 font-semibold">
                      <span>Read More</span>
                      <ArrowLeft className="w-4 h-4 rotate-180 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* View All Blogs Button */}
          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-2xl font-semibold hover:shadow-xl hover:scale-105 transition-all"
            >
              <span>View All Blog Posts</span>
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </Link>
          </div>
        </section>
      )}
    </main>
  );
}