import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center py-4 mt-10">
      <p>
        © {new Date().getFullYear()} Assignment Portal | Built with ❤️ using
        React.js & Tailwind
      </p>
    </footer>
  );
}

export default Footer;
