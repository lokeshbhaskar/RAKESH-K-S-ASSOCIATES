import { motion } from "framer-motion";

const FirmOverview = () => {
  return (
    <section className="bg-gradient-to-b from-black via-zinc-900 to-black text-white py-36 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-amber-400 text-xs tracking-[4px] uppercase mb-4">
            Firm Overview
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            Trusted Chartered Accountancy <br /> & Advisory Services
          </h2>

          <div className="w-20 h-[1px] bg-amber-400 mx-auto mt-6"></div>
        </motion.div>

        <div className="space-y-10 text-zinc-400 leading-8 text-sm md:text-base">

          <p className="text-lg">
            Rakesh K S & Associates is a Chartered Accountancy firm established in
            2020, providing comprehensive services across GST, Direct Taxation,
            Audit, Accounting, and statutory compliance for businesses,
            professionals, and individuals.
          </p>

          <p className="text-lg">
            With over <span className="text-white font-medium">7 years of professional expertise</span>,
            the firm has built a strong reputation for its in-depth command over
            GST advisory and litigation support. Our experience includes handling
            assessments, scrutiny proceedings, departmental audits, and
            representation before tax authorities with precision and confidence.
          </p>

          <p className="text-lg">
            We adopt a balanced approach that combines technical excellence with
            practical, business-oriented insights.
            <span className="text-white font-medium">
              {" "}Our focus remains on timely compliance, proactive risk mitigation,
              and delivering strategic financial guidance tailored to each client’s
              needs.
            </span>
          </p>

          <p className="text-lg">
            In an evolving regulatory and economic environment, our objective is
            to enable clients to operate with clarity, confidence, and compliance,
            while supporting sustainable growth and long-term financial stability.
          </p>
          <div className="mt-16 border border-zinc-800 bg-zinc-900 p-10 rounded-2xl">
            <p className="text-white font-semibold text-lg mb-3">
              RAKESH K S & ASSOCIATES
            </p>

            <p className="text-zinc-400 text-md leading-7">
              Founded by{" "}
              <span className="text-lg text-amber-400 font-medium">
                CA Rakesh Kumar Singh
              </span >, the firm is led with a commitment to integrity,
              professionalism, and consistent value delivery across diverse
              financial and advisory engagements.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FirmOverview;
