import Link from "next/link";
import Image from "next/image";
import prisma from "@/lib/prisma";
import { getAdmin } from "@/lib/auth";
import DeleteAlbumButton from "@/components/admin/DeleteAlbumButton";
import { imageUrl } from "@/lib/imageUrl";

export const dynamic = "force-dynamic";

export default async function AdminGalleryPage() {
  const admin = await getAdmin();
  if (!admin) {
    return (
      <div className="pt-32 text-center text-red-600 font-semibold">
        Unauthorized
      </div>
    );
  }

  const albums = await prisma.galleryAlbum.findMany({
    orderBy: { albumDate: "desc" },
    include: {
      photos: { select: { id: true } },
    },
  });

  return (
    <section className="max-w-7xl mx-auto px-6 pt-32 pb-16">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-10">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Gallery</h1>
          <p className="text-sm text-gray-500 mt-2">
            Create albums, manage photos, and preview the public gallery.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/gallery"
            target="_blank"
            rel="noreferrer"
            className="border border-gray-300 text-gray-700 px-5 py-2.5 rounded-lg font-semibold hover:border-gray-500 transition"
          >
            View Public Gallery
          </Link>

          <Link
            href="/admin/gallery/new"
            className="bg-red-700 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-red-800 transition"
          >
            Create Album
          </Link>
        </div>
      </div>

      {/* Albums */}
      {albums.length === 0 ? (
        <div className="border border-dashed border-gray-300 rounded-xl p-10 text-center">
          <h2 className="text-xl font-semibold text-gray-900">
            No albums created yet
          </h2>
          <p className="text-gray-500 mt-2 mb-6">
            Start with an album, then add photos inside it.
          </p>
          <Link
            href="/admin/gallery/new"
            className="inline-flex bg-red-700 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-red-800 transition"
          >
            Create First Album
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {albums.map((album) => (
            <div
              key={album.id}
              className="bg-white rounded-xl overflow-hidden border shadow-sm hover:shadow-lg transition"
            >
              {/* Image → clickable */}
              <Link href={`/admin/gallery/${album.slug}`}>
                <div className="relative h-44 bg-gray-100 cursor-pointer overflow-hidden">
                  {album.coverImage ? (
                    <Image
                      src={imageUrl(album.coverImage)}
                      alt={album.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                      unoptimized={process.env.NODE_ENV !== "production"}
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-sm text-gray-400">
                      No cover image
                    </div>
                  )}
                </div>
              </Link>

              {/* Info */}
              <div className="p-5">
                <Link href={`/admin/gallery/${album.slug}`}>
                  <h3 className="font-semibold text-lg text-gray-900 hover:underline cursor-pointer">
                    {album.title}
                  </h3>
                </Link>

                <p className="text-sm text-gray-500 mt-1">
                  {new Date(album.albumDate).toLocaleDateString()} ·{" "}
                  {album.photos.length} photos
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-4">
                  <Link
                    href={`/admin/gallery/${album.slug}`}
                    className="text-blue-600 font-medium hover:underline"
                  >
                    Manage →
                  </Link>

                  <Link
                    href={`/gallery/${album.slug}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-600 font-medium hover:underline"
                  >
                    View Public
                  </Link>

                  {/* Delete button works now */}
                  <DeleteAlbumButton slug={album.slug} />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
