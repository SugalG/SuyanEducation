"use client";

import { useState } from "react";
import { X, RotateCw } from "lucide-react";

const certificates = [
    { src: "/certificates/Byabasaye Darta Front.jpg", title: "Byabasaye Darta Front" },
    { src: "/certificates/Company Registrar.jpg", title: "Company Registrar" },
    { src: "/certificates/NEW VAT.jpg", title: "NEW VAT" },
    { src: "/certificates/AIM NARA Itakusyo.jpg", title: "AIM NARA Itakusyo" },
    { src: "/certificates/Asian Itakusyo.jpg", title: "Asian Itakusyo" },
    { src: "/certificates/Australia Counsellor course certificate.png", title: "Australia Counsellor Course" },
    { src: "/certificates/Certificate of Representation (Suyan).png", title: "Certificate of Representation" },
    { src: "/certificates/ECAN_MEMBERSHIP.jpg", title: "ECAN Membership" },
    { src: "/certificates/London Metropolitan University Agent Training.png", title: "London Metropolitan University" },
    { src: "/certificates/Midream Japanese Language School.jpg", title: "Midream Japanese Language School" },
    { src: "/certificates/Newglobal Language School.jpg", title: "Newglobal Language School" },
    { src: "/certificates/Northeastern University London Agent Training.png", title: "Northeastern University London" },
    { src: "/certificates/Ravensbourne University London Agent Training.png", title: "Ravensbourne University London" },
    { src: "/certificates/TIBC Itakusyo.jpg", title: "TIBC Itakusyo" },
    { src: "/certificates/TITI Certificate.jpg", title: "TITI Certificate" },
    { src: "/certificates/JALSAN_CERTIFICATE.jpg", title: "JALSAN CERTIFICATE" },
    { src: "/certificates/MOE Certificate.jpg", title: "MOE Certificate" },
    { src: "/certificates/CTEVT_single.jpg", title: "CTEVT_single" },
];

export default function CertificatesSection() {
    const [selected, setSelected] = useState(null);
    const [rotation, setRotation] = useState(0);

    const handleRotate = () => {
        setRotation((prev) => (prev + 90) % 360);
    };

    const handleClose = () => {
        setSelected(null);
        setRotation(0); // Reset rotation when closing
    };

    return (
        <>
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                            Certifications & Accreditations
                        </h2>
                        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                            Official certifications and institutional partnerships validating our credibility.
                        </p>
                    </div>

                    {/* Masonry Grid */}
                    <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                        {certificates.map((cert, index) => (
                            <div
                                key={index}
                                className="break-inside-avoid bg-gray-50 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group"
                                onClick={() => setSelected(cert)}
                            >
                                <div className="p-4">
                                    <img
                                        src={cert.src}
                                        alt={cert.title}
                                        className="w-full h-auto rounded-xl object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            {selected && (
                <div
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-6"
                    onClick={handleClose}
                >
                    <div
                        className="relative max-w-6xl w-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={handleClose}
                            className="absolute -top-12 right-0 text-white hover:opacity-70 transition"
                            aria-label="Close"
                        >
                            <X size={32} />
                        </button>

                        {/* Rotate Button */}
                        <button
                            onClick={handleRotate}
                            className="absolute -top-12 right-12 text-white hover:opacity-70 transition mr-4"
                            aria-label="Rotate image"
                        >
                            <RotateCw size={28} />
                        </button>

                        {/* Image Title (optional) */}
                        <div className="absolute -top-12 left-0 text-white text-lg font-medium">
                            {selected.title}
                        </div>

                        {/* Full Image with Rotation */}
                        <div className="flex items-center justify-center">
                            <img
                                src={selected.src}
                                alt={selected.title}
                                className="w-full max-h-[85vh] object-contain rounded-xl shadow-2xl transition-transform duration-300"
                                style={{
                                    transform: `rotate(${rotation}deg)`,
                                    maxWidth: rotation % 180 === 0 ? '100%' : '85vh', // Adjust max width for rotated images
                                }}
                            />
                        </div>

                        {/* Rotation Indicator (optional) */}
                        {rotation !== 0 && (
                            <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                                {rotation}° rotated
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}