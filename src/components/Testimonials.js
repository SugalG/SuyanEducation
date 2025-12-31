"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, GraduationCap } from "lucide-react";

export default function Testimonials() {
    const [items, setItems] = useState([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        fetch("/api/testimonials")
            .then((res) => res.json())
            .then(setItems);
    }, []);

    if (!items.length) return null;

    const t = items[index];

    const initials = t.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .slice(0, 2);

    return (
        <section className="py-24 bg-transparent">
            <h2 className="text-4xl font-bold text-red-700 text-center mb-4">
                Our Success Stories
            </h2>
            <p className="mt-3 text-gray-600 text-center text-lg mb-4">
                Inspiring stories from students who turned ambition into achievement
            </p>

            <div className="max-w-5xl mx-auto px-6">

                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -60 }}
                        transition={{ duration: 0.4 }}
                        className="bg-white rounded-3xl shadow-lg p-10 relative"
                    >
                        <div className="absolute -top-6 left-10 bg-red-700 w-12 h-12 rounded-full flex items-center justify-center">
                            <Quote className="text-white" />
                        </div>

                        <div className="grid md:grid-cols-[1fr,2fr] gap-8 items-center">
                            {/* Left */}
                            <div className="text-center md:text-left">
                                <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-red-100 mx-auto md:mx-0">
                                    {t.imageUrl ? (
                                        <img src={t.imageUrl} className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-red-50 text-red-700 text-2xl font-bold">
                                            {initials}
                                        </div>
                                    )}
                                </div>

                                <h3 className="mt-4 text-xl font-semibold">{t.name}</h3>

                                {t.country && (
                                    <div className="flex items-center gap-2 justify-center md:justify-start text-red-700 mt-1">
                                        <GraduationCap size={18} />
                                        {t.country}
                                    </div>
                                )}

                                {t.program && <p className="text-gray-600">{t.program}</p>}
                                {t.year && <p className="text-sm text-gray-500">Class of {t.year}</p>}

                                {t.highlight && (
                                    <span className="inline-block mt-3 bg-red-100 text-red-700 px-4 py-1 rounded-full text-sm">
                                        ✨ {t.highlight}
                                    </span>
                                )}
                            </div>

                            {/* Right */}
                            <blockquote className="text-lg italic text-gray-700 leading-relaxed">
                                “{t.message}”
                            </blockquote>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Nav */}
                <div className="flex justify-center items-center gap-4 mt-8">
                    <button onClick={() => setIndex((index - 1 + items.length) % items.length)}>
                        <ChevronLeft />
                    </button>

                    <div className="flex gap-2">
                        {items.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setIndex(i)}
                                className={`h-2 rounded-full ${i === index ? "w-8 bg-red-700" : "w-2 bg-red-300"
                                    }`}
                            />
                        ))}
                    </div>

                    <button onClick={() => setIndex((index + 1) % items.length)}>
                        <ChevronRight />
                    </button>
                </div>
            </div>
        </section>
    );
}
