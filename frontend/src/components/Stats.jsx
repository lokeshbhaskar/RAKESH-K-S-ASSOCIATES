import { motion } from "framer-motion";
import { stats } from "../data/data";

const Stats = () => {
  return (
    <section className="py-20 bg-white">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto px-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            className="text-center"
          >
            <div className="text-4xl font-bold text-blue-900">
              {stat.number}
            </div>
            <div className="text-slate-600">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
