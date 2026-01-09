import prisma from "@/lib/prisma";
import GalleryLightbox from "@/components/gallery/GalleryLightbox";
import { Camera, Calendar, ArrowLeft, Image as ImageIcon, Users } from "lucide-react";
import Link from "next/link";

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
      <main className="w-full overflow-hidden">
        <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-24">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-red-50 to-blue-50" />
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-50 to-blue-50 rounded-2xl mb-6">
              <Camera className="w-8 h-8 text-red-600" />
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Album Not Found
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
              The album you're looking for doesn't exist or has been moved.
            </p>
            
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-2xl font-semibold hover:shadow-xl hover:scale-105 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Gallery</span>
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden pt-24">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-red-50 to-blue-50" />
        
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-red-100/30 to-transparent" />
        <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-100/30 to-transparent" />
        
        {/* Floating Circles */}
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-red-200/20 to-pink-200/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-blue-200/20 to-cyan-200/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          {/* Back Button */}
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 hover:text-red-600 hover:border-red-200 transition-all mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Gallery</span>
          </Link>

          {/* Album Info */}
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-50 to-blue-50 border border-red-100 mb-6">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">Photo Album</span>
            </div>
            
            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
                {album.title}
              </span>
            </h1>
            
            {/* Decorative Lines */}
            <div className="flex justify-center items-center gap-4 mb-8">
              <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-red-400 rounded-full"></div>
              <div className="w-8 h-1 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full"></div>
              <div className="w-4 h-1 bg-gradient-to-r from-red-300 to-red-200 rounded-full"></div>
            </div>

            {/* Album Metadata */}
            <div className="flex flex-wrap items-center justify-center gap-8 mb-10">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-red-500" />
                <div className="text-left">
                  <div className="text-sm font-medium text-gray-600">Date</div>
                  <div className="font-semibold text-gray-900">
                    {new Date(album.albumDate).toLocaleDateString(undefined, {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <ImageIcon className="w-5 h-5 text-red-500" />
                <div className="text-left">
                  <div className="text-sm font-medium text-gray-600">Photos</div>
                  <div className="font-semibold text-gray-900">
                    {album.photos.length} photos
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-red-500" />
                <div className="text-left">
                  <div className="text-sm font-medium text-gray-600">Memories</div>
                  <div className="font-semibold text-gray-900">
                    {album.photos.length}+ moments
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl border-2 border-gray-100 p-8 shadow-xl">
          
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
                Photo Collection
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse through {album.photos.length} memories from our events and activities
            </p>
          </div>

         
          {album.photos.length === 0 ? (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-50 to-blue-50 rounded-2xl mb-4">
                <Camera className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No photos in this album</h3>
              <p className="text-gray-600 max-w-md mx-auto">
                Check back soon as we add more photos to this collection.
              </p>
            </div>
          ) : (
            <GalleryLightbox photos={album.photos} />
          )}
        </div>
      </section>

     
    </main>
  );
}