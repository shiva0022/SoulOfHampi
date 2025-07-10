import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const BackButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="mb-6 bg-[#3d2914] hover:bg-[#4a3420] p-3 rounded-xl transition-all duration-300 text-[#f5f1e8] border border-[#6b5b4b] hover:border-[#d4c5a0] flex items-center gap-2"
  >
    <FaArrowLeft />
    Back
  </button>
);

export default BackButton; 