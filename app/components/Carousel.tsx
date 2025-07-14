"use client";
import React, { useState, useEffect } from "react";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

type CarouselProps = {
  images: string[];
  autoSlide?: boolean;
  autoSlideInterval?: number;
};

const Carousel: React.FC<CarouselProps> = ({
  images,
  autoSlide = true,
  autoSlideInterval = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    if (autoSlide) {
      const slideInterval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, autoSlideInterval);
      return () => clearInterval(slideInterval);
    }
  }, [autoSlide, autoSlideInterval, images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-full">
      <div className="relative w-full overflow-hidden rounded-md">
        {images.map((image, index) => (
          <div
            key={index}
            className={`transition-opacity duration-700 ease-in-out ${
              index === currentIndex
                ? "opacity-100 z-10"
                : "opacity-0 z-0 absolute inset-0"
            }`}
          >
            <img
              src={image}
              alt="Best Thesis and Best Prototype Win"
              className="w-full aspect-[85/73] object-cover rounded-lg cursor-pointer border-2 border-[var(--brightaqua)] dark:border-[var(--brimagenta)]"
            />
          </div>
        ))}
      </div>

      <button className="next-btn left-2" onClick={prevSlide}>
        <MdNavigateBefore size={20} />
      </button>
      <button className="next-btn right-2" onClick={nextSlide}>
        <MdNavigateNext size={20} />
      </button>
    </div>
  );
};

export default Carousel;
