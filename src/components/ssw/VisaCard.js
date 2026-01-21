// components/VisaCard.tsx


import AnimatedSection from "../universityPlacement/AnimatedSection";



export default function VisaCard({ type, code, duration, renewal, eligibility, target, index, isPopular }) {
  return (
    <AnimatedSection animation="zoom-in" delay={index * 0.1}>
      <div className={`relative h-full bg-white rounded-2xl border-2 ${isPopular ? 'border-red-500' : 'border-gray-200'} p-8 hover:shadow-2xl transition-all duration-500`}>
        {/* Popular Badge */}
        {isPopular && (
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <div className="px-4 py-1 bg-gradient-to-r from-red-600 to-blue-600 text-white text-sm font-semibold rounded-full shadow-lg">
              Recommended Path
            </div>
          </div>
        )}

        {/* Visa Code */}
        <div className="mb-6">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-red-50 to-blue-50 rounded-lg border border-red-100">
            <span className="text-2xl font-bold bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
              {code}
            </span>
          </div>
        </div>

        {/* Visa Type */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{type}</h3>

        {/* Details */}
        <div className="space-y-4 mb-6">
          <div className="flex justify-between items-center pb-2 border-b border-gray-100">
            <span className="text-gray-600">Duration</span>
            <span className="font-semibold text-gray-900">{duration}</span>
          </div>
          <div className="flex justify-between items-center pb-2 border-b border-gray-100">
            <span className="text-gray-600">Renewal</span>
            <span className="font-semibold text-gray-900">{renewal}</span>
          </div>
          <div className="pb-2 border-b border-gray-100">
            <div className="text-gray-600 mb-1">Eligibility</div>
            <div className="text-sm text-gray-900">{eligibility}</div>
          </div>
          <div>
            <div className="text-gray-600 mb-1">Target Workers</div>
            <div className="text-sm text-gray-900">{target}</div>
          </div>
        </div>

        {/* Key Feature */}
        <div className={`p-4 rounded-lg ${isPopular ? 'bg-gradient-to-r from-red-50 to-blue-50' : 'bg-gray-50'} border ${isPopular ? 'border-red-100' : 'border-gray-100'}`}>
          <div className="text-sm">
            {isPopular ? 
              "✓ Pathway to Permanent Residency" : 
              "✓ First step to advanced category"
            }
          </div>
        </div>

        {/* Bottom Accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-blue-500 rounded-b-2xl"></div>
      </div>
    </AnimatedSection>
  );
}