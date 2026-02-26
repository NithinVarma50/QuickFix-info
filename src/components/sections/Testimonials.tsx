import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
  { quote: "I described the sound my car was making. Ten minutes later, a technician was at my door with the right part. Unreal.", name: "Priya S.", role: "Mumbai" },
  { quote: "This is what car repair should have always been. Fast, transparent, and effortless.", name: "Rahul M.", role: "Delhi" },
  { quote: "The AI diagnosed my issue more accurately than two different workshops. I'm never going back.", name: "Anjali D.", role: "Bengaluru" },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding bg-transparent">
      <div className="divider-subtle content-container mb-24 lg:mb-32" />
      <div className="content-container flex flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="label-sm mb-16"
        >
          Testimonials
        </motion.p>

        <div className="relative min-h-[200px] max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <p className="mb-10 text-2xl font-light leading-relaxed text-foreground md:text-3xl lg:text-4xl">
                "{testimonials[current].quote}"
              </p>
              <p className="text-sm font-medium text-foreground">
                {testimonials[current].name}
              </p>
              <p className="text-sm text-muted-foreground">
                {testimonials[current].role}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="mt-12 flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${i === current ? "w-8 bg-foreground" : "w-1.5 bg-muted-foreground/30"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
