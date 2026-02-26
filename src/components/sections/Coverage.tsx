import { motion } from "framer-motion";
import RotatingEarth from "@/components/ui/wireframe-dotted-globe";

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

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="mt-16"
        >
          <RotatingEarth width={600} height={500} />
        </motion.div>
      </div>
    </section>
  );
};

export default Coverage;
