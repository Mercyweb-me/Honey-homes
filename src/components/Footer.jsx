function Footer() {
  return (
    <footer className="mt-16 border-t border-gold/20 bg-[#090705] text-white">
      <div className="max-w-6xl mx-auto px-6 py-10">

        <h2 className="text-xl font-semibold mb-6 text-gold">
          HONEY HOMES & APARTMENT
        </h2>

        <div className="space-y-3 text-gray-300">

          <p>
            📧 Email: honeyhomesapartments@gmail.com
          </p>

          <p>
            📍 Address: Are-onibon Street, behind THE BAJ event center,
            along moniya road. Ibadan, Oyo state. Nigeria
          </p>

          <a
            href="https://wa.me/2349018705128"
            target="_blank"
            className="inline-block bg-green-500 text-white px-5 py-2 rounded-lg mt-3 hover:bg-green-600"
          >
            Chat on WhatsApp
          </a>

        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-sm text-gray-400">
          © {new Date().getFullYear()} Honey Homes & Apartment. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;