import { useState } from "react";
import { motion } from "framer-motion";
import baseroom from "../assets/baseroom.jpeg";
import kitchen from "../assets/kitchen.jpeg";
import room1 from "../assets/room 1.jpeg";
import room2 from "../assets/room2.jpeg";

function Apartments() {
  const [filter, setFilter] = useState("all");

  const apartments = [
    {
      id: 1,
      title: "Single Apartment",
      image: room1,
      price: "₦25,000 — ₦30,000",
      type: "single",
      beds: 1,
      baths: 1,
      size: "420 sq ft",
      description: "A single room with a private bathroom, designed for a comfortable and affordable stay.",
      amenities: ["WiFi", "AC", "Kitchenette", "TV", "Private Bath"]
    },
    {
      id: 2,
      title: "Studio / Self-Contained",
      image: kitchen,
      price: "₦35,000 — ₦40,000",
      type: "studio",
      beds: 1,
      baths: 1,
      size: "520 sq ft",
      description: "Contains a bedroom, kitchen and bathroom — perfect for guests who want a self-contained stay.",
      amenities: ["WiFi", "AC", "Kitchen", "TV", "Private Entrance"],
      link: "#studio"
    },
    {
      id: 3,
      title: "2 Bedroom Apartment",
      image: room2,
      price: "₦80,000",
      type: "2bed",
      beds: 2,
      baths: 2,
      size: "900 sq ft",
      description: "Visitor restroom, waiting room, living room, 2 bedrooms, balcony, kitchen and bathrooms.",
      amenities: ["WiFi", "AC", "Kitchen", "TV", "Balcony", "Parking"]
    },
    {
      id: 4,
      title: "2 Bedroom Apartment",
      image: baseroom,
      price: "₦100,000",
      type: "2bed",
      beds: 2,
      baths: 2,
      size: "980 sq ft",
      description: "Visitor restroom, waiting room, living room, 2 bedrooms, balcony, kitchen and bathrooms.",
      amenities: ["WiFi", "AC", "Kitchen", "TV", "Balcony", "Parking", "Laundry"]
    },
  ];

  const filteredApartments = filter === "all" ? apartments : apartments.filter(apt => apt.type === filter);

  return (
    <div className="px-6 py-12">
      <motion.h1
        className="text-3xl font-bold text-center mb-10 text-gold"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Our Apartments
      </motion.h1>

      {/* Filter Buttons */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {["all", "single", "studio", "2bed"].map((type) => (
          <motion.button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-6 py-2 rounded-lg font-semibold transition ${
              filter === type
                ? "bg-gold text-black"
                : "bg-[#0b0806] border border-gold/20 text-gray-300 hover:bg-gold/10"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {type === "all"
              ? "All"
              : type === "single"
              ? "Single"
              : type === "studio"
              ? "Studio"
              : "2 Bedroom"}
          </motion.button>
        ))}
      </motion.div>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
        {filteredApartments.map((apt, index) => (
          <motion.div
            key={apt.id}
            className="bg-[#0f0907] rounded-xl overflow-hidden shadow-2xl shadow-black/30 hover:shadow-2xl transition border border-gold/10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <img
              src={apt.image}
              alt={apt.title}
              className="w-full h-64 object-cover"
            />

            <div className="p-5">
              <h2 className="text-lg font-semibold mb-2 text-white">
                {apt.title}
              </h2>
              <p className="text-sm text-gray-300 mb-3">
                {apt.description}
              </p>

              <div className="flex justify-between text-sm text-gray-400 mb-3">
                <span>{apt.beds} Bed • {apt.baths} Bath</span>
                <span>{apt.size}</span>
              </div>

              <div className="flex flex-wrap gap-1 mb-3">
                {apt.amenities.slice(0, 3).map((amenity) => (
                  <span key={amenity} className="text-xs bg-gold/20 text-gold px-2 py-1 rounded">
                    {amenity}
                  </span>
                ))}
                {apt.amenities.length > 3 && (
                  <span className="text-xs text-gray-400">+{apt.amenities.length - 3} more</span>
                )}
              </div>

              <div className="flex justify-between items-center">
                <span className="font-bold text-gold text-lg">
                  {apt.price}
                </span>

                {apt.link ? (
                  <motion.a
                    href={apt.link}
                    className="bg-gold text-black px-4 py-2 rounded-lg hover:opacity-90 transition inline-block"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Studio
                  </motion.a>
                ) : (
                  <motion.button
                    className="bg-gold text-black px-4 py-2 rounded-lg hover:opacity-90 transition"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Details
                  </motion.button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        id="studio"
        className="mt-16 honey-card rounded-[32px] border border-gold/10 p-8 bg-[#120b08]/80"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-center text-gold">
          Studio / Self-Contained
        </h2>
        <p className="text-gray-300 text-center mb-4">
          A self-contained unit with a bedroom, kitchen, and bathroom for private, comfortable living.
        </p>
        <div className="max-w-3xl mx-auto text-gray-300 space-y-2">
          <p>• Comfortable layout with private entrance</p>
          <p>• Kitchen and bathroom included</p>
          <p>• Ideal for guests looking for a home-like stay</p>
        </div>
      </motion.div>

      {/* Booking Info */}
      <motion.div
        className="mt-16 honey-card rounded-[32px] border border-gold/10 p-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold mb-6 text-center text-gold">
          Booking Information
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            className="p-6 rounded-xl border border-gold/10 bg-[#0b0806]/80 shadow-xl shadow-black/30"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-lg mb-4 text-white">Minimum Stay</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• 1 night for Studio & 1 Bedroom</li>
              <li>• 2 nights for 2 Bedroom & Premium</li>
              <li>• 3 nights for Family & Penthouse</li>
            </ul>
          </motion.div>

          <motion.div
            className="p-6 rounded-xl border border-gold/10 bg-[#0b0806]/80 shadow-xl shadow-black/30"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-lg mb-4 text-white">What's Included</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• 24/7 Security</li>
              <li>• Housekeeping</li>
              <li>• Utilities</li>
              <li>• WiFi</li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Apartments;