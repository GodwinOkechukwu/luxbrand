import { motion } from "framer-motion";
import bgImg from "../../public/lux2.jpg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center bg-[#0D0D0D] text-center text-white overflow-hidden">
      {/* Background Image with overlay */}
      <div className="absolute inset-0">
        <motion.img
          src={bgImg}
          alt="Luxury background"
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}>
          Redefining Luxury Living
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-lg md:text-xl mb-8 text-gray-200"
          style={{ fontFamily: "'Inter', sans-serif" }}>
          Experience elegance and sophistication with every detail. Modern
          design, timeless style, and premium quality crafted for you.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="px-8 py-4 bg-[#D4AF37] text-black text-lg font-semibold rounded-full hover:bg-[#c19d2b] transition">
          Get Started
        </motion.button>
      </div>
    </section>
  );
}
