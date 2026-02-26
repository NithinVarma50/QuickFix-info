'use client';

import { motion } from "framer-motion";
import { WavePath } from "@/components/ui/wave-path";
import { cn } from "@/lib/utils";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8 },
};

const About = () => {
  return (
    <section id="about" className="relative w-full flex min-h-screen flex-col items-center justify-center overflow-hidden bg-transparent py-20">
      <div
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute top-0 left-1/2 size-full -translate-x-1/2 rounded-full',
          'bg-[radial-gradient(ellipse_at_center,theme(colors.foreground/10%),transparent_50%)]',
          'blur-[30px]',
        )}
      />

      <div className="flex w-[90vw] md:w-[70vw] flex-col items-end z-10">
        <WavePath className="mb-10 w-full" />

        <div className="flex w-full flex-col items-end">
          <div className="flex flex-col md:flex-row justify-end w-full">
            <motion.p
              {...fadeUp}
              className="label-sm mb-4 md:mb-0 md:mt-2 md:w-1/4 text-left md:text-right md:mr-8"
            >
              Who We Are
            </motion.p>

            <div className="flex flex-col gap-6 md:w-3/4 text-left">
              <motion.p
                {...fadeUp}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="body-lg text-foreground/80 max-w-2xl"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
