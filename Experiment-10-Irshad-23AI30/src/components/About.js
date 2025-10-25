import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      className="max-w-2xl mx-auto mt-10 bg-white shadow-md rounded-lg p-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h2 className="text-2xl font-bold mb-4 text-center">
        About This Project
      </h2>
      <p className="text-gray-700 leading-relaxed">
        The Assignment Submission Portal is a modern React + Tailwind web app
        for students to manage assignments seamlessly. It demonstrates:
      </p>
      <ul className="list-disc ml-6 mt-3 text-gray-700">
        <li>React Hooks (useState, useEffect)</li>
        <li>Routing via React Router</li>
        <li>Persistent data using LocalStorage</li>
        <li>Framer Motion animations</li>
        <li>Tailwind responsive design</li>
      </ul>
      <p className="mt-4">
        <b>Developed by:</b> Mohammed Irshad Raza Khan & [Your Teammate Name]
      </p>
    </motion.div>
  );
}

export default About;
