// app/pre-departure-guidance/page.tsx
import ServiceCard from "@/components/pre-departure/ServiceCardDeparture";
import ChecklistItem from "@/components/pre-departure/ChecklistItem";
import TimelinePhase from "@/components/pre-departure/TimelinePhase";
import CountryInfo from "@/components/pre-departure/CountryInfo";
import SupportFeature from "@/components/pre-departure/SupportFeature";
import AnimatedSection from "@/components/universityPlacement/AnimatedSection";
import Link from "next/link";

export const dynamic = "force-static";

export default function PreDepartureGuidance() {
  const coreServices = [
    {
      title: "Travel Arrangements",
      description: "Comprehensive travel planning including flight bookings, airport transfers, and travel documentation assistance.",
      icon: "Plane",
      features: ["Flight booking assistance", "Airport pickup coordination", "Travel insurance guidance", "Itinerary planning"],
      color: "blue"
    },
    {
      title: "Accommodation Support",
      description: "Assistance with finding and securing suitable accommodation near your university campus.",
      icon: "Home",
      features: ["On-campus housing", "Off-campus options", "Rental agreements", "Local area orientation"],
      color: "green"
    },
    {
      title: "Cultural Orientation",
      description: "Prepare for cultural adaptation with country-specific information and social integration guidance.",
      icon: "Globe",
      features: ["Cultural norms training", "Local customs overview", "Social integration tips", "Language basics"],
      color: "purple"
    },
    {
      title: "Emergency Support",
      description: "24/7 emergency assistance and ongoing support system for your entire study abroad journey.",
      icon: "Phone",
      features: ["24/7 helpline", "Emergency contacts", "Medical assistance", "Crisis management"],
      color: "red"
    }
  ];

  const preDepartureChecklist = [
    {
      category: "Travel Documents",
      items: [
        "Valid passport with student visa",
        "University admission letter",
        "Flight tickets and itinerary",
        "Travel insurance documents",
        "Accommodation confirmation"
      ]
    },
    {
      category: "Financial Preparation",
      items: [
        "Foreign currency exchange",
        "International bank account setup",
        "Credit/debit cards activation",
        "Budget planning spreadsheet",
        "Emergency fund allocation"
      ]
    },
    {
      category: "Academic Essentials",
      items: [
        "Academic transcripts (certified copies)",
        "Degree certificates (attested)",
        "Laptop and necessary software",
        "Course-specific materials",
        "Reference books and resources"
      ]
    },
    {
      category: "Personal Essentials",
      items: [
        "Medical prescriptions and records",
        "Climate-appropriate clothing",
        "Essential electronics (adapters)",
        "Important contact numbers",
        "Digital copies of all documents"
      ]
    }
  ];

  const timelinePhases = [
    {
      phase: "3-4 Months Before",
      title: "Initial Planning Phase",
      tasks: [
        "Accommodation research begins",
        "Flight booking window opens",
        "Financial planning finalized",
        "Visa application submission"
      ]
    },
    {
      phase: "1-2 Months Before",
      title: "Preparation Phase",
      tasks: [
        "Travel insurance purchase",
        "Foreign currency exchange",
        "Bank account setup initiation",
        "Accommodation finalization"
      ]
    },
    {
      phase: "2-4 Weeks Before",
      title: "Final Arrangements",
      tasks: [
        "Flight tickets confirmation",
        "Airport pickup arrangement",
        "Emergency contact setup",
        "Cultural orientation sessions"
      ]
    },
    {
      phase: "Week Before Departure",
      title: "Last-Minute Preparation",
      tasks: [
        "Final document verification",
        "Packing completion",
        "Local SIM card arrangement",
        "Pre-departure briefing"
      ]
    }
  ];

  const countrySupport = [
    {
      country: "USA",
      focus: ["Campus safety orientation", "Healthcare system guide", "Social security setup", "Transportation systems"],
      emergency: "24/7 student helpline",
      cultural: "American campus culture"
    },
    {
      country: "UK",
      focus: ["NHS registration", "Bank account setup", "Public transport card", "Student discounts"],
      emergency: "University wardens",
      cultural: "British etiquette guide"
    },
    {
      country: "Canada",
      focus: ["SIN application", "Health card registration", "Winter preparation", "Public transit"],
      emergency: "Campus security",
      cultural: "Canadian multiculturalism"
    },
    {
      country: "Australia",
      focus: ["TFN application", "OSHC activation", "Sun safety guide", "Local wildlife awareness"],
      emergency: "000 emergency services",
      cultural: "Aussie slang and culture"
    }
  ];

  const supportFeatures = [
    {
      title: "Airport Pickup Service",
      description: "Guaranteed airport pickup by verified drivers with university signage",
      icon: "MapPin",
      benefit: "Stress-free arrival experience"
    },
    {
      title: "SIM Card & Connectivity",
      description: "Pre-activated local SIM cards delivered before departure or at airport",
      icon: "Smartphone",
      benefit: "Instant connectivity upon arrival"
    },
    {
      title: "Banking Assistance",
      description: "Pre-arranged bank appointments and documentation assistance",
      icon: "CreditCard",
      benefit: "Quick financial setup"
    },
    {
      title: "Orientation Sessions",
      description: "Comprehensive orientation covering academics, social life, and city navigation",
      icon: "Users",
      benefit: "Smooth cultural transition"
    },
    {
      title: "Accommodation Inspection",
      description: "Virtual or physical accommodation inspection before finalizing",
      icon: "Search",
      benefit: "Verified living conditions"
    },
    {
      title: "Emergency Wallet Card",
      description: "Pocket-sized emergency contact card with essential numbers",
      icon: "Shield",
      benefit: "24/7 safety assurance"
    }
  ];

  const stats = [
    { value: "200+", label: "Students Assisted", description: "Successfully settled abroad" },
    { value: "48hrs", label: "Average Setup Time", description: "For accommodation & banking" },
    { value: "24/7", label: "Support Availability", description: "Round-the-clock assistance" },
    { value: "98%", label: "Student Satisfaction", description: "Based on post-arrival surveys" }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50/30 overflow-hidden mt-24">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white/50 to-green-50/50"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.1'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '80px 80px'
            }}></div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <AnimatedSection animation="fade-down" delay={0.2}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-green-100 border border-blue-200 mb-8">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-blue-700 text-sm font-medium">Comprehensive Pre-Departure Support</span>
              </span>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={0.3}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-green-600 bg-clip-text text-transparent">
                  Pre-Departure
                </span>
                <span className="block text-gray-800 mt-2">Guidance & Support</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={0.4}>
              <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                Complete support system for your study abroad journey - from travel arrangements to cultural orientation and emergency assistance.
              </p>
            </AnimatedSection>

            {/* <AnimatedSection animation="zoom-in" delay={0.5}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 rounded-xl font-semibold text-white overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative">Get Pre-Departure Checklist</span>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>
                <button className="px-8 py-4 bg-white border-2 border-blue-500 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 shadow-md hover:shadow-lg">
                  Schedule Orientation Session
                </button>
              </div>
            </AnimatedSection> */}
          </div>

          {/* Stats Bar */}
          <AnimatedSection animation="fade-up" delay={0.6}>
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-sm text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-700 font-semibold mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-500">{stat.description}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection animation="fade-up" delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Comprehensive Pre-Departure Services
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Everything you need for a smooth transition to your study abroad destination
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreServices.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Pre-Departure Checklist */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection animation="fade-up" delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  Essential Pre-Departure Checklist
                </span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Organized checklist to ensure you don't miss anything before departure
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {preDepartureChecklist.map((category, index) => (
              <ChecklistItem key={index} {...category} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AnimatedSection animation="fade-up" delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Pre-Departure Timeline
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Step-by-step guide for your preparation journey
              </p>
            </div>
          </AnimatedSection>

          <div className="relative">
            {/* Timeline Line - Mobile visible, desktop hidden */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 md:-translate-x-1/2"></div>
            
            <div className="space-y-12 md:space-y-0">
              {timelinePhases.map((phase, index) => (
                <TimelinePhase 
                  key={index} 
                  {...phase} 
                  index={index}
                  alignment={index % 2 === 0 ? "left" : "right"}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Country-Specific Support */}
      <section className="py-20 bg-gradient-to-b from-blue-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection animation="fade-up" delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Country-Specific Support
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Tailored guidance based on your study destination
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {countrySupport.map((country, index) => (
              <CountryInfo key={index} {...country} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Support Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection animation="fade-up" delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Additional Support Features
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Extra services that make your transition smoother
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportFeatures.map((feature, index) => (
              <SupportFeature key={index} {...feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <AnimatedSection animation="zoom-in" delay={0.1}>
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-600 to-green-600 p-1">
              <div className="bg-white rounded-3xl p-8 md:p-12 text-center">
                <div className="mb-8">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Ready for Your Study Abroad Journey?
                  </h3>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Get comprehensive pre-departure support and start your international education journey with confidence
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                    Contact Us Now
                  </Link>
                </div>
                
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <p className="text-gray-500 text-sm">
                    Includes: Travel arrangements • Accommodation support • Cultural orientation • Emergency assistance • 24/7 support
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