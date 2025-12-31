"use client";

import { useEffect, useState } from "react";

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
        <section className="max-w-7xl mx-auto px-6 mt-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                {/* MAP */}
                <div className="relative w-full h-[460px] sm:h-[520px] lg:h-[620px]">

                    <img
                        src="/world-map-clean.png"
                        className="absolute inset-0 w-full h-full object-contain"
                        alt="World Map"
                    />

                    <svg
                        viewBox="0 0 2000 1000"
                        className="absolute inset-0 w-full h-full"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        {/* Origin */}
                        <circle cx={ORIGIN.x} cy={ORIGIN.y} r="6" fill="#d10000" />
                        <circle cx={ORIGIN.x} cy={ORIGIN.y} r="16" fill="#d10000" opacity="0.2" />

                        {ROUTES.map((route, i) => {
                            const pathId = `flightPath-${i}`;
                            const path = arcPath(ORIGIN, route.to);

                            return (
                                <g key={route.label}>
                                    {/* Destination dot */}
                                    <circle
                                        cx={route.to.x}
                                        cy={route.to.y}
                                        r="5"
                                        fill="#d10000"
                                    />

                                    {/* Flight path */}
                                    <path
                                        id={pathId}
                                        d={path}
                                        fill="none"
                                        stroke="#d10000"
                                        strokeWidth="3"
                                        strokeDasharray="6 10"
                                        opacity="0.7"
                                    />

                                    {/* Plane */}
                                    <g transform="translate(-14 -14) rotate(90) scale(2.25)">
                                        <path
                                            d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3-1 3 1v-1.5L12 19v-5.5l9 2.5z"
                                            fill="#2563eb"
                                        />
                                        <animateMotion
                                            dur={`${2.5 + i * 0.5}s`}
                                            repeatCount="indefinite"
                                            rotate="auto"
                                        >
                                            <mpath href={`#${pathId}`} />
                                        </animateMotion>
                                    </g>
                                </g>
                            );
                        })}
                    </svg>

                </div>

                {/* WHY CHOOSE */}
                <div>
                    <h2 className="text-3xl font-bold text-red-500">
                        Why Choose Suyan Education?
                    </h2>
                    <p className="mt-4 text-gray-600">
                        We specialize in Japan-focused education pathways with clear guidance
                        from counseling to visa approval.
                    </p>
                    <ul className="mt-6 space-y-3">
                        <li>✔ Japan-first expertise</li>
                        <li>✔ Strong visa success record</li>
                        <li>✔ Transparent counseling</li>
                        <li>✔ End-to-end support</li>
                    </ul>
                </div>

            </div>
        </section>
    );
}
