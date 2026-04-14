import prisma from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";

import PhotoUploader from "@/components/admin/PhotoUploader";
import DeletePhotoButton from "@/components/admin/DeletePhotoButton";
import DeleteAlbumButton from "@/components/admin/DeleteAlbumButton";
import SetCoverButton from "@/components/admin/SetCoverButton";
import { getAdmin } from "@/lib/auth";
import { imageUrl } from "@/lib/imageUrl";

export const dynamic = "force-dynamic";

export default async function AdminGalleryAlbumPage(props) {
  const admin = await getAdmin();
  if (!admin) {
    return (
      <div className="pt-32 text-center text-red-600 font-semibold">
        Unauthorized
      </div>
    );
  }

  const params = await props.params;
  const { slug } = params || {};

  if (!slug) {
    return <p className="p-10">Invalid album.</p>;
  }

  const album = await prisma.galleryAlbum.findUnique({
    where: { slug },
    include: {
      photos: { orderBy: { createdAt: "asc" } },
    },
  });

  if (!album) {
    return <p className="p-10">Album not found.</p>;
  }

  return (
    <section className="max-w-7xl mx-auto px-6 pt-32 pb-16">
      {/* Header */}
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between mb-10">
        <div>
          <Link
            href="/admin/gallery"
            className="text-sm text-gray-500 hover:text-gray-800"
          >
            Back to Albums
          </Link>
          <h1 className="text-3xl font-bold">{album.title}</h1>
          <p className="text-sm text-gray-500 mt-2">
            {new Date(album.albumDate).toLocaleDateString()} ·{" "}
            {album.photos.length} photos
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            href={`/gallery/${album.slug}`}
            target="_blank"
            rel="noreferrer"
            className="border border-gray-300 text-gray-700 px-5 py-2.5 rounded-lg font-semibold hover:border-gray-500 transition"
          >
            View Public Album
          </Link>

          <DeleteAlbumButton slug={album.slug} />
        </div>
      </div>

      {/* Upload */}
      <div className="mb-12">
        <PhotoUploader albumId={album.id} />
      </div>

      {/* Photos */}
      {album.photos.length === 0 ? (
        <div className="border border-dashed border-gray-300 rounded-xl p-10 text-center">
          <h2 className="text-xl font-semibold text-gray-900">
            No photos uploaded yet
          </h2>
          <p className="text-gray-500 mt-2">
            Use the upload button above to add photos to this album.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {album.photos.map((photo) => {
            const isCover = album.coverImage === photo.imageUrl;

            return (
              <div
                key={photo.id}
                className="
                  rounded-xl overflow-hidden
                  bg-white border border-gray-200 shadow-sm
                  hover:shadow-lg transition
                "
              >
                {/* Image */}
                <div className="relative aspect-square">
                  <Image
                    src={imageUrl(photo.imageUrl)}
                    alt={photo.caption || ""}
                    fill
                    className="object-cover"
                    unoptimized={process.env.NODE_ENV !== "production"}
                  />
                  {/* Cover badge */}
                  {isCover && (
                    <span
                      className="
                        absolute top-2 left-2
                        bg-green-600 text-white text-xs
                        px-2 py-1 rounded-md font-semibold
                      "
                    >
                      Cover
                    </span>
                  )}
                </div>

                <div className="p-3 flex gap-2">
                  <SetCoverButton
                    albumId={album.id}
                    imageUrl={photo.imageUrl}
                    isCover={isCover}
                  />

                  <DeletePhotoButton photoId={photo.id} />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
