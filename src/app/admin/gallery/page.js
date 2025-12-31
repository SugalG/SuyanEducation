import Link from "next/link";
import Image from "next/image";

async function getAlbums() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/gallery/albums`,
    { cache: "no-store" }
  );

  if (!res.ok) throw new Error("Failed to fetch albums");
  return res.json();
}

export default async function AdminGalleryPage() {
  const albums = await getAlbums();

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">Gallery</h1>

        <Link
          href="/admin/gallery/new"
          className="bg-red-700 text-white px-5 py-2 rounded-md font-semibold hover:bg-red-800 transition"
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
              className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >
              {/* Cover */}
              <div className="relative h-44 bg-gray-100">
                {album.coverImage ? (
                  <Image
                    src={album.coverImage}
                    alt={album.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-sm text-gray-400">
                    No cover image
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-semibold text-lg">{album.title}</h3>
                <p className="text-sm text-gray-500 mt-1">
                  {new Date(album.albumDate).toLocaleDateString()} ·{" "}
                  {album.photoCount} photos
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <Link
                    href={`/admin/gallery/${album.slug}`}
                    className="text-blue-600 font-medium hover:underline"
                  >
                    Manage →
                  </Link>

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

/* Client component */
function DeleteAlbumButton({ slug }) {
  async function handleDelete() {
    if (!confirm("Delete this album and all photos?")) return;

    const res = await fetch(`/api/admin/gallery/albums/${slug}`, {
      method: "DELETE",
    });

    if (res.ok) {
      location.reload();
    } else {
      alert("Failed to delete album");
    }
  }

  return (
    <button
      onClick={handleDelete}
      className="text-sm text-red-600 hover:underline"
    >
      Delete
    </button>
  );
}
