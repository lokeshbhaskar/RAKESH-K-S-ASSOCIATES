import { motion } from "framer-motion";
import { FaMapPin, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-40 bg-gradient-to-b from-slate-50 via-white to-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-xs tracking-[4px] uppercase text-blue-900 mb-4">
            Contact Us
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Let’s discuss how we can support your business with
            strategic, compliant, and reliable financial solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">

          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >

            {/* Address */}
            <div className="flex items-start gap-6 p-7 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-blue-50 text-blue-900 rounded-xl flex items-center justify-center text-lg shrink-0">
                <FaMapPin />
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900 mb-2 tracking-wide">
                  Office Address
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  <span className="font-medium text-slate-900">
                    RAKESH K S & ASSOCIATES
                  </span>
                  <br />
                  2nd Floor, No. 572, 6th Cross,
                  <br />
                  Situated 17th Main A, 6th Block,
                  <br />
                  Koramangala, Bangalore – 560034
                  <br />
                  Karnataka, India
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-6 p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-blue-50 text-blue-900 rounded-xl flex items-center justify-center text-lg shrink-0">
                <FaEnvelope />
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900 mb-1">
                  Email
                </h3>
                <a
                  href="mailto:rksoffice@ksrakesh.com"  
                  className="text-sm text-slate-600 hover:text-blue-900 transition"
                >
                   rksoffice@ksrakesh.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-6 p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-blue-50 text-blue-900 rounded-xl flex items-center justify-center text-lg shrink-0">
                <FaPhone />
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900 mb-1">
                  Phone
                </h3>
                <a
                  href="tel:+919654064391"
                  className="text-sm text-slate-600 hover:text-blue-900 transition"
                >
                  +91 96540 64391
                </a>
              </div>
            </div>

          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-10 rounded-3xl shadow-xl border border-slate-200 space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message Sent Successfully 🚀");
            }}
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full px-5 py-3 text-sm border border-slate-300 rounded-xl focus:outline-none focus:border-blue-900 transition"
            />

            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full px-5 py-3 text-sm border border-slate-300 rounded-xl focus:outline-none focus:border-blue-900 transition"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-5 py-3 text-sm border border-slate-300 rounded-xl focus:outline-none focus:border-blue-900 transition"
            />

            <textarea
              placeholder="Your Message"
              rows="4"
              required
              className="w-full px-5 py-3 text-sm border border-slate-300 rounded-xl focus:outline-none focus:border-blue-900 transition"
            />

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-blue-900 to-slate-900 text-white rounded-xl font-medium tracking-wide hover:shadow-2xl transition"
            >
              Send Message
            </motion.button>
          </motion.form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
