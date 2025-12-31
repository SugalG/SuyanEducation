import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
    const { slug } = await params;

    const destination = await prisma.destination.findUnique({
        where: { slug },
    });

    if (!destination) return {};

    return {
        title: `Study in ${destination.country} from Nepal | Suyan Education`,
        description: destination.description,
    };
}

export default async function DestinationPage({ params }) {
    const { slug } = await params;

    const destination = await prisma.destination.findUnique({
        where: { slug },
    });

    if (!destination) notFound();

    const whyPoints = destination.whyPoints?.split("\n") || [];
    const fields = destination.popularFields?.split("\n") || [];
    const visaUpdates = destination.visaUpdates?.split("\n") || [];

    return (
        <main className="max-w-4xl mx-auto px-5 py-16">

            {/* HERO */}
            <section className="relative mb-14 rounded-3xl overflow-hidden shadow-lg bg-black">

                {/* Background image (FULLY VISIBLE) */}
                <img
                    src={`/destinations/${destination.slug}.webp`}
                    alt={`Study in ${destination.country}`}
                    className="w-full h-auto max-h-[380px] mx-auto object-contain"
                />

                {/* Overlay only over image area */}
                <div className="absolute inset-0 bg-black/20 pointer-events-none" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-end text-center text-red-500 px-6 pb-6 sm:pb-8">
                    <h1 className="text-2xl sm:text-3xl font-bold drop-shadow-lg">
                        Study in {destination.country} from Nepal 2026
                    </h1>

                    <p className="mt-2 text-sm text-white/90 drop-shadow">
                        Trusted education guidance for Nepalese students
                    </p>
                </div>

            </section>



            {/* INTRO */}
            <section className="mb-14">
                <h2 className="text-3xl font-bold text-brand-red mb-4">
                    Study in {destination.country} – A Premier Destination for Nepalese Students
                </h2>
                <p className="text-gray-700 leading-relaxed">
                    {destination.description}
                </p>
            </section>

            {/* WHY COUNTRY */}
            {whyPoints.length > 0 && (
                <section className="mb-14">
                    <h3 className="text-2xl font-semibold mb-4">
                        Why {destination.country}?
                    </h3>
                    <ul className="space-y-3 list-decimal pl-5 text-gray-700">
                        {whyPoints.map((point, i) => (
                            <li key={i}>{point}</li>
                        ))}
                    </ul>
                </section>
            )}

            {/* EDUCATION SYSTEM */}
            {destination.education && (
                <section className="mb-14">
                    <h3 className="text-2xl font-semibold mb-4">
                        {destination.country} Education System
                    </h3>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                        {destination.education}
                    </p>
                </section>
            )}

            {/* POPULAR FIELDS */}
            {fields.length > 0 && (
                <section className="mb-14">
                    <h3 className="text-2xl font-semibold mb-4">
                        Popular Fields of Study
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {fields.map((field, i) => (
                            <div
                                key={i}
                                className="bg-white/70 backdrop-blur border rounded-xl p-4 shadow-sm"
                            >
                                {field}
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* VISA UPDATES */}
            {visaUpdates.length > 0 && (
                <section className="mb-16">
                    <h3 className="text-2xl font-semibold mb-4">
                        Key Updates for Studying in {destination.country}
                    </h3>
                    <ul className="space-y-3 text-gray-700 list-disc pl-5">
                        {visaUpdates.map((v, i) => (
                            <li key={i}>{v}</li>
                        ))}
                    </ul>
                </section>
            )}

            {/* CTA */}
            <section className="text-center">
                <a
                    href="/contact"
                    className="inline-block bg-brand-red text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-red-800 transition"
                >
                    Get Free Counseling
                </a>
            </section>

        </main>
    );
}
