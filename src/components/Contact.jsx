import { motion } from "framer-motion";

function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-[#111] text-white px-6 flex justify-center">
      <div className="max-w-4xl w-full">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif text-[#D4AF37] mb-12 text-center">
          Get In Touch
        </motion.h2>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid gap-6 bg-[#0D0D0D] p-8 rounded-2xl shadow-lg shadow-[#D4AF37]/10">
          <div>
            <label className="block mb-2 text-gray-300 text-sm">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-lg bg-[#1A1A1A] border border-gray-700 text-white focus:outline-none focus:border-[#D4AF37] transition"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300 text-sm">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-[#1A1A1A] border border-gray-700 text-white focus:outline-none focus:border-[#D4AF37] transition"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300 text-sm">Message</label>
            <textarea
              placeholder="Write your message..."
              rows="5"
              className="w-full px-4 py-3 rounded-lg bg-[#1A1A1A] border border-gray-700 text-white focus:outline-none focus:border-[#D4AF37] transition resize-none"></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#D4AF37] text-black font-semibold py-3 rounded-lg hover:bg-[#c19d2b] transition">
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
