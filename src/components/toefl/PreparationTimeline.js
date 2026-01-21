// components/PreparationTimeline.tsx

import AnimatedSection from "../universityPlacement/AnimatedSection";



export default function PreparationTimeline({ timeline }) {
  return (
    <div className="relative">
      {/* Connecting Line */}
      {/* <div className="hidden lg:block absolute left-1/2 top-20 bottom-20 w-1 bg-gradient-to-b from-red-500 via-purple-500 to-blue-500 -translate-x-1/2"></div> */}
      
      <div className="space-y-12">
        {timeline.map((phase, index) => (
          <AnimatedSection key={index} animation="fade-up" delay={index * 0.15}>
            <div className={`flex flex-col lg:flex-row items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8`}>
              {/* Timeline Dot */}
              <div className="relative flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-red-600 to-blue-600 flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">{index + 1}</span>
                </div>
                
                {/* Connecting Dot */}
                <div className="hidden lg:block absolute top-1/2 w-4 h-4 bg-white border-4 border-red-500 rounded-full transform -translate-y-1/2"
                  style={{
                    [index % 2 === 0 ? 'right' : 'left']: '-30px'
                  }}
                ></div>
              </div>

              {/* Content Card */}
              <div className="flex-1">
                <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="mb-2">
                    <span className="text-sm font-semibold text-red-600">{phase.time}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    Preparation Phase
                  </h3>
                  
                  <ul className="space-y-3">
                    {phase.tasks.map((task, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-red-500 to-blue-500 mt-2"></div>
                        <span className="text-gray-700">{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}