import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Calendar, Clock } from "lucide-react";
import AnimatedSection from "@/components/universityPlacement/AnimatedSection";

// Complete static blog data
const allBlogs = [
  // Japan Blogs
  {
    id: 1,
    slug: "top-japanese-schools-for-nepali-students",
    title: "Top Japanese Schools For Nepali Students: Universities, Costs, Scholarships & Visa Guide",
    excerpt: "Complete guide for Nepali students wanting to study in Japan. Learn about top universities, living costs, scholarship opportunities, and step-by-step visa process.",
    content: "Full content here...",
    imageUrl: "https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    country: { country: "Japan" },
    readTime: "8 min read",
    date: "2025-12-15",
    category: "Country Guide"
  },
  {
    id: 2,
    slug: "why-japan-smart-study-destination-2025",
    title: "Why Japan Is a Smart Study Destination for Nepali Students in 2025",
    excerpt: "Discover why Japan offers excellent value for Nepali students with its world-class education, affordable tuition, and unique cultural experience.",
    imageUrl: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    country: { country: "Japan" },
    readTime: "6 min read",
    date: "2025-12-10",
    category: "Trends"
  },
  // Australia Blogs
  {
    id: 3,
    slug: "study-in-australia-from-nepal",
    title: "Study in Australia from Nepal: PR Pathways, Work Rights & Top Universities",
    excerpt: "Explore Australia as a study destination for Nepali students. Understand PR pathways, work rights during studies, and top-ranked Australian universities.",
    imageUrl: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    country: { country: "Australia" },
    readTime: "10 min read",
    date: "2025-12-05",
    category: "Country Guide"
  },
  // {
  //   id: 4,
  //   slug: "australia-student-visa-nepal",
  //   title: "Australia Student Visa from Nepal: Costs, Requirements & Common Mistakes",
  //   excerpt: "Avoid common pitfalls when applying for an Australian student visa from Nepal. Learn about costs, documentation, and success strategies.",
  //   imageUrl: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  //   country: { country: "Australia" },
  //   readTime: "7 min read",
  //   date: "2025-12-01",
  //   category: "Visa Guide"
  // },
  // USA Blogs
  // {
  //   id: 5,
  //   slug: "study-in-usa-from-nepal",
  //   title: "Study in the USA from Nepal: F-1 Visa Process, Universities & Scholarships",
  //   excerpt: "Your comprehensive guide to studying in the USA from Nepal. Learn about F-1 visa process, top universities, and scholarship opportunities for international students.",
  //   imageUrl: "https://images.unsplash.com/photo-1541336032412-2048a678540d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  //   country: { country: "USA" },
  //   readTime: "9 min read",
  //   date: "2025-11-28",
  //   category: "Country Guide"
  // },
  // // UK Blogs
  // {
  //   id: 6,
  //   slug: "study-in-uk-from-nepal",
  //   title: "Study in the UK from Nepal: 1-Year Degrees, PSW Visa & Cost Guide",
  //   excerpt: "Discover the benefits of studying in the UK from Nepal. Learn about 1-year master's degrees, Post-Study Work (PSW) visa, and living cost breakdown.",
  //   imageUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  //   country: { country: "UK" },
  //   readTime: "8 min read",
  //   date: "2025-11-25",
  //   category: "Country Guide"
  // },
  // // Generic/Helpful Guides
  // {
  //   id: 7,
  //   slug: "choose-best-country-study-abroad",
  //   title: "How to Choose the Best Country to Study Abroad from Nepal",
  //   excerpt: "Confused about which country to choose? This guide helps Nepali students compare countries based on education quality, costs, career opportunities, and more.",
  //   imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  //   country: { country: "Multiple Countries" },
  //   readTime: "12 min read",
  //   date: "2025-11-20",
  //   category: "Decision Guide"
  // },
  // {
  //   id: 8,
  //   slug: "study-abroad-complete-guide",
  //   title: "Study Abroad from Nepal: Complete Guide to Countries, Costs & Visas",
  //   excerpt: "Everything you need to know about studying abroad from Nepal. Compare popular destinations, understand costs, and navigate visa processes.",
  //   imageUrl: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   country: { country: "All Countries" },
  //   readTime: "15 min read",
  //   date: "2025-11-18",
  //   category: "Complete Guide"
  // },
  {
    id: 9,
    slug: "ielts-vs-pte-nepali-students",
    title: "IELTS vs PTE: Which English Test Is Better for Nepali Students?",
    excerpt: "Detailed comparison of IELTS and PTE tests for Nepali students. Understand format differences, scoring, acceptance, and which test suits you better.",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    country: { country: "All Countries" },
    readTime: "6 min read",
    date: "2025-11-15",
    category: "Exam Guide"
  }
];

export default function BlogPage() {
  // Group blogs by category
  // const countryCategories = [
  //   { name: "Japan", blogs: allBlogs.filter(blog => blog.country.country === "Japan") },
  //   { name: "Australia", blogs: allBlogs.filter(blog => blog.country.country === "Australia") },
  //   { name: "USA", blogs: allBlogs.filter(blog => blog.country.country === "USA") },
  //   { name: "UK", blogs: allBlogs.filter(blog => blog.country.country === "UK") },
  //   { name: "Study Guides", blogs: allBlogs.filter(blog => 
  //     ["Multiple Countries", "All Countries"].includes(blog.country.country)
  //   )}
  // ];

  return (
    <div className="min-h-screen bg-gray-50 mt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-red-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-red-600 to-blue-800 bg-clip-text text-transparent">
                  Study Abroad Blogs
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Expert guides, tips, and insights for Nepali students planning to study abroad
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* All Blogs Grid */}
        <AnimatedSection animation="fade-up" delay={0.1}>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">All Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allBlogs.map((blog, index) => (
                <AnimatedSection 
                  key={blog.id} 
                  animation="fade-up" 
                  delay={0.2 + index * 0.05}
                >
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden block h-full"
                  >
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={blog.imageUrl}
                        alt={blog.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-red-600 text-white text-sm font-semibold rounded-full">
                          {blog.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4 text-red-500" />
                          {blog.country.country}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {blog.readTime}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(blog.date).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric',
                            year: 'numeric' 
                          })}
                        </div>
                      </div>

                      <h3 className="text-xl font-bold mb-3 group-hover:text-red-600 transition-colors duration-300 line-clamp-2">
                        {blog.title}
                      </h3>

                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {blog.excerpt}
                      </p>

                      <div className="inline-flex items-center gap-2 text-red-600 font-semibold group">
                        <span>Read Article</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>

       
      </div>
    </div>
  );
}