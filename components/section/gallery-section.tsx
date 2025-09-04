'use client';

import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

type GalleryImage = {
  src: string;
  alt?: string;
  caption?: string;
};

type GallerySectionProps = {
  title?: string;
  description?: string;
  images: GalleryImage[];
  className?: string;
};

export function GallerySection({
  title = 'Gallery',
  description,
  images,
  className,
}: GallerySectionProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const dialogRef = React.useRef<HTMLDivElement | null>(null);

  const openAt = (idx: number) => {
    setActiveIndex(idx);
    setIsOpen(true);
  };
  const close = React.useCallback(() => setIsOpen(false), []);
  const goPrev = React.useCallback(
    () => setActiveIndex((i) => (i - 1 + images.length) % images.length),
    [images.length]
  );
  const goNext = React.useCallback(
    () => setActiveIndex((i) => (i + 1) % images.length),
    [images.length]
  );

  // Keyboard and scroll lock while lightbox is open
  React.useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', onKey);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // focus the dialog for a11y
    setTimeout(() => dialogRef.current?.focus(), 0);

    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, close, goPrev, goNext]);

  return (
    <section className={cn('w-full', className)} aria-label="Image gallery">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <header className="mb-6">
          <h2 className="text-pretty text-2xl font-semibold text-foreground">
            {title}
          </h2>
          {description ? (
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {description}
            </p>
          ) : null}
        </header>

        {/* Responsive grid that scales to lots of images */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {images.map((img, idx) => (
            <figure key={`${img.src}-${idx}`} className="group relative">
              <button
                type="button"
                onClick={() => openAt(idx)}
                className="block w-full overflow-hidden rounded-lg border bg-background outline-none transition hover:shadow-sm focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                aria-label={img.alt || img.caption || 'Open image in viewer'}
              >
                <Image
                  src={
                    img.src ||
                    '/placeholder.svg?height=320&width=480&query=professor%20gallery%20thumbnail'
                  }
                  alt={img.alt || 'Gallery image'}
                  className="h-48 w-full object-cover transition group-hover:scale-[1.02]"
                  loading="lazy"
                  sizes="(min-width: 768px) 50vw, 100vw"
                  width={800}
                  height={480}
                />
              </button>
              {img.caption ? (
                <figcaption className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {img.caption}
                </figcaption>
              ) : null}
            </figure>
          ))}
        </div>
      </div>

      {/* Lightbox dialog */}
      {isOpen && images[activeIndex] ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-0"
          onClick={close}
        >
          <div
            ref={dialogRef}
            tabIndex={-1}
            className="relative mx-auto h-full w-full outline-none"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex h-full w-full flex-col items-center justify-center px-4 py-6">
              <Image
                src={
                  images[activeIndex].src ||
                  '/placeholder.svg?height=900&width=1600&query=professor%20gallery%20full%20image' ||
                  '/placeholder.svg'
                }
                alt={
                  images[activeIndex].alt ||
                  images[activeIndex].caption ||
                  'Full size image'
                }
                className="max-h-[90vh] max-w-[95vw] rounded-lg object-contain"
                width={1600}
                height={900}
                priority
              />

              {/* Controls + caption */}
              <div className="mt-4 flex w-full max-w-5xl items-center justify-between gap-2">
                <div className="min-h-9 min-w-9" />
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={goPrev}
                    className="rounded-md border bg-background/95 px-3 py-2 text-sm text-foreground hover:bg-background"
                    aria-label="Previous image"
                  >
                    Prev
                  </button>
                  <span className="select-none text-sm text-background/90">
                    {activeIndex + 1} / {images.length}
                  </span>
                  <button
                    type="button"
                    onClick={goNext}
                    className="rounded-md border bg-background/95 px-3 py-2 text-sm text-foreground hover:bg-background"
                    aria-label="Next image"
                  >
                    Next
                  </button>
                </div>
                <button
                  type="button"
                  onClick={close}
                  className="rounded-md border bg-background/95 px-3 py-2 text-sm text-foreground hover:bg-background"
                  aria-label="Close viewer"
                >
                  Close
                </button>
              </div>

              {images[activeIndex].caption ? (
                <p className="mt-2 w-full max-w-5xl text-center text-sm leading-relaxed text-background/90">
                  {images[activeIndex].caption}
                </p>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
