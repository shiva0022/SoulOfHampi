import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const PageTransition = ({ children, type = 'default', showLoader = false }) => {
  const [isLoading, setIsLoading] = useState(showLoader);

  useEffect(() => {
    if (showLoader) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 300); // Short loading time for smooth UX
      
      return () => clearTimeout(timer);
    }
  }, [showLoader]);

  // Different animation variants for different page types
  const animationVariants = {
    default: {
      initial: {
        opacity: 0,
        y: 20,
        scale: 0.98,
      },
      animate: {
        opacity: 1,
        y: 0,
        scale: 1,
      },
      exit: {
        opacity: 0,
        y: -20,
        scale: 0.98,
      },
    },
    slide: {
      initial: {
        opacity: 0,
        x: 50,
      },
      animate: {
        opacity: 1,
        x: 0,
      },
      exit: {
        opacity: 0,
        x: -50,
      },
    },
    fade: {
      initial: {
        opacity: 0,
      },
      animate: {
        opacity: 1,
      },
      exit: {
        opacity: 0,
      },
    },
    slideUp: {
      initial: {
        opacity: 0,
        y: 50,
      },
      animate: {
        opacity: 1,
        y: 0,
      },
      exit: {
        opacity: 0,
        y: -50,
      },
    },
  };

  const pageTransition = {
    duration: 0.4,
    ease: [0.25, 0.46, 0.45, 0.94], // Custom cubic-bezier for smooth animation
  };

  const selectedVariant = animationVariants[type] || animationVariants.default;

  if (isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen flex items-center justify-center"
      >
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-8 h-8 border-4 border-[#d4c5a0] border-t-transparent rounded-full mx-auto mb-4"
          />
          <p className="text-[#f5f1e8] text-sm">Loading...</p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={selectedVariant}
      transition={pageTransition}
      style={{
        willChange: 'transform, opacity',
      }}
      className="page-transition"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition; 