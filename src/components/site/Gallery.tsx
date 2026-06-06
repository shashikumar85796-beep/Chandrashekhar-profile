import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { galleryImages, type GalleryImage } from "@/data/gallery";
import { cn } from "@/lib/utils";

// ─── Lightbox ─────────────────────────────────────────────────────────────────
function Lightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  images: GalleryImage[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handler);
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 text-white grid place-items-center transition z-10"
        aria-label="Close"
      >
        <X size={20} />
      </button>

      {/* Prev */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-gold hover:text-primary text-white grid place-items-center transition z-10"
          aria-label="Previous"
        >
          <ChevronLeft size={22} />
        </button>
      )}

      {/* Image */}
      <div
        className="max-w-5xl w-full px-20 flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[index].src}
          alt={images[index].caption}
          className="max-h-[76vh] max-w-full object-contain rounded-xl shadow-2xl"
        />
        <div className="mt-4 text-center">
          {images[index].tag && (
            <span className="inline-block text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-gold text-primary mb-1.5">
              {images[index].tag}
            </span>
          )}
          <p className="text-white/80 text-sm">{images[index].caption}</p>
          <p className="text-white/40 text-xs mt-1">{index + 1} / {images.length}</p>
        </div>
      </div>

      {/* Next */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-gold hover:text-primary text-white grid place-items-center transition z-10"
          aria-label="Next"
        >
          <ChevronRight size={22} />
        </button>
      )}
    </div>
  );
}

// ─── Gallery Grid ──────────────────────────────────────────────────────────────
export function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const images = galleryImages;
  const total = images.length;

  const closeLightbox = useCallback(() => setLightbox(null), []);
  const prevLightbox = useCallback(
    () => setLightbox((i) => ((i ?? 0) - 1 + total) % total),
    [total]
  );
  const nextLightbox = useCallback(
    () => setLightbox((i) => ((i ?? 0) + 1) % total),
    [total]
  );

  if (total === 0) return null;

  return (
    <section id="gallery" className="py-12 md:py-16 bg-muted/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <div className="mb-10 reveal">
          <p className="text-gold uppercase tracking-[0.25em] text-xs mb-3">Gallery</p>
          <h2 className="section-heading font-display text-4xl md:text-5xl font-semibold">
            Photo gallery
          </h2>
        </div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 reveal">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className="group relative rounded-2xl overflow-hidden bg-muted border border-border card-soft focus:outline-none focus:ring-2 focus:ring-gold"
              aria-label={`Open ${img.caption}`}
            >
              <img
                src={img.src}
                alt={img.caption}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300" />

              {/* Zoom icon on hover */}
              <div className="absolute inset-0 grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 rounded-full bg-gold text-primary grid place-items-center shadow-xl">
                  <ZoomIn size={20} />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <Lightbox
          images={images}
          index={lightbox}
          onClose={closeLightbox}
          onPrev={prevLightbox}
          onNext={nextLightbox}
        />
      )}
    </section>
  );
}
