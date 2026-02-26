import { motion } from "framer-motion";
import { Cpu, Send, Wrench, CreditCard } from "lucide-react";

const steps = [
  { icon: Cpu, title: "AI Diagnosis", desc: "Describe the issue. Our AI identifies the problem instantly." },
  { icon: Send, title: "Dispatch", desc: "A certified technician is dispatched to your location in minutes." },
  { icon: Wrench, title: "Onsite Repair", desc: "Professional repair performed right where you are." },
  { icon: CreditCard, title: "Payment", desc: "Pay seamlessly through the app. No surprises." },
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
          Four steps. That's it.
        </motion.h2>

        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
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
