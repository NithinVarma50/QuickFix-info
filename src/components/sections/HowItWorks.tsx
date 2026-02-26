import { motion } from "framer-motion";
import { Cpu, Send, Wrench, CreditCard } from "lucide-react";

const steps = [
  { icon: Send, title: "Request Service", desc: "Tell us what you need and we schedule an immediate dispatch." },
  { icon: Cpu, title: "Mechanic Arrives", desc: "A certified professional mechanic arrives directly at your location." },
  { icon: Wrench, title: "Fix & Go", desc: "Your vehicle is repaired swiftly so you can get back on the road." }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding bg-transparent">
      <div className="content-container">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="label-sm mb-6 text-center"
        >
          How It Works
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="heading-lg mb-20 text-center text-foreground"
        >
          Three steps. That's it.
        </motion.h2>

        <div className="grid grid-cols-1 gap-16 md:grid-cols-3 lg:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="flex flex-col items-center text-center lg:items-start lg:text-left"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-border">
                <step.icon className="h-5 w-5 text-foreground" strokeWidth={1.5} />
              </div>
              <p className="label-sm mb-3 text-foreground">0{i + 1}</p>
              <h3 className="heading-md mb-3 text-foreground">{step.title}</h3>
              <p className="body-md max-w-xs">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
