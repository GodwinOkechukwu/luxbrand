import { motion } from "framer-motion";

function Features() {
  const features = [
    {
      title: "Seamless Experience",
      desc: "Enjoy smooth, intuitive interactions designed for elegance and efficiency.",
      icon: "💎",
    },
    {
      title: "Premium Quality",
      desc: "Built with attention to detail, precision, and refined craftsmanship.",
      icon: "🌟",
    },
    {
      title: "Luxury Design",
      desc: "Minimal, modern, and timeless visuals that leave a lasting impression.",
      icon: "🎨",
    },
    {
      title: "Trusted Security",
      desc: "Your data and privacy safeguarded with enterprise-grade protection.",
      icon: "🔒",
    },
  ];

  return (
    <section
      id="features"
      className="py-20 bg-[#111] text-white flex flex-col items-center px-6">
      {/* Title with animation */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-serif text-[#D4AF37] mb-12">
        Our Features
      </motion.h2>

      {/* Feature cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="p-8 border border-[#D4AF37]/20 rounded-2xl bg-[#1A1A1A] shadow-lg shadow-[#D4AF37]/5">
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Features;
