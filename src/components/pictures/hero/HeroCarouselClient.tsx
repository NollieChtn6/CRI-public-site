import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import type { Picture } from "@/@types/types";

export default function HeroCarouselClient({ pictures }: { pictures: Picture[] }) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({
      delay: 3500,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  ]);

  return (
    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-white/10" ref={emblaRef}>
      <div className="flex">
        {pictures.map((picture) => (
          <div
            key={picture.url}
            className="flex-[0_0_100%] relative cursor-pointer ring-2 ring-shark-800"
            title={` © Crédit photo : ${picture.author}`}
          >
            <img
              src={picture.url}
              alt={picture.alt}
              className="w-full h-full object-cover aspect-13/9"
              loading="eager"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
