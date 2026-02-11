import { motion } from "framer-motion";
import { FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-14 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Social Media */}
        <div className="flex justify-center gap-6 mb-8">
          
          <motion.a
            href="#"
            whileHover={{ y: -4 }}
            className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:bg-black hover:text-white hover:border-black transition-all duration-300"
          >
            <FaLinkedinIn size={14} />
          </motion.a>

          <motion.a
            href="#"
            whileHover={{ y: -4 }}
            className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:bg-black hover:text-white hover:border-black transition-all duration-300"
          >
            <FaTwitter size={14} />
          </motion.a>

          <motion.a
            href="#"
            whileHover={{ y: -4 }}
            className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:bg-black hover:text-white hover:border-black transition-all duration-300"
          >
            <FaFacebookF size={14} />
          </motion.a>

        </div>

        {/* Bottom Line */}
        <p className="text-xs tracking-wide text-gray-500">
          © {new Date().getFullYear()} RAKESH K S & ASSOCIATES. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
