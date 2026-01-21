// components/TestFormat.tsx


import AnimatedSection from "../universityPlacement/AnimatedSection";



export default function TestFormat({ type, description, duration, availability, features, index }) {
  const isPopular = type === "TOEFL iBT";

  return (
    <AnimatedSection animation="zoom-in" delay={index * 0.1}>
      <div className={`relative h-full bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-2xl transition-all duration-500 ${isPopular ? 'border-2 border-red-300' : ''}`}>
        {/* Popular Badge */}
        {isPopular && (
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <div className="px-4 py-1 bg-gradient-to-r from-red-600 to-blue-600 text-white text-sm font-semibold rounded-full shadow-lg">
              Most Popular
            </div>
          </div>
        )}

        {/* Header */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{type}</h3>
          <p className="text-gray-600">{description}</p>
        </div>

        {/* Key Info */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">{duration}</div>
            <div className="text-sm text-gray-600">Duration</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-gray-900 mb-2">{availability}</div>
            <div className="text-sm text-gray-600">Availability</div>
          </div>
        </div>

        {/* Features */}
        <div>
          <div className="text-sm text-gray-500 mb-4">Key Features</div>
          <ul className="space-y-3">
            {features.map((feature, i) => (
              <li key={i} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-red-500 to-blue-500"></div>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-blue-500 rounded-b-2xl"></div>
      </div>
    </AnimatedSection>
  );
}