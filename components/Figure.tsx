import ZoomImage from "@/components/ZoomImage";
import type { ImageItem } from "@/lib/types";

export default function Figure({
  image,
  sizes = "(min-width: 1024px) 640px, 100vw",
  priority = false,
}: {
  image: ImageItem;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <figure>
      <ZoomImage image={image} sizes={sizes} priority={priority} className="h-auto w-full" />
      {image.caption && <figcaption className="label mt-2">{image.caption}</figcaption>}
    </figure>
  );
}
