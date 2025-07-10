import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#2d1f0f] via-[#3d2914] to-[#4a3420] text-[#f5f1e8] mt-auto border-t border-[#6b5b4b]">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* About Us */}
          <div className="footer-section">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-[#f5f1e8]">
              About SoulOfHampi
            </h3>
            <p className="text-[#d4c5a0] leading-relaxed text-base sm:text-lg">
              We are dedicated to bringing you the authentic essence of Hampi
              through our carefully curated products and exceptional shopping
              experience that celebrates India's rich cultural heritage.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-[#f5f1e8]">
              Quick Links
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <Link
                  to="/"
                  className="text-[#d4c5a0] hover:text-[#f5f1e8] transition-colors duration-300 text-base sm:text-lg font-medium"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-[#d4c5a0] hover:text-[#f5f1e8] transition-colors duration-300 text-base sm:text-lg font-medium"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-[#d4c5a0] hover:text-[#f5f1e8] transition-colors duration-300 text-base sm:text-lg font-medium"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-[#d4c5a0] hover:text-[#f5f1e8] transition-colors duration-300 text-base sm:text-lg font-medium"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="footer-section">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-[#f5f1e8]">
              Contact Us
            </h3>
            <div className="space-y-3 sm:space-y-4 text-[#d4c5a0] text-base sm:text-lg">
              <p className="flex items-center gap-3">
                <span className="text-[#b08968] text-lg">📧</span>
                <span className="break-all">info@soulofhampi.com</span>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-[#b08968] text-lg">📞</span>
                +91 98765 43210
              </p>
              <p className="flex items-center gap-3">
                <span className="text-[#b08968] text-lg">📍</span>
                Hampi, Karnataka, India
              </p>
            </div>
          </div>

          {/* Follow Us */}
          <div className="footer-section">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-[#f5f1e8]">
              Follow Us
            </h3>
            <div className="flex gap-4 sm:gap-6 mb-6 sm:mb-8">
              <a
                href="#"
                className="text-2xl sm:text-3xl text-[#d4c5a0] hover:text-[#f5f1e8] transition-colors duration-300 transform hover:scale-110"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="text-2xl sm:text-3xl text-[#d4c5a0] hover:text-[#f5f1e8] transition-colors duration-300 transform hover:scale-110"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-2xl sm:text-3xl text-[#d4c5a0] hover:text-[#f5f1e8] transition-colors duration-300 transform hover:scale-110"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-2xl sm:text-3xl text-[#d4c5a0] hover:text-[#f5f1e8] transition-colors duration-300 transform hover:scale-110"
              >
                <FaPinterest />
              </a>
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-[#f5f1e8]">
                Newsletter
              </h4>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-[#3d2914] text-[#f5f1e8] placeholder-[#d4c5a0] border border-[#6b5b4b] focus:outline-none focus:ring-2 focus:ring-[#d4c5a0] text-sm sm:text-base"
                />
                <button className="bg-gradient-to-r from-[#d4c5a0] to-[#b08968] hover:from-[#b08968] hover:to-[#d4c5a0] text-[#3d2914] px-3 sm:px-4 py-2 sm:py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-[#1a1208] text-[#f5f1e8] py-4 sm:py-6 border-t border-[#6b5b4b]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-base sm:text-lg text-center md:text-left">
              &copy; 2024 SoulOfHampi. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-[#d4c5a0] text-sm sm:text-base">
              <a
                href="#"
                className="hover:text-[#f5f1e8] transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-[#f5f1e8] transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="hover:text-[#f5f1e8] transition-colors duration-300"
              >
                Shipping Info
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
