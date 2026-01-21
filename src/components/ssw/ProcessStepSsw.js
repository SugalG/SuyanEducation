// components/ProcessStep.tsx


import AnimatedSection from "../universityPlacement/AnimatedSection";



export default function ProcessStepSsw({ step, title, description, duration, requirements, index }) {
  return (
    <AnimatedSection animation="zoom-in" delay={index * 0.1}>
      <div className="group h-full">
        <div className="relative h-full bg-white rounded-2xl border border-gray-200 p-6 hover:border-red-300 hover:shadow-xl transition-all duration-500">
          {/* Step Number */}
          <div className="absolute -top-3 -left-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-red-600 to-blue-600 flex items-center justify-center text-white font-bold shadow-lg">
              {step}
            </div>
          </div>

          {/* Step Header */}
          <div className="mb-4">
            <div className="text-sm text-red-600 font-semibold mb-1">Step {step}</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
          </div>

          {/* Duration */}
          <div className="mb-4 p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Estimated Time</span>
              <span className="font-semibold text-gray-900">{duration}</span>
            </div>
          </div>

          {/* Requirements */}
          <div>
            <div className="text-sm text-gray-500 mb-2">Requirements</div>
            <ul className="space-y-2">
              {requirements.slice(0, 2).map((req, i) => (
                <li key={i} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
                  <span className="text-sm text-gray-700">{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}