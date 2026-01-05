import { notFound } from "next/navigation";

export default async function ServiceDetail({ params }) {
  const { slug } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/services/${slug}`,
    { cache: "no-store" }
  );

  if (!res.ok) return notFound();

  const service = await res.json();

  return (
    <div>
      {/* HERO SECTION */}
      <section
        className="relative h-[60vh] min-h-[420px] flex items-end mt-32"
        style={
          service.heroImage
            ? {
                backgroundImage: `url(${service.heroImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }
            : undefined
        }
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-red-500 mb-4">
            {service.title}
          </h1>

          {service.summary && (
            <p className="text-white max-w-2xl text-lg leading-relaxed">
              {service.summary}
            </p>
          )}
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="prose max-w-none">
          {service.content}
        </div>
      </section>
    </div>
  );
}
