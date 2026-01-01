"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const ROUTES = [
    { label: "Japan", to: { x: 1668, y: 410 } },
    { label: "Australia", to: { x: 1650, y: 770 } },
    { label: "USA", to: { x: 420, y: 430 } },
    { label: "Europe", to: { x: 1050, y: 350 } },
];

const ORIGIN = { x: 1370, y: 470 }; // Nepal

function arcPath(from, to) {
    const mx = (from.x + to.x) / 2;
    const my = (from.y + to.y) / 2 - 120;
    return `M ${from.x} ${from.y} Q ${mx} ${my} ${to.x} ${to.y}`;
}

export default function GlobalReachSection() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((i) => (i + 1) % ROUTES.length);
        }, 3000);
        
        return () => clearInterval(timer);
    }, []);

    const route = ROUTES[index];
    const path = arcPath(ORIGIN, route.to);

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-10 md:mt-14 lg:mt-20 xl:mt-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                
                {/* LEFT CONTENT */}
                <div className="order-2 lg:order-1">
                    <div className="max-w-xl mx-auto lg:mx-0">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-red-600 leading-tight">
                            Our Global Reach
                        </h2>
                        <p className="mt-4 sm:mt-5 md:mt-6 text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl text-gray-600 leading-relaxed">
                            From Nepal to the world — we connect students with top educational 
                            opportunities across continents with a primary focus on Japan.
                        </p>
                        
                        <div className="mt-8 sm:mt-10 space-y-4 sm:space-y-5">
                            <div className="flex items-start space-x-3">
                                <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                                    <div className="h-3 w-3 rounded-full bg-red-600"></div>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 text-lg sm:text-xl">Japan-First Expertise</h4>
                                    <p className="text-gray-600 mt-1 text-sm sm:text-base">
                                        Deep knowledge of Japanese education system, culture, and visa processes.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex items-start space-x-3">
                                <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                                    <div className="h-3 w-3 rounded-full bg-red-600"></div>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 text-lg sm:text-xl">High Visa Success Rate</h4>
                                    <p className="text-gray-600 mt-1 text-sm sm:text-base">
                                        Proven track record with student visa approvals across multiple countries.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex items-start space-x-3">
                                <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                                    <div className="h-3 w-3 rounded-full bg-red-600"></div>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 text-lg sm:text-xl">End-to-End Support</h4>
                                    <p className="text-gray-600 mt-1 text-sm sm:text-base">
                                        Comprehensive guidance from university selection to pre-departure preparation.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex items-start space-x-3">
                                <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                                    <div className="h-3 w-3 rounded-full bg-red-600"></div>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 text-lg sm:text-xl">Global Network</h4>
                                    <p className="text-gray-600 mt-1 text-sm sm:text-base">
                                        Partnerships with universities and institutions worldwide, with strong focus on Asia-Pacific.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT - MAP */}
                <div className="order-1 lg:order-2">
                    <div className="relative w-full h-[400px] sm:h-[480px] md:h-[560px] lg:h-[620px] xl:h-[680px]">
                        {/* World Map Background */}
                        <div className="absolute inset-0 z-0">
                            <Image
                                src="/world-map-clean.png"
                                alt="World map showing global reach"
                                fill
                                className="object-contain"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                priority
                                quality={85}
                            />
                        </div>

                        {/* SVG with Animation */}
                        <svg
                            viewBox="0 0 2000 1000"
                            className="absolute inset-0 w-full h-full z-10"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            {/* Origin (Nepal) */}
                            <circle cx={ORIGIN.x} cy={ORIGIN.y} r="8" fill="#dc2626" className="animate-pulse" />
                            <circle cx={ORIGIN.x} cy={ORIGIN.y} r="24" fill="#dc2626" opacity="0.2" />
                            
                            {/* Nepal Label */}
                            <text
                                x={ORIGIN.x + 30}
                                y={ORIGIN.y - 10}
                                fill="#dc2626"
                                fontSize="28"
                                fontWeight="bold"
                                className="font-sans"
                            >
                                Nepal
                            </text>

                            {ROUTES.map((route, i) => {
                                const pathId = `flightPath-${i}`;
                                const path = arcPath(ORIGIN, route.to);
                                const isActive = i === index;

                                return (
                                    <g key={route.label} opacity={isActive ? 1 : 0.3}>
                                        {/* Destination dot */}
                                        <circle
                                            cx={route.to.x}
                                            cy={route.to.y}
                                            r="8"
                                            fill={isActive ? "#dc2626" : "#9ca3af"}
                                            className={isActive ? "animate-pulse" : ""}
                                        />
                                        
                                        {/* Destination label */}
                                        <text
                                            x={route.to.x + 30}
                                            y={route.to.y - 10}
                                            fill={isActive ? "#1f2937" : "#9ca3af"}
                                            fontSize="28"
                                            fontWeight={isActive ? "bold" : "normal"}
                                            className="font-sans transition-all duration-500"
                                        >
                                            {route.label}
                                        </text>

                                        {/* Flight path */}
                                        <path
                                            id={pathId}
                                            d={path}
                                            fill="none"
                                            stroke={isActive ? "#dc2626" : "#9ca3af"}
                                            strokeWidth={isActive ? "4" : "2"}
                                            strokeDasharray="8 12"
                                            className="transition-all duration-500"
                                        />

                                        {/* Animated plane - only show on active route */}
                                        {isActive && (
                                            <g transform="translate(-14 -14) rotate(90) scale(3)">
                                                <path
                                                    d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3-1 3 1v-1.5L12 19v-5.5l9 2.5z"
                                                    fill="#2563eb"
                                                    className="drop-shadow-lg"
                                                />
                                                <animateMotion
                                                    dur="2.5s"
                                                    repeatCount="indefinite"
                                                    rotate="auto"
                                                    begin="0s"
                                                >
                                                    <mpath href={`#${pathId}`} />
                                                </animateMotion>
                                            </g>
                                        )}
                                    </g>
                                );
                            })}
                        </svg>

                        {/* Current Destination Indicator */}
                        <div className="absolute bottom-4 left-4 right-4 z-20">
                            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-lg max-w-xs mx-auto">
                                <div className="flex items-center justify-center space-x-2">
                                    <div className="h-3 w-3 rounded-full bg-red-600 animate-pulse"></div>
                                    <span className="text-sm sm:text-base font-medium text-gray-900">
                                        Currently showing: <span className="text-red-600 font-bold">{ROUTES[index].label}</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Bar */}
            <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                <div className="bg-white rounded-xl p-4 sm:p-6 text-center border border-gray-200 shadow-sm">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-600">4+</div>
                    <div className="text-sm sm:text-base text-gray-600 mt-2">Destinations</div>
                </div>
                <div className="bg-white rounded-xl p-4 sm:p-6 text-center border border-gray-200 shadow-sm">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-600">95%</div>
                    <div className="text-sm sm:text-base text-gray-600 mt-2">Visa Success</div>
                </div>
                <div className="bg-white rounded-xl p-4 sm:p-6 text-center border border-gray-200 shadow-sm">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-600">500+</div>
                    <div className="text-sm sm:text-base text-gray-600 mt-2">Students Helped</div>
                </div>
                <div className="bg-white rounded-xl p-4 sm:p-6 text-center border border-gray-200 shadow-sm">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-600">50+</div>
                    <div className="text-sm sm:text-base text-gray-600 mt-2">Partner Institutes</div>
                </div>
            </div>
        </section>
    );
}