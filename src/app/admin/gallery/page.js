import Link from "next/link";
import Image from "next/image";
import prisma from "@/lib/prisma";
import { getAdmin } from "@/lib/auth";
import DeleteAlbumButton from "@/components/admin/DeleteAlbumButton";

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
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-3xl font-bold text-gray-900">Gallery</h1>

        <Link
          href="/admin/gallery/new"
          className="bg-red-700 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-red-800 transition"
        >
          Create Album
        </Link>
      </div>

      {/* Albums */}
      {albums.length === 0 ? (
        <p className="text-gray-500">No albums created yet.</p>
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
                      src={album.coverImage}
                      alt={album.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
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

                <div className="mt-4 flex items-center justify-between">
                  <Link
                    href={`/admin/gallery/${album.slug}`}
                    className="text-blue-600 font-medium hover:underline"
                  >
                    Manage →
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
