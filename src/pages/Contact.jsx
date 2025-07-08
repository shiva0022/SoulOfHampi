import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Contact Hero Section */}
      <div className="bg-[#b08968] bg-opacity-20 py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-[#3d2914] mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-[#3d2914] max-w-3xl mx-auto leading-relaxed">
            We'd love to hear from you. Our team is always here to help you
            discover the soul of Hampi.
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-[#3d2914] mb-8">
                Contact Information
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#c5b693] bg-opacity-60 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <FaMapMarkerAlt className="text-3xl text-[#3d2914] mb-4" />
                  <h3 className="text-xl font-bold text-[#3d2914] mb-3">
                    Visit Us
                  </h3>
                  <p className="text-[#3d2914] leading-relaxed">
                    Hampi Bazaar Street
                    <br />
                    Hampi, Karnataka 583239
                    <br />
                    India
                  </p>
                </div>

                <div className="bg-[#c5b693] bg-opacity-60 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <FaPhone className="text-3xl text-[#3d2914] mb-4" />
                  <h3 className="text-xl font-bold text-[#3d2914] mb-3">
                    Call Us
                  </h3>
                  <p className="text-[#3d2914] leading-relaxed">
                    Toll-free: +91 98765 43210
                    <br />
                    Local: +91 87654 32109
                  </p>
                </div>

                <div className="bg-[#c5b693] bg-opacity-60 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <FaEnvelope className="text-3xl text-[#3d2914] mb-4" />
                  <h3 className="text-xl font-bold text-[#3d2914] mb-3">
                    Email Us
                  </h3>
                  <p className="text-[#3d2914] leading-relaxed">
                    info@soulofhampi.com
                    <br />
                    support@soulofhampi.com
                  </p>
                </div>

                <div className="bg-[#c5b693] bg-opacity-60 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <FaClock className="text-3xl text-[#3d2914] mb-4" />
                  <h3 className="text-xl font-bold text-[#3d2914] mb-3">
                    Business Hours
                  </h3>
                  <p className="text-[#3d2914] leading-relaxed">
                    Mon - Fri: 9:00 AM - 7:00 PM
                    <br />
                    Sat - Sun: 10:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#b08968] bg-opacity-30 backdrop-blur-sm rounded-xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-[#3d2914] mb-6">
                Send us a Message
              </h2>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[#3d2914] font-medium mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-[#c5b693] bg-opacity-50 text-[#3d2914] placeholder-[#3d2914] placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-[#3d2914] focus:ring-opacity-50"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-[#3d2914] font-medium mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-[#c5b693] bg-opacity-50 text-[#3d2914] placeholder-[#3d2914] placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-[#3d2914] focus:ring-opacity-50"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-[#3d2914] font-medium mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-[#c5b693] bg-opacity-50 text-[#3d2914] placeholder-[#3d2914] placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-[#3d2914] focus:ring-opacity-50"
                    placeholder="Enter message subject"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-[#3d2914] font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-[#c5b693] bg-opacity-50 text-[#3d2914] placeholder-[#3d2914] placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-[#3d2914] focus:ring-opacity-50 resize-none"
                    placeholder="Enter your message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#3d2914] hover:bg-[#2d1f0f] text-[#f5f1e8] px-6 py-3 rounded-lg font-medium transition-colors duration-200 shadow-md hover:shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
   

      {/* FAQ Section */}
      <div className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-[#3d2914] mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#c5b693] bg-opacity-60 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-[#3d2914] mb-3">
                What are your shipping times?
              </h3>
              <p className="text-[#3d2914] leading-relaxed">
                We typically process and ship orders within 1-2 business days.
                Standard shipping takes 5-7 business days within India, while
                express shipping takes 2-3 business days.
              </p>
            </div>

            <div className="bg-[#c5b693] bg-opacity-60 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-[#3d2914] mb-3">
                What is your return policy?
              </h3>
              <p className="text-[#3d2914] leading-relaxed">
                We offer a 30-day return policy for all unused items in their
                original packaging. Returns are free for orders over ₹2000.
              </p>
            </div>

            <div className="bg-[#c5b693] bg-opacity-60 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-[#3d2914] mb-3">
                Do you ship internationally?
              </h3>
              <p className="text-[#3d2914] leading-relaxed">
                Yes, we ship to most countries worldwide. International shipping
                times vary by location, typically 7-14 business days.
              </p>
            </div>

            <div className="bg-[#c5b693] bg-opacity-60 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-[#3d2914] mb-3">
                How can I track my order?
              </h3>
              <p className="text-[#3d2914] leading-relaxed">
                Once your order ships, you'll receive a tracking number via
                email and SMS to monitor your package's journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
