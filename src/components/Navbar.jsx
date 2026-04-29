import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gold/20 bg-[#090705]/95 backdrop-blur-md shadow-black/40 shadow-lg">
      <div className="flex justify-between items-center px-6 py-4">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="HONEY HOMES AND APARTMENTS logo" className="h-12 w-auto object-contain" />
          <span className="font-bold text-lg text-gold">HONEY HOMES AND APARTMENTS</span>
        </Link>

        {/* Hamburger */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-gray-200">
          <Link to="/" className="hover:text-gold transition">Home</Link>
          <Link to="/apartments" className="hover:text-gold transition">Apartments</Link>
          <Link to="/gallery" className="hover:text-gold transition">Gallery</Link>
          <Link to="/about" className="hover:text-gold transition">About</Link>
          <Link to="/contact" className="hover:text-gold transition">Contact</Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setOpen(false)}>✕</button>
        </div>

        <nav className="flex flex-col gap-6 p-6">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/apartments" onClick={() => setOpen(false)}>Apartments</Link>
          <Link to="/gallery" onClick={() => setOpen(false)}>Gallery</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;