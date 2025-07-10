import React from "react";
import WishlistItemCard from "./WishlistItemCard";

const WishlistGrid = ({
  items,
  handleAddToCart,
  handleMoveToCart,
  removeFromWishlist,
}) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
    {items.map((item, index) => (
      <WishlistItemCard
        key={item.id}
        item={item}
        handleAddToCart={handleAddToCart}
        handleMoveToCart={handleMoveToCart}
        removeFromWishlist={removeFromWishlist}
      />
    ))}
  </div>
);

export default WishlistGrid;
