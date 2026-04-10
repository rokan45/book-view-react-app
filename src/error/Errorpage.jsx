import React from "react";
import { motion } from "motion/react"

const Errorpage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-4">
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-md"
      >
        {/* Error Code */}
        <h1 className="text-8xl font-extrabold text-red-500 mb-4">404</h1>

        {/* Title */}
        <h2 className="text-2xl font-semibold mb-2">
          Oops! Page not found
        </h2>

        {/* Description */}
        <p className="text-gray-400 mb-6">
          The page you are looking for doesn't exist or has been moved.
        </p>

        {/* Button */}
        <a
          href="/"
          className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 transition px-6 py-3 rounded-2xl shadow-lg"
        >
         
          Go Back Home
        </a>
      </motion.div>
    </div>
  );
};

export default Errorpage;