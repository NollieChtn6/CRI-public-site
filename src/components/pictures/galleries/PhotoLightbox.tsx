import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";
import { IoChevronBack, IoChevronForward, IoCloseOutline } from "react-icons/io5";

import type { Picture } from "@/@types/types";

const CloseIcon = IoCloseOutline;

export default function PhotoLightbox({
  pictures,
  startIndex,
  onClose,
}: {
  pictures: Picture[];
  startIndex: number;
  onClose: () => void;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ startIndex, loop: true });
  const [currentIndex, setCurrentIndex] = useState(startIndex);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setCurrentIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") emblaApi?.scrollPrev();
      if (e.key === "ArrowRight") emblaApi?.scrollNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, emblaApi]);

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-2xl hover:cursor-pointer hover:scale-105 transition-all transition-300"
        aria-label="Fermer"
      >
        <CloseIcon />
      </button>

      <button
        type="button"
        onClick={() => emblaApi?.scrollPrev()}
        className="absolute left-4 text-white text-4xl hover:cursor-pointer hover:scale-105 transition-all transition-300"
        aria-label="Image précédente"
      >
        <IoChevronBack />
      </button>

      <div className="overflow-hidden w-full max-w-5xl" ref={emblaRef}>
        <div className="flex">
          {pictures.map((picture, _i) => (
            <div key={picture.url} className="flex-[0_0_100%] flex justify-center">
              <div className="rounded-lg overflow-hidden max-h-[60vh]">
                <img
                  src={picture.url}
                  alt={picture.alt}
                  className="w-auto max-h-[60vh] object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={() => emblaApi?.scrollNext()}
        className="absolute right-4 text-white text-4xl hover:cursor-pointer hover:scale-105 transition-all transition-300"
        aria-label="Image suivante"
      >
        <IoChevronForward />
      </button>
      <div className="absolute bottom-6 text-white text-sm opacity-80">
        {currentIndex + 1} / {pictures.length}
      </div>
    </div>
  );
}
