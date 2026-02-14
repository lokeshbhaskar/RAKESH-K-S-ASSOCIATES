import { motion } from "framer-motion";
import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Career", path: "/career" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Gallery", path: "/gallery" },
    { name: "Services", path: "/services" }
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-xl border-b border-gray-100 z-50"
    >
      <div className="max-w-7xl mx-auto px-10 py-3 flex justify-between items-center">

        <Link to="/" className="leading-tight">
          <img
            src="./logo.png"
            alt="CA Logo"
            className="h-16 w-auto object-contain"
          />
          <h1 className="text-lg tracking-widest font-semibold text-gray-900">
            RAKESH K S & ASSOCIATES
          </h1>
          <p className="text-[10px] tracking-[3px] text-gray-500 uppercase mt-1">
            Chartered Accountants
          </p>
        </Link>

        <div className="hidden md:flex flex-col items-end gap-2">
          <div className="flex items-center gap-14 text-sm tracking-wide">
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

            <a
              href="tel:+919654064391"
              className="ml-4 px-6 py-2 border border-black text-black text-xs tracking-widest uppercase hover:bg-black hover:text-white transition duration-300"
            >
              Book Consultation
            </a>
          </div>

          <div className="flex items-center gap-6 text-md tracking-wide text-gray-500">
            <a
              href="mailto:carakesh@rksassociates.com"
              className="flex items-center gap-2 hover:text-black transition"
            >
              <FaEnvelope className="text-xs" />
              <span>carakesh@rksassociates.com</span>
            </a>

            <span className="hidden lg:inline text-gray-800">|</span>
            <span className="hidden lg:inline">
              <a
                href="https://www.google.com/maps/place/12%C2%B056'14.5%22N+77%C2%B037'33.2%22E/@12.93736,77.625899,17z/data=!3m1!4b1!4m4!3m3!8m2!3d12.93736!4d77.625899!17m2!4m1!1e3!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition"
                title="Open Location"
              >
                <FaMapMarkerAlt className="text-sm" />
              </a>
            </span>

          </div>


        </div>


        <button
          className="md:hidden text-xl text-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

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
          <a
            href="tel:+919654064391"
            className="block px-10 py-4 text-sm bg-black text-white text-center"
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
