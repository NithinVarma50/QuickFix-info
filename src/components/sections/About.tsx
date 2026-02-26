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

      <div className="content-container relative z-10 flex w-full flex-col items-center">
        <div className="w-full max-w-5xl">
          <WavePath className="mb-12 w-full" />

          <div className="flex flex-col md:flex-row w-full gap-8 md:gap-12 items-start">
            <motion.p
              {...fadeUp}
              className="label-sm pt-2 md:w-1/4 shrink-0 text-left"
            >
              What is QuickFix
            </motion.p>

            <div className="flex flex-col gap-6 md:w-3/4 text-left">
              <motion.p
                {...fadeUp}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="body-lg text-foreground/80 max-w-2xl"
              >
                QuickFix is an on-demand vehicle repair service.
                A mechanic comes to your location for small fixes.
              </motion.p>

              <motion.h2
                {...fadeUp}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="heading-lg max-w-3xl text-foreground"
              >
                Bigger repairs at nearby partner workshops.
              </motion.h2>

              <motion.div
                {...fadeUp}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="w-full mt-10 rounded-2xl overflow-hidden border border-border/50 bg-background/20 backdrop-blur-sm"
              >
                <video
                  src="/videos/hero-video.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto object-cover max-h-[600px]"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
