"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";

interface ImageCarouselProps {
  images: string[];
  interval?: number;
  className?: string;
  alt?: string;
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  interval = 2000,
  className = "",
  alt = "Carousel Image",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const carouselInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(carouselInterval);
  }, [images.length, interval]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={alt}
          className={`absolute left-0 top-0 h-full w-full rounded-md object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
};
