import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpDown } from "lucide-react";

function ViewAssignments({ assignments, deleteAssignment }) {
  const [query, setQuery] = useState("");
  const [sortAsc, setSortAsc] = useState(true);

  const filtered = assignments
    .filter(
      (a) =>
        a.name.toLowerCase().includes(query.toLowerCase()) ||
        a.subject.toLowerCase().includes(query.toLowerCase())
    )
    .sort((a, b) =>
      sortAsc
        ? new Date(a.uploadDate) - new Date(b.uploadDate)
        : new Date(b.uploadDate) - new Date(a.uploadDate)
    );

  return (
    <motion.div
      className="container mx-auto mt-10 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2 className="text-2xl font-bold text-center mb-6">
        Uploaded Assignments
      </h2>

      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-3">
        <input
          type="text"
          placeholder="Search by name or subject..."
          className="border rounded-lg px-4 py-2 w-full md:w-1/3 focus:ring-2 focus:ring-blue-500 outline-none"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          onClick={() => setSortAsc(!sortAsc)}
          className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          <ArrowUpDown size={16} className="mr-2" />
          Sort by Date
        </button>
      </div>

      {filtered.length === 0 ? (
        <p className="text-center text-gray-500">No assignments found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border rounded-lg overflow-hidden">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-4 py-3">Student</th>
                <th className="px-4 py-3">Subject</th>
                <th className="px-4 py-3">File</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((a) => (
                <tr
                  key={a.id}
                  className="border-b hover:bg-gray-50 transition-all"
                >
                  <td className="px-4 py-2">{a.name}</td>
                  <td className="px-4 py-2">{a.subject}</td>
                  <td className="px-4 py-2">
                    <a
                      href={a.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      View File
                    </a>
                  </td>
                  <td className="px-4 py-2">{a.uploadDate}</td>
                  <td className="px-4 py-2 text-center">
                    <button
                      onClick={() => deleteAssignment(a.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </motion.div>
  );
}

export default ViewAssignments;
