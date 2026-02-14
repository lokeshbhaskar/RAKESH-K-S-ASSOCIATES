import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  const { scrollY } = useScroll();

  const backgroundY = useTransform(scrollY, [0, 600], [0, 160]);
  const opacity = useTransform(scrollY, [0, 350], [1, 0]);
  const scale = useTransform(scrollY, [0, 350], [1, 0.96]);

  return (
    <section
      id="home"
      className="relative top-10 h-screen overflow-hidden flex items-center justify-center"
    >
      {/* Background Image */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0">
        <div
          className="w-full h-[120%] bg-cover bg-center"
          style={{
            backgroundImage:
              // "url('https://images.unsplash.com/photo-1554224155-6726b3ff858f')",
              "url('https://plus.unsplash.com/premium_photo-1679923813998-6603ee2466c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWNjb3VudGluZ3xlbnwwfHwwfHx8MA%3D%3D"
          }}
        />
      </motion.div>

      {/* Premium Overlay */}
      <div className="absolute  bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900/90" />

      {/* Content */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 text-center px-6 max-w-6xl"
      >
        <p className="text-yellow-200 font-bold tracking-[5px] uppercase text-sm mb-6">
          Chartered Accountants
        </p>

        {/* Firm Name / Main Title */}
        <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-semibold leading-tight mb-10">
          TAX & CONSULTING
        </h1>

        <p className="text-white text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-12">
          Expert GST, Direct Tax, Audit, Compliance & Strategic Advisory & Accounting Services.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="tel:+919654064391"
            className="inline-block px-10 py-4 bg-amber-500 text-black font-medium tracking-wide uppercase text-sm hover:bg-amber-400 transition-all duration-300"
          >
            Schedule Consultation
          </a>

          <Link
            to="/services"
            className="inline-block px-10 py-4 border border-white text-white text-sm tracking-wide uppercase hover:bg-white hover:text-slate-900 transition-all duration-300"
          >
            Explore Services
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
