import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <section className="section-padding bg-transparent">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center gap-6 sm:flex-row"
        >
          <a
            href="tel:+917337243180"
            className="inline-flex h-14 items-center rounded-full bg-primary px-10 text-base font-medium text-primary-foreground transition-opacity hover:opacity-85"
          >
            Call Us — 7337243180
          </a>
          <a
            href="https://www.instagram.com/_quicfix.in?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-14 items-center gap-2 rounded-full border border-border px-10 text-base font-medium text-foreground transition-colors hover:bg-foreground/5"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            Follow on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
