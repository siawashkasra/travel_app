"use client";

import Image from "next/image";

const GetApp = () => {
  return (
    <section className="2xl:max-w-[1440px] xl:max-w-[1200px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] max-w-[320px] mx-auto padding-container relative py-10 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left - Content */}
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Get our app and{" "}
            <span className="text-green-600">start exploring</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
            Available on iOS and Android. Download now and get exclusive access
            to premium features, offline maps, and real-time travel updates.
          </p>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8">
            {/* Apple App Store */}
            <button className="flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-black text-white font-semibold rounded-lg hover:bg-gray-900 transition-colors duration-300 group">
              <Image src="/apple.svg" alt="Apple" width={24} height={24} />
              <div className="text-left">
                <p className="text-xs text-gray-300">Download on</p>
                <p className="text-base sm:text-lg font-bold">App Store</p>
              </div>
            </button>

            {/* Google Play Store */}
            <button className="flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-black text-white font-semibold rounded-lg hover:bg-gray-900 transition-colors duration-300 group">
              <Image src="/android.svg" alt="Android" width={24} height={24} />
              <div className="text-left">
                <p className="text-xs text-gray-300">Download on</p>
                <p className="text-base sm:text-lg font-bold">Play Store</p>
              </div>
            </button>
          </div>

          {/* Features List */}
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
              Why Choose Our App?
            </h3>
            {[
              { icon: "map.svg", text: "Offline maps work everywhere" },
              { icon: "calendar.svg", text: "Plan and schedule adventures" },
              { icon: "tech.svg", text: "AR-powered navigation guides" },
              { icon: "location.svg", text: "Discover new locations monthly" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Image
                    src={`/${item.icon}`}
                    alt={item.text}
                    width={20}
                    height={20}
                  />
                </div>
                <p className="text-base sm:text-lg text-gray-700">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Image */}
        <div className="relative h-[400px] sm:h-[500px] lg:h-[600px]">
          <Image
            src="/phones.png"
            alt="App preview"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="mt-16 lg:mt-24 bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-8 sm:p-12 lg:p-16 text-center">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
          Ready for your next adventure?
        </h3>
        <p className="text-base sm:text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          Join thousands of travelers exploring the world with our app. Get
          started today and unlock a world of possibilities.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center sm:items-stretch">
          <button className="flex items-center justify-center gap-2 px-8 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 w-full sm:w-auto">
            <Image src="/apple.svg" alt="Apple" width={20} height={20} />
            App Store
          </button>
          <button className="flex items-center justify-center gap-2 px-8 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 w-full sm:w-auto">
            <Image src="/android.svg" alt="Android" width={20} height={20} />
            Play Store
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 mt-10 sm:mt-12">
          {[
            { number: "28K+", label: "Reviews" },
            { number: "4.9", label: "Rating" },
            { number: "500K+", label: "Downloads" },
          ].map((stat, index) => (
            <div key={index}>
              <p className="text-2xl sm:text-3xl font-bold text-white">
                {stat.number}
              </p>
              <p className="text-sm sm:text-base text-white/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetApp;
