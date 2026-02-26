import { motion } from "framer-motion";
import { LocationMap } from "@/components/ui/expand-map";

const features = [
  "AI-powered diagnostic engine",
  "Dark store parts distribution",
  "Real-time inventory tracking",
  "10-minute dispatch logic",
  "Predictive maintenance alerts",
];

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8 },
};

const Technology = () => {
  return (
    <section className="section-padding bg-transparent">
      <div className="divider-subtle content-container mb-24 lg:mb-32" />
      <div className="content-container">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left */}
          <div>
            <motion.p {...fadeUp} className="label-sm mb-6">
              Technology
            </motion.p>
            <motion.h2
              {...fadeUp}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="heading-lg mb-8 text-foreground"
            >
              We're not an ordinary repair service.
            </motion.h2>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="body-lg mb-10"
            >
              Our proprietary technology stack powers everything — from the moment you describe
              a problem to the second it's fixed.
            </motion.p>
            <ul className="space-y-4">
              {features.map((f, i) => (
                <motion.li
                  key={f}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.08 }}
                  className="flex items-center gap-3 text-muted-foreground"
                >
                  <span className="h-1 w-1 rounded-full bg-foreground" />
                  <span className="text-base md:text-lg">{f}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Right — Location Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex w-full max-w-[360px] md:max-w-full aspect-square md:aspect-auto md:h-[500px] items-center justify-center overflow-visible mx-auto"
          >
            <LocationMap location="Bengaluru, India" coordinates="12.9716° N, 77.5946° E" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
