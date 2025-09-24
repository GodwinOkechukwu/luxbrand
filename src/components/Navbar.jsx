import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1
          className="text-2xl font-bold text-[#D4AF37]"
          style={{ fontFamily: "'Playfair Display', serif" }}>
          <a href="#hero">LuxBrand</a>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white">
          <li>
            <a href="#hero" className="hover:text-[#D4AF37] transition">
              Home
            </a>
          </li>
          <li>
            <a href="#features" className="hover:text-[#D4AF37] transition">
              Features
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-[#D4AF37] transition">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-[#D4AF37] transition">
              Contact
            </a>
          </li>
        </ul>

        {/* CTA Button (Desktop) */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="px-6 py-2 bg-[#D4AF37] text-black font-semibold rounded-full hover:bg-[#c19d2b] transition">
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none">
          {isOpen ? "✖" : <GiHamburgerMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 text-white px-6 py-4 space-y-4">
          <a
            href="#hero"
            className="block hover:text-[#D4AF37] transition"
            onClick={() => setIsOpen(false)}>
            Home
          </a>

          <a
            href="#features"
            className="block hover:text-[#D4AF37] transition"
            onClick={() => setIsOpen(false)}>
            Features
          </a>
          <a
            href="#about"
            className="block hover:text-[#D4AF37] transition"
            onClick={() => setIsOpen(false)}>
            About
          </a>
          <a
            href="#contact"
            className="block hover:text-[#D4AF37] transition"
            onClick={() => setIsOpen(false)}>
            Contact
          </a>
          <a
            href="#contact"
            className="block px-4 py-2 bg-[#D4AF37] text-center text-black font-semibold rounded-full hover:bg-[#c19d2b] transition"
            onClick={() => setIsOpen(false)}>
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
}
