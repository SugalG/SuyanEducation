// app/japanese-language-training/page.tsx
import CurriculumCard from "@/components/japanesePrepComp/CurriculumCard";
import LevelTimeline from "@/components/japanesePrepComp/LevelTimeline";
import WhyLearnJapanese from "@/components/japanesePrepComp/WhyLearnJapanese";
import TeachingMethodology from "@/components/japanesePrepComp/TeachingMethodology";
import Link from "next/link";
import RevealTest from "@/components/RevealTest";

export const dynamic = "force-static";

export default function JapaneseLanguageTraining() {
  const levels = [
    {
      level: "N5",
      title: "Beginner Level",
      description:
        "Master basic Japanese greetings, hiragana, katakana, and 100 kanji characters",
      duration: "3 Months",
      focus: [
        "Hiragana & Katakana",
        "Basic Greetings",
        "Simple Conversations",
        "100 Kanji",
      ],
      color: "from-blue-400 to-blue-200",
    },
    {
      level: "N4",
      title: "Elementary Level",
      description:
        "Understand basic Japanese used in everyday situations and written in simple vocabulary",
      duration: "3 Months",
      focus: [
        "Daily Conversations",
        "Sentence Patterns",
        "300 Kanji",
        "Basic Grammar",
      ],
      color: "from-green-400 to-green-200",
    },
    {
      level: "N3",
      title: "Intermediate Level",
      description:
        "Comprehend Japanese used in everyday situations to a certain degree",
      duration: "4 Months",
      focus: [
        "News Headlines",
        "Business Japanese",
        "1000 Kanji",
        "Workplace Communication",
      ],
      color: "from-yellow-400 to-yellow-200",
    },
    {
      level: "N2",
      title: "Pre-Advanced Level",
      description:
        "Understand Japanese used in everyday situations and a variety of circumstances",
      duration: "5 Months",
      focus: [
        "University Lectures",
        "Professional Emails",
        "2000 Kanji",
        "Cultural Nuances",
      ],
      color: "from-orange-400 to-orange-200",
    },
    {
      level: "N1",
      title: "Advanced Level",
      description:
        "Understand Japanese used in a wide variety of circumstances",
      duration: "6 Months",
      focus: [
        "Academic Japanese",
        "Technical Documents",
        "2100+ Kanji",
        "Native-level Fluency",
      ],
      color: "from-red-400 to-red-200",
    },
  ];

  const teachingMethods = [
    {
      title: "Interactive Classroom Sessions",
      description:
        "Live instructor-led classes with real-time feedback and interaction",
      features: [
        "Small batch sizes (max 10 students)",
        "Native Japanese teachers",
        "Interactive activities",
        "Pronunciation correction",
      ],
    },
    {
      title: "Digital Learning Platform",
      description:
        "Access to comprehensive online resources and practice materials",
      features: [
        "24/7 Video lessons",
        "Practice exercises",
        "Progress tracking",
        "Mobile app access",
      ],
    },
    {
      title: "Cultural Immersion",
      description:
        "Learn language through cultural context and real-life scenarios",
      features: [
        "Japanese movie screenings",
        "Cultural workshops",
        "Guest lectures",
        "Virtual tours",
      ],
    },
    {
      title: "Practical Application",
      description:
        "Focus on real-world usage and practical communication skills",
      features: [
        "Role-playing exercises",
        "Interview preparation",
        "Business scenarios",
        "Daily life situations",
      ],
    },
  ];

  const whyLearnStats = [
    { number: "300K+", label: "Japanese Companies Globally" },
    { number: "94%", label: "Employment Rate for JLPT N2/N1" },
    { number: "₹8-15L", label: "Average Salary Premium" },
    { number: "50+", label: "Top Universities in Japan" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-red-50 mt-24 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-red-50 to-blue-50 py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto w-full">
          {/* Japanese Pattern Background - FIXED: Added overflow-hidden */}
          <div className="absolute inset-0 opacity-5 overflow-hidden">
            <div
              className="absolute inset-0 w-full"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: "30px 30px",
              }}
            ></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center w-full">
            <div className="w-full">
              <RevealTest animateImmediately delay={0.2}>
                <div className="relative text-center mb-12 md:mb-16 px-4">
                  <span className="inline-block px-4 py-2 rounded-full bg-red-100 text-red-700 font-medium mb-4 md:mb-6 text-sm md:text-base">
                    日本語トレーニング
                  </span>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
                    <span className="bg-gradient-to-r from-red-600 via-red-500 to-blue-950 bg-clip-text text-transparent">
                      Master Japanese
                    </span>
                    <span className="block text-gray-800 mt-2 text-lg sm:text-xl md:text-2xl">
                      For Study & Career in Japan
                    </span>
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Comprehensive language training program designed
                    specifically for students and professionals aiming to study,
                    work, or settle in Japan.
                  </p>
                </div>
              </RevealTest>
              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto mb-12 md:mb-20 px-4">
                {whyLearnStats.map((stat, index) => (
                  <RevealTest
                    animateImmediately
                    delay={index * 0.1}
                    key={index}
                  >
                    <div
                      key={index}
                      className="bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg w-full"
                    >
                      <div className="text-xl sm:text-2xl md:text-3xl font-bold text-red-600">
                        {stat.number}
                      </div>
                      <div className="text-gray-600 text-xs sm:text-sm md:text-sm mt-1 md:mt-2">
                        {stat.label}
                      </div>
                    </div>
                  </RevealTest>
                ))}
              </div>
            </div>
            <RevealTest animateImmediately delay={0.5}>
              <div className="relative w-full px-4 lg:px-0">
                <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl w-full">
                  {/* Image Container with Gradient Border - FIXED: Removed negative inset */}
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-pink-500 to-blue-500 rounded-2xl md:rounded-3xl blur opacity-30"></div>
                  <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border-4 md:border-8 border-white w-full">
                    <img
                      src="/icons/japan-test-prep.png"
                      alt="Master in Japanese Language"
                      className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
            </RevealTest>
          </div>
        </div>
      </section>

      {/* Why Learn Japanese Section */}
      <WhyLearnJapanese />

      {/* JLPT Levels Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-20 overflow-x-hidden">
        <div className="text-center mb-12 md:mb-16 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
            Structured JLPT Preparation
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Progress through five comprehensive levels following Japan's
            official JLPT certification framework
          </p>
        </div>

        <LevelTimeline levels={levels} />
      </section>

      {/* Teaching Methodology */}
      <TeachingMethodology methods={teachingMethods} />

      {/* Curriculum Details */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-20 overflow-x-hidden">
        <div className="text-center mb-12 md:mb-16 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
            Comprehensive Curriculum
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Each level includes focused training on all essential language
            skills
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 px-4 sm:px-0">
          <CurriculumCard
            title="Reading & Writing"
            description="Master Japanese scripts and reading comprehension"
            skills={[
              "Hiragana/Katakana",
              "Kanji Recognition",
              "Reading Comprehension",
              "Business Writing",
            ]}
            icon="BookOpen"
            color="blue"
          />
          <CurriculumCard
            title="Listening & Speaking"
            description="Develop natural conversation and comprehension skills"
            skills={[
              "Pronunciation",
              "Conversation Practice",
              "Listening Comprehension",
              "Accent Reduction",
            ]}
            icon="Mic"
            color="red"
          />
          <CurriculumCard
            title="Cultural Context"
            description="Understand Japanese culture and social norms"
            skills={[
              "Business Etiquette",
              "Cultural Nuances",
              "Social Customs",
              "Workplace Norms",
            ]}
            icon="Users"
            color="green"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-20 overflow-x-hidden">
        <div className="bg-gradient-to-r from-red-600 to-blue-900 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 text-center text-white w-full">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6 px-4">
            Start Your Japanese Journey Today
          </h3>
          <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 opacity-90 max-w-2xl mx-auto px-4">
            Join our next batch and get one step closer to your Japanese dreams
          </p>
          <div className="px-4">
            <Link
              className="inline-block px-6 md:px-8 py-3 md:py-4 bg-white text-red-600 font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-sm md:text-base"
              href="/contact"
            >
              Join Us Now!!!
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}