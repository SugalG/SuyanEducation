import Link from "next/link";
import Image from "next/image";

export default function DestinationCard({
  title,
  description,
  image,
  href,
}) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {title}
        </h3>

        <p className="text-sm text-gray-600 mb-4">
          {description}
        </p>

        <Link
          href={href}
          className="inline-flex items-center gap-1 text-blue-600 font-medium hover:gap-2 transition-all"
        >
          Explore {title}
          <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  );
}
