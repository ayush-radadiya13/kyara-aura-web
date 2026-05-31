'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const carouselImages = [
  {
    id: 1,
    src: '/assets/home1.jpg',
    alt: 'Luxury Jewellery Collection',
    title: 'Timeless Elegance',
    subtitle: 'Exquisite craftsmanship meets modern design'
  },
  {
    id: 2,
    src: '/assets/home2.jpg',
    alt: 'Diamond Jewellery',
    title: 'Brilliant Beauty',
    subtitle: 'Handcrafted with precision and care'
  },
  {
    id: 3,
    src: '/assets/home3.jpg',
    alt: 'Fine Jewellery Display',
    title: 'Natural Radiance',
    subtitle: 'Premium gems and precious metals'
  },
  {
    id: 4,
    src: '/assets/home4.jpg',
    alt: 'Luxury Jewellery Set',
    title: 'Exclusive Collection',
    subtitle: 'Limited edition masterpieces'
  }
];

export default function HeroCarousel({ variant = 'carousel' }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const currentImage = carouselImages[currentIndex];

  if (variant === 'editorial') {
    return (
      <section className="relative h-screen w-full overflow-hidden bg-white">
        <Image
          src={currentImage.src}
          alt={currentImage.alt}
          fill
          className="object-cover opacity-60 transition-opacity duration-700"
          priority
          sizes="100vw"
        />

        <div className="absolute inset-x-0 top-1/2 z-10 mx-auto flex max-w-4xl -translate-y-1/2 flex-col items-center px-6 text-center text-black">
          <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.35em] text-black/80">
            Jewellery
          </p>
          <h1 className="font-display text-5xl font-light uppercase leading-[0.92] tracking-[-0.04em] sm:text-7xl lg:text-[88px]">
            Discover Sparkle
            <span className="block">With Style</span>
          </h1>
          <p className="mt-6 max-w-xl text-[11px] leading-5 text-black/80 sm:text-xs">
            Whether casual or formal, find the perfect jewelry for every occasion with us.
          </p>
          <Link
            href="/products"
            className="mt-8 border border-black/70 px-7 py-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-black transition hover:bg-black hover:text-white"
          >
            Shop Now
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="relative h-screen w-full overflow-hidden bg-white">
      {/* Main Image Container */}
      <div className="relative w-full h-full">
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src={currentImage.src}
            alt={currentImage.alt}
            fill
            className="object-cover opacity-60 transition-opacity duration-700"
            priority
            sizes="100vw"
          />
          
          {/* Content Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-black px-4 max-w-4xl">
              <h1 className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-light mb-2 sm:mb-4 tracking-wide">
                {currentImage.title}
              </h1>
              <p className="text-sm sm:text-base md:text-xl lg:text-2xl font-light tracking-wider text-black/80">
                {currentImage.subtitle}
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-1.5 md:bottom-8 md:space-x-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-1.5 w-1.5 rounded-full transition-all duration-300 md:h-2 md:w-2 ${
              index === currentIndex 
                ? 'bg-black w-6 md:w-8' 
                : 'bg-black/40 hover:bg-black/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </section>
  );
}
