import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../public/ca-logo.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-xl border-b border-gray-100 z-50"
    >
      <div className="max-w-7xl mx-auto px-10 py-6 flex justify-between items-center">

        {/* Logo Section */}
        <Link to="/" className="leading-tight">
          <img
            src={logo}
            alt="CA Logo"
            className="h-10 w-auto object-contain"
          />
          <h1 className="text-lg tracking-widest font-semibold text-gray-900">
            RAKESH K S & ASSOCIATES
          </h1>
          <p className="text-[10px] tracking-[3px] text-gray-500 uppercase mt-1">
            Chartered Accountants
          </p>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-14 text-sm tracking-wide">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="relative text-gray-600 hover:text-black transition duration-300 group"
            >
              {item.name}
              <span className="absolute left-0 -bottom-2 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

          {/* Consultation Button */}
          <Link
            to="/contact"
            className="ml-4 px-6 py-2 border border-black text-black text-xs tracking-widest uppercase hover:bg-black hover:text-white transition duration-300"
          >
            Book Consultation
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-xl text-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="block px-10 py-4 text-sm text-gray-700 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          <Link
            to="/contact"
            className="block px-10 py-4 text-sm bg-black text-white text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Book Consultation
          </Link>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
