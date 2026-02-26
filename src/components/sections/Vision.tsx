import { motion } from "framer-motion";

const Vision = () => {
  return (
    <section className="section-padding bg-background">
      <div className="content-container flex flex-col items-center text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="heading-xl mb-8 max-w-4xl text-foreground"
        >
          The future of vehicle care.
          <br />
          <span className="text-muted-foreground">Delivered.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="body-lg max-w-lg"
        >
          We're building a world where vehicle maintenance is invisible — 
          it just happens, perfectly, whenever you need it.
        </motion.p>
      </div>
    </section>
  );
};

export default Vision;
