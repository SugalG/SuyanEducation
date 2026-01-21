// components/ProcessMilestone.tsx


import AnimatedSection from "../universityPlacement/AnimatedSection";



export default function ProcessMilestone({ phase, title, description, activities, index, alignment }) {
  return (
    <AnimatedSection animation="fade-up" delay={index * 0.15}>
      {/* Desktop Layout */}
      {alignment !== "center" ? (
        <div className={`hidden lg:flex items-center ${alignment === "left" ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8`}>
          {/* Phase Circle - Left side for all */}
          <div className="relative flex-shrink-0">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-600 to-red-600 flex items-center justify-center shadow-lg">
              <span className="text-2xl font-bold text-white">{phase}</span>
            </div>
            
            {/* Connecting Dot on timeline */}
            <div className="absolute top-1/2 w-6 h-6 bg-white border-4 border-blue-500 rounded-full transform -translate-y-1/2 shadow-lg"
              style={{
                [alignment === "left" ? "right" : "left"]: "-50px"
              }}
            ></div>
          </div>

          {/* Content Card */}
          <div className={`flex-1 ${alignment === "left" ? "lg:pr-12" : "lg:pl-12"}`}>
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
              {/* Direction Arrow */}
              <div 
                className={`hidden lg:block absolute top-1/2 w-0 h-0 border-t-8 border-b-8 border-transparent transform -translate-y-1/2 ${
                  alignment === "left" 
                    ? "border-l-8 border-l-white right-0 translate-x-full" 
                    : "border-r-8 border-r-white left-0 -translate-x-full"
                }`}
              ></div>
              
              <div className="mb-2">
                <span className="text-sm font-semibold text-blue-600">PHASE {phase}</span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {title}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {description}
              </p>

              {/* Activities */}
              <div className="flex flex-wrap gap-2">
                {activities.map((activity, i) => (
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
        </div>
      ) : (
        /* Mobile Layout */
        <div className="lg:hidden flex flex-col items-center">
          <div className="relative w-full">
            {/* Phase Circle */}
            <div className="relative mx-auto mb-8">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-600 to-red-600 flex items-center justify-center shadow-lg mx-auto">
                <span className="text-2xl font-bold text-white">{phase}</span>
              </div>
              
              {/* Connecting Line to next */}
              {index < 4 && (
                <div className="absolute left-1/2 top-full w-1 h-12 bg-gradient-to-b from-blue-500 to-purple-500 transform -translate-x-1/2"></div>
              )}
            </div>

            {/* Content Card */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
              <div className="mb-2">
                <span className="text-sm font-semibold text-blue-600">PHASE {phase}</span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {title}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {description}
              </p>

              {/* Activities */}
              <div className="flex flex-wrap gap-2">
                {activities.map((activity, i) => (
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
        </div>
      )}
    </AnimatedSection>
  );
}