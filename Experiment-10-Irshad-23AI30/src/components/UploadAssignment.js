import React, { useState } from "react";
import { motion } from "framer-motion";

function UploadAssignment({ addAssignment }) {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !subject || !file) {
      alert("Please fill all fields");
      return;
    }

    const newAssignment = {
      id: Date.now(),
      name,
      subject,
      fileName: file.name,
      fileUrl: URL.createObjectURL(file),
      uploadDate: new Date().toLocaleString(),
    };
    addAssignment(newAssignment);

    setName("");
    setSubject("");
    setFile(null);
    alert("✅ Assignment uploaded successfully!");
  };

  return (
    <motion.div
      className="max-w-lg mx-auto mt-10 bg-white shadow-lg rounded-lg p-8"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h2 className="text-2xl font-semibold text-center mb-6">
        Upload Assignment
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          placeholder="Student Name"
          className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Subject"
          className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />

        <input
          type="file"
          accept="application/pdf,image/*"
          className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
        >
          Upload
        </button>
      </form>
    </motion.div>
  );
}

export default UploadAssignment;
