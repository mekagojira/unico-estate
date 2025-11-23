'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const luxuryImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=90',
    alt: 'Luxury modern home exterior',
    title: 'Modern Luxury Living',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=90',
    alt: 'Elegant living room interior',
    title: 'Sophisticated Interiors',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1920&q=90',
    alt: 'Luxury bedroom design',
    title: 'Refined Bedrooms',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=90',
    alt: 'Premium kitchen design',
    title: 'Gourmet Kitchens',
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&q=90',
    alt: 'Luxury penthouse view',
    title: 'Stunning Views',
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&q=90',
    alt: 'Luxury furniture design',
    title: 'Premium Furnishings',
  },
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1920&q=90',
    alt: 'Elegant dining area',
    title: 'Fine Dining Spaces',
  },
];

export default function HeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Minimum swipe distance (in pixels)
  const minSwipeDistance = 50;

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % luxuryImages.length);
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? luxuryImages.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === luxuryImages.length - 1 ? 0 : prevIndex + 1
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  // Touch handlers for mobile swipe
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    }
    if (isRightSwipe) {
      goToPrevious();
    }
  };

  // Mouse drag handlers
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState<number | null>(null);

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart(e.clientX);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || dragStart === null) return;
    // Visual feedback could be added here
  };

  const onMouseUp = (e: React.MouseEvent) => {
    if (!isDragging || dragStart === null) return;
    
    const distance = dragStart - e.clientX;
    const isLeftDrag = distance > minSwipeDistance;
    const isRightDrag = distance < -minSwipeDistance;

    if (isLeftDrag) {
      goToNext();
    }
    if (isRightDrag) {
      goToPrevious();
    }

    setIsDragging(false);
    setDragStart(null);
  };

  const onMouseLeave = () => {
    setIsDragging(false);
    setDragStart(null);
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full overflow-hidden"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}
    >
      {/* Image Slideshow */}
      <div className="relative w-full h-full">
        {luxuryImages.map((image, index) => (
          <div
            key={image.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <div className="absolute inset-0">
              <Image
                src={image.url}
                alt={image.alt}
                fill
                priority={index === 0}
                quality={90}
                className="object-cover"
                sizes="100vw"
                unoptimized={image.url.includes('unsplash.com')}
              />
              {/* Overlay gradient for text readability */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-black/40"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Desktop */}
      <button
        onClick={goToPrevious}
        className="hidden md:flex absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 p-3 md:p-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <svg
          className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:scale-110 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="hidden md:flex absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 p-3 md:p-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 group"
        aria-label="Next slide"
      >
        <svg
          className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:scale-110 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Mobile Swipe Indicators */}
      <div className="md:hidden absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {luxuryImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'w-8 bg-white'
                : 'w-1.5 bg-white/40'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Indicators - Desktop */}
      <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-20 gap-3">
        {luxuryImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'w-8 bg-white'
                : 'w-2 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute top-6 md:top-8 right-4 md:right-8 z-20 px-3 md:px-4 py-1.5 md:py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
        <span className="text-white text-xs md:text-sm font-light tracking-wide">
          {currentIndex + 1} / {luxuryImages.length}
        </span>
      </div>

      {/* Pause/Play Indicator */}
      {!isAutoPlaying && (
        <div className="absolute top-6 md:top-8 left-4 md:left-8 z-20 px-3 md:px-4 py-1.5 md:py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
          <span className="text-white text-xs md:text-sm font-light">⏸</span>
        </div>
      )}
    </div>
  );
}
