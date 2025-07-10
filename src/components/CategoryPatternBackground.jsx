import React from "react";

// Helper to generate a grid of emoji positions
const generatePattern = (rows, cols) => {
  const pattern = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      // Randomize size, opacity, and blur for natural look
      const sizes = ["text-5xl", "text-6xl", "text-7xl", "text-8xl"];
      const opacities = ["opacity-10", "opacity-20", "opacity-15"];
      const blurs = ["blur-sm", "blur", ""]; // Less blur, some with none
      const size = sizes[Math.floor(Math.random() * sizes.length)];
      const opacity = opacities[Math.floor(Math.random() * opacities.length)];
      const blur = blurs[Math.floor(Math.random() * blurs.length)];
      // Staggered grid for more natural look
      const top = `${(row * 100) / rows + (col % 2 === 0 ? 2 : -2)}%`;
      const left = `${(col * 100) / cols + (row % 2 === 0 ? 2 : -2)}%`;
      pattern.push({ top, left, size, opacity, blur, key: `${row}-${col}` });
    }
  }
  return pattern;
};

const patternPositions = generatePattern(8, 12); // 8 rows x 12 columns

const CategoryPatternBackground = ({ mainEmoji }) => (
  <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
    {patternPositions.map((pos) => (
      <div
        key={pos.key}
        className={`absolute ${pos.size} ${pos.opacity} ${pos.blur}`}
        style={{ top: pos.top, left: pos.left, transform: 'translate(-50%, -50%)' }}
      >
        {mainEmoji}
      </div>
    ))}
  </div>
);

export default CategoryPatternBackground; 