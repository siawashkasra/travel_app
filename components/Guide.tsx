"use client";

import Image from "next/image";

interface GuideStep {
  number: number;
  title: string;
  description: string;
  icon: string;
}

const GUIDE_STEPS: GuideStep[] = [
  {
    number: 1,
    title: "Set Your Destination",
    description:
      "Choose your dream destination and let us help you plan the perfect adventure tailored to your preferences.",
    icon: "/location.svg",
  },
  {
    number: 2,
    title: "Gather Your Essentials",
    description:
      "Prepare all the necessary gear and supplies for your trip with our comprehensive packing checklist.",
    icon: "/map.svg",
  },
  {
    number: 3,
    title: "Find Your Group",
    description:
      "Connect with other adventurers and travelers who share your interests and travel style.",
    icon: "/globe.svg",
  },
  {
    number: 4,
    title: "Explore Together",
    description:
      "Start your journey and create unforgettable memories with your travel companions.",
    icon: "/folded-map.svg",
  },
];

const Guide = () => {
  return (
    <section className="2xl:max-w-[1440px] xl:max-w-[1200px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] max-w-[320px] mx-auto padding-container relative py-10 lg:py-20">
      {/* Header */}
      <div className="mb-12 lg:mb-20">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
          A step closer to your{" "}
          <span className="text-green-600">new adventure</span>
        </h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed">
          Follow these simple steps to plan and execute your perfect travel
          experience. From choosing your destination to exploring with friends,
          we guide you through every step of the journey.
        </p>
      </div>

      {/* Guide Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12 lg:mb-16">
        {GUIDE_STEPS.map((step, index) => (
          <div key={step.number} className="flex flex-col">
            {/* Step Card */}
            <div className="flex-1 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 sm:p-8 border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all duration-300">
              {/* Number Badge */}
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-lg sm:text-xl font-bold text-green-600">
                    {step.number}
                  </span>
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-200 p-1.5">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={32}
                    height={32}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>

            {/* Connector Line */}
            {index < GUIDE_STEPS.length - 1 && (
              <div className="hidden lg:flex justify-center mt-4 mb-4">
                <div className="w-1 h-8 bg-gradient-to-b from-green-300 to-transparent"></div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Visual Guide Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left - Image */}
        <div className="relative hidden lg:block h-[500px]">
          <Image
            src="/phones.png"
            alt="Guide visual"
            fill
            className="object-contain"
          />
        </div>

        {/* Right - Additional Info */}
        <div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            Start your adventure now
          </h3>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
            Download our app and join thousands of adventurers exploring the
            world. Get personalized recommendations, real-time updates, and
            connect with fellow travelers.
          </p>

          {/* Features List */}
          <div className="space-y-4 mb-8">
            {[
              "Real-time travel updates and notifications",
              "Offline maps for seamless navigation",
              "Connect with fellow adventurers",
              "Exclusive deals and discounts",
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-green-600"
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
                <span className="text-base sm:text-lg text-gray-700">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button className="w-full sm:w-auto px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-300">
            Download Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Guide;
