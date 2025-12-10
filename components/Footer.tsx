"use client";

import Image from "next/image";
import Link from "next/link";
import { FOOTER_LINKS, FOOTER_CONTACT_INFO, SOCIALS } from "@/constants";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="2xl:max-w-[1440px] xl:max-w-[1200px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] max-w-[320px] mx-auto padding-container py-12 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-1 sm:col-span-2">
            <Link
              href="/"
              className="mb-6 inline-block hover:opacity-80 transition-opacity"
            >
              <Image
                src="/hilink-logo.svg"
                alt="Hilink"
                width={74}
                height={29}
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Making the world accessible through adventure travel.
            </p>
            <div className="flex gap-4">
              {SOCIALS.links.map((icon: string, index: number) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-green-600 transition-colors duration-300 flex items-center justify-center"
                >
                  <Image
                    src={icon}
                    alt={`Social ${index}`}
                    width={20}
                    height={20}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {FOOTER_LINKS.map((section, index) => (
            <div key={index} className="sm:col-span-1">
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link: string, linkIndex: number) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-white font-semibold mb-4">
              {FOOTER_CONTACT_INFO.title}
            </h4>
            <ul className="space-y-3">
              {FOOTER_CONTACT_INFO.links.map((contact, index) => (
                <li key={index}>
                  <p className="text-gray-400 text-sm mb-1">{contact.label}</p>
                  <a
                    href={
                      contact.label.includes("Email")
                        ? `mailto:${contact.value}`
                        : `tel:${contact.value}`
                    }
                    className="text-white font-medium text-sm hover:text-green-500 transition-colors duration-300"
                  >
                    {contact.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 pt-12 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                Subscribe to our Newsletter
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Get travel tips, exclusive offers, and adventure inspiration
                delivered to your inbox.
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-600 text-sm"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-300 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p>&copy; 2025 Hilink. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">
                Terms & Conditions
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
