// app/japan-specialized-skilled-worker/page.tsx
import VisaCard from "@/components/ssw/VisaCard";
import SectorCard from "@/components/ssw/SectorCard";
import ProcessStepSsw from "@/components/ssw/ProcessStepSsw";
import RequirementItem from "@/components/ssw/RequirementItem";
import SalaryComparison from "@/components/ssw/SalaryComparision";
import AnimatedSection from "@/components/universityPlacement/AnimatedSection";
import Link from "next/link";
import RevealTest from "@/components/RevealTest";

export const dynamic = "force-static";

export default function JapanSpecializedSkilledWorker() {
  const visaTypes = [
    {
      type: "Specified Skilled Worker (i)",
      code: "SSW 1号",
      duration: "Up to 5 years",
      renewal: "Cannot renew, must upgrade",
      eligibility: "Requires passing skills and language tests",
      target: "Basic to intermediate skilled workers"
    },
    {
      type: "Specified Skilled Worker (ii)",
      code: "SSW 2号",
      duration: "Indefinite renewal possible",
      renewal: "Unlimited renewals",
      eligibility: "Requires SSW 1号 experience + advanced skills",
      target: "Highly skilled professionals"
    }
  ];

  const popularSectors = [
    {
      sector: "Nursing Care",
      demand: "Extremely High",
      vacancies: "60,000+ positions",
      salary: "¥200,000 - ¥280,000/month",
      requirements: ["Care worker certification", "Japanese N4 level", "Physical fitness"],
      growth: "+25% annually"
    },
    {
      sector: "Construction",
      demand: "Very High",
      vacancies: "40,000+ positions",
      salary: "¥220,000 - ¥320,000/month",
      requirements: ["Construction experience", "Safety certifications", "Basic Japanese"],
      growth: "+18% annually"
    },
    {
      sector: "Agriculture",
      demand: "High",
      vacancies: "30,000+ positions",
      salary: "¥180,000 - ¥250,000/month",
      requirements: ["Farming experience", "Physical stamina", "Seasonal adaptability"],
      growth: "+15% annually"
    },
    {
      sector: "Manufacturing",
      demand: "High",
      vacancies: "35,000+ positions",
      salary: "¥200,000 - ¥300,000/month",
      requirements: ["Technical skills", "Quality control knowledge", "Teamwork ability"],
      growth: "+12% annually"
    },
    {
      sector: "Food Service",
      demand: "Moderate-High",
      vacancies: "25,000+ positions",
      salary: "¥190,000 - ¥260,000/month",
      requirements: ["Food safety knowledge", "Customer service", "Japanese N5"],
      growth: "+10% annually"
    },
    {
      sector: "Shipbuilding",
      demand: "High",
      vacancies: "15,000+ positions",
      salary: "¥250,000 - ¥350,000/month",
      requirements: ["Technical certifications", "Safety training", "Physical ability"],
      growth: "+20% annually"
    }
  ];

  const applicationProcess = [
    {
      step: 1,
      title: "Skills Assessment",
      description: "Pass the relevant skills test for your target sector",
      duration: "1-3 months",
      requirements: ["Sector-specific knowledge", "Practical skills demonstration"]
    },
    {
      step: 2,
      title: "Japanese Language Test",
      description: "Achieve required Japanese proficiency level (N4/N5)",
      duration: "2-4 months",
      requirements: ["JLPT N4 for care work", "N5 for other sectors", "Conversational ability"]
    },
    {
      step: 3,
      title: "Job Placement",
      description: "Secure employment with approved Japanese employer",
      duration: "1-2 months",
      requirements: ["Valid job offer", "Employer registration", "Contract signing"]
    },
    {
      step: 4,
      title: "Visa Application",
      description: "Submit complete application to Japanese embassy",
      duration: "1-2 months",
      requirements: ["All documents", "Medical examination", "Background check"]
    },
    {
      step: 5,
      title: "Pre-departure Training",
      description: "Complete orientation and cultural training",
      duration: "2-4 weeks",
      requirements: ["Cultural orientation", "Legal briefing", "Practical preparation"]
    },
    {
      step: 6,
      title: "Arrival & Registration",
      description: "Complete entry procedures and local registration",
      duration: "1-2 weeks",
      requirements: ["Residence card", "Health insurance", "Bank account setup"]
    }
  ];

  const requirements = [
    {
      category: "Basic Requirements",
      items: [
        "Age 18 years or older",
        "Good physical and mental health",
        "No criminal record",
        "Willingness to work in specified sectors"
      ]
    },
    {
      category: "Document Requirements",
      items: [
        "Valid passport",
        "Skills test certificate",
        "Japanese language certificate",
        "Employment contract",
        "Educational certificates",
        "Experience certificates"
      ]
    },
    {
      category: "Financial Requirements",
      items: [
        "Proof of financial stability",
        "Initial settlement funds (¥200,000 recommended)",
        "Travel expenses coverage",
        "Health insurance arrangement"
      ]
    },
    {
      category: "Additional Requirements",
      items: [
        "Medical examination report",
        "Background verification",
        "Sponsorship confirmation",
        "Residential arrangement proof"
      ]
    }
  ];

  const salaryData = [
    {
      sector: "Nursing Care",
      entryLevel: "¥200,000",
      experienced: "¥280,000",
      senior: "¥350,000+",
      benefits: ["Housing allowance", "Transportation", "Health insurance", "Bonus"]
    },
    {
      sector: "Construction",
      entryLevel: "¥220,000",
      experienced: "¥320,000",
      senior: "¥400,000+",
      benefits: ["Overtime pay", "Skill allowance", "Safety bonus", "Accommodation"]
    },
    {
      sector: "Manufacturing",
      entryLevel: "¥200,000",
      experienced: "¥300,000",
      senior: "¥380,000+",
      benefits: ["Shift allowance", "Performance bonus", "Transportation", "Housing support"]
    },
    {
      sector: "Agriculture",
      entryLevel: "¥180,000",
      experienced: "¥250,000",
      senior: "¥300,000+",
      benefits: ["Housing provided", "Meal allowance", "Seasonal bonus", "Product share"]
    }
  ];

  const keyStatistics = [
    { stat: "Target Workers", value: "345,000", description: "By 2025" },
    { stat: "Current Workers", value: "180,000+", description: "As of 2024" },
    { stat: "Approval Rate", value: "85%", description: "For qualified applicants" },
    { stat: "Processing Time", value: "3-6 months", description: "From application" }
  ];

  const benefits = [
    {
      title: "Pathway to Permanent Residency",
      description: "SSW 2号 visa holders can apply for permanent residency after 5 years",
      icon: "Home"
    },
    {
      title: "Family Sponsorship",
      description: "SSW 2号 visa allows bringing spouse and children to Japan",
      icon: "Users"
    },
    {
      title: "Social Security Benefits",
      description: "Access to Japanese healthcare, pension, and unemployment insurance",
      icon: "Shield"
    },
    {
      title: "Career Advancement",
      description: "Opportunities for skills upgrading and professional development",
      icon: "TrendingUp"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-red-50/30 overflow-hidden mt-24">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-red-50 to-blue-50"></div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-red-100/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-blue-100/20 to-transparent"></div>
          
          {/* Japanese Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
              backgroundSize: '100px 100px'
            }}></div>
          </div>
        </div>

        {/* Japanese Flag Colors */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-red-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <AnimatedSection animation="fade-down" delay={0.2}>
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white shadow-lg border border-gray-100 mb-8">
                <div className="flex gap-1">
                  <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                  <div className="w-3 h-3 bg-white border border-gray-300 rounded-full"></div>
                </div>
                <span className="text-lg font-semibold bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
                  Japan Immigration Program
                </span>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={0.3}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-red-600 via-red-500 to-blue-950 bg-clip-text text-transparent">
                  Specialized Skilled Worker
                </span>
                <span className="block text-gray-800 mt-2 text-3xl sm:text-4xl">
                  Visa Program for Japan
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={0.4}>
              <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                Japan's solution to labor shortages in 14 specified sectors. Work legally in Japan 
                with opportunities for career growth and permanent residency. 
                <span className="block mt-4 font-semibold text-red-600">
                  特定技能 (Tokutei Ginou) - Japan's Official Skilled Worker Program
                </span>
              </p>
            </AnimatedSection>

            {/* Key Statistics */}
            <AnimatedSection animation="fade-up" delay={0.5}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
                {keyStatistics.map((item, index) => (
                  <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="text-3xl font-bold text-gray-900 mb-2">{item.value}</div>
                    <div className="text-gray-700 font-semibold mb-1">{item.stat}</div>
                    <div className="text-sm text-gray-500">{item.description}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* <AnimatedSection animation="zoom-in" delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-blue-600 rounded-xl font-semibold text-white overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative">Check Your Eligibility</span>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>
                <button className="px-8 py-4 bg-white border-2 border-red-500 text-red-600 rounded-xl font-semibold hover:bg-red-50 transition-all duration-300 shadow-md hover:shadow-lg">
                  Download Visa Guide
                </button>
              </div>
            </AnimatedSection> */}
          </div>
        </div>
      </section>

      {/* Visa Types */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <RevealTest animateImmediately delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-red-600 via-red-500 to-blue-950 bg-clip-text text-transparent">
                  Two Types of SSW Visa
                </span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Choose between basic or advanced skilled worker categories based on your experience
              </p>
            </div>
          </RevealTest>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {visaTypes.map((visa, index) => (
              <VisaCard key={index} {...visa} index={index} isPopular={index === 1} />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Sectors */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection animation="fade-up" delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-red-600 via-red-500 to-blue-950 bg-clip-text text-transparent">
                  14 Specified Sectors
                </span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                High-demand sectors eligible for Specialized Skilled Worker visa
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularSectors.map((sector, index) => (
              <SectorCard key={index} {...sector} index={index} />
            ))}
          </div>

          {/* Additional Sectors */}
          <AnimatedSection animation="fade-up" delay={0.3}>
            <div className="mt-12 bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Other Eligible Sectors</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                {[
                  "Hotel Industry", "Building Cleaning", 
                  "Industrial Machinery", "Electric/Electronics", 
                  "Automobile Repair", "Aviation", "Fishery & Aquaculture"
                ].map((sector, index) => (
                  <div key={index} className="text-center p-3 bg-gray-50 rounded-lg border border-gray-100 hover:border-red-200 transition-colors">
                    <div className="text-sm text-gray-700">{sector}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection animation="fade-up" delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-red-600 via-red-500 to-blue-950 bg-clip-text text-transparent">
                  6-Step Application Process
                </span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Complete guide from skills assessment to arrival in Japan
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applicationProcess.map((step, index) => (
              <ProcessStepSsw key={index} {...step} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Requirements & Benefits */}
      <section className="py-20 bg-gradient-to-b from-red-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Requirements */}
            <div>
              <AnimatedSection animation="fade-right" delay={0.1}>
                <div className="mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-red-600 via-red-500 to-blue-950 bg-clip-text text-transparent">
                      Requirements
                    </span>
                  </h2>
                  <p className="text-gray-600">
                    Essential criteria and documents needed for successful application
                  </p>
                </div>
              </AnimatedSection>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {requirements.map((req, index) => (
                  <RequirementItem key={index} {...req} index={index} />
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div>
              <AnimatedSection animation="fade-left" delay={0.1}>
                <div className="mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-red-600 via-red-500 to-blue-950 bg-clip-text text-transparent">
                      Key Benefits
                    </span>
                  </h2>
                  <p className="text-gray-600">
                    Advantages of working in Japan under the SSW program
                  </p>
                </div>
              </AnimatedSection>

              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-white rounded-2xl border border-gray-200 p-6 hover:border-red-300 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-red-50 to-blue-50 border border-red-100 flex items-center justify-center flex-shrink-0">
                        {/* Icon would go here */}
                        <div className="w-6 h-6 bg-gradient-to-r from-red-600 to-blue-600 rounded-full"></div>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Salary Comparison */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection animation="fade-up" delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-red-600 via-red-500 to-blue-950 bg-clip-text text-transparent">
                  Salary Expectations
                </span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Average monthly salaries in popular sectors (¥ = Japanese Yen)
              </p>
            </div>
          </AnimatedSection>

          <SalaryComparison data={salaryData} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <AnimatedSection animation="zoom-in" delay={0.1}>
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-red-600 to-blue-600 p-1">
              <div className="bg-white rounded-3xl p-8 md:p-12 text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Start Your Japan Career Journey
                </h3>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                  Join thousands of skilled workers who have successfully migrated to Japan under the SSW program
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-red-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                    Apply Now
                  </Link>
                  {/* <button className="px-8 py-4 bg-white border-2 border-red-500 text-red-600 font-semibold rounded-xl hover:bg-red-50 transition-all duration-300">
                    Contact Immigration Expert
                  </button> */}
                </div>
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <p className="text-gray-500 text-sm">
                    Includes: Skills assessment • Japanese language training • Job placement • Visa processing • Pre-departure orientation
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}