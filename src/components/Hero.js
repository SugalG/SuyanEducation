export default function Hero() {
    return (
        <section className="relative h-[80vh] pt-24 w-full overflow-hidden">

            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/hero-bg.png')", // Japanese gate image
                }}
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Content */}
            <div className="relative z-10 h-full flex items-center justify-center px-6">
                <div className="max-w-5xl w-full text-center">
                    {/* Video container */}
                    <div className="relative mx-auto w-full max-w-3xl rounded-xl overflow-hidden shadow-2xl border border-white/20">
                        <video
                            src="/office-video.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-auto"
                        />
                    </div>

                    {/* Text */}
                    <h1 className="mt-8 text-3xl md:text-5xl font-bold text-white">
                        Study in Japan with Trusted Guidance
                    </h1>

                    <p className="mt-4 text-lg text-white/90">
                        Student Visa • Language Preparation • University Placement
                    </p>

                    {/* CTA */}
                    <div className="mt-6 flex justify-center gap-4">
                        <a
                            href="/contact"
                            className="bg-red-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-800 transition"
                        >
                            Book Free Counseling
                        </a>

                        <a
                            href="https://wa.me/977XXXXXXXXXX"
                            className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
                        >
                            WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
