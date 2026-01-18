// components/LevelTimeline.tsx
"use client";

import { motion } from "framer-motion";


export default function LevelTimeline({ levels }) {
  return (
    <div className="relative">
      {/* Connecting Line */}
      <div className="hidden lg:block absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-blue-400 via-green-400 via-yellow-400 via-orange-400 to-red-400 -translate-y-1/2"></div>

      <div className="grid lg:grid-cols-5 gap-8">
        {levels.map((level, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative"
          >
            {/* Level Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
              {/* Level Badge */}
              <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${level.color} text-white font-bold mb-4`}>
                {level.level}
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3">{level.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{level.description}</p>
              
              <div className="mb-4">
                <div className="text-sm text-gray-500">Duration</div>
                <div className="font-semibold text-red-600">{level.duration}</div>
              </div>

              {/* Focus Areas */}
              <div className="space-y-2">
                <div className="text-sm text-gray-500">Focus Areas:</div>
                {level.focus.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline Dot */}
            <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-8 rounded-full bg-white border-4 border-red-500 z-10 -translate-y-1/2"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}