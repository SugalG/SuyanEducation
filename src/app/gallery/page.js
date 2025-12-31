import Link from "next/link";
import Image from "next/image";

async function getAlbums() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/gallery/albums`,
    { cache: "no-store" }
  );

  if (!res.ok) throw new Error("Failed to load gallery");
  return res.json();
}

export default async function GalleryPage() {
  const albums = await getAlbums();

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-3xl font-bold text-gray-900">Gallery</h1>
        <p className="mt-4 text-gray-600">
          Moments, events, and memories from our journey.
        </p>
      </div>

      {/* Albums */}
      {albums.length === 0 ? (
        <p className="text-center text-gray-500">
          No albums available yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {albums.map((album) => (
            <Link
              key={album.slug}
              href={`/gallery/${album.slug}`}
              className="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              {/* Cover image (FULLY VISIBLE) */}
              <div className="relative aspect-[4/3] bg-gray-100 flex items-center justify-center overflow-hidden">
                {album.coverImage ? (
                  <Image
                    src={album.coverImage}
                    alt={album.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="
                      object-contain
                      p-4
                      transition-transform duration-500
                      group-hover:scale-[1.02]
                    "
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-400 text-sm">
                    No cover image
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {album.title}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  {new Date(album.albumDate).toLocaleDateString()} ·{" "}
                  {album.photoCount} photos
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
