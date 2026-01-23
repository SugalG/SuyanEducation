import Image from "next/image";
import Link from "next/link";
import {
  Brain,
  GraduationCap,
  DollarSign,
  Briefcase,
  Globe,
  Shield,
  Users,
  Zap,
  TrendingUp,
  Award,
  Heart,
  Clock,
  MapPin,
  BookOpen,
  ArrowRight,
  Star,
  Target,
} from "lucide-react";
import AnimatedSection from "@/components/universityPlacement/AnimatedSection";

// Hero image
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";

// Key advantages data
const advantages = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "World-Class Education",
    description:
      "Japan has 5 universities in the top 100 globally, with cutting-edge research facilities and innovative teaching methods.",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-100",
  },
  {
    icon: <DollarSign className="w-8 h-8" />,
    title: "Affordable Education",
    description:
      "Tuition fees 40-60% lower than Western countries, with numerous scholarships specifically for international students.",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-100",
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: "Strong Job Market",
    description:
      "Japan faces a skilled worker shortage, offering abundant job opportunities with competitive salaries for graduates.",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-100",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Safe & Stable Society",
    description:
      "World's safest country with low crime rates, political stability, and excellent healthcare system.",
    color: "from-emerald-500 to-emerald-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-100",
  },
];

// Comparison data
const comparisonData = [
  {
    country: "Japan",
    tuition: "¥800,000/year",
    livingCost: "¥100,000/month",
    workHours: "28 hrs/week",
    prPathway: "3-5 years",
    language: "Japanese + English",
    advantages: ["Safe", "Affordable", "High Tech", "Stable Jobs"],
  },
  {
    country: "USA",
    tuition: "$30,000/year",
    livingCost: "$1,500/month",
    workHours: "20 hrs/week",
    prPathway: "6-8 years",
    language: "English",
    advantages: ["English", "Diverse", "Innovative"],
  },
  {
    country: "Australia",
    tuition: "A$25,000/year",
    livingCost: "A$1,800/month",
    workHours: "40 hrs/fortnight",
    prPathway: "2-4 years",
    language: "English",
    advantages: ["English", "PR Fast", "Sunny"],
  },
  {
    country: "UK",
    tuition: "£15,000/year",
    livingCost: "£1,200/month",
    workHours: "20 hrs/week",
    prPathway: "5 years",
    language: "English",
    advantages: ["1-year Masters", "History", "Europe Access"],
  },
];

// Success stories
const successStories = [
  {
    name: "Suraj Sharma",
    from: "Kathmandu",
    degree: "Robotics Engineering",
    university: "Tokyo Institute of Technology",
    current: "Robotics Engineer at Sony",
    quote: "Japan gave me opportunities I never dreamed of in Nepal.",
  },
  {
    name: "Priya Gurung",
    from: "Pokhara",
    degree: "Business Administration",
    university: "Waseda University",
    current: "Marketing Manager at Rakuten",
    quote:
      "The blend of tradition and innovation in Japan is perfect for growth.",
  },
  {
    name: "Amit Tamang",
    from: "Dharan",
    degree: "Computer Science",
    university: "University of Tokyo",
    current: "Software Developer at LINE",
    quote: "Japanese work ethic transformed my career approach completely.",
  },
];

// Quick facts
const quickFacts = [
  {
    number: "40,000+",
    label: "Nepali Students in Japan",
    icon: <Users className="w-6 h-6" />,
  },
  {
    number: "95%",
    label: "Employment Rate for Graduates",
    icon: <Briefcase className="w-6 h-6" />,
  },
  {
    number: "¥1.2M",
    label: "Average Starting Salary",
    icon: <DollarSign className="w-6 h-6" />,
  },
  {
    number: "98%",
    label: "Visa Success Rate 2024",
    icon: <Shield className="w-6 h-6" />,
  },
  {
    number: "300+",
    label: "Japanese Companies in Nepal",
    icon: <Globe className="w-6 h-6" />,
  },
  {
    number: "N5",
    label: "Minimum Japanese Required",
    icon: <BookOpen className="w-6 h-6" />,
  },
];

