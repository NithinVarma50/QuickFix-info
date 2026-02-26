import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8 },
};

const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="content-container flex flex-col items-center text-center">
        <motion.p {...fadeUp} className="label-sm mb-6">
          Who We Are
        </motion.p>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="body-lg mb-10 max-w-2xl"
        >
          We believe vehicle maintenance shouldn't mean losing your day. 
          Our platform combines artificial intelligence with a network of 
          certified technicians to deliver professional repair — right where you are.
        </motion.p>

        <motion.h2
          {...fadeUp}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="heading-lg max-w-3xl text-foreground"
        >
          The smartest way to keep your vehicle running.
        </motion.h2>
      </div>
    </section>
  );
};

export default About;
