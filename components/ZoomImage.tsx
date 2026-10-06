"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { ImageItem } from "@/lib/types";

/**
 * A photo that opens larger in a native <dialog>. Focus handling, Esc to close
 * and the backdrop come from the browser. The large copy is only mounted once
 * it has been opened, so it costs nothing until someone asks for it.
 */
export default function ZoomImage({
  image,
  sizes,
  priority = false,
  className = "",
}: {
  image: ImageItem;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [opened, setOpened] = useState(false);
  // A tall document is shown at full width and scrolls inside the viewer so it can be read.
  const tall = image.height > image.width * 1.1;

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setOpened(true);
          dialogRef.current?.showModal();
        }}
        aria-label={`Enlarge photo: ${image.alt}`}
        className="group relative block w-full cursor-zoom-in"
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes={sizes}
          priority={priority}
          className={`bg-panel ${className}`}
        />
        <span
          aria-hidden="true"
          className="absolute bottom-2 right-2 grid h-6 w-6 place-items-center bg-paper text-sm leading-none text-ink opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 [@media(hover:none)]:opacity-100"
        >
          +
        </span>
      </button>

      <dialog
        ref={dialogRef}
        onClick={(event) => {
          // A click on the backdrop lands on the dialog element itself.
          if (event.target === dialogRef.current) dialogRef.current?.close();
        }}
        aria-label={image.alt}
        className="zoom-dialog"
      >
        <div className="p-3 sm:p-4">
          {opened && (
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes="(min-width: 1024px) 960px, 96vw"
              className={`mx-auto h-auto w-auto max-w-full ${tall ? "" : "max-h-[78vh] object-contain"}`}
            />
          )}
          <div className="mt-3 flex items-start justify-between gap-6">
            <p className="label">{image.caption ?? image.alt}</p>
            <button type="button" onClick={() => dialogRef.current?.close()} className="link shrink-0 text-sm">
              Close
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}
