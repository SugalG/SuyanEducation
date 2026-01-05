import Link from "next/link";
import Image from "next/image";

export default function DestinationCard({ title, description, slug }) {
  return (
    <div
      className="
        bg-white rounded-2xl
        border border-gray-200
        overflow-hidden
        transition
        hover:shadow-xl
        hover:border-blue-500
      "
    >
      {/* Image */}
      <div className="relative h-[220px] w-full">
        <Image
          src={`/destinations/${slug}.webp`}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 320px"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed mb-5">
          {description}
        </p>

        <Link
          href={`/destinations/${slug}`}
          className="
            inline-flex items-center gap-2
            text-blue-600 font-semibold text-sm
            hover:gap-3 transition-all
          "
        >
          EXPLORE {title.toUpperCase()}
          <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  );
}
