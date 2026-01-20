

import AnimatedSection from "../universityPlacement/AnimatedSection";



export default function ScoreComparison({ scores }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {scores.map((score, index) => (
        <AnimatedSection key={index} animation="zoom-in" delay={index * 0.1}>
          <div className="group h-full">
            <div className="relative h-full bg-white rounded-2xl border border-gray-200 p-6 hover:border-red-300 hover:shadow-xl transition-all duration-300">
              {/* Score Badge */}
              <div className="mb-4">
                <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-red-50 to-blue-50 border border-red-100">
                  <span className="text-lg font-bold bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
                    {score.score}
                  </span>
                </div>
              </div>

              {/* Level */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {score.level}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-6">
                {score.description}
              </p>

              {/* Universities */}
              <div>
                <div className="text-sm text-gray-500 mb-2">Suitable for:</div>
                <ul className="space-y-2">
                  {score.universities.map((uni, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                      <span className="text-sm text-gray-700">{uni}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>
      ))}
    </div>
  );
}