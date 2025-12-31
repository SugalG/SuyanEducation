"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function GalleryLightbox({ photos }) {
  const [active, setActive] = useState(null);

  function close() {
    setActive(null);
  }

  function prev() {
    setActive((i) => (i > 0 ? i - 1 : photos.length - 1));
  }

  function next() {
    setActive((i) => (i < photos.length - 1 ? i + 1 : 0));
  }

  useEffect(() => {
    function onKey(e) {
      if (active === null) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {photos.map((photo, i) => (
          <button
            key={photo.id}
            onClick={() => setActive(i)}
            className="relative aspect-square overflow-hidden rounded-lg bg-gray-100"
          >
            <Image
              src={photo.imageUrl}
              alt={photo.caption || ""}
              fill
              className="object-cover hover:opacity-90 transition"
            />

            {photo.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs px-2 py-1 text-left">
                {photo.caption}
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          <button
            onClick={close}
            className="absolute top-6 right-6 text-white"
          >
            <X size={32} />
          </button>

          <button
            onClick={prev}
            className="absolute left-4 text-white"
          >
            <ChevronLeft size={36} />
          </button>

          <button
            onClick={next}
            className="absolute right-4 text-white"
          >
            <ChevronRight size={36} />
          </button>

          <div className="relative w-[90vw] h-[80vh]">
            <Image
              src={photos[active].imageUrl}
              alt={photos[active].caption || ""}
              fill
              className="object-contain"
            />

            {photos[active].caption && (
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/70 text-white text-sm px-4 py-2 rounded">
                {photos[active].caption}
              </div>
            )}
          </div>

        </div>
      )}
    </>
  );
}
