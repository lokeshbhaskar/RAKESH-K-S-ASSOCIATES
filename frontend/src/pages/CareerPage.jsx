import { motion } from "framer-motion";

const CareerPage = () => {
    return (
        <section className="pt-64 bg-black text-white">
            <div className="relative py-16 px-6 md:px-20 text-center">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                    Build Your Career With Us
                </h1>
                <p className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed">
                    Join a firm where integrity, excellence, and professional growth
                    come together to shape meaningful careers in finance and advisory.
                </p>
            </div>

            <div className="max-w-6xl mx-auto px-6 py-10 md:px-20  grid md:grid-cols-3 gap-12">
                {[
                    {
                        title: "Professional Growth",
                        desc: "Continuous learning, exposure to diverse clients, and mentorship from experienced professionals."
                    },
                    {
                        title: "Ethical Culture",
                        desc: "Work in an environment rooted in integrity, transparency, and professional excellence."
                    },
                    {
                        title: "Collaborative Team",
                        desc: "Be part of a motivated team that values teamwork, innovation, and mutual respect."
                    }
                ].map((item, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ y: -6 }}
                        className="border border-white/10 p-8 rounded-xl bg-white/5 backdrop-blur"
                    >
                        <h3 className="text-xl font-semibold mb-4">
                            {item.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                            {item.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
            <div className="bg-white text-black py-20 px-6 md:px-20">
                <div className="max-w-5xl mx-auto text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Current Openings
                    </h2>
                    <p className="text-gray-600">
                        We are always looking for talented professionals and fresh minds.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-6">
                    {[
                        // "Chartered Accountant (CA)",
                        // "Audit Executive",
                        // "Tax Consultant",
                        "Article Assistant",
                        // "Accounts Executive",
                        "Paid Assistant"
                    ].map((role, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between border border-gray-200 rounded-lg px-6 py-5 hover:shadow-md transition"
                        >
                            <span className="font-medium">{role}</span>
                            <a
                                href="mailto:carakesh@rksassociates.com"
                                className="text-sm font-semibold text-blue-700 hover:underline"
                            >
                                Apply Now
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            {/* Call To Action */}
            <div className="py-24 px-6 md:px-20 text-center bg-black">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Start Your Professional Journey
                </h2>
                <p className="text-gray-300 max-w-2xl mx-auto mb-10">
                    If you are passionate about accounting, taxation, and advisory,
                    we would love to hear from you.
                </p>

                <a
                    href="mailto:carakesh@rksassociates.com"
                    className="inline-block px-10 py-4 bg-amber-500 text-black font-medium tracking-wide uppercase text-sm hover:bg-amber-400 transition-all duration-300 rounded-lg"
                >
                    Send Your Resume
                </a>
            </div>

        </section>
    );
};

export default CareerPage;
