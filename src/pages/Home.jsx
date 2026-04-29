import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import homeBg from "../assets/home.jpeg";
import room1 from "../assets/room 1.jpeg";
import room2 from "../assets/room2.jpeg";
import room4 from "../assets/room 4.jpeg";

function Home() {
  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <img
          src={homeBg}
          alt="HONEY HOMES AND APARTMENTS hero"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 flex h-full items-center justify-center px-6">
          <motion.div
            className="max-w-4xl text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight mb-6">
              Welcome to HONEY HOMES&APARTMENT
            </h1>
            <p className="text-gray-200 text-base md:text-lg max-w-2xl mx-auto mb-8">
              Luxury short-let apartments in Ibadan with premium amenities, beautiful interiors, and 24/7 support.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                 to="/contact"
                className="bg-gold text-black px-8 py-4 rounded-full font-semibold hover:opacity-90 transition"
              >
                Book a Stay
              </Link>
              <Link
                 to="/about"
                 className="border border-gold text-gold px-8 py-4 rounded-full font-semibold hover:bg-gold/10 transition"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURED APARTMENTS */}
      <section className="px-6 py-12">
        <motion.div
          className="honey-card rounded-[32px] border border-gold/10 p-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-8 text-center text-gold">
            Featured Apartments
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.img
              className="rounded-2xl shadow-2xl w-full h-64 object-cover border border-gold/10"
             src={room1}
              alt="Room"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            />

            <motion.img
              className="rounded-2xl shadow-2xl w-full h-64 object-cover border border-gold/10"
              src={room2}
              alt="Room"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            />

            <motion.img
              className="rounded-2xl shadow-2xl w-full h-64 object-cover border border-gold/10"
              src={room4}
              alt="Room"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            />
          </div>
        </motion.div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="px-6 py-12">
        <motion.div
          className="honey-card rounded-[32px] border border-gold/10 p-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-8 text-center text-gold">
            Why Choose HONEY HOMES AND APARTMENTS?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="text-center p-6 rounded-xl border border-gold/10 bg-[#0b0806]/80 shadow-xl shadow-black/30"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-lg mb-2 text-white">Premium Quality</h3>
              <p className="text-gray-400">Experience luxury living with our meticulously designed apartments.</p>
            </motion.div>

            <motion.div
              className="text-center p-6 rounded-xl border border-gold/10 bg-[#0b0806]/80 shadow-xl shadow-black/30"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-lg mb-2 text-white">24/7 Support</h3>
              <p className="text-gray-400">Our dedicated team is always available to assist you.</p>
            </motion.div>

            <motion.div
              className="text-center p-6 rounded-xl border border-gold/10 bg-[#0b0806]/80 shadow-xl shadow-black/30"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-lg mb-2 text-white">Prime Location</h3>
              <p className="text-gray-400">Located in the heart of Ibadan with easy access to everything.</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-6 py-12">
        <motion.div
          className="honey-card rounded-[32px] border border-gold/10 p-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-8 text-center text-gold">
            What Our Guests Say
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="p-6 rounded-xl border border-gold/10 bg-[#0b0806]/80 shadow-xl shadow-black/30"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-300 mb-4">"Amazing experience! The apartment was spotless and the location was perfect."</p>
              <p className="text-gold font-semibold">- Sarah Johnson</p>
            </motion.div>

            <motion.div
              className="p-6 rounded-xl border border-gold/10 bg-[#0b0806]/80 shadow-xl shadow-black/30"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-300 mb-4">"Highly recommend for business travelers. Comfortable and convenient."</p>
              <p className="text-gold font-semibold">- Michael Adebayo</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

    </div>
  );
}

export default Home;