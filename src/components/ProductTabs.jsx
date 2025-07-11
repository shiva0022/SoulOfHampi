import React from "react";
import { FaCheck, FaStar, FaUserCircle, FaThumbsUp } from "react-icons/fa";

const ProductTabs = ({
  product,
  activeTab,
  setActiveTab,
}) => (
  <div className="mt-12">
    <div className="bg-gradient-to-br from-[#3d2914] to-[#4a3420] rounded-2xl border border-[#6b5b4b] overflow-hidden">
      {/* Tab Headers */}
      <div className="flex border-b border-[#6b5b4b] mobile-tab-scroll">
        {["description", "specifications", "reviews"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-shrink-0 whitespace-nowrap py-4 px-4 sm:px-6 font-semibold transition-all duration-300 ${
              activeTab === tab
                ? "bg-[#d4c5a0] text-[#3d2914]"
                : "text-[#f5f1e8] hover:bg-[#4a3420]"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
      {/* Tab Content */}
      <div className="p-4 sm:p-6 mobile-tab-scroll">
        {activeTab === "description" && (
          <div className="space-y-4">
            <p className="text-[#f5f1e8] text-lg leading-relaxed">
              {product.description}
            </p>
            <div>
              <h4 className="text-[#d4c5a0] font-semibold mb-3">Key Features:</h4>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-[#f5f1e8]">
                    <FaCheck className="text-green-500 text-sm" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        {activeTab === "specifications" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} className="flex justify-between py-3 border-b border-[#6b5b4b]">
                <span className="text-[#d4c5a0] font-semibold">{key}:</span>
                <span className="text-[#f5f1e8]">{value}</span>
              </div>
            ))}
          </div>
        )}
        {activeTab === "reviews" && (
          <div className="space-y-6">
            {/* Review Summary */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 bg-[#2d1f0f]/60 rounded-xl p-6 border border-[#6b5b4b]">
              {/* Overall Rating */}
              <div className="text-center">
                <div className="text-5xl font-bold text-[#f5f1e8]">{product.rating}</div>
                <div className="flex items-center gap-1 justify-center my-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} className="text-yellow-400" />
                  ))}
                </div>
                <div className="text-[#d4c5a0]">Based on {product.reviewCount} reviews</div>
              </div>
              {/* Rating Distribution */}
              <div className="col-span-2 space-y-2">
                {[5, 4, 3, 2, 1].map((rating) => {
                  const percent = rating === 5 ? 70 : rating === 4 ? 20 : rating === 3 ? 5 : rating === 2 ? 3 : 2;
                  return (
                    <div key={rating} className="flex items-center gap-2">
                      <span className="text-[#d4c5a0] w-6">{rating}</span>
                      <div className="flex items-center">
                        <FaStar className="text-yellow-400" />
                      </div>
                      <div className="flex-1 h-2 bg-[#6b5b4b] rounded-full overflow-hidden">
                        <div className="h-full bg-yellow-400" style={{ width: `${percent}%` }}></div>
                      </div>
                      <span className="text-[#d4c5a0] w-8">{percent}%</span>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* Write a Review Section */}
            <div className="bg-[#2d1f0f]/60 rounded-xl p-6 border border-[#6b5b4b]">
              <h4 className="text-xl font-semibold text-[#f5f1e8] mb-4">Write a Review</h4>
              <div className="space-y-4">
                <div>
                  <label className="block text-[#d4c5a0] mb-2">Your Rating</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button key={star} className="text-2xl text-gray-400 hover:text-yellow-400 transition-colors" aria-label={`Rate ${star} stars`}>
                        <FaStar />
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-[#d4c5a0] mb-2">Your Review</label>
                  <textarea className="w-full bg-[#4a3420] border border-[#6b5b4b] rounded-lg p-3 text-[#f5f1e8] focus:outline-none focus:border-[#d4c5a0]" rows="4" placeholder="Share your thoughts about this product..."></textarea>
                </div>
                <button className="bg-[#d4c5a0] text-[#3d2914] py-2 px-6 rounded-lg font-semibold hover:bg-[#b08968] transition-all duration-300">Submit Review</button>
              </div>
            </div>
            {/* Sample Reviews */}
            <h4 className="text-xl font-semibold text-[#f5f1e8] mt-8 mb-4">Customer Reviews</h4>
            <div className="space-y-4">
              {[
                {
                  name: "Rajesh Kumar",
                  rating: 5,
                  date: "June 15, 2025",
                  verified: true,
                  comment: "Excellent craftsmanship! The wooden elephant is beautifully carved and looks amazing in my living room.",
                },
                {
                  name: "Priya Sharma",
                  rating: 4,
                  date: "May 28, 2025",
                  verified: true,
                  comment: "Great quality product. Fast delivery and secure packaging. Highly recommended!",
                },
                {
                  name: "Amit Patel",
                  rating: 5,
                  date: "July 2, 2025",
                  verified: false,
                  comment: "Authentic Hampi artwork. Perfect for gifting. Very happy with the purchase.",
                },
              ].map((review, index) => (
                <div key={index} className="bg-[#2d1f0f] rounded-xl p-4 border border-[#6b5b4b] hover:border-[#d4c5a0] transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                    <div className="flex items-center gap-3">
                      <FaUserCircle className="text-[#d4c5a0] text-2xl" />
                      <div>
                        <div className="text-[#f5f1e8] font-semibold flex items-center gap-2">
                          {review.name}
                          {review.verified && (
                            <span className="bg-green-600/20 text-green-500 text-xs px-2 py-0.5 rounded-full">Verified Purchase</span>
                          )}
                        </div>
                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <FaStar key={star} className={`text-sm ${star <= review.rating ? "text-yellow-400" : "text-gray-600"}`} />
                          ))}
                        </div>
                      </div>
                    </div>
                    <span className="text-[#d4c5a0] text-sm">{review.date}</span>
                  </div>
                  <p className="text-[#f5f1e8] mb-3">{review.comment}</p>
                  <div className="flex items-center gap-4 mt-3">
                    <button className="flex items-center gap-1 text-[#d4c5a0] hover:text-[#f5f1e8] transition-colors">
                      <FaThumbsUp className="text-sm" />
                      Helpful
                    </button>
                    <button className="text-[#d4c5a0] hover:text-[#f5f1e8] transition-colors">Report</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
);

export default ProductTabs; 