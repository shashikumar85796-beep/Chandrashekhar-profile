import { useState, useEffect, useCallback, useRef } from "react";
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
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 text-white grid place-items-center transition z-10"
        aria-label="Close"
      >
        <X size={20} />
      </button>

      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-gold hover:text-primary text-white grid place-items-center transition z-10"
          aria-label="Previous"
        >
          <ChevronLeft size={22} />
        </button>
      )}

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

// ─── Carousel ─────────────────────────────────────────────────────────────────
const VISIBLE = 3; // cards visible at once on desktop

export function Gallery() {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const images = galleryImages;
  const total = images.length;

  // touch swipe support
  const touchStartX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    touchStartX.current = null;
  };

  const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);

  const closeLightbox = useCallback(() => setLightbox(null), []);
  const prevLightbox = useCallback(
    () => setLightbox((i) => ((i ?? 0) - 1 + total) % total),
    [total],
  );
  const nextLightbox = useCallback(
    () => setLightbox((i) => ((i ?? 0) + 1) % total),
    [total],
  );

  // auto-play
  useEffect(() => {
    if (lightbox !== null) return;
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [next, lightbox]);

  if (total === 0) return null;

  // Build a sliding window: always show VISIBLE cards, looping
  const visibleIndices = Array.from({ length: VISIBLE }, (_, i) => (current + i) % total);

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

        {/* Carousel */}
        <div className="relative reveal">
          {/* Prev button */}
          <button
            onClick={prev}
            className="absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-background border border-border shadow-lg hover:bg-gold hover:text-primary hover:border-gold transition grid place-items-center"
            aria-label="Previous"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Cards track */}
          <div
            ref={trackRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-2"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {visibleIndices.map((imgIdx, slot) => {
              const img = images[imgIdx];
              return (
                <button
                  key={`${slot}-${imgIdx}`}
                  onClick={() => setLightbox(imgIdx)}
                  className="group relative rounded-2xl overflow-hidden bg-muted border border-border card-soft focus:outline-none focus:ring-2 focus:ring-gold aspect-[4/3]"
                  aria-label={`Open ${img.caption}`}
                >
                  <img
                    src={img.src}
                    alt={img.caption}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* bottom caption bar */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    {img.tag && (
                      <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-gold text-primary mb-1">
                        {img.tag}
                      </span>
                    )}
                    <p className="text-white text-xs leading-snug">{img.caption}</p>
                  </div>

                  {/* Zoom overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
                  <div className="absolute inset-0 grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-gold text-primary grid place-items-center shadow-xl">
                      <ZoomIn size={20} />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Next button */}
          <button
            onClick={next}
            className="absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-background border border-border shadow-lg hover:bg-gold hover:text-primary hover:border-gold transition grid place-items-center"
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={cn(
                "rounded-full transition-all duration-300",
                i === current
                  ? "w-6 h-2 bg-gold"
                  : "w-2 h-2 bg-border hover:bg-gold/50",
              )}
              aria-label={`Go to slide ${i + 1}`}
            />
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
