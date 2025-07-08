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
    <footer className="bg-gradient-to-br from-[#d4c5a0] to-[#9d7a5e] text-[#3d2914] mt-auto">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us */}
          <div className="footer-section">
            <h3 className="text-lg font-bold mb-4">About SoulOfHampi</h3>
            <p className="text-sm leading-relaxed">
              We are dedicated to bringing you the authentic essence of Hampi
              through our carefully curated products and exceptional shopping
              experience.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-sm hover:text-[#2d1f0f] transition-colors duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  className="text-sm hover:text-[#2d1f0f] transition-colors duration-200"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-sm hover:text-[#2d1f0f] transition-colors duration-200"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-sm hover:text-[#2d1f0f] transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="footer-section">
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-2 text-sm">
              <p>Email: info@soulofhampi.com</p>
              <p>Phone: +91 98765 43210</p>
              <p>Address: Hampi, Karnataka, India</p>
            </div>
          </div>

          {/* Follow Us */}
          <div className="footer-section">
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-xl hover:text-[#2d1f0f] transition-colors duration-200"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="text-xl hover:text-[#2d1f0f] transition-colors duration-200"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-xl hover:text-[#2d1f0f] transition-colors duration-200"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-xl hover:text-[#2d1f0f] transition-colors duration-200"
              >
                <FaPinterest />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-[#3d2914] text-[#f5f1e8] py-4">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm">
            &copy; 2024 SoulOfHampi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
