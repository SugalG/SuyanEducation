// app/pte-information/page.tsx
import Link from "next/link";
import {
  BookOpen,
  Brain,
  CheckCircle2,
  Clock3,
  Globe2,
  GraduationCap,
  Headphones,
  Laptop2,
  Lightbulb,
  MessageSquare,
  Mic,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  FileText,
  ArrowRight,
  BarChart3,
  CalendarDays,
} from "lucide-react";
import AnimatedSection from "@/components/universityPlacement/AnimatedSection";
import RevealTest from "@/components/RevealTest";

export const dynamic = "force-static";

const highlights = [
  {
    title: "Computer-Based Test",
    value: "AI-scored",
    icon: Laptop2,
    desc: "PTE Academic is fully computer-based and assesses speaking, writing, reading, and listening.",
  },
  {
    title: "Score Range",
    value: "10–90",
    icon: BarChart3,
    desc: "Overall and communicative skills scores are reported on the Global Scale of English.",
  },
  {
    title: "Fast Results",
    value: "~48 hours",
    icon: Clock3,
    desc: "Pearson says PTE Academic results are typically available within 48 hours.",
  },
  {
    title: "Global Acceptance",
    value: "4,000+",
    icon: Globe2,
    desc: "Accepted by thousands of institutions and trusted for visa pathways in multiple countries.",
  },
];

const infoCards = [
  {
    title: "What is PTE Academic?",
    icon: Globe2,
    text: "PTE Academic is a computer-based English proficiency test designed for study abroad and other academic purposes. It measures speaking, writing, reading, and listening in one exam.",
    bullets: ["Academic English focus", "Computer-based testing", "Integrated skill assessment"],
  },
  {
    title: "Why students choose PTE",
    icon: Sparkles,
    text: "Students often choose PTE because of its fast results, flexible booking, fully computerized format, and broad institutional acceptance.",
    bullets: ["Fast score turnaround", "Modern test experience", "Widely accepted"],
  },
  {
    title: "Who should take it",
    icon: Users,
    text: "It is ideal for students planning to apply to universities or colleges where proof of English proficiency is required.",
    bullets: ["Undergraduate applicants", "Postgraduate applicants", "Study abroad candidates"],
  },
];

const moduleCards = [
  {
    name: "Speaking & Writing",
    icon: Mic,
    color: "from-red-500 to-pink-500",
    description:
      "Tests pronunciation, oral fluency, grammar, vocabulary, written structure, and idea development through integrated tasks.",
    details: ["Personal introduction support tasks", "Read aloud", "Repeat sentence", "Describe image", "Essay and summary tasks"],
  },
  {
    name: "Reading",
    icon: BookOpen,
    color: "from-blue-500 to-cyan-500",
    description:
      "Measures how well you understand academic texts, identify meaning, and handle multiple reading task types.",
    details: ["Reading & writing fill in the blanks", "Multiple choice", "Re-order paragraphs", "Reading fill in the blanks"],
  },
  {
    name: "Listening",
    icon: Headphones,
    color: "from-violet-500 to-purple-500",
    description:
      "Checks your ability to understand spoken English in academic and everyday-style listening contexts.",
    details: ["Summarize spoken text", "Multiple choice", "Fill in the blanks", "Highlight correct summary", "Write from dictation"],
  },
];

const facts = [
  { label: "Test Type", value: "Computer-based" },
  { label: "Skills Tested", value: "4 skills" },
  { label: "Overall Score", value: "10–90" },
  { label: "Typical Results", value: "48 hours" },
  { label: "Retake Rule", value: "After results" },
  { label: "Use Cases", value: "Study & more" },
];

const scoreBands = [
  {
    range: "79–90",
    level: "Excellent",
    desc: "Strong for highly competitive universities and demanding academic programs.",
    icon: TrendingUp,
  },
  {
    range: "65–78",
    level: "Very Good",
    desc: "Commonly competitive for many universities and colleges.",
    icon: Target,
  },
  {
    range: "50–64",
    level: "Competent",
    desc: "Can meet entry requirements for many programs, depending on institution and course.",
    icon: CheckCircle2,
  },
  {
    range: "36–49",
    level: "Developing",
    desc: "May require stronger preparation or pathway/foundation options.",
    icon: Lightbulb,
  },
];

