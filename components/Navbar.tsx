"use client";

import { NAV_LINKS } from "@/constants";
import { Button } from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200/50 shadow-sm">
      <div className="2xl:max-w-[1440px] xl:max-w-[1200px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] max-w-[320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 hover:opacity-80 transition-opacity duration-300"
          >
            <Image
              src="/hilink-logo.svg"
              alt="Hilink logo"
              width={74}
              height={29}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="px-4 py-2 text-gray-700 font-medium text-sm hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Login Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              icon="/user.svg"
              type="button"
              title="Login"
              variant="gray"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Image
              src={isMenuOpen ? "/close.svg" : "/menu.svg"}
              alt="menu"
              width={24}
              height={24}
              className={isMenuOpen ? "brightness-0" : ""}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white/98 backdrop-blur-sm shadow-lg animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="max-w-[320px] sm:max-w-[540px] mx-auto px-4 sm:px-6 py-4 sm:py-6">
            {/* Mobile Navigation Links */}
            <ul className="flex flex-col gap-1 mb-6">
              {NAV_LINKS.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="block px-4 py-3 text-gray-700 font-medium text-sm hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Login Button */}
            <div className="border-t border-gray-200 pt-6">
              <Button
                icon="/user.svg"
                type="button"
                title="Login"
                variant="gray"
                fullWidth={true}
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
