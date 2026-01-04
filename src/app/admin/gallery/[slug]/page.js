import prisma from "@/lib/prisma";
import Image from "next/image";

import PhotoUploader from "@/components/admin/PhotoUploader";
import DeletePhotoButton from "@/components/admin/DeletePhotoButton";
import DeleteAlbumButton from "@/components/admin/DeleteAlbumButton";
import SetCoverButton from "@/components/admin/SetCoverButton";

export const dynamic = "force-dynamic";

export default async function AdminGalleryAlbumPage(props) {
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
      <div className="flex items-start justify-between mb-10">
        <div>
          <h1 className="text-3xl font-bold">{album.title}</h1>
          <p className="text-sm text-gray-500 mt-2">
            {new Date(album.albumDate).toLocaleDateString()} ·{" "}
            {album.photos.length} photos
          </p>
        </div>

        <DeleteAlbumButton slug={album.slug} />
      </div>

      {/* Upload */}
      <div className="mb-12">
        <PhotoUploader albumId={album.id} />
      </div>

      {/* Photos */}
      {album.photos.length === 0 ? (
        <p className="text-gray-500">No photos uploaded yet.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {album.photos.map((photo) => {
            const isCover = album.coverImage === photo.imageUrl;

            return (
              <div
                key={photo.id}
                className="
                  group relative rounded-xl overflow-hidden
                  bg-gray-100 shadow-sm
                  hover:shadow-lg transition
                  cursor-pointer
                "
              >
                {/* Image */}
                <div className="relative aspect-square">
                  <Image
                    src={photo.imageUrl}
                    alt={photo.caption || ""}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Dark hover overlay */}
                <div
                  className="
                    absolute inset-0 bg-black/40
                    opacity-0 group-hover:opacity-100
                    transition
                  "
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

                {/* Actions */}
                <div
                  className="
                    absolute bottom-2 left-2 right-2
                    flex gap-2
                    opacity-0 group-hover:opacity-100
                    transition
                  "
                >
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
