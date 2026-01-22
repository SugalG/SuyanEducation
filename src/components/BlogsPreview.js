import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import AnimatedSection from "./universityPlacement/AnimatedSection";

// Static blog data
const staticBlogs = [
  {
    id: 1,
    slug: "top-japanese-schools-for-nepali-students",
    title: "Top Japanese Schools for Nepali Students: Universities, Costs, Scholarships & Visa Guide",
    excerpt: "Complete guide for Nepali students wanting to study in Japan. Learn about top universities, living costs, scholarship opportunities, and step-by-step visa process.",
    imageUrl: "https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    country: {
      country: "Japan"
    }
  },
  {
    id: 2,
    slug: "study-in-australia-from-nepal",
    title: "Study in Australia from Nepal: PR Pathways, Work Rights & Top Universities",
    excerpt: "Explore Australia as a study destination for Nepali students. Understand PR pathways, work rights during studies, and top-ranked Australian universities.",
    imageUrl: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    country: {
      country: "Australia"
    }
  },
  {
    id: 3,
    slug: "ielts-vs-pte-nepali-students",
    title: "IELTS vs PTE: Which English Test Is Better for Nepali Students?",
    excerpt: "Detailed comparison of IELTS and PTE tests for Nepali students. Understand format differences, scoring, acceptance, and which test suits you better.",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    country: {
      country: "All Countries"
    }
  },
  {
    id: 4,
    slug: "study-in-usa-from-nepal",
    title: "Study in the USA from Nepal: F-1 Visa Process, Universities & Scholarships",
    excerpt: "Your comprehensive guide to studying in the USA from Nepal. Learn about F-1 visa process, top universities, and scholarship opportunities for international students.",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    country: {
      country: "USA"
    }
  },
  {
    id: 5,
    slug: "study-in-uk-from-nepal",
    title: "Study in the UK from Nepal: 1-Year Degrees, PSW Visa & Cost Guide",
    excerpt: "Discover the benefits of studying in the UK from Nepal. Learn about 1-year master's degrees, Post-Study Work (PSW) visa, and living cost breakdown.",
    imageUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    country: {
      country: "UK"
    }
  },
  {
    id: 6,
    slug: "choose-best-country-study-abroad",
    title: "How to Choose the Best Country to Study Abroad from Nepal",
    excerpt: "Confused about which country to choose? This guide helps Nepali students compare countries based on education quality, costs, career opportunities, and more.",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    country: {
      country: "Multiple Countries"
    }
  }
  
];

export default function BlogsPreview() {
  // Get first 3 blogs for preview
  const previewBlogs = staticBlogs.slice(0, 3);

  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-16 mb-20">
      {/* Header */}
      <AnimatedSection animation="fade-up" delay={0.1}>
        <div className="text-center max-w-4xl mx-auto px-4 mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-50 to-blue-50 border border-red-100">
            <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">Latest Insights</span>
          </div>

          {/* Main Heading */}
          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
              Latest Blogs & Guides
            </span>
          </h2>

          {/* Gradient line */}
          <AnimatedSection animation="slide-right" delay={0.3}>
            <div className="flex justify-center mt-4">
              <div className="w-48 h-1.5 bg-gradient-to-r from-red-600 to-blue-800 rounded-full" />
            </div>
          </AnimatedSection>

          {/* Subtitle */}
          <p className="mt-8 text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed">
            Expert insights on{" "}
            <span className="font-semibold text-red-600">admissions, visas, and studying abroad</span>
          </p>
        </div>
      </AnimatedSection>

      {/* Blog Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {previewBlogs.map((blog, index) => (
          <AnimatedSection 
            key={blog.id} 
            animation="fade-up" 
            delay={0.2 + index * 0.1}
          >
            <Link
              href={`/blog/${blog.slug}`}
              className="group bg-white rounded-3xl border-2 border-gray-100 overflow-hidden hover:border-red-300 hover:shadow-xl transition-all duration-300 block h-full"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={blog.imageUrl}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {blog.country && (
                  <div className="flex items-center gap-1 text-sm text-gray-500 mb-2">
                    <MapPin className="w-4 h-4 text-red-500" />
                    {blog.country.country}
                  </div>
                )}

                <h3 className="text-xl font-bold mb-3 group-hover:text-red-600 transition-colors duration-300 line-clamp-2">
                  {blog.title}
                </h3>

                <p className="text-gray-600 line-clamp-3 mb-6">
                  {blog.excerpt}
                </p>

                <div className="inline-flex items-center gap-2 text-red-600 font-semibold">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          </AnimatedSection>
        ))}
      </div>

      {/* CTA Button */}
      <AnimatedSection animation="zoom-in" delay={0.5}>
        <div className="text-center mt-16 pt-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-2xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            View All Blogs
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </AnimatedSection>
    </section>
  );
}