export default function WhyJapanSmartDestinationPage() {
  return (
    <article className="min-h-screen bg-gradient-to-b from-white to-gray-50 mt-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-red-600 to-blue-800">
        <div className="absolute inset-0">
          <Image
            src={HERO_IMAGE}
            alt="Modern Japanese cityscape with traditional elements"
            fill
            className="object-cover opacity-20"
            priority
            sizes="100vw"
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <AnimatedSection animation="fade-up" animateImmediately>
            <div className="text-center text-white">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <Target className="w-5 h-5" />
                <span className="font-semibold">
                  Strategic Choice for Nepali Students
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Why Japan is a
                <span className="block text-yellow-300 mt-2">
                  Smart Study Destination
                </span>
                for Nepali Students
              </h1>

              <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto mb-8">
                7 compelling reasons why thousands of Nepali students are
                choosing Japan over traditional Western destinations in 2025
              </p>

              <div className="inline-flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full">
                <Clock className="w-5 h-5" />
                <span>Updated for 2025 Admissions</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Introduction */}
      <AnimatedSection
        animation="fade-up"
        delay={0.2}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10"
        animateImmediately
      >
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              The Smart Choice for Ambitious Nepali Students
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              While the USA, UK, and Australia remain popular, smart Nepali
              students are discovering that Japan offers a unique combination of
              quality education, career opportunities, and cultural experience
              that's unmatched elsewhere. Here's why Japan should be at the top
              of your study abroad list.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Key Advantages Grid */}
        <AnimatedSection animation="fade-up" delay={0.3} className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            The Strategic Advantages of Studying in Japan
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <AnimatedSection
                key={index}
                animation="fade-up"
                delay={0.4 + index * 0.1}
              >
                <div
                  className={`${advantage.bgColor} rounded-2xl p-8 border-2 ${advantage.borderColor} hover:scale-105 transition-transform duration-300`}
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${advantage.color} rounded-xl flex items-center justify-center text-white mb-6`}
                  >
                    {advantage.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Why Smart Students Choose Japan */}
        <AnimatedSection animation="fade-up" delay={0.5} className="mb-20">
          <div className="bg-gradient-to-r from-red-50 to-blue-50 rounded-2xl p-8 border border-red-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
              <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
                7 Reasons Smart Nepali Students Choose Japan
              </span>
            </h2>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-6">
              {[
                {
                  number: "01",
                  title: "Future-Proof Education",
                  description:
                    "Japan leads in robotics, AI, sustainable technology, and healthcare - exactly the fields that will dominate the 21st-century job market.",
                  icon: <Zap className="w-5 h-5 md:w-6 md:h-6" />,
                },
                {
                  number: "02",
                  title: "Cost-Effective Investment",
                  description:
                    "Get world-class education at 40% lower cost than Western countries. Your return on investment is higher and faster.",
                  icon: <TrendingUp className="w-5 h-5 md:w-6 md:h-6" />,
                },
                {
                  number: "03",
                  title: "Cultural & Professional Growth",
                  description:
                    "Develop discipline, attention to detail, and strong work ethic - qualities highly valued by global employers.",
                  icon: <Award className="w-5 h-5 md:w-6 md:h-6" />,
                },
                {
                  number: "04",
                  title: "Strategic Location in Asia",
                  description:
                    "Position yourself in the world's fastest-growing economic region with easy access to China, Korea, and Southeast Asia.",
                  icon: <Globe className="w-5 h-5 md:w-6 md:h-6" />,
                },
                {
                  number: "05",
                  title: "Supportive Nepali Community",
                  description:
                    "Join 40,000+ Nepali students who've paved the way. Strong community support makes adaptation easier.",
                  icon: <Heart className="w-5 h-5 md:w-6 md:h-6" />,
                },
                {
                  number: "06",
                  title: "Learn Two Global Languages",
                  description:
                    "Master Japanese (3rd most important business language) while improving English in an international environment.",
                  icon: <BookOpen className="w-5 h-5 md:w-6 md:h-6" />,
                },
                {
                  number: "07",
                  title: "Quality of Life",
                  description:
                    "Experience clean cities, efficient public transport, and safe streets while enjoying four beautiful seasons.",
                  icon: <Star className="w-5 h-5 md:w-6 md:h-6" />,
                },
              ].map((reason, index) => (
                <AnimatedSection
                  key={index}
                  animation="fade-left"
                  delay={0.2 + index * 0.1}
                >
                  <div className="bg-white rounded-xl border border-gray-200 hover:border-red-300 transition-colors p-4 sm:p-5 md:p-6 hover:shadow-md">
                    {/* Header with Number and Icon */}
                    <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg md:rounded-xl flex items-center justify-center text-base sm:text-lg md:text-xl font-bold">
                          {reason.number}
                        </div>
                      </div>

                      <div className="flex items-center gap-3 flex-grow">
                        <div className="p-2 bg-red-50 rounded-lg">
                          {reason.icon}
                        </div>

                        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 leading-tight">
                          {reason.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed pl-0 sm:pl-16 md:pl-18">
                      {reason.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Country Comparison */}
        <AnimatedSection animation="fade-up" delay={0.6}>
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hidden lg:block mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
              Japan vs Other Popular Destinations
            </h2>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Country
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Annual Tuition
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Monthly Living
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Work Hours
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      PR Timeline
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Key Advantages
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {comparisonData.map((country, index) => (
                    <tr
                      key={country.country}
                      className={`hover:bg-gray-50 transition-colors ${
                        country.country === "Japan"
                          ? "bg-red-50 border-l-4 border-red-500"
                          : ""
                      }`}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          {country.country === "Japan" && (
                            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                          )}
                          <div
                            className={`font-bold text-lg ${
                              country.country === "Japan"
                                ? "text-red-600"
                                : "text-gray-900"
                            }`}
                          >
                            {country.country}
                          </div>
                          {country.country === "Japan" && (
                            <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-bold rounded">
                              RECOMMENDED
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div
                          className={`font-semibold ${
                            country.country === "Japan"
                              ? "text-green-600"
                              : "text-gray-900"
                          }`}
                        >
                          {country.tuition}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="font-medium text-gray-900">
                          {country.livingCost}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="font-medium text-gray-900">
                          {country.workHours}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="font-medium text-gray-900">
                          {country.prPathway}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap gap-1">
                          {country.advantages.map((adv, i) => (
                            <span
                              key={i}
                              className={`px-2 py-1 text-xs rounded-full ${
                                country.country === "Japan"
                                  ? "bg-red-100 text-red-700"
                                  : "bg-gray-100 text-gray-700"
                              }`}
                            >
                              {adv}
                            </span>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 text-center text-gray-600">
              <p className="font-semibold">
                💡 Japan offers the best balance of quality education,
                affordability, and career opportunities
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Quick Facts */}
        <AnimatedSection animation="fade-up" delay={0.7} className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            By The Numbers: Japan's Edge
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickFacts.map((fact, index) => (
              <AnimatedSection
                key={index}
                animation="zoom-in"
                delay={0.8 + index * 0.05}
              >
                <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-shadow border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-100 to-red-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <div className="text-red-600">{fact.icon}</div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {fact.number}
                  </div>
                  <div className="text-sm text-gray-600">{fact.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Success Stories */}

        {/* The Smart Decision */}
        <AnimatedSection animation="fade-up" delay={0.9} className="mb-20">
          <div className="bg-gradient-to-r from-red-50 to-blue-50 rounded-2xl p-8 border-2 border-red-200">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-600 to-blue-600 text-white rounded-full mb-6">
                <Brain className="w-5 h-5" />
                <span className="font-bold">The Smart Decision</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Japan: More Than Just a Degree
              </h2>

              <div className="text-lg text-gray-700 space-y-6 mb-10">
                <p>
                  Choosing Japan isn't just about getting a degree - it's about
                  investing in your future strategically. While other countries
                  offer education, Japan offers a complete package:{" "}
                  <span className="font-semibold">
                    education + employability + cultural capital
                  </span>
                  .
                </p>

                <p>
                  For Nepali students, Japan provides a unique advantage: the
                  opportunity to stand out. While everyone is going to
                  English-speaking countries, smart students are building
                  expertise in Japanese language and culture - skills that are
                  increasingly valuable in our interconnected world.
                </p>

                <p className="font-semibold text-gray-900 text-xl">
                  In 2025, being bilingual in English and Japanese with a
                  Japanese degree is a powerful combination that sets you apart
                  in the global job market.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  The Smart Student's Checklist:
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "✓ World-class education at reasonable cost",
                    "✓ Strong job market with skills shortage",
                    "✓ Safe and stable living environment",
                    "✓ Cultural experience that builds character",
                    "✓ Strategic location in growing Asia",
                    "✓ Supportive Nepali community network",
                    "✓ Learning valuable Japanese language",
                    "✓ Faster return on education investment",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                        ✓
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Next Steps */}
        <AnimatedSection animation="fade-up" delay={1}>
          <div className="text-center">
            <div className="bg-gradient-to-r from-red-600 via-red-500 to-blue-600 rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Make the Smart Choice?
              </h2>

              <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
                Join thousands of smart Nepali students who've discovered that
                Japan offers the perfect balance of quality education, career
                opportunities, and life experience.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-red-600 font-bold rounded-xl hover:bg-gray-100 transition-all text-lg hover:scale-105"
                >
                  <Target className="w-5 h-5" />
                  Book Strategy Session
                </Link>
                <Link
                  href="/blog/top-japanese-schools-for-nepali-students"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-colors text-lg"
                >
                  <BookOpen className="w-5 h-5" />
                  Find Top Schools in Japan
                </Link>
              </div>

              <div className="mt-8 text-sm opacity-80">
                <div className="flex flex-wrap justify-center gap-6">
                  <span className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4" />
                    Free University Selection
                  </span>
                  <span className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    Career Pathway Planning
                  </span>
                  <span className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    Scholarship Assistance
                  </span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </article>
  );
}
