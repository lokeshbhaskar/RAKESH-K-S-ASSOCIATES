import { motion } from "framer-motion";

const Services = () => {
  return (
    <section
      id="services"
      className="relative py-40 bg-gradient-to-b from-black via-zinc-900 to-black text-white overflow-hidden"
    >
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-amber-500/10 blur-[180px] rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-28"
        >
          <p className="text-amber-400 text-xs tracking-[4px] uppercase mb-4">
            Our Core Services
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            Professional Expertise. <br /> Practical Solutions.
          </h2>

          <div className="w-24 h-[1px] bg-amber-400 mx-auto mt-6"></div>
        </motion.div>

        {/* Services */}
        <div className="space-y-28">

          <ServiceSection
            title="GST Advisory, Compliance & Litigation Support"
            description={[
              "We provide end-to-end GST services designed to keep your business compliant while optimising tax efficiency and minimising risk. Our team combines strong technical knowledge with practical industry experience to handle routine compliance as well as complex GST matters.",
              "From registration to return filing, reconciliations, and advisory, we ensure seamless compliance with evolving GST regulations. We also specialise in GST assessments, scrutiny, departmental audits, and litigation support, representing clients confidently before tax authorities.",
            ]}
            points={[
              "GST Registration & Amendments",
              "GSTR-1, GSTR-3B, GSTR-9 & 9C Filing",
              "ITC Reconciliation & Optimisation",
              "GST Health Checks & Compliance Reviews",
              "Departmental Audits & Assessments",
              "Notice Replies & Scrutiny Handling",
              "GST Litigation & Representation",
              "Appeal and Refund Claims",
            ]}
            highlight="We focus not just on filing returns, but on protecting your business from future disputes through proactive planning and expert representation."
          />

          <ServiceSection
            title="Direct Tax Advisory & Litigation"
            description={[
              "We provide comprehensive Direct Tax services for individuals, professionals, corporates, and business entities. Our approach combines strategic tax planning with strong representation capabilities to manage risks and optimise tax positions.",
              "Beyond routine return filing, we assist clients in handling scrutiny cases, reassessments, appeals, and complex tax disputes before Income Tax authorities.",
            ]}
            points={[
              "Income Tax Return Filing (Individuals, Firms, Companies)",
              "Tax Planning & Structuring",
              "TDS Compliance & Advisory",
              "Advance Tax & Self-Assessment Tax Planning",
              "Tax Audit (Sec 44AB)",
              "Scrutiny Assessments & Reassessment Cases",
              "Drafting & Filing Appeals",
              "Representation before Income Tax Authorities",
              "Capital Gains & Business Restructuring Advisory",
            ]}
            highlight="We ensure that your tax matters are managed with precision, foresight, and strong litigation support when required."
          />

          <ServiceSection
            title="Audit & Assurance Services"
            description={[
              "Our Audit & Assurance services are designed to enhance financial transparency, strengthen internal controls, and ensure statutory compliance.",
              "We go beyond compliance reporting by providing insightful analysis and risk assessment, helping businesses improve governance and operational efficiency.",
            ]}
            points={[
              "Statutory Audit",
              "Tax Audit",
              "Internal Audit",
              "Management Audit",
              "Financial Statement Certification",
              "Due Diligence & Compliance Review",
              "Stock Audit & Special Audits",
            ]}
          />

          <ServiceSection
            title="Regulatory & Compliance Management"
            description={[
              "Navigating regulatory requirements can be complex and time-sensitive. We provide structured compliance management solutions to ensure your business meets all statutory obligations without disruption.",
            ]}
            points={[
              "ROC Filings & Annual Returns",
              "Company Incorporation & Business Structuring",
              "TDS / TCS Returns",
              "MCA Compliance",
              "PF, ESI & Labour Law Compliance",
              "Compliance Calendar & Deadline Monitoring",
              "Secretarial Compliance Support",
            ]}
          />

          <ServiceSection
            title="Strategic Business Advisory & Accounting Services"
            description={[
              "We act as trusted financial partners to businesses, offering strategic advisory combined with strong accounting and financial management support.",
              "Our objective is not only compliance but enabling better financial decisions, profitability improvement, and sustainable growth.",
            ]}
            points={[
              "Maintenance of Books of Accounts",
              "Outsourced Accounting Services",
              "Financial Reporting & Accounts Finalisation",
              "MIS Reporting & Management Dashboards",
              "Cash Flow Management & Working Capital Planning",
            ]}
          />

          {/* Virtual CFO */}
          <ServiceSection
            title="Virtual CFO Services"
            description={[
              "Our Virtual CFO services are designed to provide businesses with high-level financial leadership and strategic guidance. We partner closely with business owners to strengthen financial systems, improve profitability, and support informed decision-making.",
              "We assist in strategic financial planning, budgeting, forecasting, and long-term business roadmap development. Our approach combines structured financial insights with proactive advisory to support sustainable and scalable growth.",
            ]}
            points={[
              "Strategic Financial Planning & Forecasting",
              "Budgeting & Long-Term Business Roadmaps",
              "Cash Flow Planning & Monitoring",
              "Working Capital Management",
              "Cost Optimisation & Profitability Analysis",
              "MIS Reporting & KPI Tracking",
              "Financial Risk Assessment & Internal Controls",
              "Fund Raising & Investor Reporting Support",
              "Banking Coordination & Financial Due Diligence",
            ]}
            highlight="By leveraging structured financial insights and proactive advisory, we help businesses enhance operational efficiency, maintain compliance, improve internal controls, and achieve sustainable and scalable growth."/>
        </div>
      </div>
    </section>
  );
};

/* Premium Card Section */
const ServiceSection = ({ title, description, points, highlight }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-14"
  >
    <h3 className="text-2xl md:text-3xl font-semibold mb-6">
      <span className="text-amber-400">➤</span> {title}
    </h3>

    <div className="space-y-5 text-zinc-300 leading-8">
      {description.map((text, i) => (
        <p key={i}>{text}</p>
      ))}
    </div>

    <ul className="grid md:grid-cols-2 gap-3 mt-8 text-sm text-zinc-300">
      {points.map((point, i) => (
        <li key={i} className="flex items-start gap-2">
          <span className="text-amber-400 mt-1">•</span>
          <span>{point}</span>
        </li>
      ))}
    </ul>

    {highlight && (
      <p className="mt-8 text-white font-medium">
        {highlight}
      </p>
    )}
  </motion.div>
);

export default Services;
