"use client";

import { PEOPLE_URL } from "@/constants";
import Image from "next/image";
import { Button } from "@/components/Button";

interface CampInfo {
  id: string;
  title: string;
  subtitle: string;
  backgroundImage: string;
  variant: string;
  description: string;
}

const CAMPS_INFO: CampInfo[] = [
  {
    id: "1",
    title: "Putuk Truno Camp",
    subtitle: "Prigen, Pasuruan",
    backgroundImage: "/camping1.jpeg",
    variant: "bg-green-50",
    description:
      "We want everyone to enjoy the beauty of nature to the fullest, whether you are just passing through and want generic information or planning your next adventure.",
  },
  {
    id: "2",
    title: "Mountain View Camp",
    subtitle: "Bromo, East Java",
    backgroundImage: "/camping2.jpeg",
    variant: "bg-blue-50",
    description:
      "Experience breathtaking mountain views and create unforgettable memories with your loved ones in this serene natural setting.",
  },
];

const Camp = () => {
  return (
    <section className="2xl:max-w-[1440px] xl:max-w-[1200px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] max-w-[320px] mx-auto padding-container relative py-10 lg:py-20">
      {/* Header */}
      <div className="mb-12 lg:mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Featured Camps & Destinations
        </h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl">
          Explore our curated selection of amazing camping destinations and
          adventure hotspots perfect for your next journey.
        </p>
      </div>

      {/* Camps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-16">
        {CAMPS_INFO.map((camp) => (
          <CampCard key={camp.id} {...camp} />
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-8 sm:p-12 lg:p-16 border border-gray-200">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8">
          <div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
              Know more about camping?
            </h3>
            <p className="text-base sm:text-lg text-gray-600">
              Discover detailed guides, tips, and recommendations for the best
              camping experiences.
            </p>
          </div>
          <Button type="button" title="Learn More" variant="green" />
        </div>
      </div>
    </section>
  );
};

interface CampCardProps extends CampInfo {
  backgroundImage: string;
}

const CampCard = ({
  backgroundImage,
  title,
  subtitle,
  variant,
  description,
}: CampCardProps) => {
  return (
    <div className="group h-full rounded-3xl overflow-hidden border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white">
      {/* Image Container */}
      <div className="relative w-full h-[280px] sm:h-[320px] lg:h-[360px] overflow-hidden">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

        {/* Location Badge - Positioned on Image */}
        <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
          <div className="flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2">
            <svg
              className="w-4 h-4 text-green-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm font-semibold text-gray-800">
              {subtitle}
            </span>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-6 sm:p-8 lg:p-10">
        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Visitors Section */}
        <div className="flex items-center justify-between pt-6 border-t border-gray-200">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-3">
              {PEOPLE_URL.slice(0, 3).map((url, index) => (
                <div
                  key={index}
                  className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full border-3 border-white overflow-hidden shadow-md hover:z-10"
                >
                  <Image
                    src={url}
                    alt={`Visitor ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="text-sm font-semibold text-gray-700">
              +{PEOPLE_URL.length} people going
            </p>
          </div>

          {/* Arrow Icon */}
          <button className="w-10 h-10 rounded-full bg-green-100 hover:bg-green-600 text-green-600 hover:text-white flex items-center justify-center transition-all duration-300">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Camp;
