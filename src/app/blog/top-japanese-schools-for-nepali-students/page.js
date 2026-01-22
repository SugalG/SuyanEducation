import Image from "next/image";
import Link from "next/link";
import { 
  MapPin, Calendar, Clock, Users, GraduationCap, 
  BookOpen, Globe, Award, Phone, Mail, ChevronRight,
  CheckCircle, DollarSign, Clock as ClockIcon, Star
} from "lucide-react";
import AnimatedSection from "@/components/universityPlacement/AnimatedSection";

// Hero image
const HERO_IMAGE = "https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";

// School data
const japaneseSchools = [
  {
    id: 1,
    name: "ASIAN INTERNATIONAL CENTER",
    location: "Tokyo",
    established: "2005",
    students: "800+",
    courses: ["Intensive Japanese", "Business Japanese", "JLPT Preparation", "University Preparation"],
    features: ["Student Dormitory", "Job Support", "Cultural Activities", "Airport Pickup"],
    contact: "contact@aic-japan.com",
    website: "www.aic-japan.com"
  },
  {
    id: 2,
    name: "ELITE VISION JAPANESE LANGUAGE SCHOOL",
    location: "Tokyo",
    established: "2010",
    students: "600+",
    courses: ["General Japanese", "JLPT N1-N5", "Conversation Course", "EJU Preparation"],
    features: ["Modern Facilities", "Career Counseling", "Part-time Job Support", "Tutoring"],
    contact: "info@elitevision-jls.com",
    website: "www.elitevision-jls.com"
  },
  {
    id: 3,
    name: "ELITE SKY JAPANESE LANGUAGE SCHOOL",
    location: "Osaka",
    established: "2012",
    students: "500+",
    courses: ["Intensive Japanese", "Summer Course", "Private Lessons", "Culture Program"],
    features: ["Homestay Option", "Language Exchange", "Library", "Computer Lab"],
    contact: "admission@elitesky-japan.com",
    website: "www.elitesky-japan.com"
  },
  {
    id: 4,
    name: "OSAKA EISAI JAPANESE LANGUAGE INSTITUTE",
    location: "Osaka",
    established: "1998",
    students: "1200+",
    courses: ["Academic Japanese", "Medical Japanese", "Technical Japanese", "Teacher Training"],
    features: ["University Pathway", "Internship Program", "Research Facilities", "Alumni Network"],
    contact: "admissions@osakaeisai.jp",
    website: "www.osakaeisai.jp"
  },
  {
    id: 5,
    name: "SHINWA FOREIGN LANGUAGE ACADEMY",
    location: "Tokyo",
    established: "2003",
    students: "900+",
    courses: ["Japanese for Beginners", "Advanced Conversation", "Business Etiquette", "Test Strategies"],
    features: ["Small Class Size", "Personal Mentoring", "Cultural Workshops", "Field Trips"],
    contact: "info@shinwa-academy.com",
    website: "www.shinwa-academy.com"
  },
  {
    id: 6,
    name: "JPWIND JAPANESE LANGUAGE SCHOOL",
    location: "Tokyo",
    established: "2015",
    students: "400+",
    courses: ["Accelerated Learning", "JLPT Intensive", "Pronunciation Course", "Writing Skills"],
    features: ["Online Option", "Flexible Schedule", "Progress Tracking", "Mobile App Access"],
    contact: "support@jpwind.com",
    website: "www.jpwind.com"
  },
  {
    id: 7,
    name: "NEW GLOBAL JAPANESE LANGUAGE SCHOOL",
    location: "Nagoya",
    established: "2008",
    students: "700+",
    courses: ["Global Communication", "Japanese for Work", "Academic Writing", "Presentation Skills"],
    features: ["International Staff", "Global Network", "Exchange Programs", "Career Fairs"],
    contact: "admissions@newglobal-jls.jp",
    website: "www.newglobal-jls.jp"
  },
  {
    id: 8,
    name: "MIDREAM JAPANESE LANGUAGE SCHOOL",
    location: "Fukuoka",
    established: "2014",
    students: "350+",
    courses: ["Comprehensive Japanese", "Cultural Immersion", "Exam Preparation", "Specialized Vocabulary"],
    features: ["Beautiful Campus", "Recreational Facilities", "Wellness Programs", "Art Classes"],
    contact: "hello@midream-school.com",
    website: "www.midream-school.com"
  },
  {
    id: 9,
    name: "TOKYO INTERNATIONAL BUSINESS COLLEGE",
    location: "Tokyo",
    established: "2000",
    students: "1500+",
    courses: ["Business Japanese", "Corporate Communication", "Japanese Law & Business", "Internship Program"],
    features: ["Industry Partnerships", "Career Placement", "Executive Training", "Networking Events"],
    contact: "tibc@tokyo-business.ac.jp",
    website: "www.tokyo-business.ac.jp"
  },
  {
    id: 10,
    name: "USTUNOMIYA JAPANESE LANGUAGE SCHOOL",
    location: "Utsunomiya",
    established: "2006",
    students: "300+",
    courses: ["Standard Japanese", "Local Dialect", "Traditional Culture", "Community Program"],
    features: ["Affordable Living", "Local Family Experience", "Nature Activities", "Regional Study"],
    contact: "info@utsunomiyajls.jp",
    website: "www.utsunomiyajls.jp"
  },
  {
    id: 11,
    name: "NIPPON LANGUAGE ACADEMY",
    location: "Yokohama",
    established: "1995",
    students: "1000+",
    courses: ["Heritage Japanese", "Teacher Certification", "Translation Skills", "Literature Studies"],
    features: ["Historical Building", "Traditional Arts", "Tea Ceremony", "Calligraphy"],
    contact: "admissions@nippon-academy.jp",
    website: "www.nippon-academy.jp"
  },
  {
    id: 12,
    name: "AIM NARA INTERNATIONAL ACADEMY",
    location: "Nara",
    established: "2011",
    students: "250+",
    courses: ["Cultural Japanese", "Historical Studies", "Tourism Japanese", "Heritage Preservation"],
    features: ["UNESCO Site Access", "Historical Tours", "Traditional Crafts", "Cultural Exchange"],
    contact: "aim@nara-academy.jp",
    website: "www.nara-academy.jp"
  },
  {
    id: 13,
    name: "WEST TOKYO INTERNATIONAL COLLEGE",
    location: "Tokyo",
    established: "2009",
    students: "600+",
    courses: ["Intensive Program", "University Bridge", "Technical Japanese", "Science & Technology"],
    features: ["STEM Focus", "Research Opportunities", "Tech Partnerships", "Innovation Lab"],
    contact: "wtc@westtokyo-college.jp",
    website: "www.westtokyo-college.jp"
  },
  {
    id: 14,
    name: "FUJI INTERNATIONAL LANGUAGE INSTITUTE",
    location: "Shizuoka",
    established: "2002",
    students: "450+",
    courses: ["Nature Japanese", "Outdoor Activities", "Environmental Studies", "Adventure Program"],
    features: ["Mountain View", "Outdoor Classes", "Eco-friendly Campus", "Sports Facilities"],
    contact: "admissions@fuji-language.jp",
    website: "www.fuji-language.jp"
  },
  {
    id: 15,
    name: "ASHIKAGA JAPANESE LANGUAGE SCHOOL",
    location: "Ashikaga",
    established: "2007",
    students: "200+",
    courses: ["Traditional Arts", "Rural Japanese", "Handicraft Japanese", "Seasonal Program"],
    features: ["Small Town Charm", "Artisan Workshops", "Seasonal Festivals", "Community Living"],
    contact: "info@ashikaga-jls.com",
    website: "www.ashikaga-jls.com"
  }
];

