import { motion } from "framer-motion";

const reasons = [
  { title: "10-Minute Response", desc: "From request to dispatch in under ten minutes, every time." },
  { title: "AI Precision", desc: "Our diagnostic engine identifies issues before a technician arrives." },
  { title: "Transparent Pricing", desc: "See the full cost upfront. No hidden fees. No surprises." },
  { title: "Certified Technicians", desc: "Every technician is vetted, trained, and quality-assured." },
];

const WhyUs = () => {
  return (
    <section className="section-padding bg-background">
      <div className="content-container">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="label-sm mb-6 text-center"
        >
          Why Us
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="heading-lg mb-20 text-center text-foreground"
        >
          The difference is everything.
        </motion.h2>

        <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center lg:text-left"
            >
              <h3 className="mb-3 text-lg font-semibold text-foreground">{r.title}</h3>
              <p className="body-md">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
