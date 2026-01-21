import Link from "next/link";
import Image from "next/image";
import { headers } from "next/headers";
import { Camera, Calendar, Image as ImageIcon, Users } from "lucide-react";

async function getAlbums() {
  
  const headersList = await headers();
  const host = headersList.get("host");

  const protocol =
    process.env.NODE_ENV === "development" ? "http" : "https";

  const res = await fetch(
    `${protocol}://${host}/api/gallery/albums`,
    { cache: "no-store" }
  );

  if (!res.ok) throw new Error("Failed to load gallery");
  return res.json();
}

export default async function GalleryPage() {
  const albums = await getAlbums();

  return (
    <main className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-red-50 to-blue-50" />

        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-red-100/30 to-transparent" />
        <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-100/30 to-transparent" />

        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-red-200/20 to-pink-200/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-blue-200/20 to-cyan-200/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-50 to-blue-50 border border-red-100 mb-6">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">
                Our Memories
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
                Gallery
              </span>
            </h1>

            <div className="flex justify-center mb-6">
              <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-blue-950 rounded-full"></div>
            </div>

            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-10">
              Moments, events, and memories from our journey with students and partners.
            </p>
          </div>
        </div>
      </section>

      {/* Albums Grid Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Stats */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center gap-3">
              <Camera className="w-6 h-6 text-red-500" />
              <div>
                <div className="text-2xl font-bold text-gray-900">
                  {albums.length}
                </div>
                <div className="text-sm text-gray-600">Albums</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <ImageIcon className="w-6 h-6 text-red-500" />
              <div>
                <div className="text-2xl font-bold text-gray-900">
                  {albums.reduce(
                    (sum, album) => sum + (album.photoCount || 0),
                    0
                  )}
                </div>
                <div className="text-sm text-gray-600">Photos</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Users className="w-6 h-6 text-red-500" />
              <div>
                <div className="text-2xl font-bold text-gray-900">100+</div>
                <div className="text-sm text-gray-600">Moments</div>
              </div>
            </div>
          </div>
        </div>

        {/* Albums Grid */}
        {albums.length === 0 ? (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-50 to-blue-50 rounded-2xl mb-4">
              <Camera className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              No albums available yet
            </h3>
            <p className="text-gray-600 max-w-md mx-auto">
              Check back soon for photos and memories from our events and activities.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {albums.map((album) => (
              <Link
                key={album.slug}
                href={`/gallery/${album.slug}`}
                className="group bg-white rounded-3xl border-2 border-gray-100 overflow-hidden hover:border-red-300 hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                  {album.coverImage ? (
                    <Image
                      src={album.coverImage}
                      alt={album.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center p-8">
                        <Camera className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                        <div className="text-gray-400 text-sm">
                          No cover image
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-gray-800">
                    {album.photoCount} photos
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                    {album.title}
                  </h3>

                  <div className="flex items-center gap-3 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">
                      {new Date(album.albumDate).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>

                  <div className="mt-4 inline-flex items-center gap-2 text-red-600 font-semibold group-hover:gap-3 transition-all">
                    <span>View Album</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="group-hover:translate-x-1 transition-transform"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

