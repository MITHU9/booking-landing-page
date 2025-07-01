"use client";

import Image from "next/image";
import { JSX } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css"; // Swiper base styles

const ImageGallery = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-1 w-full rounded-[14px]">
      {/* Mobile */}
      <div className="block md:hidden">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop
          className="rounded-md overflow-hidden"
        >
          {[
            "/images/image-8.jpg",
            "/images/image-11.jpg",
            "/images/image-10.jpg",
          ].map((src, index) => (
            <SwiperSlide key={index}>
              <div className="relative aspect-[2.5/1] w-full">
                <Image
                  src={src}
                  alt={`slide-${index}`}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="hidden md:flex gap-1 w-full">
        {/* Main Image */}
        <div className="w-2/3 relative aspect-[2.5/1] overflow-hidden rounded-tl-md">
          <Image
            src="/images/image-8.jpg"
            alt="Main view"
            fill
            className="object-cover"
          />
        </div>

        {/* Side Images */}
        <div className="flex flex-col gap-1 w-1/3">
          <div className="relative aspect-[2.5/1] overflow-hidden rounded-tr-md">
            <Image
              src="/images/image-11.jpg"
              alt="view1"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[2.5/1] overflow-hidden">
            <Image
              src="/images/image-10.jpg"
              alt="view2"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Bottom Grid*/}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1 w-full mt-2">
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className="relative aspect-[3/2] overflow-hidden rounded-sm"
            >
              <Image
                src={`/images/image-${i + 1}.jpg`}
                alt={`view-${i}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 16vw"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ImageGallery;
