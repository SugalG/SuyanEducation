// app/student-visa-lifecycle/page.tsx
import StepCardClient from "@/components/StepCardClient";
import TimelineConnector from "@/components/TimelineConnector";
import StatsSection from "@/components/StatsSection";
import Link from "next/link";

export const dynamic = "force-static";

export default function StudentVisaLifecycle() {
  const steps = [
    {
      title: "Eligibility Assessment",
      icon: "CheckCircle",
      description: "Comprehensive evaluation of your academic profile, financial capability, language proficiency, and career objectives to identify optimal study destinations and visa pathways.",
      features: ["Academic transcript review", "Financial assessment", "Language proficiency check", "Career goal alignment"]
    },
    {
      title: "Career & Country Strategy",
      icon: "Globe",
      description: "Personalized guidance on selecting countries that match your career aspirations, considering job markets, immigration policies, and lifestyle preferences.",
      features: ["Country comparison", "Job market analysis", "Immigration pathways", "Cultural fit assessment"]
    },
    {
      title: "University & Program Selection",
      icon: "School",
      description: "Strategic shortlisting of universities based on rankings, scholarships, program relevance, and post-study work opportunities tailored to your profile.",
      features: ["University rankings", "Scholarship availability", "Program alignment", "Success probability"]
    },
    {
      title: "Application Documentation",
      icon: "FileText",
      description: "End-to-end support for crafting compelling SOPs, securing impactful LORs, and preparing flawless application packages with multiple quality checks.",
      features: ["SOP drafting", "LOR acquisition", "Transcript preparation", "Application review"]
    },
    {
      title: "Offer Evaluation & Acceptance",
      icon: "ClipboardCheck",
      description: "Expert guidance on comparing multiple offers, negotiating scholarships, and completing enrollment formalities with strategic decision-making.",
      features: ["Offer comparison", "Scholarship negotiation", "Deadline management", "Fee payment guidance"]
    },
    {
      title: "Financial Planning",
      icon: "CreditCard",
      description: "Comprehensive assistance with education loans, financial documentation, sponsorship arrangements, and proof of funds preparation.",
      features: ["Loan assistance", "Bank documentation", "Sponsorship letters", "Financial planning"]
    },
    {
      title: "Visa Application Process",
      icon: "BookOpen",
      description: "Meticulous handling of visa applications, biometric appointments, and document submission with 100% compliance to embassy requirements.",
      features: ["Visa form filling", "Biometric scheduling", "Document upload", "Compliance check"]
    },
    {
      title: "Interview Preparation",
      icon: "Users",
      description: "Intensive mock interview sessions, personalized coaching, and strategic preparation to ensure confidence during visa interviews.",
      features: ["Mock interviews", "Q&A preparation", "Body language coaching", "Document rehearsal"]
    },
    {
      title: "Pre-Departure Transition",
      icon: "Plane",
      description: "Complete pre-departure briefing covering accommodation, travel, insurance, cultural adaptation, and initial settlement support.",
      features: ["Accommodation assistance", "Travel planning", "Insurance guidance", "Cultural orientation"]
    }
  ];

  const stats = [
    { value: "98%", label: "Visa Success Rate" },
    { value: "500+", label: "Universities Partners" },
    { value: "24/7", label: "Support Available" },
    { value: "50+", label: "Countries Covered" }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white mt-24 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-50 via-white to-blue-50 py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-16 px-4">
            <span className="inline-block px-4 py-2 rounded-full bg-red-100 text-red-700 font-medium mb-6">
              Structured Success Pathway
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-600 via-red-500 to-blue-950 bg-clip-text text-transparent pb-4">
              Student Visa <span className="block">Counseling Journey</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              A meticulously designed, step-by-step process transforming your study abroad aspirations into reality with transparency, precision, and expert guidance at every stage.
            </p>
          </div>

          {/* Stats Section */}
          <div className="px-4">
            <StatsSection stats={stats} />
          </div>
        </div>
      </section>

      {/* Timeline Process Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 overflow-x-hidden">
        <div className="text-center mb-12 sm:mb-16 px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
            Our 9-Step Excellence Framework
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Each phase is carefully crafted to ensure maximum success probability and minimum stress
          </p>
        </div>

        <div className="relative w-full">
          {/* Vertical Timeline Line */}
          <TimelineConnector />

          {/* Steps Container */}
          <div className="space-y-16 sm:space-y-24 w-full">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative md:flex items-center gap-8 md:gap-12 w-full ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Step Card */}
                  <div className={`md:w-1/2 w-full ${isLeft ? "md:pr-6 lg:pr-12" : "md:pl-6 lg:pl-12"}`}>
                    <StepCardClient
                      stepNumber={index + 1}
                      icon={step.icon}
                      title={step.title}
                      description={step.description}
                      features={step.features}
                      delay={index * 0.1}
                      isLeft={isLeft}
                    />
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 items-center justify-center">
                    <div className="relative">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-red-500 to-blue-700 shadow-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                      </div>
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500 to-blue-700 animate-ping opacity-20"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 sm:mt-32 text-center bg-gradient-to-r from-red-50 to-blue-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 mx-4 sm:mx-0">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
            Ready to Begin Your Journey?
          </h3>
          <p className="text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
            Join thousands of successful students who transformed their dreams into reality with our structured counseling process.
          </p>
          <Link className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-red-600 to-blue-900 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-sm sm:text-base" href="/contact">
            Join Us Today
          </Link>
        </div>
      </section>
    </main>
  );
}