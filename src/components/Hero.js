export default function Hero() {
    return (
        <section className="relative h-[80vh] pt-28 w-full overflow-hidden">

            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/hero-bg.png')", 
                }}
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Content */}
            <div className="relative z-10 h-full flex items-center justify-center px-6">
                <div className="max-w-5xl w-full text-center">
                  
                 

                    {/* Text */}
                    <h1 className="mt-8 text-3xl md:text-5xl font-bold text-white">
                        Study in Japan with Trusted Guidance
                    </h1>

                    <p className="mt-4 text-lg text-white/90">
                        Student Visa • Language Preparation • University Placement
                    </p>

                 
                   
                </div>
            </div>
        </section>
    );
}
