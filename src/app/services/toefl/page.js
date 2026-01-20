// app/toefl-information/page.tsx
import ToeflSection from "@/components/toefl/ToeflSection";
import ScoreComparison from "@/components/toefl/ScoreComparision";
import PreparationTimeline from "@/components/toefl/PreparationTimeline";
import ToeflModule from "@/components/toefl/ToeflModule";
import TestFormat from "@/components/toefl/TestFormat";
import AnimatedSection from "@/components/universityPlacement/AnimatedSection";
import RevealTest from "@/components/RevealTest";
import Link from "next/link";

export const dynamic = "force-static";

export default function ToeflInformation() {
  const toeflSections = [
    {
      title: "What is TOEFL?",
      content:
        "The Test of English as a Foreign Language (TOEFL) is a standardized test that measures the English language ability of non-native speakers wishing to enroll in English-speaking universities. Accepted by over 11,000 institutions in more than 150 countries.",
      icon: "Globe",
      stats: ["11,000+ Institutions", "150+ Countries", "50+ Years History"],
    },
    {
      title: "Why TOEFL is Important",
      content:
        "TOEFL scores are required for admission to most universities in the USA, Canada, UK, Australia, and other English-speaking countries. It's also used for scholarship applications, visa processing, and professional certification.",
      icon: "Award",
      stats: [
        "University Admissions",
        "Scholarship Eligibility",
        "Visa Requirements",
      ],
    },
    {
      title: "Who Should Take TOEFL",
      content:
        "Non-native English speakers planning to study at undergraduate or graduate levels in English-speaking countries. Also suitable for English language learning program admissions, scholarship candidates, and visa applicants.",
      icon: "Users",
      stats: ["Students", "Scholarship Seekers", "Visa Applicants"],
    },
  ];

  const modules = [
    {
      name: "Reading",
      description: "Academic passages with questions to test comprehension",
      duration: "54-72 minutes",
      questions: "30-40 questions",
      score: "0-30 points",
      icon: "BookOpen",
      color: "red",
    },
    {
      name: "Listening",
      description:
        "Lectures, conversations, and discussions to test understanding",
      duration: "41-57 minutes",
      questions: "28-39 questions",
      score: "0-30 points",
      icon: "Headphones",
      color: "blue",
    },
    {
      name: "Speaking",
      description:
        "Express opinion and speak based on reading and listening tasks",
      duration: "17 minutes",
      tasks: "4 tasks",
      score: "0-30 points",
      icon: "Mic",
      color: "green",
    },
    {
      name: "Writing",
      description: "Write essay responses based on reading and listening tasks",
      duration: "50 minutes",
      tasks: "2 tasks",
      score: "0-30 points",
      icon: "Edit",
      color: "purple",
    },
  ];

  const scoreComparison = [
    {
      level: "Advanced",
      score: "95-120",
      description: "Suitable for top universities and competitive programs",
      universities: ["Harvard", "MIT", "Stanford", "Oxford"],
    },
    {
      level: "High-Intermediate",
      score: "72-94",
      description: "Meets requirements for most universities",
      universities: [
        "State Universities",
        "Many UK Universities",
        "Canadian Colleges",
      ],
    },
    {
      level: "Low-Intermediate",
      score: "42-71",
      description: "May require additional English courses",
      universities: [
        "Community Colleges",
        "Pathway Programs",
        "Conditional Admissions",
      ],
    },
    {
      level: "Beginner",
      score: "0-41",
      description: "Intensive English preparation needed",
      universities: [
        "Language Schools",
        "Foundation Programs",
        "Pre-sessional Courses",
      ],
    },
  ];

  const testFormats = [
    {
      type: "TOEFL iBT",
      description: "Internet-Based Test - Most common format",
      duration: "3 hours",
      availability: "50+ times per year",
      features: ["Computer-based", "Home edition available", "Instant scores"],
    },
    {
      type: "TOEFL PBT",
      description: "Paper-Based Test - Where internet is unavailable",
      duration: "2.5 hours",
      availability: "Limited centers",
      features: ["Paper format", "Listening section", "Structure section"],
    },
  ];

  const preparationTimeline = [
    {
      time: "3-6 Months Before",
      tasks: [
        "Assess current English level",
        "Set target score",
        "Create study schedule",
        "Gather study materials",
      ],
    },
    {
      time: "1-2 Months Before",
      tasks: [
        "Start intensive practice",
        "Take practice tests",
        "Focus on weak areas",
        "Improve time management",
      ],
    },
    {
      time: "2-4 Weeks Before",
      tasks: [
        "Full-length mock tests",
        "Speaking practice",
        "Writing feedback",
        "Test day simulation",
      ],
    },
    {
      time: "Week Before",
      tasks: [
        "Final review",
        "Rest and relax",
        "Check test center",
        "Prepare documents",
      ],
    },
  ];

  const keyFacts = [
    { fact: "Total Score Range", value: "0-120 points" },
    { fact: "Test Duration", value: "3 hours" },
    { fact: "Score Validity", value: "2 years" },
    { fact: "Test Fee Range", value: "$180-$325" },
    { fact: "Result Timeline", value: "6-10 days" },
    { fact: "Retake Waiting Period", value: "3 days" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50/30 overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-red-50 to-blue-50"></div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-red-100/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-blue-100/20 to-transparent"></div>

          {/* Animated Circles */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-red-200/30 to-pink-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-blue-200/30 to-cyan-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center max-w-4xl mx-auto">
              <AnimatedSection animation="fade-down" delay={0.2}>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-100 to-blue-100 border border-red-200 mb-8">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-red-500 to-blue-600 animate-pulse"></div>
                  <span className="text-red-700 text-sm font-medium">
                    Global English Proficiency Test
                  </span>
                </span>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={0.3}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-red-600 via-red-500 to-blue-950 bg-clip-text text-transparent">
                    TOEFL
                  </span>
                  <span className="block text-gray-800 mt-2 text-3xl sm:text-4xl">
                    Test of English as a Foreign Language
                  </span>
                </h1>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={0.4}>
                <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                  The most widely accepted English language test for study,
                  work, and immigration. Accepted by 11,000+ universities and
                  institutions in over 150 countries.
                </p>
              </AnimatedSection>

              {/* Quick Stats */}
              <AnimatedSection animation="fade-up" delay={0.5}>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-sm">
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      11,000+
                    </div>
                    <div className="text-gray-600">Institutions</div>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-sm">
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      150+
                    </div>
                    <div className="text-gray-600">Countries</div>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-sm">
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      0-120
                    </div>
                    <div className="text-gray-600">Score Range</div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
            <RevealTest animateImmediately delay={0.5}>
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  {/* Image Container with Gradient Border */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-pink-500 to-blue-500 rounded-3xl blur opacity-30"></div>
                  <div className="relative rounded-3xl overflow-hidden border-8 border-white">
                    
                      <img
                        src="/icons/tofel-test-prep.png"
                        alt={`Study Toefl`}
                        className="w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
                      />
                   
                  </div>

                </div>


              </div>
            </RevealTest>
          </div>
        </div>
      </section>

      {/* Key Facts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <RevealTest animateImmediately delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-red-600 via-red-500 to-blue-950 bg-clip-text text-transparent">
                  TOEFL Key Facts
                </span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Essential information about the TOEFL test format, scoring, and
                requirements
              </p>
            </div>
          </RevealTest>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {keyFacts.map((item, index) => (
              <AnimatedSection
                key={index}
                animation="zoom-in"
                delay={index * 0.1}
              >
                <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center hover:border-red-300 hover:shadow-lg transition-all duration-300">
                  <div className="text-2xl font-bold text-gray-900 mb-2">
                    {item.value}
                  </div>
                  <div className="text-sm text-gray-600">{item.fact}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* TOEFL Sections */}
      <section className="py-20 bg-gradient-to-b from-white to-red-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection animation="fade-up" delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-red-600 via-red-500 to-blue-950 bg-clip-text text-transparent">
                  Understanding TOEFL
                </span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Comprehensive information about the TOEFL test and its
                importance
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {toeflSections.map((section, index) => (
              <ToeflSection key={index} {...section} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Test Modules */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection animation="fade-up" delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-red-600 via-red-500 to-blue-950 bg-clip-text text-transparent">
                  TOEFL Test Modules
                </span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                The four sections that make up the complete TOEFL iBT test
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((module, index) => (
              <ToeflModule key={index} {...module} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Test Formats */}
      <section className="py-20 bg-gradient-to-b from-blue-50/30 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <AnimatedSection animation="fade-up" delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-red-600 via-red-500 to-blue-950 bg-clip-text text-transparent">
                  TOEFL Test Formats
                </span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Choose between internet-based and paper-based test formats
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testFormats.map((format, index) => (
              <TestFormat key={index} {...format} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Score Comparison */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection animation="fade-up" delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-red-600 via-red-500 to-blue-950 bg-clip-text text-transparent">
                  TOEFL Score Interpretation
                </span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Understand what your TOEFL score means for university admissions
              </p>
            </div>
          </AnimatedSection>

          <ScoreComparison scores={scoreComparison} />
        </div>
      </section>

      {/* Preparation Timeline */}
      <section className="py-20 bg-gradient-to-b from-white to-red-50/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AnimatedSection animation="fade-up" delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-red-600 via-red-500 to-blue-950 bg-clip-text text-transparent">
                  Preparation Timeline
                </span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Recommended study plan for optimal TOEFL preparation
              </p>
            </div>
          </AnimatedSection>

          <PreparationTimeline timeline={preparationTimeline} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <AnimatedSection animation="zoom-in" delay={0.1}>
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-red-600 to-blue-600 p-1">
              <div className="bg-white rounded-3xl p-8 md:p-12 text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Start Your TOEFL Journey Today
                </h3>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                  Join thousands of successful students who achieved their dream
                  TOEFL scores with our expert guidance
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-red-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                    Book Free Consultation
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
