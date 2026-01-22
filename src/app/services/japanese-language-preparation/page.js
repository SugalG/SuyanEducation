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

  const successStories = [
    {
      name: "Arjun Patel",
      level: "JLPT N2",
      achievement: "Placed at Toyota Japan",
      quote:
        "The structured approach helped me achieve N2 in 14 months and secure my dream job.",
    },
    {
      name: "Priya Sharma",
      level: "JLPT N1",
      achievement: "Tokyo University Scholarship",
      quote:
        "Cultural immersion sessions made the transition to Japan seamless and enjoyable.",
    },
    {
      name: "Rohan Mehta",
      level: "JLPT N3",
      achievement: "Moved to Osaka as Engineer",
      quote:
        "Real-world conversation practice prepared me perfectly for workplace communication.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-red-50 mt-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-red-50 to-blue-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Japanese Pattern Background */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: "30px 30px",
              }}
            ></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <RevealTest animateImmediately delay={0.2}>
                <div className="relative text-center mb-16">
                  <span className="inline-block px-4 py-2 rounded-full bg-red-100 text-red-700 font-medium mb-6">
                    日本語トレーニング
                  </span>
                  <h1 className="text-5xl md:text-6xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-red-600 via-red-500 to-blue-950 bg-clip-text text-transparent">
                      Master Japanese
                    </span>
                    <span className="block text-gray-800 mt-2">
                      For Study & Career in Japan
                    </span>
                  </h1>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Comprehensive language training program designed
                    specifically for students and professionals aiming to study,
                    work, or settle in Japan.
                  </p>
                </div>
              </RevealTest>
              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-20">
                {whyLearnStats.map((stat, index) => (
                  <RevealTest
                    animateImmediately
                    delay={index * 0.1}
                    key={index}
                  >
                    <div
                      key={index}
                      className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
                    >
                      <div className="text-3xl font-bold text-red-600">
                        {stat.number}
                      </div>
                      <div className="text-gray-600 text-sm mt-2">
                        {stat.label}
                      </div>
                    </div>
                  </RevealTest>
                ))}
              </div>
              
            </div>
            <RevealTest animateImmediately delay={0.5}>
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  {/* Image Container with Gradient Border */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-pink-500 to-blue-500 rounded-3xl blur opacity-30"></div>
                  <div className="relative rounded-3xl overflow-hidden border-8 border-white">
                    
                      <img
                        src="/icons/japan-test-prep.png"
                        alt={`Master in Japanese Languate`}
                        className="w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
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
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
            Structured JLPT Preparation
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Progress through five comprehensive levels following Japan's
            official JLPT certification framework
          </p>
        </div>

        <LevelTimeline levels={levels} />
      </section>

      {/* Teaching Methodology */}
      <TeachingMethodology methods={teachingMethods} />

      {/* Curriculum Details */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
            Comprehensive Curriculum
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Each level includes focused training on all essential language
            skills
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
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

      {/* Success Stories */}
      {/* <section className="bg-gradient-to-r from-red-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
              Student Success Stories
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Hear from our students who transformed their Japanese language skills
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="mb-6">
                  <div className="text-2xl font-bold text-red-600">{story.level}</div>
                  <div className="text-gray-800 font-semibold mt-2">{story.name}</div>
                  <div className="text-blue-600">{story.achievement}</div>
                </div>
                <p className="text-gray-600 italic">"{story.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-red-600 to-blue-900 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-6">
            Start Your Japanese Journey Today
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join our next batch and get one step closer to your Japanese dreams
          </p>
          <div className="">
            <Link
              className="px-8 py-4 bg-white text-red-600 font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
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
