export default async function ServicesPage() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/services`,
    { cache: "no-store" }
  );
  const services = await res.json();

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-10 text-center">
        Test Preparation
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        {services.map((s) => (
          <a
            key={s.id}
            href={`/services/${s.slug}`}
            className="border rounded-xl p-6 bg-white hover:border-red-400 transition"
          >
            <h2 className="text-xl font-semibold mb-2">{s.title}</h2>
            <p className="text-gray-600 text-sm">
              {s.summary}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
