// app/university-placement/page.tsx
import ProcessCard from "@/components/universityPlacement/ProcessCard";
import UniversityPartnerCard from "@/components/universityPlacement/UniversityPartnerCard";
import PlacementStats from "@/components/universityPlacement/PlacementStats";
import CountryFocus from "@/components/universityPlacement/CountryFocus";
import ServicesComparison from "@/components/universityPlacement/ServiceComparison";
import AnimatedSection from "@/components/universityPlacement/AnimatedSection";
import Link from "next/link";

export const dynamic = "force-static";

export default function UniversityPlacement() {
  const placementProcess = [
    {
      step: 1,
      title: "Profile Assessment & Academic Evaluation",
      description:
        "Comprehensive analysis of academic background, extracurriculars, test scores, and career goals to identify optimal university matches from our partner institutions.",
      activities: [
        "GPA & transcript evaluation",
        "Standardized test score analysis",
        "Extracurricular portfolio review",
        "Partner university eligibility check",
      ],
      icon: "ClipboardCheck",
    },
    {
      step: 2,
      title: "University Shortlisting & Strategy",
      description:
        "Strategic selection from our exclusive partner universities based on ranking, program strength, location, cost, and placement opportunities.",
      activities: [
        "Partner university ranking analysis",
        "Program curriculum comparison",
        "Location & campus evaluation",
        "Direct admission pathway mapping",
      ],
      icon: "Target",
    },
    {
      step: 3,
      title: "Application Preparation & Documentation",
      description:
        "Crafting compelling application packages specifically tailored for our partner universities' requirements and preferences.",
      activities: [
        "University-specific SOP writing",
        "LOR coordination with professors",
        "Partner university format compliance",
        "Portfolio development as required",
      ],
      icon: "FileEdit",
    },
    {
      step: 4,
      title: "Direct Application Submission",
      description:
        "Meticulous application submission through our direct partner university portals with priority processing.",
      activities: [
        "Direct university portal access",
        "Priority application processing",
        "Document submission tracking",
        "Application fee waiver assistance",
      ],
      icon: "Send",
    },
    {
      step: 5,
      title: "Interview Preparation & Direct Connect",
      description:
        "Intensive interview preparation including direct mock sessions with alumni from partner universities.",
      activities: [
        "University-specific mock interviews",
        "Alumni interaction sessions",
        "Campus culture orientation",
        "Interview strategy development",
      ],
      icon: "Users",
    },
    {
      step: 6,
      title: "Offer Evaluation & Enrollment",
      description:
        "Expert guidance on comparing multiple offers from partner universities with special consideration for scholarship opportunities.",
      activities: [
        "Partner university offer comparison",
        "Exclusive scholarship negotiation",
        "Enrollment deadline management",
        "Pre-departure university briefing",
      ],
      icon: "Award",
    },
  ];

  const partnerUniversities = [
    {
      country: "Australia",
      universities: [
        "NAPS",
        "TAFE NSW",
        "RMIT",
        "University of Tasmania",
        "Western Sydney University",
        "Kaplan Business School",
      ],
      programs: ["Vocational", "Business", "Engineering", "IT", "Healthcare"],
      ranking: "Group of TAFE & Universities",
      color: "from-green-500 via-yellow-400 to-red-500",
    },
    {
      country: "USA",
      universities: [
        "Arizona State University",
        "DePaul University",
        "Monroe University",
        "Texas Wesleyan University",
        "Plymouth State University",
        "Webster University",
      ],
      programs: [
        "Computer Science",
        "Business",
        "Engineering",
        "Liberal Arts",
        "Education",
      ],
      ranking: "Top 200-500 US Rankings",
      color: "from-blue-500 via-white to-red-500",
    },
    {
      country: "UK",
      universities: [
        "Coventry University",
        "University of Huddersfield",
        "Hult International College",
        "University of East London",
        "University of West London",
        "University of Westminster",
      ],
      programs: ["Business", "Law", "Engineering", "Arts", "Media"],
      ranking: "Russell Group & Modern Universities",
      color: "from-blue-600 via-white to-red-600",
    },
    {
      country: "New Zealand",
      universities: [
        "University of Waikato",
        "Ara Institute of Canterbury",
        "Auckland Institute of Studies",
        "Wellington Institute of Technology",
      ],
      programs: ["Technology", "Business", "Healthcare", "Applied Sciences"],
      ranking: "NZQA Category 1 Institutions",
      color: "from-blue-700 via-red-600 to-white",
    },
    {
      country: "Europe",
      universities: [
        "SRH Berlin",
        "University of Milan",
        "UCAM Spain",
        "LUT Finland",
        "Trinity College Dublin",
      ],
      programs: ["Engineering", "Business", "Design", "Technology", "Research"],
      ranking: "EU Accredited Institutions",
      color: "from-blue-900 via-yellow-400 to-red-500",
    },
  ];

  const universityServices = [
    {
      category: "Direct Admission Services",
      services: [
        {
          name: "Partner University Access",
          description:
            "Direct admission pathways to exclusive partner universities",
        },
        {
          name: "Application Fee Waivers",
          description: "Special fee waivers available for partner institutions",
        },
        {
          name: "Priority Processing",
          description: "Faster application review through direct partnerships",
        },
        {
          name: "Dedicated University Liaison",
          description: "Direct contact with university admissions teams",
        },
      ],
      icon: "GraduationCap",
    },
    {
      category: "Financial Benefits",
      services: [
        {
          name: "Exclusive Scholarships",
          description: "Special scholarships only for our students",
        },
        {
          name: "Tuition Discounts",
          description: "Reduced tuition fees at partner universities",
        },
        {
          name: "Education Loan Support",
          description: "Pre-approved loans for partner institutions",
        },
        {
          name: "Payment Plan Assistance",
          description: "Flexible payment options with universities",
        },
      ],
      icon: "CreditCard",
    },
    {
      category: "Post-Admission Support",
      services: [
        {
          name: "Visa Documentation",
          description: "University-specific visa support letters",
        },
        {
          name: "Accommodation Guarantee",
          description: "Priority campus housing at partner universities",
        },
        {
          name: "Airport Pickup Service",
          description: "Organized by partner universities",
        },
        {
          name: "On-campus Orientation",
          description: "Special orientation programs for our students",
        },
      ],
      icon: "Plane",
    },
  ];

  const stats = [
    {
      value: "50+",
      label: "Partner Universities",
      description: "Direct partnerships with listed institutions",
    },
    {
      value: "98%",
      label: "Admission Success",
      description: "Across our partner universities",
    },
    {
      value: "70%",
      label: "Receive Scholarships",
      description: "Special scholarships for our students",
    },
    {
      value: "30 Days",
      label: "Average Processing",
      description: "Faster through direct partnerships",
    },
  ];

  const countrySpecificInfo = [
    {
      country: "Australia",
      focus: ["TAFE pathways", "Post-study work rights", "Regional benefits"],
      timeline: "4-6 Weeks",
      cost: "AUD$20K-$35K/year",
      advantage: "Direct TAFE & University pathways",
    },
    {
      country: "USA",
      focus: [
        "STEM OPT extensions",
        "CPT opportunities",
        "Dual degree options",
      ],
      timeline: "6-8 Weeks",
      cost: "$25K-$45K/year",
      advantage: "Optional Practical Training eligible",
    },
    {
      country: "UK",
      focus: [
        "Post-study work visa",
        "Short duration Masters",
        "London campuses",
      ],
      timeline: "3-5 Weeks",
      cost: "£15K-£25K/year",
      advantage: "2-year Graduate Route visa",
    },
    {
      country: "New Zealand",
      focus: ["Work while study", "Post-study work visa", "Permanent residency pathways"],
      timeline: "4-6 Weeks",
      cost: "NZ$20K-$30K/year",
      advantage: "Open work permit for partners",
    },
  ];

  const completeUniversityList = [
    {
      country: "Australia",
      universities: [
        "NAPS",
        "TAFE NSW",
        "RMIT",
        "University of Tasmania",
        "Western Sydney University",
        "Kaplan Business School",
      ],
      code: 'AU'
    },
    {
      country: "USA",
      universities: [
        "Arizona State University",
        "DePaul University",
        "Monroe University",
        "Texas Wesleyan University",
        "Plymouth State University",
        "Webster University",
      ],
      code: 'US'
    },
    {
      country: "UK",
      universities: [
        "Coventry University",
        "University of Huddersfield",
        "Hult International College",
        "University of East London",
        "University of West London",
        "University of Westminster",
      ],
      code: 'GB'
    },
    {
      country: "New Zealand",
      universities: [
        "University of Waikato",
        "Ara Institute of Canterbury",
        "Auckland Institute of Studies",
        "Wellington Institute of Technology",
      ],
      code: 'NZ'
    },
    {
      country: "Germany",
      universities: [
        "BSBI",
        "GISMA",
        "SRH Berlin University of Applied Science",
      ],
      code: 'DE'
    },
    {
      country: "Italy",
      universities: [
        "University of Palermo",
        "University of Parma",
        "University of Turin",
        "University of Milan",
      ],
      code: 'IT'
    },
    {
      country: "Spain",
      universities: [
        "Toulouse Business School",
        "Universidad Europea",
        "UCAM",
        "SBS Swiss Business School",
      ],
      code: 'ES'
    },
    {
      country: "Finland",
      universities: [
        "LUT University",
        "University of Eastern Finland",
        "Aalto University",
        "Tampere University",
      ],
      code: 'FI'
    },
    {
      country: "Ireland",
      universities: [
        "Dublin Business School",
        "IBAT College",
        "Atlantic Technological University",
        "Trinity College Dublin",
      ],
      code: 'IE'
    },
    {
      country: "Malta",
      universities: [
        "Malta International College",
        "Avanza Training College",
        "La Valletta Institute",
        "Learn Key Institute",
      ],
      code: 'MT'
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-gradient-to-b from-white to-gray-50 mt-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-red-50 py-12 md:py-20 px-4 sm:px-6">
        <div className="absolute inset-0 opacity-5 overflow-hidden">
          <div
            className="absolute inset-0 w-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
              backgroundSize: "100px 100px",
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <AnimatedSection animation="fade-up" delay={0.1}>
            <div className="text-center mb-12 md:mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-red-100 text-blue-700 font-medium mb-6">
                Exclusive University Partnerships
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 px-2">
                <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-red-700 bg-clip-text text-transparent">
                  Direct University Placement
                </span>
                <span className="block text-gray-800 mt-2 text-xl sm:text-2xl md:text-3xl">
                  With 50+ Partner Institutions
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
                Exclusive admission pathways to our partner universities across
                Australia, USA, UK, New Zealand, and Europe with special
                benefits and faster processing.
              </p>
            </div>
          </AnimatedSection>

          {/* Quick Stats */}
          <PlacementStats stats={stats} />
        </div>
      </section>

      {/* Partner Universities Grid */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection animation="fade-up" delay={0.1}>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-red-700 bg-clip-text text-transparent">
                Our Exclusive University Partners
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Direct partnerships with universities offering special admission
                pathways and benefits for our students
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {partnerUniversities.slice(0, 3).map((country, index) => (
              <UniversityPartnerCard
                key={country.country}
                {...country}
                index={index}
              />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {partnerUniversities.slice(3).map((country, index) => (
              <UniversityPartnerCard
                key={country.country}
                {...country}
                index={index + 3}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Placement Process */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection animation="fade-up" delay={0.1}>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-red-700 bg-clip-text text-transparent">
                Our 6-Step Direct Placement Process
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Streamlined process leveraging our direct university
                partnerships for faster admissions
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-8 md:space-y-12">
            {placementProcess.map((process, index) => (
              <ProcessCard
                key={process.step}
                step={process.step}
                title={process.title}
                description={process.description}
                activities={process.activities}
                icon={process.icon}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Country Specific Information */}
      <section className="py-12 md:py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
    <AnimatedSection animation="fade-up" delay={0.1}>
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-red-700 bg-clip-text text-transparent">
          Country-Specific Advantages
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Special benefits and pathways available through our partner universities
        </p>
      </div>
    </AnimatedSection>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {countrySpecificInfo.map((country, index) => {
        // Determine if cost text needs special handling
        const isLongCost = country.cost.length > 15;
        
        return (
          <AnimatedSection key={country.country} animation="zoom-in" delay={index * 0.1}>
            <div className="group relative">
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full">
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {country.country}
                </h3>
                
                <div className="space-y-3 md:space-y-4">
                  {/* Key Focus Areas - Improved wrapping */}
                  <div>
                    <div className="text-xs md:text-sm text-gray-500 mb-1 md:mb-2">Key Focus Areas</div>
                    <div className="flex flex-wrap gap-1">
                      {country.focus.map((item, i) => (
                        <span 
                          key={i} 
                          className="inline-block px-2 py-1 bg-gradient-to-r from-blue-50 to-red-50 text-blue-700 rounded text-[0.65rem] md:text-xs mb-1 hover:scale-105 transition-transform duration-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Processing & Cost - Smart responsive text */}
                  <div className="grid grid-cols-2 gap-2 md:gap-3">
                    <div>
                      <div className="text-xs md:text-sm text-gray-500 truncate">Processing</div>
                      <div className="font-semibold text-blue-600 text-sm md:text-base truncate">
                        {country.timeline}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs md:text-sm text-gray-500 truncate">Annual Cost</div>
                      <div className={`font-semibold text-green-600 ${isLongCost ? 'text-xs md:text-sm' : 'text-sm md:text-base'} truncate`}>
                        {country.cost}
                      </div>
                    </div>
                  </div>
                  
                  {/* Special Advantage - Responsive line clamping */}
                  <div className="pt-3 border-t border-gray-100">
                    <div className="text-xs md:text-sm text-gray-500">Special Advantage</div>
                    <div className="font-medium text-red-600 text-xs md:text-sm lg:text-base leading-tight line-clamp-2 min-h-[2.5rem] md:min-h-[3rem]">
                      {country.advantage}
                    </div>
                  </div>
                </div>
                
                {/* Floating tooltip for cost on hover */}
                <div className="absolute -top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="bg-gray-900 text-white text-xs px-3 py-2 rounded-lg shadow-lg whitespace-nowrap">
                    <div className="font-semibold">Annual Cost:</div>
                    <div>{country.cost}</div>
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                  </div>
                </div>
                
                {/* Hover Indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-red-600 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </div>
          </AnimatedSection>
        );
      })}
    </div>
  </div>
</section>
      {/* Complete University List */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection animation="fade-up" delay={0.1}>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-red-700 bg-clip-text text-transparent">
                Complete Partner University List
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                All our exclusive partner institutions across 10 countries
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={0.2}>
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 overflow-x-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 min-w-max md:min-w-0">
                {completeUniversityList.map((country, index) => (
                  <div key={country.country} className="min-w-[250px]">
                    <AnimatedSection
                      animation="slide-right"
                      delay={index * 0.05}
                    >
                      <div className="flex items-center gap-2 mb-4">
                        {/* <div className="w-3 h-6 rounded bg-gradient-to-r from-blue-500 to-red-500"></div> */}
                        <div className="w-6 h-6 overflow-hidden flex items-center justify-center">
                        <img
                          src={`https://flagcdn.com/w40/${country.code.toLowerCase()}.png`}
                          alt={country.country}
                          className="w-full h-full object-contain"
                        />
                      </div>
                        
                        <h3 className="text-lg font-bold text-gray-800">
                          {country.country}
                        </h3>
                        <span className="text-sm text-gray-500 ml-auto">
                          ({country.universities.length})
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {country.universities.map((uni, i) => (
                          <li key={i} className="flex items-center gap-2 group">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:scale-150 transition-transform duration-300"></div>
                            <span className="text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                              {uni}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </AnimatedSection>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Comprehensive Services */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection animation="fade-up" delay={0.1}>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-red-700 bg-clip-text text-transparent">
                Exclusive Partner Benefits
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Special advantages only available through our direct university
                partnerships
              </p>
            </div>
          </AnimatedSection>

          <ServicesComparison services={universityServices} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection animation="zoom-in" delay={0.1}>
            <div className="bg-gradient-to-r from-blue-600 to-red-700 rounded-3xl p-8 md:p-12 text-center text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Access Exclusive University Partnerships
              </h3>
              <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Get direct admission pathways, special scholarships, and faster
                processing through our 50+ partner universities
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-6 md:px-8 py-3 md:py-4 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  Contact Us Now
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
