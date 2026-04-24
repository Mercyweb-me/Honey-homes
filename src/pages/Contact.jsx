import { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const whatsappNumber = "2348117085186";

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const text = `Hello Honey Homes, my name is ${formData.name || ""}.
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
        Contact Us
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
              📞 Phone: 09018705128| 08117085186
            </p>

            <p className="mb-2 text-gray-200">
              📍 Location: Ibadan, Nigeria
            </p>

            <p className="text-gray-200">
              🏢 Honey Homes & Apartment
            </p>
          </motion.div>

          {/* WhatsApp Button */}
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
            Chat on WhatsApp
          </motion.a>

          {/* Map Placeholder */}
          <motion.div
            className="rounded-xl overflow-hidden shadow-2xl shadow-black/30 border border-gold/10 bg-[#0a0806]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <iframe
              title="map"
              src="https://maps.google.com/maps?q=Are-onibon+Street+behind+THE+BAJ+event+center+along+moniya+road+Ibadan+Oyo+state+Nigeria&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-64 border-0"
            ></iframe>
          </motion.div>

        </div>
      </div>

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
            <p className="text-gray-400">09018705128</p>
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
            <p className="text-gray-400">Ibadan, Oyo State, Nigeria</p>
          </motion.div>
        </div>
      </motion.div>

    </div>
  );
}

export default Contact;