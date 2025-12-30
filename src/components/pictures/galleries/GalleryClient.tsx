import { useState } from "react";
import type { Picture } from "@/@types/types";
import PhotoLightbox from "./PhotoLightbox";

interface GalleryClientProps {
  type: "gallery" | "article";
  pictures: Picture[];
}

export default function GalleryClient({ type, pictures }: GalleryClientProps) {
  const [index, setIndex] = useState<number | null>(null);

  return (
    <>
      {type === "article" && (
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] gap-4">
          {pictures.map((picture, i) => {
            const extraClass =
              i % 6 === 0
                ? "col-span-2 row-span-2"
                : i % 5 === 0
                  ? "col-span-2"
                  : i % 7 === 0
                    ? "row-span-2"
                    : "";

            return (
              <button
                type="button"
                key={picture.url}
                onClick={() => setIndex(i)}
                className={`overflow-hidden rounded-lg focus:outline-none relative group ${extraClass}`}
                aria-label={`Afficher l'image ${i + 1}`}
              >
                <img
                  src={picture.url}
                  alt={picture.alt}
                  className="w-full h-full object-cover cursor-pointer rounded-lg"
                  loading="lazy"
                />
              </button>
            );
          })}
        </div>
      )}

      {type === "gallery" && (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pictures.map((picture) => (
            <button
              type="button"
              onClick={() => setIndex(pictures.indexOf(picture))}
              key={picture.url}
              className="group overflow-hidden rounded-lg shadow-lg ring-1 ring-white/10
             transition-transform duration-300 ease-out hover:scale-105 cursor-pointer"
              title={picture.author ? `© Crédit photo : ${picture.author}` : undefined}
            >
              <img
                src={picture.url}
                alt={picture.alt}
                className="w-full h-full object-cover rounded-lg"
              />
            </button>
          ))}
        </section>
      )}

      {index !== null && (
        <PhotoLightbox pictures={pictures} startIndex={index} onClose={() => setIndex(null)} />
      )}
    </>
  );
}
