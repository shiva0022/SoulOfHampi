import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2d1f0f] via-[#3d2914] to-[#4a3420]">
      {/* Contact Hero Section */}
      <div className="bg-gradient-to-br from-[#3d2914] via-[#4a3420] to-[#5a4a3a] py-20 px-6 border-b border-[#6b5b4b]">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold text-[#f5f1e8] mb-8 relative">
            Get in Touch
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-[#d4c5a0] to-[#b08968] rounded-full"></span>
          </h1>
          <p className="text-2xl text-[#d4c5a0] max-w-4xl mx-auto leading-relaxed font-medium">
            We'd love to hear from you. Our team is always here to help you
            discover the soul of Hampi and assist with your inquiries.
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-4xl font-bold text-[#f5f1e8] mb-12">
                Contact Information
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-[#3d2914] via-[#4a3420] to-[#5a4a3a] rounded-2xl p-8 shadow-2xl border border-[#6b5b4b] hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <FaMapMarkerAlt className="text-4xl text-[#d4c5a0] mb-6" />
                  <h3 className="text-2xl font-bold text-[#f5f1e8] mb-4">
                    Visit Us
                  </h3>
                  <p className="text-[#d4c5a0] leading-relaxed text-lg">
                    Hampi Bazaar Street
                    <br />
                    Hampi, Karnataka 583239
                    <br />
                    India
                  </p>
                </div>

                <div className="bg-gradient-to-br from-[#3d2914] via-[#4a3420] to-[#5a4a3a] rounded-2xl p-8 shadow-2xl border border-[#6b5b4b] hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <FaPhone className="text-4xl text-[#d4c5a0] mb-6" />
                  <h3 className="text-2xl font-bold text-[#f5f1e8] mb-4">
                    Call Us
                  </h3>
                  <p className="text-[#d4c5a0] leading-relaxed text-lg">
                    Toll-free: +91 98765 43210
                    <br />
                    Local: +91 87654 32109
                  </p>
                </div>

                <div className="bg-gradient-to-br from-[#3d2914] via-[#4a3420] to-[#5a4a3a] rounded-2xl p-8 shadow-2xl border border-[#6b5b4b] hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <FaEnvelope className="text-4xl text-[#d4c5a0] mb-6" />
                  <h3 className="text-2xl font-bold text-[#f5f1e8] mb-4">
                    Email Us
                  </h3>
                  <p className="text-[#d4c5a0] leading-relaxed text-lg">
                    info@soulofhampi.com
                    <br />
                    support@soulofhampi.com
                  </p>
                </div>

                <div className="bg-gradient-to-br from-[#3d2914] via-[#4a3420] to-[#5a4a3a] rounded-2xl p-8 shadow-2xl border border-[#6b5b4b] hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <FaClock className="text-4xl text-[#d4c5a0] mb-6" />
                  <h3 className="text-2xl font-bold text-[#f5f1e8] mb-4">
                    Business Hours
                  </h3>
                  <p className="text-[#d4c5a0] leading-relaxed text-lg">
                    Mon - Fri: 9:00 AM - 7:00 PM
                    <br />
                    Sat - Sun: 10:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-[#4a3420]/90 via-[#5a4a3a]/80 to-[#3d2914]/90 rounded-3xl px-6 py-6 shadow-2xl border border-[#9d7a5e] w-full max-w-2xl mx-auto flex flex-col justify-center backdrop-blur-md transition-all duration-300">
              <div className="flex flex-col items-center mb-6">
                <h2 className="text-4xl font-bold text-[#f5f1e8] mb-0 tracking-wide drop-shadow-lg">
                  Send us a Message
                </h2>
              </div>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[#f5f1e8] font-semibold mb-2 text-lg"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 rounded-2xl bg-[#2d1f0f]/90 text-[#f5f1e8] placeholder-[#d4c5a0] placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-[#d4c5a0] focus:ring-opacity-80 border border-[#6b5b4b] focus:border-[#d4c5a0] shadow-sm focus:shadow-lg transition-all duration-300 text-lg"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-[#f5f1e8] font-semibold mb-2 text-lg"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 rounded-2xl bg-[#2d1f0f]/90 text-[#f5f1e8] placeholder-[#d4c5a0] placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-[#d4c5a0] focus:ring-opacity-80 border border-[#6b5b4b] focus:border-[#d4c5a0] shadow-sm focus:shadow-lg transition-all duration-300 text-lg"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-[#f5f1e8] font-semibold mb-2 text-lg"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-2 rounded-2xl bg-[#2d1f0f]/90 text-[#f5f1e8] placeholder-[#d4c5a0] placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-[#d4c5a0] focus:ring-opacity-80 border border-[#6b5b4b] focus:border-[#d4c5a0] shadow-sm focus:shadow-lg transition-all duration-300 text-lg"
                    placeholder="Enter message subject"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-[#f5f1e8] font-semibold mb-2 text-lg"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    required
                    className="w-full px-4 py-2 rounded-2xl bg-[#2d1f0f]/90 text-[#f5f1e8] placeholder-[#d4c5a0] placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-[#d4c5a0] focus:ring-opacity-80 border border-[#6b5b4b] focus:border-[#d4c5a0] shadow-sm focus:shadow-lg transition-all duration-300 resize-none text-lg"
                    placeholder="Enter your message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#d4c5a0] to-[#b08968] hover:from-[#b08968] hover:to-[#d4c5a0] text-[#3d2914] px-6 py-2 rounded-2xl font-bold transition-all duration-300 shadow-lg hover:shadow-2xl border border-[#9d7a5e] text-lg focus:outline-none focus:ring-2 focus:ring-[#d4c5a0] focus:ring-opacity-80"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 px-6 bg-gradient-to-br from-[#3d2914] via-[#4a3420] to-[#5a4a3a] border-t border-[#6b5b4b]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-[#f5f1e8] mb-16 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#2d1f0f] via-[#3d2914] to-[#4a3420] rounded-2xl p-8 shadow-2xl border border-[#6b5b4b] hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-bold text-[#f5f1e8] mb-4">
                What are your shipping times?
              </h3>
              <p className="text-[#d4c5a0] leading-relaxed text-lg">
                We typically process and ship orders within 1-2 business days.
                Standard shipping takes 5-7 business days within India, while
                express shipping takes 2-3 business days.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#2d1f0f] via-[#3d2914] to-[#4a3420] rounded-2xl p-8 shadow-2xl border border-[#6b5b4b] hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-bold text-[#f5f1e8] mb-4">
                What is your return policy?
              </h3>
              <p className="text-[#d4c5a0] leading-relaxed text-lg">
                We offer a 30-day return policy for all unused items in their
                original packaging. Returns are free for orders over ₹2000.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#2d1f0f] via-[#3d2914] to-[#4a3420] rounded-2xl p-8 shadow-2xl border border-[#6b5b4b] hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-bold text-[#f5f1e8] mb-4">
                Do you ship internationally?
              </h3>
              <p className="text-[#d4c5a0] leading-relaxed text-lg">
                Yes, we ship to most countries worldwide. International shipping
                typically takes 7-14 business days depending on the destination.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#2d1f0f] via-[#3d2914] to-[#4a3420] rounded-2xl p-8 shadow-2xl border border-[#6b5b4b] hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-bold text-[#f5f1e8] mb-4">
                Are your products authentic?
              </h3>
              <p className="text-[#d4c5a0] leading-relaxed text-lg">
                Absolutely! All our products are authentic handcrafted items
                sourced directly from skilled artisans in and around Hampi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
