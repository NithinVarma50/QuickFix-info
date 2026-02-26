import { motion } from "framer-motion";

const Coverage = () => {
  return (
    <section className="section-padding bg-background">
      <div className="content-container flex flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="label-sm mb-6"
        >
          Coverage
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="heading-lg mb-8 max-w-3xl text-foreground"
        >
          Built to scale.
          <br />
          City by city.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="body-lg max-w-lg"
        >
          Starting local. Expanding globally. Every new city gets the same 
          precision-engineered experience from day one.
        </motion.p>

        {/* Minimal globe representation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="relative mt-20 h-64 w-64 md:h-80 md:w-80"
        >
          <div className="absolute inset-0 rounded-full border border-border" />
          <div className="absolute inset-[15%] rounded-full border border-border/60" />
          <div className="absolute inset-[30%] rounded-full border border-border/40" />
          {/* Horizontal lines */}
          <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-border/50" />
          <div className="absolute left-[10%] right-[10%] top-[30%] h-px bg-border/30" />
          <div className="absolute left-[10%] right-[10%] top-[70%] h-px bg-border/30" />
          {/* Center dot */}
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.6, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Coverage;
