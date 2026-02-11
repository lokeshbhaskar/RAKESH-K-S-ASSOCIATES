import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="py-44 bg-gradient-to-br from-black via-zinc-900 to-black text-white"
    >
      <div className="max-w-7xl mx-auto px-10">

        <div className="grid md:grid-cols-2 gap-20 items-center">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-sm tracking-[4px] uppercase text-amber-400 mb-4">
              About Our Firm
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-8">
              Why Businesses Trust <br /> Our Expertise
            </h2>

            <p className="text-zinc-400 leading-relaxed mb-10 text-base">
              With over 15 years of professional excellence in financial,
              taxation, and advisory services, we deliver precision,
              integrity, and strategic insight to every client engagement.
              Our qualified Chartered Accountants ensure compliance,
              growth, and long-term financial stability.
            </p>

            <div className="space-y-5">
              {[
                "Experienced & Qualified CA Professionals",
                "Personalized Strategic Advisory",
                "Technology-Driven Compliance Solutions",
                "Strong Ethical & Transparent Practices"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4"
                >
                  <FaCheckCircle className="text-amber-400 text-sm" />
                  <span className="text-zinc-300 text-sm tracking-wide">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-zinc-900 border border-zinc-800 p-12 rounded-3xl shadow-2xl">

              <div className="space-y-10">

                <div>
                  <h3 className="text-xl font-semibold text-amber-400 mb-4 tracking-wide">
                    Our Mission
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    To deliver reliable, ethical, and forward-thinking
                    financial solutions that empower businesses to
                    operate confidently in a dynamic economic environment.
                  </p>
                </div>

                <div className="border-t border-zinc-800 pt-8">
                  <h3 className="text-xl font-semibold text-amber-400 mb-4 tracking-wide">
                    Our Vision
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    To become one of the most trusted Chartered
                    Accountancy firms by setting benchmarks in
                    professional excellence, innovation, and client satisfaction.
                  </p>
                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
