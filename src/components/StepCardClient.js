// components/StepCardClient.tsx
"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";



export default function StepCardClient({
  stepNumber,
  icon,
  title,
  description,
  features,
  delay,
  isLeft
}) {
  const Icon = Icons[icon];

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50, y: 20 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="group relative"
    >
      {/* Card Background with Gradient Border */}
      <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-blue-700 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
      
      {/* Main Card */}
      <div className="relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
        {/* Step Number Badge */}
        <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-r from-red-600 to-blue-800 flex items-center justify-center shadow-lg">
          <span className="text-white font-bold">{stepNumber}</span>
        </div>

        {/* Icon and Title */}
        <div className="flex items-start gap-4 mb-6">
          <div className="p-3 rounded-xl bg-gradient-to-br from-red-100 to-blue-100 text-red-600 group-hover:scale-110 transition-transform duration-300">
            {Icon && <Icon size={28} strokeWidth={2} />}
          </div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent pt-1">
            {title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-6 text-lg">
          {description}
        </p>

        {/* Features List */}
        <div className="space-y-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: delay + (index * 0.1) }}
              className="flex items-center gap-3"
            >
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              <span className="text-gray-700">{feature}</span>
            </motion.div>
          ))}
        </div>

        {/* Hover Indicator */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-blue-700 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
      </div>
    </motion.div>
  );
}