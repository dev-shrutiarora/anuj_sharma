'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    '/hero/na7.jpg?height=1080&width=1920',
    '/hero/na8.jpg?height=1080&width=1920',
    '/hero/na1.jpg?height=1080&width=1920',
    '/hero/na2.jpg?height=1080&width=1920',
    '/hero/na3.jpg?height=1080&width=1920',
    '/hero/na6.jpg?height=1080&width=1920'
    
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);
  return (
    <div>
      <section className="w-full ">
        {/* Container with fixed aspect ratio */}
        <div className="relative w-full " style={{ paddingBottom: '56.25%' }}>
          {' '}
          {/* 16:9 aspect ratio */}
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={slide || '/placeholder.svg'}
                alt={`Slide ${index + 1}`}
                fill
                priority={index === 0}
                className="object-cover rounded-lg"
              />
            </div>
          ))}
          {/* Slideshow indicators */}
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 w-8 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16 lg:py-20">
        <div className="grid gap-6 lg:grid-cols-[2fr_1fr] lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Department of Chemistry, IIT Roorkee
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
             Prof. Anuj Sharma
            </h1>
            <p className="max-w-[700px] text-lg text-muted-foreground">
              Focuses on developing green and sustainable organic synthetic methods,radical-driven organic transformations, and several radical-based transformations using visible light photoredox conditions or mechanochemical methods. 
            </p>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="flex flex-col items-center justify-center rounded-lg border bg-card p-4 text-center shadow-sm">
            <span className="text-3xl font-bold">20+</span>
            <span className="text-sm text-muted-foreground">
              Years Experience
            </span>
          </div>
          <div className="flex flex-col items-center justify-center rounded-lg border bg-card p-4 text-center shadow-sm">
            <span className="text-3xl font-bold">100+</span>
            <span className="text-sm text-muted-foreground">
              Journal Publications
            </span>
          </div>
          <div className="flex flex-col items-center justify-center rounded-lg border bg-card p-4 text-center shadow-sm">
            <span className="text-3xl font-bold">10+</span>
            <span className="text-sm text-muted-foreground">
              Projects
            </span>
          </div>
          <div className="flex flex-col items-center justify-center rounded-lg border bg-card p-4 text-center shadow-sm">
            <span className="text-3xl font-bold">10+</span>
            <span className="text-sm text-muted-foreground">PhDs Guided</span>
          </div>
        </div>
      </section>
    </div>
  );
}
