import { motion } from "framer-motion";

const items = [
  { title: "Local Operators", desc: "Entrepreneurs who know their city run each location with autonomy." },
  { title: "Central Control", desc: "Unified platform, standards, and support from HQ." },
  { title: "Quality Standard", desc: "Every repair meets the same uncompromising benchmark." },
  { title: "Scalable System", desc: "Proven model designed for rapid, efficient expansion." },
];

const Franchise = () => {
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
          Franchise Model
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="heading-lg mb-20 text-center text-foreground"
        >
          One system. Infinite locations.
        </motion.h2>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border sm:grid-cols-2">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="border-border bg-background p-10 [&:not(:last-child)]:border-b sm:[&:nth-child(odd)]:border-r"
            >
              <h3 className="heading-md mb-3 text-foreground">{item.title}</h3>
              <p className="body-md">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Franchise;
