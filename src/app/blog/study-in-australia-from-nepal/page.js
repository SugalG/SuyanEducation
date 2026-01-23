import Image from "next/image";
import Link from "next/link";
import { 
  Calendar, Clock, User, Tag, ArrowRight,
  GraduationCap, Briefcase, DollarSign, Home,
  CheckCircle, BookOpen
} from "lucide-react";
import AnimatedSection from "@/components/universityPlacement/AnimatedSection";

// Hero image
const HERO_IMAGE = "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";

// Blog metadata
const blogMeta = {
  title: "Study in Australia from Nepal: PR Pathways, Work Rights & Career Guide",
  excerpt: "A comprehensive guide for Nepali students considering Australia for higher education, work opportunities, and permanent residency pathways.",
  author: "Sarah Johnson",
  publishedDate: "December 18, 2024",
  readTime: "10 min read",
  category: "Australia Guide"
};

export default function StudyAustraliaMinimalPage() {
  return (
    <article className="min-h-screen bg-white mt-24">
      {/* Simple Hero */}
      <section className="relative">
        <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
          <Image
            src={HERO_IMAGE}
            alt="Sydney Opera House and Harbour Bridge"
            fill
            className="object-cover brightness-75"
            priority
            sizes="100vw"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          
          <div className="relative h-full flex items-end">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 text-white w-full">
              <div className="flex items-center gap-2 mb-4">
                <Tag className="w-4 h-4" />
                <span className="font-medium">{blogMeta.category}</span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                {blogMeta.title}
              </h1>

              <p className="text-lg opacity-90 mb-6">
                {blogMeta.excerpt}
              </p>

              {/* <div className="flex items-center gap-6 text-gray-200">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{blogMeta.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{blogMeta.publishedDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{blogMeta.readTime}</span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Introduction */}
        <AnimatedSection animation="fade-up" className="mb-12" animateImmediately>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              Australia has become one of the most popular destinations for Nepali students seeking international education. 
              With world-class universities, generous work rights, and clear pathways to permanent residency, it offers a 
              comprehensive package that's hard to match.
            </p>
            
            <p className="text-gray-700">
              In this guide, we'll explore the key aspects of studying in Australia from Nepal, focusing on practical 
              information about education quality, work opportunities, and long-term settlement options.
            </p>
          </div>
        </AnimatedSection>

        {/* Why Australia */}
        <AnimatedSection animation="fade-up" delay={0.1} className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Australia?</h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Quality Education</h3>
                <p className="text-gray-700">
                  Australia has 7 universities in the top 100 globally. The education system emphasizes practical 
                  skills and industry relevance, preparing students for real-world challenges.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Work Opportunities</h3>
                <p className="text-gray-700">
                  International students can work up to 48 hours per fortnight during studies and unlimited hours 
                  during holidays. This helps offset living costs and provides valuable local experience.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Home className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">PR Pathways</h3>
                <p className="text-gray-700">
                  Australia offers clear pathways to permanent residency for graduates, particularly in high-demand 
                  fields like healthcare, IT, engineering, and education.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Work Rights */}
        <AnimatedSection animation="fade-up" delay={0.2} className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Work Rights During Studies</h2>
          
          <div className="bg-gray-50 rounded-xl p-6 mb-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-3">During Semester</h3>
                <div className="flex items-center gap-3">
                  <Briefcase className="w-5 h-5 text-blue-600" />
                  <span className="text-xl font-semibold">48 hours per fortnight</span>
                </div>
                <p className="text-gray-600 text-sm mt-2">
                  Equivalent to 3-4 days of work per week
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-gray-900 mb-3">During Holidays</h3>
                <div className="flex items-center gap-3">
                  <Briefcase className="w-5 h-5 text-green-600" />
                  <span className="text-xl font-semibold">Unlimited hours</span>
                </div>
                <p className="text-gray-600 text-sm mt-2">
                  Work full-time during scheduled breaks
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-bold text-gray-900">Average Part-time Wages</h3>
            <div className="space-y-3">
              {[
                { role: "Retail/Customer Service", wage: "A$25-30/hr" },
                { role: "Hospitality", wage: "A$22-28/hr" },
                { role: "Tutoring", wage: "A$30-50/hr" },
                { role: "Internships", wage: "A$25-35/hr" }
              ].map((job, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">{job.role}</span>
                  <span className="font-semibold text-blue-600">{job.wage}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Post-Study Work */}
        <AnimatedSection animation="fade-up" delay={0.3} className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Post-Study Work Visa (485)</h2>
          
          <p className="text-gray-700 mb-6">
            After completing your studies, you can apply for the Temporary Graduate visa (subclass 485), 
            which allows you to work full-time in Australia.
          </p>
          
          <div className="space-y-4">
            {[
              { qualification: "Bachelor Degree", duration: "2 years" },
              { qualification: "Master by Coursework", duration: "3 years" },
              { qualification: "Master by Research", duration: "3 years" },
              { qualification: "PhD", duration: "4 years" }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg">
                <span className="font-medium text-gray-900">{item.qualification}</span>
                <span className="font-bold text-green-600">{item.duration}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
            <p className="text-blue-800 text-sm">
              <span className="font-bold">Note:</span> Additional 1-2 years available for those studying in regional areas. 
              Must apply within 6 months of completing studies.
            </p>
          </div>
        </AnimatedSection>

        {/* PR Pathways */}
        <AnimatedSection animation="fade-up" delay={0.4} className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Permanent Residency Pathways</h2>
          
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Skilled Independent Visa (189)</h3>
              <p className="text-gray-700 mb-4">
                Points-based system requiring minimum 65 points. No sponsorship needed.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Best for high-scoring candidates in demand occupations</span>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Skilled Nominated Visa (190)</h3>
              <p className="text-gray-700 mb-4">
                State nomination adds 5 points to your score. Requires commitment to live in nominating state.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Good option if willing to live in specific states</span>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Skilled Work Regional Visa (491)</h3>
              <p className="text-gray-700 mb-4">
                Regional sponsorship adds 15 points. Must live and work in regional Australia.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Higher points, faster processing for regional areas</span>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Costs */}
        <AnimatedSection animation="fade-up" delay={0.5} className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Cost Breakdown</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Annual Expenses</h3>
              <div className="space-y-3">
                {[
                  { item: "Tuition Fees", cost: "A$20,000 - A$45,000" },
                  { item: "Living Expenses", cost: "A$21,041" },
                  { item: "Health Insurance", cost: "A$600 - A$1,000" },
                  { item: "Total Annual Cost", cost: "A$45,000 - A$70,000", highlight: true }
                ].map((expense, index) => (
                  <div key={index} className={`flex justify-between items-center py-3 ${index < 3 ? 'border-b border-gray-100' : ''}`}>
                    <span className={`${expense.highlight ? 'font-bold' : 'text-gray-700'}`}>
                      {expense.item}
                    </span>
                    <span className={`font-semibold ${expense.highlight ? 'text-blue-600 text-lg' : 'text-gray-900'}`}>
                      {expense.cost}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Graduate Salaries</h3>
              <div className="space-y-3">
                {[
                  { field: "IT Graduate", salary: "A$65,000 - A$85,000" },
                  { field: "Engineering Graduate", salary: "A$70,000 - A$95,000" },
                  { field: "Business Graduate", salary: "A$60,000 - A$75,000" },
                  { field: "Healthcare Graduate", salary: "A$65,000 - A$80,000" }
                ].map((job, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-700">{job.field}</span>
                    <span className="font-semibold text-green-600">{job.salary}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Application Process */}
        <AnimatedSection animation="fade-up" delay={0.6} className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Application Process</h2>
          
          <div className="space-y-4">
            {[
              "Choose your course and university",
              "Check entry requirements and English proficiency",
              "Prepare academic documents and financial proof",
              "Apply for admission and receive offer letter",
              "Pay tuition deposit and receive COE",
              "Apply for student visa (subclass 500)",
              "Attend visa interview if required",
              "Receive visa grant and prepare for departure"
            ].map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {index + 1}
                </div>
                <span className="text-gray-700 pt-1">{step}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700 text-sm">
              <span className="font-bold">Processing Time:</span> 4-6 months for complete process
            </p>
          </div>
        </AnimatedSection>

        {/* Key Requirements */}
        <AnimatedSection animation="fade-up" delay={0.7} className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Requirements</h2>
          
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-bold text-gray-900 mb-2">Academic Requirements</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Minimum 65% in +2 or equivalent for bachelor's</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Minimum 60% in bachelor's for master's</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Relevant background for selected course</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-bold text-gray-900 mb-2">English Requirements</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>IELTS: 6.0 overall (no band less than 5.5)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>TOEFL: 60-78 depending on university</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>PTE: 50-58 minimum score</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-bold text-gray-900 mb-2">Financial Requirements</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Bank statement showing A$21,041 for living expenses</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Proof of funds for tuition fees</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Income proof of sponsor (if applicable)</span>
                </li>
              </ul>
            </div>
          </div>
        </AnimatedSection>

        {/* Conclusion */}
        <AnimatedSection animation="fade-up" delay={0.8} className="mb-12">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-8 border border-blue-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Start Your Australian Journey
            </h2>
            
            <p className="text-gray-700 mb-8 text-center">
              Australia offers a balanced combination of quality education, work experience, and long-term 
              settlement opportunities. With proper planning and guidance, it can be an excellent choice 
              for Nepali students seeking international education and career growth.
            </p>
            
            <div className="text-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white font-bold rounded-xl hover:shadow-lg transition-all"
              >
                <BookOpen className="w-5 h-5" />
                Get Free Consultation
              </Link>
            </div>
          </div>
        </AnimatedSection>

        {/* Next Article */}
        <AnimatedSection animation="fade-up" delay={0.9} className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Next article</p>
              <h3 className="text-lg font-bold text-gray-900">
                Australia Student Visa: Requirements & Common Mistakes
              </h3>
            </div>
            <Link
              href="#"
              className="flex items-center gap-2 text-blue-600 font-semibold hover:underline"
            >
              <span>Read next</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </article>
  );
}