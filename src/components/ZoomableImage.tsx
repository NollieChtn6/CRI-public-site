import * as Dialog from "@radix-ui/react-dialog";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

interface ZoomableImageProps {
  src: string;
  alt?: string;
  className?: string;
}

// Inspiration from https://stackoverflow.com/questions/69920872/how-can-i-use-react-zoom-pan-pinch-to-allow-users-to-view-all-of-a-chart-that-ch

export default function ZoomableImage({ src, alt = "", className }: ZoomableImageProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <img
          src={src}
          alt={alt}
          className={`hover:scale-105 transition-all duration-300 ease-out cursor-zoom-in ${className ?? ""}`}
        />
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/80 z-50" />

        <Dialog.Content className="fixed inset-0 z-50 flex items-center justify-center p-4 outline-none">
          <TransformWrapper
            initialScale={1}
            minScale={0.5}
            maxScale={4}
            wheel={{ step: 0.15 }}
            doubleClick={{ mode: "zoomIn" }}
            pinch={{ step: 5 }}
          >
            <TransformComponent>
              <img
                src={src}
                alt={alt}
                className="max-w-[90vw] max-h-[90vh] cursor-zoom-out select-none"
              />
            </TransformComponent>
          </TransformWrapper>

          <Dialog.Close className="absolute inset-0 cursor-zoom-out" />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
