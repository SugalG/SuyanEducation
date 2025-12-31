import prisma from "@/lib/prisma";
import Image from "next/image";

import PhotoUploader from "@/components/admin/PhotoUploader";
import DeletePhotoButton from "@/components/admin/DeletePhotoButton";
import DeleteAlbumButton from "@/components/admin/DeleteAlbumButton";

export const dynamic = "force-dynamic";

export default async function AdminGalleryAlbumPage(props) {
  const params = await props.params;
  const { slug } = params;

  const album = await prisma.galleryAlbum.findUnique({
    where: { slug },
    include: {
      photos: {
        orderBy: { createdAt: "asc" },
      },
    },
  });

  if (!album) {
    return <p className="p-6">Album not found.</p>;
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      {/* Header */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold">{album.title}</h1>
          <p className="text-sm text-gray-500 mt-1">
            {new Date(album.albumDate).toLocaleDateString()} ·{" "}
            {album.photos.length} photos
          </p>
        </div>

        <DeleteAlbumButton slug={album.slug} />
      </div>

      {/* Upload photos */}
      <div className="mb-10">
        <PhotoUploader albumId={album.id} />
      </div>

      {/* Photos grid */}
      {album.photos.length === 0 ? (
        <p className="text-gray-500">No photos uploaded yet.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {album.photos.map((photo) => (
            <div
              key={photo.id}
              className="relative group bg-gray-100 rounded-lg overflow-hidden"
            >
              <div className="relative aspect-square">
                <Image
                  src={photo.imageUrl}
                  alt={photo.caption || ""}
                  fill
                  className="object-cover"
                />
              </div>

              <DeletePhotoButton photoId={photo.id} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
