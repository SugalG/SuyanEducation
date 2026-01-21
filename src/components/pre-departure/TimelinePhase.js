// components/TimelinePhase.tsx


import AnimatedSection from "../universityPlacement/AnimatedSection";



export default function TimelinePhase({ phase, title, tasks, index, alignment }) {
  return (
    <AnimatedSection animation="fade-up" delay={index * 0.15}>
      {/* Mobile Layout */}
      <div className="md:hidden">
        <div className="relative pl-12">
          {/* Timeline Dot */}
          <div className="absolute left-4 top-6 w-4 h-4 bg-white border-4 border-blue-500 rounded-full -translate-x-1/2 z-10"></div>
          
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg">
            <div className="mb-2">
              <span className="text-sm font-semibold text-blue-600">{phase}</span>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {title}
            </h3>
            
            <ul className="space-y-2">
              {tasks.map((task, i) => (
                <li key={i} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
                  <span className="text-gray-700">{task}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className={`flex ${alignment === "left" ? "flex-row" : "flex-row-reverse"} items-start gap-8`}>
          {/* Content Card */}
          <div className="flex-1">
            <div className={`bg-white rounded-2xl border border-gray-200 p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 ${alignment === "left" ? "ml-12" : "mr-12"}`}>
              <div className="mb-2">
                <span className="text-sm font-semibold text-blue-600">{phase}</span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {title}
              </h3>
              
              <ul className="space-y-2">
                {tasks.map((task, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
                    <span className="text-gray-700">{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Timeline Dot */}
          <div className="relative flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-green-600 flex items-center justify-center shadow-lg">
              <span className="text-white font-bold">{index + 1}</span>
            </div>
            
            {/* Connecting Line */}
            {index < 3 && (
              <div className="absolute left-1/2 top-full w-1 h-12 bg-gradient-to-b from-blue-500 to-purple-500 -translate-x-1/2"></div>
            )}
          </div>

          {/* Empty Space for alternating layout */}
          <div className="flex-1"></div>
        </div>
      </div>
    </AnimatedSection>
  );
}