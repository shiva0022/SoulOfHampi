import React from 'react';
import { motion } from 'framer-motion';

const LoadingTransition = () => {
  const loadingVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    exit: { 
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  const spinnerVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <motion.div
      variants={loadingVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#3d2914] via-[#4a3420] to-[#5a4a3a] bg-opacity-90 backdrop-blur-sm"
    >
      <div className="text-center">
        <motion.div
          variants={spinnerVariants}
          animate="animate"
          className="w-12 h-12 border-4 border-[#d4c5a0] border-t-transparent rounded-full mx-auto mb-4"
        />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="text-[#f5f1e8] text-lg font-medium"
        >
          Loading...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LoadingTransition;
