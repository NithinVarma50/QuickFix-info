import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <section className="section-padding bg-background">
      <div className="divider-subtle content-container mb-24 lg:mb-32" />
      <div className="content-container flex flex-col items-center text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="heading-lg mb-10 max-w-2xl text-foreground"
        >
          Ready to experience the difference?
        </motion.h2>

        <motion.a
          href="#"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex h-14 items-center rounded-full bg-primary px-10 text-base font-medium text-primary-foreground transition-opacity hover:opacity-85"
        >
          Get Started Now
        </motion.a>
      </div>
    </section>
  );
};

export default CallToAction;