const prepTimeline = [
  {
    phase: "8–12 Weeks Before",
    icon: CalendarDays,
    tasks: [
      "Take a diagnostic test",
      "Set a target score",
      "Build a weekly study routine",
      "Identify weak skill areas",
    ],
  },
  {
    phase: "4–8 Weeks Before",
    icon: Brain,
    tasks: [
      "Practice by question type",
      "Improve grammar and vocabulary",
      "Do timed reading and listening drills",
      "Train speaking fluency daily",
    ],
  },
  {
    phase: "2–4 Weeks Before",
    icon: GraduationCap,
    tasks: [
      "Attempt full mock tests",
      "Review templates and strategies",
      "Focus on repeated weak areas",
      "Improve time management",
    ],
  },
  {
    phase: "Last Week",
    icon: ShieldCheck,
    tasks: [
      "Do light revision",
      "Review test-day rules",
      "Sleep properly",
      "Stay calm and confident",
    ],
  },
];

const tips = [
  {
    icon: Mic,
    title: "For Speaking",
    text: "Focus on fluency, clear pronunciation, and avoiding long pauses.",
  },
  {
    icon: FileText,
    title: "For Writing",
    text: "Write clearly, stay organized, and avoid unnecessary complexity.",
  },
  {
    icon: BookOpen,
    title: "For Reading",
    text: "Practice skimming, scanning, and handling time pressure.",
  },
  {
    icon: Headphones,
    title: "For Listening",
    text: "Train note-taking and concentration during audio tasks.",
  },
];

