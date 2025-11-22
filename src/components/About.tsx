import { motion } from "motion/react";
import { SectionIcon } from "./SectionIcon";

export function About() {
  return (
    <section id="about" className="py-20 px-6 bg-neutral-50">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <SectionIcon type="about" />
          <motion.h2 
            className="text-neutral-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h2>
        </div>
        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-neutral-600">
            I'm a product manager with deep expertise in enterprise healthcare and HR technology. 
            My career began in healthcare supply chain, where I built solutions that streamlined 
            operations for hospitals and healthcare providers.
          </p>
          <p className="text-neutral-600">
            Currently, I'm focused on transforming performance management and core HR solutions, 
            helping organizations better manage their talent and drive productivity. I combine 
            data-driven insights with user empathy to build products that truly matter.
          </p>
        </motion.div>
      </div>
    </section>
  );
}