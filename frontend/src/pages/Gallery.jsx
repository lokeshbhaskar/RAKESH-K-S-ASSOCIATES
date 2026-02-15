import { motion } from "framer-motion";

const galleryData = [
  {
    title: "Professional Work Environment",
    description:
      "Our office environment reflects professionalism, confidentiality, and structured financial operations designed to support client success.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216",
  },
  {
    title: "Client Consultation & Advisory",
    description:
      "We engage closely with clients to understand business needs and deliver practical tax, compliance, and advisory solutions.",
    image:
      "https://images.unsplash.com/photo-1556761175-129418cb2dfe",
  },
  {
    title: "Strategic Financial Discussions",
    description:
      "Our team provides data-driven insights, compliance clarity, and litigation-focused guidance for sustainable growth.",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
  },
];

const Gallery = () => {
  return (
    <section className="pt-64 py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6 space-y-28">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-amber-500 text-xs tracking-[4px] uppercase mb-4">
            Gallery
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            Inside Our Professional Practice
          </h2>
          <p className="text-gray-600">
            A glimpse into our workspace, client engagements, and professional culture.
          </p>
        </div>

        {/* Gallery Rows */}
        {galleryData.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-16 items-center ${
                !isEven ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className={`${!isEven ? "md:order-2" : ""}`}
              >
                <div className="overflow-hidden rounded-3xl shadow-xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[420px] object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? 60 : -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className={`${!isEven ? "md:order-1" : ""}`}
              >
                <h3 className="text-2xl md:text-3xl font-semibold mb-6">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-base max-w-xl">
                  {item.description}
                </p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Gallery;
