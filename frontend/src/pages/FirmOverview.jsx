import { motion } from "framer-motion";

const FirmOverview = () => {
  return (
    <section className="bg-gradient-to-b from-black via-zinc-900 to-black text-white py-36 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
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
            Integrated Financial Solutions <br /> Under One Roof
          </h2>

          <div className="w-20 h-[1px] bg-amber-400 mx-auto mt-6"></div>
        </motion.div>

        {/* Content */}
        <div className="space-y-10 text-zinc-400 leading-8 text-sm md:text-base">

          <p>
            We are a Chartered Accountants Firm with a team of qualified and 
            motivated professionals, offering integrated one-stop services. 
            We primarily focus on consultation in Direct & Indirect Taxation, 
            GST matters, Advisory Services, Audit & Assurance, Management Advisory, 
            Economic and other related laws.
          </p>

          <p>
            We possess exceptional expertise in Direct Taxation, Start-up Registration, 
            Goods & Services Tax, Corporate Laws, and Foreign Exchange Laws — 
            delivering strategic clarity and compliance excellence.
          </p>

          <p>
            Through years of professional experience, we identified a significant 
            gap in the Indian professional services sector — firms often operate 
            in silos without offering holistic business solutions. 
            <span className="text-white font-medium">
              {" "}The foundation of our firm is built upon bridging this gap
              and providing integrated, client-centric solutions.
            </span>
          </p>

          <p>
            In today’s competitive global economy, organizations require timely, 
            insightful, and value-driven advisory services. We aim to enhance 
            the economic well-being of our clients by delivering strategic 
            solutions that contribute to sustainable growth.
          </p>

          {/* Founder Highlight Box */}
          <div className="mt-16 border border-zinc-800 bg-zinc-900 p-10 rounded-2xl">
            <p className="text-white font-semibold text-lg mb-3">
              RAKESH K S & ASSOCIATES
            </p>

            <p className="text-zinc-400 text-sm leading-7">
              Founded by <span className="text-amber-400 font-medium">
              CA Rakesh Kumar Singh</span>, the firm is led with integrity,
              professionalism, and a commitment to excellence across diverse
              financial and advisory domains.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FirmOverview;
