import { motion } from "framer-motion";
import img from "../../public/lux1.avif";

function About() {
  return (
    <section
      id="about"
      className="py-20 bg-[#0D0D0D] text-white px-6 flex justify-center">
      <div className="max-w-6xl grid md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-2xl overflow-hidden shadow-lg shadow-[#D4AF37]/10">
          <motion.img
            src={img}
            alt="Luxury design"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Right Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}>
          <h2 className="text-4xl md:text-5xl font-serif text-[#D4AF37] mb-6">
            About Us
          </h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            At
            <span className="text-[#D4AF37] font-semibold pl-1.5">
              Luxury Brand
            </span>
            , we believe elegance lies in simplicity. Our mission is to deliver
            timeless digital experiences that embody sophistication, precision,
            and premium craftsmanship.
          </p>
          <p className="text-gray-400 leading-relaxed">
            With a focus on detail and innovation, we create solutions that
            resonate with a refined audience, blending aesthetics and
            functionality seamlessly.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
