import prisma from "@/lib/prisma";
import GalleryLightbox from "@/components/gallery/GalleryLightbox";

export const dynamic = "force-dynamic";

export default async function GalleryAlbumPage(props) {
  const params = await props.params;
  const { slug } = params;

  const album = await prisma.galleryAlbum.findUnique({
    where: { slug },
    include: {
      photos: {
        orderBy: { createdAt: "asc" },
        select: {
          id: true,
          imageUrl: true,
          caption: true,
        },
      },
    },
  });

  if (!album) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h1 className="text-2xl font-semibold">Album not found</h1>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900">
          {album.title}
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          {new Date(album.albumDate).toLocaleDateString()} ·{" "}
          {album.photos.length} photos
        </p>
      </div>

      {album.photos.length === 0 ? (
        <p className="text-gray-500">No photos in this album.</p>
      ) : (
        <GalleryLightbox photos={album.photos} />
      )}
    </section>
  );
}
