import { motion } from "framer-motion";
import { useState } from "react";
import { FaBars, FaEnvelope, FaMapMarkerAlt, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Gallery", path: "/gallery" },
    { name: "Career", path: "/career" },
  ];

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md border-b border-black/5 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-2">
        <div className="flex items-center justify-between border-b border-black/5 pb-3">
          <div className="hidden md:flex items-center gap-10 text-sm tracking-wide">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="relative text-gray-900 hover:text-black transition group"
              >
                {item.name}
                <span className="absolute left-1/2 -bottom-2 w-0 h-px bg-black/70 transition-all duration-300 group-hover:w-full group-hover:left-0" />
              </Link>
            ))}
            <a
              href="tel:+919654064391"
              className="ml-6 px-7 py-2 text-xs tracking-widest uppercase border border-black/40 text-black/70 hover:border-black hover:font-semibold hover:text-white hover:bg-black transition duration-500"
            >
              Book Consultation
            </a>
          </div>
          <div className="flex items-center justify-between w-full md:w-auto gap-6 text-sm text-gray-600">
            <a
              href="mailto:rksoffice@ksrakesh.com"
              className="flex items-center gap-2 hover:text-black transition"
            >
              <FaEnvelope className="text-xl" />
              <span className="hidden sm:inline">rksoffice@ksrakesh.com</span>
            </a>
            <div className="flex items-center gap-4">
              <a
                href="https://www.google.com/maps/place/12%C2%B056'14.5%22N+77%C2%B037'33.2%22E/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-black/30 rounded-full flex items-center justify-center hover:border-black transition"
                title="Open Location"
              >
                <FaMapMarkerAlt className="text-sm" />
              </a>
              <button
                className="md:hidden text-2xl text-gray-800"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>

          </div>
        </div>
        <div className="flex justify-center items-center pt-0 pb-2">
          <Link to="/" className="text-center">
            <img src="./logo.png" alt="CA Logo" className="h-24 mx-auto" />
            <h1 className="text-[22px] font-medium tracking-wide text-gray-900">
              RAKESH K S & ASSOCIATES
            </h1>
            <p className="text-[10px] tracking-[4px] text-gray-500 uppercase mt-2">
              Chartered Accountants
            </p>
          </Link>
        </div>
      </div>  
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-black/5">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="block px-6 py-4 text-sm text-gray-700 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          <a
            href="tel:+919654064391"
            className="block px-6 py-4 text-sm bg-black text-white text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Book Consultation
          </a>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
