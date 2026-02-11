import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Let's discuss how we can help your business grow
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl">
                📍
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Office Address</h3>
                <p className="text-slate-600">
                  123 Business District, City, State 400001
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl">
                📧
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Email</h3>
                <p className="text-slate-600">info@cafirm.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl">
                📞
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Phone</h3>
                <p className="text-slate-600">+91 98765 43210</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message Sent Successfully 🚀");
            }}
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-900 transition-colors"
            />

            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-900 transition-colors"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-900 transition-colors"
            />

            <textarea
              placeholder="Your Message"
              rows="4"
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-900 transition-colors"
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-lg font-semibold hover:shadow-xl transition-all"
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