export default function PteInformationPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-gradient-to-b from-white via-blue-50/20 to-red-50/20 mt-24">
      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-red-50/40 to-blue-50/40" />
          <div className="absolute top-16 left-8 w-72 h-72 rounded-full bg-red-200/25 blur-3xl animate-pulse" />
          <div className="absolute bottom-16 right-8 w-96 h-96 rounded-full bg-blue-200/25 blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="text-center lg:text-left">
              <AnimatedSection animation="fade-down" delay={0.1}>
                <span className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-gradient-to-r from-red-100 to-blue-100 px-4 py-2 mb-8">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-red-500 to-blue-600 animate-pulse" />
                  <span className="text-sm font-medium text-red-700">
                    Pearson Test of English
                  </span>
                </span>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={0.2}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
                  <span className="bg-gradient-to-r from-red-600 via-red-500 to-blue-950 bg-clip-text text-transparent">
                    PTE Academic
                  </span>
                  <span className="block text-gray-800 mt-2 text-2xl sm:text-3xl md:text-4xl">
                    Fast, Modern & Widely Accepted
                  </span>
                </h1>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={0.3}>
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-10">
                  A modern computer-based English proficiency test for students
                  planning to study abroad. It evaluates speaking, writing,
                  reading, and listening with fast score reporting and broad
                  institutional recognition.
                </p>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={0.4}>
                <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto lg:mx-0">
                  {highlights.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={i}
                        className="rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm p-5 shadow-sm hover:shadow-lg transition-all duration-300"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-red-50 to-blue-50 flex items-center justify-center">
                            <Icon className="w-5 h-5 text-red-600" />
                          </div>
                          <div className="text-lg font-bold text-gray-900">
                            {item.value}
                          </div>
                        </div>
                        <div className="font-semibold text-gray-800 mb-1">
                          {item.title}
                        </div>
                        <div className="text-sm text-gray-600">{item.desc}</div>
                      </div>
                    );
                  })}
                </div>
              </AnimatedSection>
            </div>

            <RevealTest animateImmediately delay={0.4}>
              <div className="relative">
                <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-r from-red-500/30 via-pink-500/20 to-blue-500/30 blur-2xl" />
                <div className="relative rounded-[2rem] overflow-hidden border-8 border-white shadow-2xl bg-white">
                  <img
                    src="/icons/pte.png"
                    alt="Study PTE Academic"
                    className="w-full h-[480px] md:h-[560px] object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </RevealTest>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection animation="fade-up" delay={0.1}>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-red-600 via-red-500 to-blue-950 bg-clip-text text-transparent">
                  PTE Key Facts
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Important points students usually want to understand first.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {facts.map((item, index) => (
              <AnimatedSection
                key={index}
                animation="zoom-in"
                delay={index * 0.08}
              >
                <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm hover:shadow-lg hover:border-red-300 transition-all duration-300">
                  <div className="text-2xl font-bold text-gray-900 mb-2">
                    {item.value}
                  </div>
                  <div className="text-sm text-gray-600">{item.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Info cards */}
      <section className="py-20 bg-gradient-to-b from-white to-red-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection animation="fade-up" delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-red-600 via-red-500 to-blue-950 bg-clip-text text-transparent">
                  Understanding PTE
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Clear guidance for students planning to use PTE for study abroad.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {infoCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <AnimatedSection
                  key={index}
                  animation="fade-up"
                  delay={index * 0.1}
                >
                  <div className="group h-full rounded-3xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-50 to-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-red-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {card.text}
                    </p>
                    <div className="space-y-3">
                      {card.bullets.map((bullet, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-red-600 mt-0.5 shrink-0" />
                          <span className="text-gray-700">{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection animation="fade-up" delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-red-600 via-red-500 to-blue-950 bg-clip-text text-transparent">
                  PTE Test Structure
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The main parts of the PTE Academic exam and what each section evaluates.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-8">
            {moduleCards.map((module, index) => {
              const Icon = module.icon;
              return (
                <AnimatedSection
                  key={index}
                  animation="fade-up"
                  delay={index * 0.1}
                >
                  <div className="h-full rounded-3xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-all duration-500">
                    <div className={`bg-gradient-to-r ${module.color} p-6 text-white`}>
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
                          <Icon className="w-7 h-7" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold">{module.name}</h3>
                        </div>
                      </div>
                    </div>

                    <div className="p-7">
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {module.description}
                      </p>

                      <div className="space-y-3">
                        {module.details.map((detail, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <ArrowRight className="w-4 h-4 text-red-600 mt-1 shrink-0" />
                            <span className="text-gray-700">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Score interpretation */}
      <section className="py-20 bg-gradient-to-b from-blue-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection animation="fade-up" delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-red-600 via-red-500 to-blue-950 bg-clip-text text-transparent">
                  PTE Score Interpretation
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A simple way to help students understand their score position.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {scoreBands.map((band, index) => {
              const Icon = band.icon;
              return (
                <AnimatedSection
                  key={index}
                  animation="zoom-in"
                  delay={index * 0.08}
                >
                  <div className="h-full rounded-3xl border border-gray-200 bg-white p-7 shadow-sm hover:shadow-xl transition-all duration-300">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-50 to-blue-50 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-red-600" />
                    </div>
                    <div className="text-sm font-semibold uppercase tracking-wide text-red-600 mb-2">
                      {band.level}
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-4">
                      {band.range}
                    </div>
                    <p className="text-gray-600 leading-relaxed">{band.desc}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Preparation timeline */}
      <section className="py-20 bg-gradient-to-b from-white to-red-50/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AnimatedSection animation="fade-up" delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-red-600 via-red-500 to-blue-950 bg-clip-text text-transparent">
                  Preparation Timeline
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A practical study roadmap students can follow before exam day.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {prepTimeline.map((item, index) => {
              const Icon = item.icon;
              return (
                <AnimatedSection
                  key={index}
                  animation="fade-up"
                  delay={index * 0.1}
                >
                  <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-50 to-blue-50 flex items-center justify-center">
                        <Icon className="w-7 h-7 text-red-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {item.phase}
                      </h3>
                    </div>

                    <div className="space-y-4">
                      {item.tasks.map((task, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-red-600 mt-0.5 shrink-0" />
                          <span className="text-gray-700">{task}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection animation="fade-up" delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-red-600 via-red-500 to-blue-950 bg-clip-text text-transparent">
                  Smart Preparation Tips
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Small improvements in each skill can make a big score difference.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {tips.map((tip, index) => {
              const Icon = tip.icon;
              return (
                <AnimatedSection
                  key={index}
                  animation="zoom-in"
                  delay={index * 0.08}
                >
                  <div className="h-full rounded-3xl border border-gray-200 bg-white p-7 shadow-sm hover:shadow-xl transition-all duration-300">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-50 to-blue-50 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {tip.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{tip.text}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <AnimatedSection animation="zoom-in" delay={0.1}>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-red-600 to-blue-600 p-[1px] shadow-2xl">
              <div className="rounded-3xl bg-white px-8 py-10 md:px-12 md:py-14 text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
                  Start Your PTE Journey Today
                </h3>
                <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                  Get guidance on score targets, preparation strategy, and the
                  right study abroad pathway for your goals.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 to-blue-600 text-white font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    Book Free Consultation
                  </Link>

                  <Link
                    href="/services/ielts"
                    className="px-8 py-4 rounded-xl border border-gray-300 text-gray-800 font-semibold hover:bg-gray-50 transition-all duration-300"
                  >
                    Compare with IELTS
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