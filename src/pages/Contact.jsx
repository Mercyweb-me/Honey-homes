import { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const whatsappNumber = "2349018705128"; // Business WhatsApp

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const text = `Hello HONEY HOMES AND APARTMENTS, my name is ${formData.name || ""}.
Phone: ${formData.phone || ""}
Email: ${formData.email || ""}
Message: ${formData.message || ""}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="px-6 py-12">

      <motion.h1
        className="text-3xl font-bold text-center mb-10 text-gold"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Contact HONEY HOMES&APARTMENT
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-10">

        {/* CONTACT FORM */}
        <motion.div
          className="honey-card rounded-[32px] border border-gold/10 p-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl font-semibold mb-6 text-gold">
            Send Us a Message
          </h2>

          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <motion.input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              placeholder="Your Name"
              className="border border-gold/20 bg-[#110f0d] p-3 rounded-lg outline-none focus:ring-2 focus:ring-gold text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            />

            <motion.input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              type="tel"
              placeholder="Phone Number"
              className="border border-gold/20 bg-[#110f0d] p-3 rounded-lg outline-none focus:ring-2 focus:ring-gold text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            />

            <motion.input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Email Address"
              className="border border-gold/20 bg-[#110f0d] p-3 rounded-lg outline-none focus:ring-2 focus:ring-gold text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            />

            <motion.textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              className="border border-gold/20 bg-[#110f0d] p-3 rounded-lg outline-none focus:ring-2 focus:ring-gold text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            />

            <motion.button
              type="submit"
              className="bg-gold text-black py-3 rounded-lg font-semibold hover:opacity-90 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* CONTACT INFO */}
        <div className="flex flex-col gap-6">

          <motion.div
            className="honey-card rounded-[32px] border border-gold/10 p-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl font-semibold mb-4 text-gold">
              Contact Information
            </h2>

            <p className="mb-2 text-gray-200">
              📞 Phone: 0901 870 5128
            </p>

            <p className="mb-2 text-gray-200">
              📍 Location: Ibadan 200132, Oyo State, Nigeria
            </p>

            <p className="text-gray-200">
              🏢 Honey Homes&Apartment
            </p>
          </motion.div>

          {/* Business WhatsApp Button */}
          <motion.a
            href="https://wa.me/2349018705128"
            target="_blank"
            className="bg-gold text-black text-center py-4 rounded-xl font-semibold hover:opacity-90 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Chat on Business WhatsApp
          </motion.a>

        </div>
      </div>

      {/* Map Section */}
      <motion.div
        className="mt-16 honey-card rounded-[32px] border border-gold/10 p-8 overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold mb-6 text-center text-gold">
          Find Us On The Map
        </h2>
        <iframe
          title="Honey Homes & Apartments Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.245!2d3.8547145!3d7.4950639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039f37d26d5728b%3A0x1ef32441fc0e2836!2sHoney+Homes%26Apartment!5e0!3m2!1sen!2sng!4v1704067200000"
          width="100%"
          height="400"
          style={{ border: 0, borderRadius: "16px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-xl"
        ></iframe>
        <p className="text-center text-gray-300 mt-4">
          📍 <strong>Honey Homes&Apartment</strong> - estate, Are onibon, behind The Baj Park, akinbgile, Ibadan 200132, Oyo
        </p>
      </motion.div>

      {/* Additional Contact Methods */}
      <motion.div
        className="mt-16 honey-card rounded-[32px] border border-gold/10 p-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold mb-8 text-center text-gold">
          Other Ways to Reach Us
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            className="text-center p-6 rounded-xl border border-gold/10 bg-[#0b0806]/80 shadow-xl shadow-black/30"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl mb-4">📧</div>
            <h3 className="font-semibold text-lg mb-2 text-white">Email</h3>
            <p className="text-gray-400">honeyhomesapartments@gmail.com</p>
          </motion.div>

          <motion.div
            className="text-center p-6 rounded-xl border border-gold/10 bg-[#0b0806]/80 shadow-xl shadow-black/30"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl mb-4">📱</div>
            <h3 className="font-semibold text-lg mb-2 text-white">Phone</h3>
            <p className="text-gray-400">0901 870 5128</p>
          </motion.div>

          <motion.div
            className="text-center p-6 rounded-xl border border-gold/10 bg-[#0b0806]/80 shadow-xl shadow-black/30"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl mb-4">📍</div>
            <h3 className="font-semibold text-lg mb-2 text-white">Visit Us</h3>
            <p className="text-gray-400">estate, Are onibon, behind The Baj Park, akinbgile, Ibadan 200132, Oyo</p>
          </motion.div>
        </div>
      </motion.div>

    </div>
  );
}

export default Contact;