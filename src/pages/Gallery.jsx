import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import baseroom from "../assets/baseroom.jpeg";
import baseroom2 from "../assets/baseroom2.jpeg";
import kitchen from "../assets/kitchen.jpeg";
import outview from "../assets/outview.jpeg";
import passage from "../assets/passage.jpeg";
import room1 from "../assets/room 1.jpeg";
import room4 from "../assets/room 4.jpeg";
import room2 from "../assets/room2.jpeg";
import room3 from "../assets/room3.jpeg";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    baseroom,
    baseroom2,
    kitchen,
    outview,
    passage,
    room1,
    room4,
    room2,
    room3,
  ];

  return (
    <div className="px-6 py-12">
      <motion.h1
        className="text-3xl font-bold text-center mb-10 text-gold"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Apartment Gallery
      </motion.h1>

      <motion.p
        className="text-center text-gray-300 mb-8 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Explore our beautifully designed apartments through our photo gallery.
        Click on any image to view it in full size.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((img, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-xl shadow-2xl shadow-black/30 hover:scale-105 transition duration-300 border border-gold/10 bg-[#0b0806]/80 cursor-pointer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            viewport={{ once: true }}
            onClick={() => setSelectedImage(img)}
            whileHover={{ y: -5 }}
          >
            <img
              src={img}
              alt="Apartment"
              className="w-full h-72 object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Full size"
              className="max-w-full max-h-full object-contain rounded-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.button
              className="absolute top-4 right-4 text-white text-2xl bg-black/50 rounded-full w-12 h-12 flex items-center justify-center"
              onClick={() => setSelectedImage(null)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ✕
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Gallery Stats */}
      <motion.div
        className="mt-16 honey-card rounded-[32px] border border-gold/10 p-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold mb-8 text-center text-gold">
          Gallery Highlights
        </h2>

        <div className="grid md:grid-cols-4 gap-8 text-center">
          <motion.div
            className="p-4 rounded-xl border border-gold/10 bg-[#0b0806]/80 shadow-xl shadow-black/30"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="text-3xl font-bold text-gold mb-2">12+</div>
            <div className="text-gray-300">Photos</div>
          </motion.div>

          <motion.div
            className="p-4 rounded-xl border border-gold/10 bg-[#0b0806]/80 shadow-xl shadow-black/30"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-3xl font-bold text-gold mb-2">6</div>
            <div className="text-gray-300">Apartments</div>
          </motion.div>

          <motion.div
            className="p-4 rounded-xl border border-gold/10 bg-[#0b0806]/80 shadow-xl shadow-black/30"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="text-3xl font-bold text-gold mb-2">100%</div>
            <div className="text-gray-300">Satisfaction</div>
          </motion.div>

          <motion.div
            className="p-4 rounded-xl border border-gold/10 bg-[#0b0806]/80 shadow-xl shadow-black/30"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="text-3xl font-bold text-gold mb-2">24/7</div>
            <div className="text-gray-300">Support</div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Gallery;