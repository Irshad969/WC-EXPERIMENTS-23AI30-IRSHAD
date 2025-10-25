import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import UploadAssignment from "./components/UploadAssignment";
import ViewAssignments from "./components/ViewAssignments";
import About from "./components/About";

function App() {
  const [assignments, setAssignments] = useState(() => {
    const saved = localStorage.getItem("assignments");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("assignments", JSON.stringify(assignments));
  }, [assignments]);

  const addAssignment = (assignment) =>
    setAssignments([assignment, ...assignments]);

  const deleteAssignment = (id) =>
    setAssignments(assignments.filter((a) => a.id !== id));

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/upload"
              element={<UploadAssignment addAssignment={addAssignment} />}
            />
            <Route
              path="/view"
              element={
                <ViewAssignments
                  assignments={assignments}
                  deleteAssignment={deleteAssignment}
                />
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
