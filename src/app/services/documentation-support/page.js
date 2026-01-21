// app/documentation-support/page.tsx
import ServiceCard from "@/components/documentationSupport/ServiceCard";
import ProcessStep from "@/components/documentationSupport/ProcessStep";
import DocumentationTimeline from "@/components/documentationSupport/DocumentationTimeline";
import AnimatedSection from "@/components/universityPlacement/AnimatedSection";
import Link from "next/link";


export const dynamic = "force-static";

export default function DocumentationSupport() {
  const services = [
    {
      title: "Visa Documentation",
      description: "Complete assistance with all visa-related documents including financial proofs, sponsorship letters, and embassy requirements.",
      icon: "FileCheck",
      features: ["Financial Documentation", "Sponsorship Letters", "Embassy Requirements", "Document Verification"]
    },
    {
      title: "Academic Documents",
      description: "Professional preparation and verification of academic transcripts, diplomas, certificates, and mark sheets.",
      icon: "GraduationCap",
      features: ["Transcript Preparation", "Certificate Attestation", "WES Evaluation", "Document Notarization"]
    },
    {
      title: "Application Packages",
      description: "Comprehensive application document preparation including SOPs, LORs, resumes, and portfolios.",
      icon: "FolderArchive",
      features: ["SOP Writing", "LOR Drafting", "Resume Optimization", "Portfolio Development"]
    },
    {
      title: "Financial Proofs",
      description: "Expert guidance on preparing financial documents, bank statements, and education loan documentation.",
      icon: "CreditCard",
      features: ["Bank Statements", "Loan Documentation", "Affidavit of Support", "Income Proofs"]
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Document Assessment",
      description: "We review your existing documents and create a customized checklist for your specific requirements.",
      icon: "ClipboardList"
    },
    {
      step: 2,
      title: "Gap Analysis",
      description: "Identify missing documents and areas that need improvement to meet university and embassy standards.",
      icon: "Search"
    },
    {
      step: 3,
      title: "Document Preparation",
      description: "Professional drafting, formatting, and preparation of all required documents with multiple quality checks.",
      icon: "FilePen"
    },
    {
      step: 4,
      title: "Verification & Authentication",
      description: "All documents are verified, notarized, and authenticated as per the destination country's requirements.",
      icon: "ShieldCheck"
    },
    {
      step: 5,
      title: "Submission Support",
      description: "Assistance with document submission, tracking, and follow-up with universities and embassies.",
      icon: "Send"
    },
    {
      step: 6,
      title: "Post-Submission Support",
      description: "Continued support for any additional document requests or clarifications from authorities.",
      icon: "Headphones"
    }
  ];

  const timelineSteps = [
    {
      time: "Week 1-2",
      title: "Document Collection",
      description: "Gathering all required documents and initial verification",
      icon: "FileCheck"
    },
    {
      time: "Week 3-4",
      title: "Document Preparation",
      description: "Drafting, formatting, and professional preparation",
      icon: "FilePen"
    },
    {
      time: "Week 5",
      title: "Verification",
      description: "Legal verification and notarization as required",
      icon: "CheckCircle"
    },
    {
      time: "Week 6",
      title: "Final Submission",
      description: "Final quality check and submission to authorities",
      icon: "Send"
    }
  ];

  const documentTypes = [
    {
      category: "Academic Documents",
      documents: [
        "Transcripts & Mark Sheets",
        "Degree Certificates",
        "Diploma Certificates",
        "WES/ECA Evaluation",
        "Medium of Instruction Certificate"
      ]
    },
    {
      category: "Financial Documents",
      documents: [
        "Bank Statements (6 months)",
        "Fixed Deposit Certificates",
        "Education Loan Sanction Letter",
        "Income Tax Returns (3 years)",
        "Sponsorship Affidavit"
      ]
    },
    {
      category: "Personal Documents",
      documents: [
        "Passport Copy",
        "Birth Certificate",
        "Medical Certificates",
        "Police Clearance Certificate",
        "Passport-sized Photographs"
      ]
    },
    {
      category: "Application Documents",
      documents: [
        "Statement of Purpose (SOP)",
        "Letters of Recommendation (LOR)",
        "Portfolio",
        "Research Proposal",
        "Work Experience Letters"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Hero Section with Image */}
      <section className="relative h-[60vh] min-h-[500px] max-h-[800px] overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url("https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1920")'
            }}
          >
            {/* Animated Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-transparent to-red-600/30 animate-gradient"></div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-blue-500/20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 rounded-full bg-red-500/20 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 rounded-full bg-yellow-500/20 animate-float" style={{ animationDelay: '2s' }}></div>

        {/* Hero Content */}
        <div className="relative h-full flex items-center justify-center px-4 sm:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <AnimatedSection animation="fade-down" delay={0.1}>
              <span className="inline-block px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white/20 backdrop-blur-sm text-white font-medium mb-4 sm:mb-6 border border-white/30 text-sm sm:text-base">
                Complete Documentation Support
              </span>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={0.2}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2">
                Flawless Documentation
                <span className="block text-blue-200 mt-2">For Success</span>
              </h1>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={0.3}>
              <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
                Professional document preparation, verification, and submission support for university admissions and visa applications.
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="zoom-in" delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:bg-blue-50 text-sm sm:text-base">
                  Get Document Checklist
                </button>
                <button className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 text-sm sm:text-base">
                  Schedule Consultation
                </button>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Scroll Indicator */}
        <AnimatedSection animation="fade-up" delay={0.8}>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="animate-bounce">
              <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection animation="fade-up" delay={0.4}>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-red-700 bg-clip-text text-transparent">
                Comprehensive Documentation Services
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                End-to-end support for all your study abroad documentation needs
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {services.map((service, index) => (
          <AnimatedSection key = {index} animation="fade-up" delay={index * 0.2}>
              <ServiceCard key={index} {...service} index={index} />
            </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection animation="fade-up" delay={0.1}>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-red-700 bg-clip-text text-transparent">
                Our 6-Step Documentation Process
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                Systematic approach ensuring accuracy and compliance at every stage
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {processSteps.map((step, index) => (
              <ProcessStep key={index} {...step} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Document Timeline Section - SIMPLIFIED */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection animation="fade-up" delay={0.1}>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-red-700 bg-clip-text text-transparent">
                Documentation Timeline
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                Typical timeline for document preparation and processing
              </p>
            </div>
          </AnimatedSection>

          {/* Simple Timeline Cards - No Connecting Lines */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {timelineSteps.map((step, index) => (
              <AnimatedSection key={index} animation="zoom-in" delay={index * 0.2}>
                <div className="group h-full">
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full text-center">
                    {/* Time Badge */}
                    <div className="inline-block px-3 sm:px-4 py-1 sm:py-2 rounded-full bg-gradient-to-r from-blue-50 to-red-50 text-blue-700 font-medium mb-4 text-sm sm:text-base">
                      {step.time}
                    </div>
                    
                    {/* Title */}
                    <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {step.title}
                    </h4>
                    
                    {/* Description */}
                    <p className="text-gray-600 text-sm sm:text-base mb-4">
                      {step.description}
                    </p>
                    
                    {/* Simple Indicator */}
                    <div className="flex justify-center">
                      <div className="w-3 h-3 rounded-full bg-blue-500 group-hover:scale-150 transition-transform duration-300"></div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Document Types Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection animation="fade-up" delay={0.2}>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-red-700 bg-clip-text text-transparent">
                Document Checklist
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive list of documents we help you prepare and verify
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {documentTypes.map((category, index) => (
              <AnimatedSection key={category.category} animation="zoom-in" delay={index * 0.2}>
                <div className="group h-full">
                  <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-5 sm:mb-6 group-hover:text-blue-600 transition-colors duration-300">
                      {category.category}
                    </h3>
                    
                    <ul className="space-y-2 sm:space-y-3">
                      {category.documents.map((doc, i) => (
                        <li key={i} className="flex items-start gap-3 group/item">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-red-500 mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300"></div>
                          <span className="text-gray-700 text-sm sm:text-base group-hover/item:text-blue-600 transition-colors duration-300">
                            {doc}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection animation="zoom-in" delay={0.1}>
            <div className="bg-gradient-to-r from-blue-600 to-red-700 rounded-3xl p-6 sm:p-8 md:p-12 text-center text-white relative overflow-hidden">
              {/* Floating Elements */}
              <div className="absolute top-10 left-10 w-20 sm:w-32 h-20 sm:h-32 rounded-full bg-white/10 animate-float"></div>
              <div className="absolute bottom-10 right-10 w-16 sm:w-24 h-16 sm:h-24 rounded-full bg-white/10 animate-float" style={{ animationDelay: '2s' }}></div>
              
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">
                  Get Professional Documentation Support
                </h3>
                <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto">
                  Ensure your documents are perfectly prepared, verified, and submitted for maximum success rate
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Link href = "/contact" className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:bg-blue-50 text-sm sm:text-base">
                    Start Document Preparation
                  </Link>
                  
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}