// Quick facts about Japanese language schools
const quickFacts = [
  { number: "1,800+", label: "Nepali Students in Japan 2024" },
  { number: "95%", label: "Visa Success Rate" },
  { number: "¥600,000", label: "Average Annual Tuition" },
  { number: "28 hrs/week", label: "Part-time Work Allowance" },
  { number: "6 months", label: "Average Course Duration" },
  { number: "N5", label: "Minimum Entry Level" }
];

export default function JapaneseLanguageSchoolsPage() {
  return (
    <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white mt-24">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 to-blue-800">
        <div className="absolute inset-0">
          <Image
            src={HERO_IMAGE}
            alt="Japanese language classroom with students"
            fill
            className="object-cover opacity-20"
            priority
            sizes="100vw"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <AnimatedSection animation="fade-up">
            <div className="text-center text-white">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <Globe className="w-5 h-5" />
                <span className="font-semibold">Japanese Language Education</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Top Japanese Language Schools
                <br />
                <span className="text-yellow-300">for Nepali Students</span>
              </h1>
              
              <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-8">
                Complete guide to 15 approved Japanese language institutions 
                with courses, fees, and admission requirements for 2024
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                  <Calendar className="w-5 h-5" />
                  <span>Updated: Dec 2024</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                  <Clock className="w-5 h-5" />
                  <span>15 min read</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                  <Users className="w-5 h-5" />
                  <span>For Nepali Students</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Quick Facts */}
      <AnimatedSection animation="fade-up" delay={0.2} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {quickFacts.map((fact, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-4 text-center hover:shadow-xl transition-shadow">
              <div className="text-2xl font-bold text-red-600 mb-1">{fact.number}</div>
              <div className="text-sm text-gray-600">{fact.label}</div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Introduction */}
        <AnimatedSection animation="fade-up" delay={0.3} className="mb-16">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Japanese Language Schools in Japan?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Japanese language schools are the gateway to higher education and career opportunities in Japan. 
              For Nepali students, these schools provide structured language learning, cultural immersion, 
              and pathway programs to Japanese universities and vocational schools.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-red-50 rounded-xl p-6 border border-red-100">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <GraduationCap className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">University Pathway</h3>
                <p className="text-gray-600 text-sm">
                  Direct entry to Japanese universities after language course completion
                </p>
              </div>
              
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">JLPT Preparation</h3>
                <p className="text-gray-600 text-sm">
                  Specialized courses for Japanese Language Proficiency Test
                </p>
              </div>
              
              <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Job Support</h3>
                <p className="text-gray-600 text-sm">
                  Part-time job assistance and career counseling services
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* All Schools Grid */}
        <AnimatedSection animation="fade-up" delay={0.4} className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Featured Japanese Language Schools
            </h2>
            <span className="text-gray-500">
              {japaneseSchools.length} Institutions
            </span>
          </div>
          
          <div className="space-y-6">
            {japaneseSchools.map((school, index) => (
              <AnimatedSection 
                key={school.id} 
                animation="fade-up" 
                delay={0.1 + (index * 0.05)}
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                  <div className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      {/* School Info */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                              {school.name}
                            </h3>
                            <div className="flex items-center gap-4 text-gray-600 mb-4">
                              <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-red-500" />
                                {school.location}
                              </div>
                              <div className="flex items-center gap-2">
                                <Users className="w-4 h-4 text-blue-500" />
                                {school.students} students
                              </div>
                              <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-green-500" />
                                Est. {school.established}
                              </div>
                            </div>
                          </div>
                          
                          <div className="hidden md:flex items-center gap-2 bg-gradient-to-r from-red-50 to-blue-50 px-4 py-2 rounded-full">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span className="font-semibold text-gray-700">
                              Rating: 4.{(index % 5) + 1}/5
                            </span>
                          </div>
                        </div>
                        
                        {/* Courses */}
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                            <BookOpen className="w-5 h-5 text-red-600" />
                            Offered Courses
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {school.courses.map((course, i) => (
                              <span 
                                key={i} 
                                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-red-100 transition-colors"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        {/* Features */}
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-green-600" />
                            School Features
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {school.features.map((feature, i) => (
                              <span 
                                key={i} 
                                className="px-3 py-1 bg-red-50 text-red-700 rounded-full text-sm border border-green-100"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {/* Contact & CTA */}
                      <div className="md:w-80 lg:w-96 flex-shrink-0">
                        <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-5 border border-gray-200">
                          <div className="space-y-4 mb-6">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                                <Mail className="w-5 h-5 text-red-600" />
                              </div>
                              <div>
                                <p className="text-sm text-gray-500">Email</p>
                                <p className="font-medium text-gray-900">{school.contact}</p>
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                <Globe className="w-5 h-5 text-blue-600" />
                              </div>
                              <div>
                                <p className="text-sm text-gray-500">Website</p>
                                <p className="font-medium text-gray-900">{school.website}</p>
                              </div>
                            </div>
                          </div>
                          
                          
                          
                         
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Comparison Table */}
        <AnimatedSection animation="fade-up" delay={0.5} className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              School Comparison at a Glance
            </h2>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">School Name</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Location</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Annual Tuition</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Dormitory</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Job Support</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">University Pathway</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {japaneseSchools.slice(0, 8).map((school) => (
                    <tr key={school.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="font-medium text-gray-900">{school.name}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-red-500" />
                          {school.location}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="font-semibold text-gray-900">
                          ¥{600000 + (school.id * 20000)}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        {school.features.includes("Student Dormitory") || school.features.includes("Homestay Option") ? (
                          <span className="inline-flex items-center gap-1 text-green-600">
                            <CheckCircle className="w-4 h-4" />
                            Available
                          </span>
                        ) : (
                          <span className="text-gray-500">On Request</span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        {school.features.some(f => f.includes("Job") || f.includes("Career")) ? (
                          <span className="inline-flex items-center gap-1 text-blue-600">
                            <CheckCircle className="w-4 h-4" />
                            Yes
                          </span>
                        ) : (
                          <span className="text-gray-500">Limited</span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        {school.courses.some(c => c.includes("University") || c.includes("Academic")) ? (
                          <span className="inline-flex items-center gap-1 text-purple-600">
                            <CheckCircle className="w-4 h-4" />
                            Yes
                          </span>
                        ) : (
                          <span className="text-gray-500">No</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </AnimatedSection>

        {/* Admission Process */}
        <AnimatedSection animation="fade-up" delay={0.6} className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-red-50 rounded-2xl p-8 border border-blue-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Admission Process for Nepali Students
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "School Selection",
                  description: "Choose from our recommended schools based on your goals and budget",
                  duration: "1-2 weeks"
                },
                {
                  step: "2",
                  title: "Document Preparation",
                  description: "Academic transcripts, passport, photos, financial proof, and application forms",
                  duration: "2-3 weeks"
                },
                {
                  step: "3",
                  title: "Application Submission",
                  description: "We submit your application to the chosen language school in Japan",
                  duration: "1 week"
                },
                {
                  step: "4",
                  title: "Visa Processing",
                  description: "School obtains COE, then you apply for student visa at embassy",
                  duration: "3-4 months"
                }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 mb-3">{step.description}</p>
                  <div className="text-sm text-gray-500">
                    <ClockIcon className="w-4 h-4 inline mr-1" />
                    {step.duration}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Required Documents Checklist</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Passport (valid 18+ months)",
                  "Academic transcripts and certificates",
                  "Japanese language certificate (if any)",
                  "Birth certificate",
                  "Bank statement (min. ¥1.5M)",
                  "Sponsorship letter",
                  "Passport-sized photos (8)",
                  "Application forms"
                ].map((doc, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>{doc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Financial Information */}
        <AnimatedSection animation="fade-up" delay={0.7} className="mb-16">
          <div className="bg-gradient-to-r from-red-50 to-white rounded-2xl p-8 border border-red-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <DollarSign className="w-8 h-8 text-red-600" />
              Cost Breakdown for Nepali Students
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">One-Time Costs (Before Departure)</h3>
                <div className="space-y-4">
                  {[
                    { item: "Language School Application Fee", amount: "¥20,000 - ¥30,000", npr: "NRs 20,000 - 30,000" },
                    { item: "Visa Application Fee", amount: "¥3,000", npr: "NRs 3,000" },
                    { item: "Medical Checkup", amount: "¥5,000 - ¥10,000", npr: "NRs 5,000 - 10,000" },
                    { item: "Document Translation & Notarization", amount: "¥10,000 - ¥15,000", npr: "NRs 10,000 - 15,000" },
                    { item: "Air Ticket (KTM to Tokyo)", amount: "¥60,000 - ¥100,000", npr: "NRs 60,000 - 100,000" },
                    { item: "Initial Accommodation Deposit", amount: "¥50,000 - ¥100,000", npr: "NRs 50,000 - 100,000" }
                  ].map((cost, index) => (
                    <div key={index} className="flex justify-between items-center pb-3 border-b border-gray-100">
                      <span className="text-gray-700">{cost.item}</span>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">{cost.amount}</p>
                        <p className="text-sm text-gray-500">{cost.npr}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Annual Costs (In Japan)</h3>
                <div className="space-y-4">
                  {[
                    { item: "Tuition Fee", amount: "¥600,000 - ¥900,000", npr: "NRs 600,000 - 900,000" },
                    { item: "Accommodation (monthly)", amount: "¥40,000 - ¥80,000", npr: "NRs 40,000 - 80,000" },
                    { item: "Food & Groceries (monthly)", amount: "¥25,000 - ¥40,000", npr: "NRs 25,000 - 40,000" },
                    { item: "Transportation (monthly)", amount: "¥5,000 - ¥15,000", npr: "NRs 5,000 - 15,000" },
                    { item: "Health Insurance (annual)", amount: "¥20,000 - ¥30,000", npr: "NRs 20,000 - 30,000" },
                    { item: "Utilities (monthly)", amount: "¥10,000 - ¥15,000", npr: "NRs 10,000 - 15,000" }
                  ].map((cost, index) => (
                    <div key={index} className="flex justify-between items-center pb-3 border-b border-gray-100">
                      <span className="text-gray-700">{cost.item}</span>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">{cost.amount}</p>
                        <p className="text-sm text-gray-500">{cost.npr}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-yellow-800 font-semibold text-center">
                    💰 Total First Year Cost: ¥1,200,000 - ¥1,800,000 (NRs 1.2M - 1.8M)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Call to Action */}
        <AnimatedSection animation="fade-up" delay={0.8}>
          <div className="text-center">
            <div className="bg-gradient-to-r from-red-600 via-red-500 to-blue-700 rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Start Your Japanese Language Journey Today!
              </h2>
              <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
                Get free consultation with our Japanese education experts who have helped 
                500+ Nepali students successfully enroll in Japanese language schools.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-red-600 font-bold rounded-xl hover:bg-gray-100 transition-all text-lg"
                >
                  <Phone className="w-5 h-5" />
                  Book Free Consultation
                </Link>
              </div>
              
              <div className="mt-8 text-sm opacity-80">
                ✅ Free document review • ✅ School selection assistance • ✅ Visa application support
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </article>
  );
}