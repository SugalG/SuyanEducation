// app/interview-preparation/page.tsx
import InterviewTypeCard from "@/components/interview-preparation/InterviewTypeCard";
import ProcessMilestone from "@/components/interview-preparation/ProcessMilestone";
import FeatureBubble from "@/components/interview-preparation/FeatureBubble";
import QuestionTabs from "@/components/interview-preparation/QuestionTabs";
import AnimatedSection from "@/components/universityPlacement/AnimatedSection";
import CoachCard from "@/components/interview-preparation/CoachCard";
import Link from "next/link";

export const dynamic = "force-static";

export default function InterviewPreparation() {
  const interviewTypes = [
    {
      type: "Visa Interview",
      icon: "ShieldCheck",
      description:
        "Embassy interview preparation focusing on study plans and return intentions",
      duration: "3-4 sessions",
      intensity: "Moderate",
      color: "blue",
    },
    {
      type: "University Admission",
      icon: "GraduationCap",
      description:
        "Academic panel interviews with faculty and admission committees",
      duration: "4-5 sessions",
      intensity: "High",
      color: "purple",
    },
    {
      type: "Scholarship",
      icon: "Award",
      description: "Competitive scholarship interviews with selection panels",
      duration: "5-6 sessions",
      intensity: "Very High",
      color: "red",
    },
    {
      type: "Technical",
      icon: "Cpu",
      description: "STEM and research-focused technical interviews",
      duration: "6-8 sessions",
      intensity: "Expert",
      color: "green",
    },
  ];

  const processSteps = [
    {
      phase: "01",
      title: "Profile Analysis",
      description:
        "Deep dive into your background, strengths, and interview history",
      activities: [
        "Strengths assessment",
        "Weakness identification",
        "Goal alignment",
        "Benchmarking",
      ],
    },
    {
      phase: "02",
      title: "Strategy Development",
      description:
        "Custom interview strategy based on target institution requirements",
      activities: [
        "Question prediction",
        "Story development",
        "Timeline planning",
        "Resource allocation",
      ],
    },
    {
      phase: "03",
      title: "Skill Building",
      description:
        "Develop communication, presentation, and technical interview skills",
      activities: [
        "Communication drills",
        "Body language training",
        "Technical prep",
        "Stress management",
      ],
    },
    {
      phase: "04",
      title: "Mock Simulations",
      description:
        "Realistic mock interviews with expert feedback and analysis",
      activities: [
        "Video recordings",
        "Real-time feedback",
        "Performance metrics",
        "Improvement tracking",
      ],
    },
    {
      phase: "05",
      title: "Final Polish",
      description:
        "Refine answers, build confidence, and prepare for curveballs",
      activities: [
        "Answer refinement",
        "Confidence building",
        "Contingency planning",
        "Final review",
      ],
    },
  ];

  const keyFeatures = [
    {
      title: "AI-Powered Analysis",
      description:
        "Advanced AI analyzes your mock interviews for improvement areas",
      icon: "Brain",
      color: "blue",
    },
    {
      title: "Cultural Context",
      description:
        "Country-specific interview etiquette and cultural expectations",
      icon: "Globe",
      color: "red",
    },
    {
      title: "Stress Simulation",
      description: "High-pressure scenarios to build composure under stress",
      icon: "Activity",
      color: "purple",
    },
    {
      title: "Video Review",
      description: "Recorded sessions with frame-by-frame feedback",
      icon: "Video",
      color: "green",
    },
    {
      title: "Question Bank",
      description: "10,000+ categorized questions with model answers",
      icon: "Database",
      color: "orange",
    },
    {
      title: "Real-time Feedback",
      description: "Instant feedback on content, delivery, and body language",
      icon: "MessageSquare",
      color: "cyan",
    },
  ];

  const commonQuestions = [
    {
      category: "Academic & Motivation",
      questions: [
        { question: "Why this specific university?", difficulty: "Medium" },
        {
          question: "How does this align with your career goals?",
          difficulty: "High",
        },
        { question: "What makes you unique?", difficulty: "Medium" },
        { question: "Describe your academic journey", difficulty: "Low" },
      ],
    },
    {
      category: "Future Plans",
      questions: [
        {
          question: "Where do you see yourself in 5 years?",
          difficulty: "High",
        },
        {
          question: "How will you contribute to the university?",
          difficulty: "Medium",
        },
        { question: "Why return to your home country?", difficulty: "High" },
        { question: "Backup plans if not selected?", difficulty: "Medium" },
      ],
    },
    {
      category: "Technical & Field",
      questions: [
        { question: "Explain your research interests", difficulty: "High" },
        { question: "Recent developments in your field", difficulty: "Medium" },
        { question: "Technical problem-solving approach", difficulty: "High" },
        { question: "Academic project details", difficulty: "Medium" },
      ],
    },
  ];

  const coaches = [
    {
      name: "Dr. Sarah Chen",
      role: "Visa Interview Specialist",
      experience: "12+ years",
      specialization: [
        "USA F1 Visa",
        "UK Student Visa",
        "Canadian Study Permit",
      ],
      stats: "98% success rate",
      avatarColor: "blue",
    },
    {
      name: "Prof. James Wilson",
      role: "University Admission Expert",
      experience: "15+ years",
      specialization: ["Ivy League", "Russell Group", "Technical Interviews"],
      stats: "92% admission rate",
      avatarColor: "purple",
    },
    {
      name: "Ms. Elena Rossi",
      role: "Scholarship Coach",
      experience: "10+ years",
      specialization: [
        "Fulbright",
        "Chevening",
        "DAAD",
        "University Scholarships",
      ],
      stats: "$5M+ secured",
      avatarColor: "red",
    },
  ];

  const successMetrics = [
    { metric: "Interview Success", value: "96%", trend: "+2%" },
    { metric: "Average Score Improvement", value: "42%", trend: "+5%" },
    { metric: "Student Satisfaction", value: "4.9/5", trend: "+0.2" },
    { metric: "Preparation Time Saved", value: "60%", trend: "+8%" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50/30 overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white/50 to-red-100/100"></div>
          <div className="absolute inset-0 opacity-30">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: "60px 60px",
              }}
            ></div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-red-200/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div>
              <AnimatedSection animation="fade-right" delay={0.2}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-red-100 border border-blue-200 mb-8">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-blue-700 text-sm font-medium">
                    Live Mock Interviews Available
                  </span>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-right" delay={0.3}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-red-600 bg-clip-text text-transparent">
                    Interview
                  </span>
                  <span className="block text-gray-800 mt-2">
                    Mastery Program
                  </span>
                </h1>
              </AnimatedSection>

              <AnimatedSection animation="fade-right" delay={0.4}>
                <p className="text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
                  Transform from nervous candidate to confident communicator
                  with our AI-powered interview preparation platform and expert
                  coaching.
                </p>
              </AnimatedSection>

              {/* <AnimatedSection animation="fade-up" delay={0.5}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-red-600 rounded-xl font-semibold text-white overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative">Book Free Assessment</span>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300"></div>
                  </button>
                  <button className="px-8 py-4 bg-white border-2 border-blue-500 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 shadow-md hover:shadow-lg">
                    View Program Details
                  </button>
                </div>
              </AnimatedSection> */}
            </div>

            {/* Right Column - Stats Grid */}
            <AnimatedSection animation="fade-left" delay={0.3}>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  {successMetrics.map((item, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:border-blue-300 hover:shadow-md transition-all duration-300"
                    >
                      <div className="text-3xl font-bold text-gray-900 mb-2">
                        {item.value}
                      </div>
                      <div className="text-gray-600 text-sm mb-1">
                        {item.metric}
                      </div>
                      <div className="flex items-center gap-1 text-green-600 text-sm">
                        <span>↑ {item.trend}</span>
                        <span className="text-gray-500 text-xs">
                          this month
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Interview Types Preview */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Specialized Programs
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {interviewTypes.slice(0, 3).map((type, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm border border-blue-200 font-medium"
                      >
                        {type.type}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Interview Types Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection animation="fade-up" delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Specialized Interview Programs
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Choose from our targeted programs designed for specific
                interview types
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interviewTypes.map((type, index) => (
              <InterviewTypeCard key={index} {...type} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      
<section className="py-20 bg-gradient-to-b from-white to-blue-50/50">
  <div className="max-w-4xl mx-auto px-4 sm:px-6">
    <AnimatedSection animation="fade-up" delay={0.1}>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
            5-Phase Transformation Journey
          </span>
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Systematic approach to build interview confidence and competence
        </p>
      </div>
    </AnimatedSection>

    <div className="relative">
      {/* Central timeline line */}
      <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-red-500 -translate-x-1/2"></div>
      
      {/* Timeline items - all on right side for cleaner look */}
      <div className="space-y-12">
        {processSteps.map((step, index) => (
          <AnimatedSection key={index} animation="fade-right" delay={index * 0.15}>
            <div className="relative pl-0 lg:pl-1/2 lg:pr-12">
              {/* Timeline dot */}
              <div className="absolute left-0 lg:left-1/2 top-8 w-4 h-4 bg-white border-4 border-blue-500 rounded-full -translate-x-1/2 transform z-10"></div>
              
              {/* Content */}
              <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 ml-0 lg:ml-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-red-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-white">{step.phase}</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-blue-600">PHASE {step.phase}</div>
                    <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">
                  {step.description}
                </p>

                {/* Activities */}
                <div className="flex flex-wrap gap-2">
                  {step.activities.map((activity, i) => (
                    <span 
                      key={i} 
                      className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium border border-blue-200 hover:bg-blue-100 transition-colors duration-300"
                    >
                      {activity}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AnimatedSection animation="fade-up" delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Advanced Preparation Features
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Cutting-edge tools and methodologies for optimal preparation
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyFeatures.map((feature, index) => (
              <FeatureBubble key={index} {...feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Questions & Coaches Split Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50/30 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="">
            {/* Left - Common Questions */}
            <div>
              <AnimatedSection animation="fade-right" delay={0.1}>
                <div className="mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Master Common Questions
                  </h2>
                  <p className="text-gray-600">
                    Prepare for frequently asked questions with categorized
                    difficulty levels
                  </p>
                </div>
              </AnimatedSection>

              <QuestionTabs questions={commonQuestions} />
            </div>

            {/* Right - Expert Coaches */}
            {/* <div>
              <AnimatedSection animation="fade-left" delay={0.1}>
                <div className="mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Learn From Experts
                  </h2>
                  <p className="text-gray-600">
                    Get coached by industry experts with proven track records
                  </p>
                </div>
              </AnimatedSection>

              <div className="space-y-6">
                {coaches.map((coach, index) => (
                  <CoachCard key={index} {...coach} index={index} />
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <AnimatedSection animation="zoom-in" delay={0.1}>
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-600 to-red-600 p-1">
              <div className="bg-white rounded-3xl p-8 md:p-12 text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Ready to Ace Your Interview?
                </h3>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                  Join hundreds of successful students who transformed their
                  interview performance with our program
                </p>
                <div className="">
                  <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-red-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                    Visit Us Now
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
