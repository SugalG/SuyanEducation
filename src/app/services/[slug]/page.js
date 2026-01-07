import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { CheckCircle, ArrowRight, Target, Users, Clock, Award, Star, BookOpen, GraduationCap } from "lucide-react";

export default async function ServiceDetail({ params }) {
  const { slug } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/services/${slug}`,
    { cache: "no-store" }
  );

  if (!res.ok) return notFound();

  const service = await res.json();

  return (
    <main className="w-full overflow-hidden mt-24">
      {/* Modern Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-red-50 to-blue-50" />
        
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-red-100/30 to-transparent" />
        <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-100/30 to-transparent" />
        
        {/* Floating Circles */}
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-red-200/20 to-pink-200/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-blue-200/20 to-cyan-200/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div>
                {/* Service Badge */}
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white shadow-lg border border-gray-100 mb-8">
                  <div className="w-3 h-3 bg-gradient-to-r from-red-500 to-blue-600 rounded-full animate-pulse"></div>
                  <span className="text-lg font-semibold bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
                    Premium Service
                  </span>
                </div>

                {/* Main Title */}
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                  <span className="bg-gradient-to-r from-red-600 via-red-500 to-blue-950 bg-clip-text text-transparent">
                    {service.title}
                  </span>
                </h1>

                {/* Decorative Lines */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-red-400 rounded-full"></div>
                  <div className="w-8 h-1 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full"></div>
                  <div className="w-4 h-1 bg-gradient-to-r from-red-300 to-red-200 rounded-full"></div>
                </div>

                {/* Summary */}
                {service.summary && (
                  <p className="text-xl text-gray-700 leading-relaxed mb-10">
                    {service.summary}
                  </p>
                )}

                {/* Key Features */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-12">
                  <div className="flex flex-col items-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-red-200 transition-all">
                    <Target className="w-8 h-8 text-red-600 mb-2" />
                    <span className="text-sm font-semibold text-gray-800 text-center">Targeted Approach</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-red-200 transition-all">
                    <Users className="w-8 h-8 text-red-600 mb-2" />
                    <span className="text-sm font-semibold text-gray-800 text-center">Expert Guidance</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-red-200 transition-all">
                    <Award className="w-8 h-8 text-red-600 mb-2" />
                    <span className="text-sm font-semibold text-gray-800 text-center">Proven Results</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    <span>Get Started Now</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="#benefits"
                    className="inline-flex items-center justify-center px-10 py-5 bg-white text-gray-800 font-semibold rounded-2xl border-2 border-gray-200 hover:border-red-300 hover:shadow-xl transition-all duration-300"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Hero Image/Graphic */}
            <Reveal delay={0.3}>
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  {/* Gradient Border Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-pink-500 to-blue-500 rounded-3xl blur opacity-30"></div>
                  
                  {/* Image Container */}
                  <div className="relative rounded-3xl overflow-hidden border-8 border-white bg-gradient-to-br from-gray-50 to-white">
                    {service.heroImage ? (
                      <img
                        src={service.heroImage}
                        alt={service.title}
                        className="w-full h-[500px] object-cover"
                      />
                    ) : (
                      <div className="w-full h-[500px] flex items-center justify-center">
                        <div className="text-center p-12">
                          <GraduationCap className="w-24 h-24 text-gray-300 mx-auto mb-6" />
                          <div className="text-2xl font-semibold text-gray-400">
                            {service.title}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Floating Stats */}
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-red-600 to-blue-950 text-white p-6 rounded-2xl shadow-2xl">
                  <div className="text-center">
                    <div className="text-3xl font-bold">100%</div>
                    <div className="text-sm font-medium opacity-90">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section id="benefits" className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Section Header */}
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
                Service Details
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive information about our {service.title.toLowerCase()} service
            </p>
          </div>
        </Reveal>

        {/* Content Container */}
        <Reveal delay={0.2}>
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl border-2 border-gray-100 p-10 shadow-xl">
            <div className="prose prose-xl max-w-none">
              <div dangerouslySetInnerHTML={{ __html: service.content }} />
            </div>
          </div>
        </Reveal>

        {/* Key Benefits Grid */}
        <div className="mt-20">
          <Reveal>
            <div className="text-center mb-12">
              <h3 className="text-3xl sm:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
                  Key Benefits
                </span>
              </h3>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Reveal delay={0.1}>
              <div className="group bg-white rounded-3xl border-2 border-gray-100 p-8 hover:border-red-300 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-red-400 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">Expert Guidance</h4>
                </div>
                <p className="text-gray-600">
                  Personalized support from experienced professionals who understand your unique needs and goals.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="group bg-white rounded-3xl border-2 border-gray-100 p-8 hover:border-red-300 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-red-400 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">Time-Efficient</h4>
                </div>
                <p className="text-gray-600">
                  Streamlined processes that save you time and reduce stress throughout your application journey.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="group bg-white rounded-3xl border-2 border-gray-100 p-8 hover:border-red-300 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-red-400 flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">Premium Quality</h4>
                </div>
                <p className="text-gray-600">
                  High-quality service standards ensuring attention to detail and exceptional results every time.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative bg-gradient-to-b from-gray-50/50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <h3 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
                  Our Process
                </span>
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A streamlined approach to ensure your success
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "01", title: "Consultation", desc: "Initial assessment and goal setting" },
              { number: "02", title: "Planning", desc: "Custom strategy development" },
              { number: "03", title: "Execution", desc: "Implementation with precision" },
              { number: "04", title: "Support", desc: "Ongoing guidance and follow-up" }
            ].map((step, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <div className="group relative">
                  <div className="bg-white rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                    <div className="text-4xl font-bold bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent mb-4">
                      {step.number}
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h4>
                    <p className="text-gray-600">{step.desc}</p>
                  </div>
                  
                  {/* Connector Line (except for last) */}
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-red-300 to-blue-300 transform -translate-y-1/2"></div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-blue-50" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-gradient-to-r from-red-200/20 to-blue-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <div className="bg-gradient-to-r from-red-600 to-blue-950 rounded-3xl p-12 shadow-2xl">
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Ready to Begin Your Journey?
              </h3>
              <p className="text-xl text-red-100 mb-10 max-w-2xl mx-auto">
                Take the first step towards achieving your educational goals with our expert guidance
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-3 px-12 py-5 bg-white text-gray-900 font-bold rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <span>Get Free Consultation</span>
                  <BookOpen className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </a>
                <a
                  href="tel:+977-1234567890"
                  className="inline-flex items-center justify-center px-12 py-5 bg-transparent border-2 border-white text-white font-bold rounded-2xl hover:bg-white/10 transition-all duration-300"
                >
                  Speak with Expert
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}