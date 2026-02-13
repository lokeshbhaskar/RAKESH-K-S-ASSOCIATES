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

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-sm tracking-[4px] uppercase text-amber-400 mb-4">
              About The Firm
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-8">
              Built on Expertise. <br /> Driven by Integrity.
            </h2>

            <p className="text-zinc-400 leading-relaxed mb-8 text-base">
              <span className="text-white font-medium">
                RAKESH K S & ASSOCIATES
              </span>{" "}
              is a Chartered Accountancy firm established in 2020 by
              <span className="text-white font-medium">
                {" "}CA Rakesh Kumar Singh
              </span>, with a clear vision to provide practical, reliable,
              and litigation-focused tax and compliance solutions.
            </p>

            <p className="text-zinc-400 leading-relaxed mb-10 text-base">
              With over 7 years of professional experience, the firm has
              developed strong expertise in GST advisory, direct taxation,
              audit, and regulatory compliance. We are particularly known
              for handling GST assessments, appeals, scrutiny proceedings,
              departmental audits, notice replies, and litigation support,
              representing clients confidently before tax authorities.
            </p>

            <div className="space-y-5">
              {[
                "GST Advisory, Assessments & Litigation Support",
                "Direct Tax Advisory & Scrutiny Handling",
                "Audit & Regulatory Compliance Expertise",
                "Client-Centric & Risk-Focused Advisory Approach"
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

          {/* Right Card */}
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
                    Our Approach
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Our approach combines deep technical knowledge with
                    strategic thinking to safeguard clients against tax
                    risks while ensuring complete statutory compliance.
                    We focus not just on filing, but on long-term clarity,
                    protection, and confidence.
                  </p>
                </div>

                <div className="border-t border-zinc-800 pt-8">
                  <h3 className="text-xl font-semibold text-amber-400 mb-4 tracking-wide">
                    Our Mission
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    To provide reliable, transparent, and litigation-focused
                    GST, taxation, and compliance services that help
                    businesses and individuals operate with confidence.
                    We are committed to simplifying complex regulations,
                    minimising tax risks, and delivering strategic financial
                    guidance for long-term stability and sustainable growth.
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
