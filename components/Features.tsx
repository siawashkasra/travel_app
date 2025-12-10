"use client";

import { FEATURES } from "@/constants";
import Image from "next/image";

interface Feature {
  title: string;
  icon: string;
  variant: string;
  description: string;
}

const Features = () => {
  return (
    <section className="2xl:max-w-[1440px] xl:max-w-[1200px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] max-w-[320px] mx-auto padding-container relative py-10 lg:py-20">
      {/* Header */}
      <div className="mb-12 lg:mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
          Our Features
        </h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed">
          Discover what makes our travel app the best choice for adventurers.
          From offline maps to real-time updates, we've packed everything you
          need for an unforgettable journey.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-20">
        {FEATURES.map((feature: Feature, index: number) => (
          <FeatureCard key={index} feature={feature} index={index} />
        ))}
      </div>

      {/* Feature Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 sm:p-10 lg:p-16 border border-gray-200">
        {/* Left - Content */}
        <div className="order-2 lg:order-1">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            Experience Technology Like Never Before
          </h3>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
            Our advanced technology stack ensures you have the best experience
            whether you're connected or offline. Real-time updates, augmented
            reality guides, and intelligent recommendations are just the
            beginning.
          </p>

          {/* Feature List */}
          <div className="space-y-3 sm:space-y-4 mb-8">
            {[
              "Lightning-fast app performance",
              "Advanced offline capabilities",
              "AI-powered recommendations",
              "Real-time weather and alerts",
              "Multi-language support",
              "Seamless cloud synchronization",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-green-100">
                    <svg
                      className="h-4 w-4 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-base sm:text-lg text-gray-700">{item}</p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button className="w-full sm:w-auto px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-300">
            Learn More
          </button>
        </div>

        {/* Right - Image */}
        <div className="order-1 lg:order-2 relative h-[300px] sm:h-[400px] lg:h-[500px]">
          <Image
            src="/feature-bg.png"
            alt="Feature showcase"
            fill
            className="object-cover rounded-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

const FeatureCard = ({ feature, index }: FeatureCardProps) => {
  const isGreen = feature.variant === "green";
  const bgColor = isGreen ? "bg-green-50" : "bg-orange-50";
  const borderColor = isGreen ? "border-green-200" : "border-orange-200";
  const iconBg = isGreen ? "bg-green-100" : "bg-orange-100";
  const accentColor = isGreen ? "text-green-600" : "text-orange-600";

  return (
    <div
      className={`group h-full rounded-2xl border-2 ${borderColor} ${bgColor} p-6 sm:p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
    >
      {/* Header with number and icon */}
      <div className="flex items-start justify-between mb-6">
        {/* Number Badge */}
        <div className="text-3xl sm:text-4xl font-bold text-gray-900/10">
          0{index + 1}
        </div>

        {/* Icon */}
        <div className={`${iconBg} rounded-xl p-3 sm:p-4 flex-shrink-0`}>
          <Image
            src={feature.icon}
            alt={feature.title}
            width={32}
            height={32}
            className="w-6 h-6 sm:w-8 sm:h-8"
          />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
        {feature.title}
      </h3>

      {/* Description */}
      <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
        {feature.description}
      </p>

      {/* Learn More Link */}
      <a
        href="#"
        className={`inline-flex items-center gap-2 font-semibold ${accentColor} hover:gap-3 transition-all duration-300`}
      >
        <span>Learn More</span>
        <svg
          className="w-4 h-4 sm:w-5 sm:h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </a>
    </div>
  );
};

export default Features;
