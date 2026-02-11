import { motion } from "framer-motion";
import  {services}  from '../data/data'

const Services = () => {


  return (
    <section id="services" className="py-36 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Services</h2>
          <p className="text-gray-600">
            The Firm exists to solve critical issues facing our clients, both large
            and small. We provide integrated solutions to help organizations
            achieve their vision, optimize performance, and facilitate growth.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-gray-200 p-8 rounded-xl shadow-sm hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 whitespace-pre-line leading-7 text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg font-medium mb-4">
            Does your company need our services?
          </p>

          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          >
            Message Us Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
