import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 px-4">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-gray-800"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Welcome to the Assignment Submission Portal
      </motion.h1>

      <motion.p
        className="text-gray-600 mt-4 text-lg max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Upload, manage, and track assignments effortlessly.
      </motion.p>

      <motion.div
        className="mt-8 space-x-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <Link
          to="/upload"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
        >
          Upload Assignment
        </Link>
        <Link
          to="/view"
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-3 rounded-lg transition"
        >
          View Submissions
        </Link>
      </motion.div>
    </div>
  );
}

export default Home;
