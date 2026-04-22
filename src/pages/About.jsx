import { motion } from "framer-motion";
import passage from "../assets/passage.jpeg";

function About() {
  return (
    <div className="px-6 py-12 space-y-10">

      {/* Title */}
      <motion.h1
        className="text-3xl font-bold text-center mb-10 text-gold"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        About Honey Homes & Apartment
      </motion.h1>

      {/* About Section */}
      <motion.div
        className="grid md:grid-cols-2 gap-10 items-center honey-card rounded-[32px] border border-gold/10 p-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        {/* Image */}
        <motion.img
          src={passage}
          alt="apartment"
          className="rounded-3xl shadow-2xl w-full h-[400px] object-cover border border-gold/10"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        />

        {/* Text */}
        <div>
          <motion.h2
            className="text-2xl font-semibold mb-4 text-white"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Luxury & Comfort Redefined
          </motion.h2>

          <motion.p
            className="text-gray-300 mb-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Honey Homes & Apartment provides premium short-let apartments
            designed for privacy, comfort, and convenience. Our apartments
            are fully furnished with modern amenities suitable for business
            travelers, families, and vacation stays.
          </motion.p>

          <motion.p
            className="text-gray-300"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Located in a serene environment, we offer secure, clean,
            and well-maintained apartments for short and long stays.
          </motion.p>
        </div>
      </motion.div>

      {/* Features */}
      <div className="mt-16">
        <motion.h2
          className="text-2xl font-semibold text-center mb-8 text-gold"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          What We Offer
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">

          <motion.div
            className="text-center p-6 rounded-xl border border-gold/10 bg-[#0b0806]/80 shadow-xl shadow-black/30"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-lg mb-2 text-white">
              Fully Furnished Rooms
            </h3>
            <p className="text-gray-400">
              Modern interiors with comfortable furniture and appliances.
            </p>
          </motion.div>

          <motion.div
            className="text-center p-6 rounded-xl border border-gold/10 bg-[#0b0806]/80 shadow-xl shadow-black/30"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-lg mb-2 text-white">
              24/7 Security
            </h3>
            <p className="text-gray-400">
              Safe environment with reliable security measures.
            </p>
          </motion.div>

          <motion.div
            className="text-center p-6 rounded-xl border border-gold/10 bg-[#0b0806]/80 shadow-xl shadow-black/30"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-lg mb-2 text-white">
              Prime Location
            </h3>
            <p className="text-gray-400">
              Easy access to major roads, restaurants, and attractions.
            </p>
          </motion.div>

        </div>
      </div>

      {/* Team Section */}
      <motion.div
        className="mt-16 honey-card rounded-[32px] border border-gold/10 p-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold text-center mb-8 text-gold">
          Meet Our Team
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            className="text-center p-6 rounded-xl border border-gold/10 bg-[#0b0806]/80 shadow-xl shadow-black/30"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="w-24 h-24 bg-gold rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-black">L</span>
            </div>
            <h3 className="font-semibold text-lg mb-2 text-white">Lekan Babalola</h3>
            <p className="text-gray-400">Founder</p>
          </motion.div>

          <motion.div
            className="text-center p-6 rounded-xl border border-gold/10 bg-[#0b0806]/80 shadow-xl shadow-black/30"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-24 h-24 bg-gold rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-black">Y</span>
            </div>
            <h3 className="font-semibold text-lg mb-2 text-white">Yomi Olanrewaju</h3>
            <p className="text-gray-400">Founder</p>
          </motion.div>

          <motion.div
            className="text-center p-6 rounded-xl border border-gold/10 bg-[#0b0806]/80 shadow-xl shadow-black/30"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="w-24 h-24 bg-gold rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-black">A</span>
            </div>
            <h3 className="font-semibold text-lg mb-2 text-white">Ajibade Gideon Adedire</h3>
            <p className="text-gray-400">Operations Manager</p>
          </motion.div>

          <motion.div
            className="text-center p-6 rounded-xl border border-gold/10 bg-[#0b0806]/80 shadow-xl shadow-black/30"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="w-24 h-24 bg-gold rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-black">A</span>
            </div>
            <h3 className="font-semibold text-lg mb-2 text-white">Ajagbe Adenike Odunayo</h3>
            <p className="text-gray-400">Customer Service Lead</p>
          </motion.div>

          <motion.div
            className="text-center p-6 rounded-xl border border-gold/10 bg-[#0b0806]/80 shadow-xl shadow-black/30"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="w-24 h-24 bg-gold rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-black">O</span>
            </div>
            <h3 className="font-semibold text-lg mb-2 text-white">Oyinkola Naheemat Moyosore</h3>
            <p className="text-gray-400">Customer Service Lead</p>
          </motion.div>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        className="mt-16 bg-[#0f0c08] border border-gold/10 text-white text-center p-10 rounded-3xl shadow-xl shadow-black/30"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-gold">
          Book Your Stay Today
        </h2>
        <p className="mb-6 text-gray-300">
          Experience comfort and privacy at Honey Homes & Apartment.
        </p>

        <a href="/contact" target="_blank" rel="noopener noreferrer">
        <motion.button
          className="bg-gold text-black px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          
          
          

          Contact Us
          
        </motion.button>
        </a>
      </motion.div>

    </div>
  );
}

export default About;