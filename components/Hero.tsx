"use client";

import Image from "next/image";
import { Button } from "@/components/Button";

const Hero = () => {
  return (
    <section className="relative w-full h-screen min-h-[600px] lg:min-h-[800px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/hero-bg.svg"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative h-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="w-full max-w-2xl">
          {/* Badge */}
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <Image src="/star.svg" alt="Star" width={24} height={24} />
            <p className="text-sm sm:text-base font-medium text-white/80">
              Over 28,000 reviews with 4.9 stars
            </p>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6">
            Enjoy the beauty of{" "}
            <span className="text-green-500">nature today</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-white/90 mb-8 sm:mb-10 max-w-xl leading-relaxed">
            We have everything you need for your next adventure. Discover
            amazing destinations, plan epic journeys, and create unforgettable
            memories with friends and family.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8 sm:mb-0">
            <Button type="button" title="Download App" variant="green" />
            <button className="flex items-center justify-center gap-3 px-6 py-3 text-white font-medium hover:opacity-80 transition-opacity">
              <Image src="/play.svg" alt="Play" width={24} height={24} />
              <span>How we work?</span>
            </button>
          </div>
        </div>

        {/* Right side - Hero image */}
        <div className="hidden lg:flex absolute right-0 top-0 h-full items-center">
          <div className="relative w-[400px] h-[500px] 2xl:w-[500px] 2xl:h-[600px]">
            <Image src="/hero.png" alt="Hero" fill className="object-contain" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
