import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const { scrollY } = useScroll();

  // Smooth parallax background
  const backgroundY = useTransform(scrollY, [0, 600], [0, 180]);

  // Content animation
  const opacity = useTransform(scrollY, [0, 350], [1, 0]);
  const scale = useTransform(scrollY, [0, 350], [1, 0.95]);

  return (
    <section
      id="home"
      className="relative top-10 h-screen overflow-hidden flex items-center justify-center"
    >
      {/* Parallax Background */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0"
      >
        <div
          className="w-full h-[120%] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1554224155-6726b3ff858f')",
          }}
        />
      </motion.div>

      {/* Premium Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />

      {/* Content */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 text-center px-6 max-w-5xl"
      >
        {/* Small Tagline */}
        <p className="text-amber-400 tracking-[4px] uppercase text-xs mb-6">
          Chartered Accountants
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight mb-8">
          Strategic Financial <br />
          <span className="text-amber-400">Advisory & Compliance</span>
        </h1>

        {/* Subtext */}
        <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
          Delivering integrated tax, audit, and advisory solutions
          with precision, integrity, and long-term vision.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button className="px-10 py-4 bg-amber-500 text-black font-medium tracking-wide uppercase text-sm hover:bg-amber-400 transition-all duration-300">
            Schedule Consultation
          </button>

          <button className="px-10 py-4 border border-white text-white text-sm tracking-wide uppercase hover:bg-white hover:text-black transition-all duration-300">
            Explore Services
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
