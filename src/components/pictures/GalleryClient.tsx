import { useState } from "react";
import type { Picture } from "@/@types/types";
import PhotoLightbox from "./PhotoLightbox";

export default function GalleryClient({ pictures }: { pictures: Picture[] }) {
  const [index, setIndex] = useState<number | null>(null);

  return (
    <>
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

      {index !== null && (
        <PhotoLightbox pictures={pictures} startIndex={index} onClose={() => setIndex(null)} />
      )}
    </>
  );
}
