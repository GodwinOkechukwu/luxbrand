import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

// Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-8 mt-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand / Logo */}
        <h1
          className="text-2xl font-bold text-[#D4AF37]"
          style={{ fontFamily: "'Playfair Display', serif" }}>
          <a href="#hero">LuxBrand</a>
        </h1>

        {/* Navigation Links */}
        <nav className="flex gap-6 text-sm">
          <a href="#hero" className="hover:text-[#D4AF37] transition">
            Home
          </a>
          <a href="#about" className="hover:text-[#D4AF37] transition">
            About
          </a>
          <a href="#features" className="hover:text-[#D4AF37] transition">
            Features
          </a>
          <a href="#contact" className="hover:text-[#D4AF37] transition">
            Contact
          </a>
        </nav>

        {/* Social Media Icons */}
        <div className="flex gap-4 text-lg">
          <a href="#" className="hover:text-[#D4AF37] transition">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-[#D4AF37] transition">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-[#D4AF37] transition">
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-gray-500 mt-6">
        © {new Date().getFullYear()} Luxoria. All rights reserved.
      </div>
    </footer>
  );
}
