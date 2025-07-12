import React from "react";
import { FaCheck, FaStar, FaUserCircle, FaThumbsUp } from "react-icons/fa";

const ProductTabs = ({ product, activeTab, setActiveTab }) => (
  <div className="mt-12">
    <div className="bg-gradient-to-br from-[#3d2914] to-[#4a3420] rounded-2xl border border-[#6b5b4b] overflow-hidden">
      {/* Tab Headers */}
      <div className="flex border-b border-[#6b5b4b] overflow-x-auto scrollbar-hide">
        {["description", "specifications", "reviews"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 min-w-0 py-3 px-2 sm:py-4 sm:px-6 font-semibold text-sm sm:text-base transition-all duration-300 ${
              activeTab === tab
                ? "bg-[#d4c5a0] text-[#3d2914]"
                : "text-[#f5f1e8] hover:bg-[#4a3420]"
            }`}
          >
            <span className="block truncate">
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </span>
          </button>
        ))}
      </div>
      {/* Tab Content */}
      <div className="p-3 sm:p-6">
        {activeTab === "description" && (
          <div className="space-y-3 sm:space-y-4">
            <p className="text-[#f5f1e8] text-base sm:text-lg leading-relaxed">
              {product.description}
            </p>
            <div>
              <h4 className="text-[#d4c5a0] font-semibold mb-2 sm:mb-3 text-base sm:text-lg">
                Key Features:
              </h4>
              <ul className="space-y-1.5 sm:space-y-2">
                {product.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-[#f5f1e8] text-sm sm:text-base"
                  >
                    <FaCheck className="text-green-500 text-xs sm:text-sm flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        {activeTab === "specifications" && (
          <div className="grid grid-cols-1 gap-3 sm:gap-4">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div
                key={key}
                className="flex justify-between items-center py-2 sm:py-3 border-b border-[#6b5b4b] gap-2"
              >
                <span className="text-[#d4c5a0] font-semibold text-sm sm:text-base flex-shrink-0">
                  {key}:
                </span>
                <span className="text-[#f5f1e8] text-sm sm:text-base text-right">
                  {value}
                </span>
              </div>
            ))}
          </div>
        )}
        {activeTab === "reviews" && (
          <div className="space-y-4 sm:space-y-6">
            {/* Review Summary */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 bg-[#2d1f0f]/60 rounded-xl p-4 sm:p-6 border border-[#6b5b4b]">
              {/* Overall Rating */}
              <div className="text-center">
                <div className="text-3xl sm:text-5xl font-bold text-[#f5f1e8]">
                  {product.rating}
                </div>
                <div className="flex items-center gap-1 justify-center my-1 sm:my-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                      key={star}
                      className="text-yellow-400 text-sm sm:text-base"
                    />
                  ))}
                </div>
                <div className="text-[#d4c5a0] text-sm sm:text-base">
                  Based on {product.reviewCount} reviews
                </div>
              </div>
              {/* Rating Distribution */}
              <div className="col-span-1 lg:col-span-2 space-y-1.5 sm:space-y-2">
                {[5, 4, 3, 2, 1].map((rating) => {
                  const percent =
                    rating === 5
                      ? 70
                      : rating === 4
                      ? 20
                      : rating === 3
                      ? 5
                      : rating === 2
                      ? 3
                      : 2;
                  return (
                    <div
                      key={rating}
                      className="flex items-center gap-1.5 sm:gap-2"
                    >
                      <span className="text-[#d4c5a0] w-4 sm:w-6 text-sm sm:text-base">
                        {rating}
                      </span>
                      <div className="flex items-center">
                        <FaStar className="text-yellow-400 text-xs sm:text-sm" />
                      </div>
                      <div className="flex-1 h-1.5 sm:h-2 bg-[#6b5b4b] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-yellow-400"
                          style={{ width: `${percent}%` }}
                        ></div>
                      </div>
                      <span className="text-[#d4c5a0] w-6 sm:w-8 text-xs sm:text-sm">
                        {percent}%
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* Write a Review Section */}
            <div className="bg-[#2d1f0f]/60 rounded-xl p-4 sm:p-6 border border-[#6b5b4b]">
              <h4 className="text-lg sm:text-xl font-semibold text-[#f5f1e8] mb-3 sm:mb-4">
                Write a Review
              </h4>
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <label className="block text-[#d4c5a0] mb-1.5 sm:mb-2 text-sm sm:text-base">
                    Your Rating
                  </label>
                  <div className="flex gap-1 sm:gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        className="text-xl sm:text-2xl text-gray-400 hover:text-yellow-400 transition-colors"
                        aria-label={`Rate ${star} stars`}
                      >
                        <FaStar />
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-[#d4c5a0] mb-1.5 sm:mb-2 text-sm sm:text-base">
                    Your Review
                  </label>
                  <textarea
                    className="w-full bg-[#4a3420] border border-[#6b5b4b] rounded-lg p-2.5 sm:p-3 text-[#f5f1e8] focus:outline-none focus:border-[#d4c5a0] text-sm sm:text-base"
                    rows="3"
                    placeholder="Share your thoughts about this product..."
                  ></textarea>
                </div>
                <button className="bg-[#d4c5a0] text-[#3d2914] py-2 px-4 sm:px-6 rounded-lg font-semibold hover:bg-[#b08968] transition-all duration-300 text-sm sm:text-base">
                  Submit Review
                </button>
              </div>
            </div>
            {/* Sample Reviews */}
            <h4 className="text-lg sm:text-xl font-semibold text-[#f5f1e8] mt-6 sm:mt-8 mb-3 sm:mb-4">
              Customer Reviews
            </h4>
            <div className="space-y-3 sm:space-y-4">
              {[
                {
                  name: "Rajesh Kumar",
                  rating: 5,
                  date: "June 15, 2025",
                  verified: true,
                  comment:
                    "Excellent craftsmanship! The wooden elephant is beautifully carved and looks amazing in my living room.",
                },
                {
                  name: "Priya Sharma",
                  rating: 4,
                  date: "May 28, 2025",
                  verified: true,
                  comment:
                    "Great quality product. Fast delivery and secure packaging. Highly recommended!",
                },
                {
                  name: "Amit Patel",
                  rating: 5,
                  date: "July 2, 2025",
                  verified: false,
                  comment:
                    "Authentic Hampi artwork. Perfect for gifting. Very happy with the purchase.",
                },
              ].map((review, index) => (
                <div
                  key={index}
                  className="bg-[#2d1f0f] rounded-xl p-3 sm:p-4 border border-[#6b5b4b] hover:border-[#d4c5a0] transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3 mb-2">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <FaUserCircle className="text-[#d4c5a0] text-xl sm:text-2xl flex-shrink-0" />
                      <div className="min-w-0">
                        <div className="text-[#f5f1e8] font-semibold flex items-center gap-2 text-sm sm:text-base">
                          <span className="truncate">{review.name}</span>
                          {review.verified && (
                            <span className="bg-green-600/20 text-green-500 text-xs px-1.5 py-0.5 rounded-full flex-shrink-0">
                              Verified
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-0.5 sm:gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <FaStar
                              key={star}
                              className={`text-xs sm:text-sm ${
                                star <= review.rating
                                  ? "text-yellow-400"
                                  : "text-gray-600"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <span className="text-[#d4c5a0] text-xs sm:text-sm flex-shrink-0">
                      {review.date}
                    </span>
                  </div>
                  <p className="text-[#f5f1e8] mb-2 sm:mb-3 text-sm sm:text-base leading-relaxed">
                    {review.comment}
                  </p>
                  <div className="flex items-center gap-3 sm:gap-4 mt-2 sm:mt-3">
                    <button className="flex items-center gap-1 text-[#d4c5a0] hover:text-[#f5f1e8] transition-colors text-xs sm:text-sm">
                      <FaThumbsUp className="text-xs" />
                      Helpful
                    </button>
                    <button className="text-[#d4c5a0] hover:text-[#f5f1e8] transition-colors text-xs sm:text-sm">
                      Report
                    </button>
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
