"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.log("Autoplay prevented:", error);
            });
        }

        // Handle video aspect ratio
        const handleResize = () => {
            if (!video) return;
            
            // Get video's natural dimensions
            const videoAspectRatio = video.videoWidth / video.videoHeight;
            const containerAspectRatio = window.innerWidth / (window.innerHeight * 0.8);
            
            // Choose between cover or contain based on aspect ratio
            if (videoAspectRatio > containerAspectRatio) {
                video.style.objectFit = 'cover';
                video.style.height = '100%';
                video.style.width = 'auto';
            } else {
                video.style.objectFit = 'cover';
                video.style.width = '100%';
                video.style.height = 'auto';
            }
        };

        // Set initial sizing
        if (video.videoWidth > 0) {
            handleResize();
        } else {
            video.addEventListener('loadedmetadata', handleResize);
        }

        window.addEventListener('resize', handleResize);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        video.play().catch(e => console.log("Playback error:", e));
                    } else {
                        video.pause();
                    }
                });
            },
            { threshold: 0.5 }
        );

        observer.observe(video);

        return () => {
            observer.disconnect();
            window.removeEventListener('resize', handleResize);
            if (video) {
                video.pause();
                video.currentTime = 0;
            }
        };
    }, []);

    return (
        <section className="relative h-screen w-full overflow-hidden">

            {/* Video Background - REMOVED mt-24 */}
            <div className="absolute inset-0 w-full h-full mt-24">
                <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="absolute w-full h-full object-cover"
                    style={{ 
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        minWidth: '100%',
                        minHeight: '100%'
                    }}
                >
                    <source src="/timeline 1.mp4" type="video/mp4" />
                    {/* Fallback image if video fails to load */}
                    <div 
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: "url('/hero-bg.png')" }}
                    />
                </video>
                
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Content - Adjusted positioning */}
            <div className="relative z-10 h-full flex items-center justify-center px-6 pt-16">
                <div className="max-w-5xl w-full text-center">
                    {/* Text - REMOVED mt-8 since we have pt-16 on parent */}
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">
                        Study in Japan with Trusted Guidance
                    </h1>

                    <p className="mt-4 text-lg md:text-xl text-white/90">
                        Student Visa • Language Preparation • University Placement
                    </p>
                </div>
            </div>
        </section>
    );
}