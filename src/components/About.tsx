import { motion } from "motion/react";

export function About() {
  return (
    <section id="about" className="py-20 px-6 bg-neutral-50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-neutral-900 mb-8">About Me</h2>
          <div className="space-y-4 text-neutral-600">
            <p>
              I'm a Product Manager with a passion for building enterprise solutions that solve 
              real business problems. With experience spanning healthcare supply chain management 
              and HR technology platforms, I specialize in taking products from concept to market.
            </p>
            <p>
              My approach combines deep technical understanding with user-centric design thinking. 
              I believe in data-driven decision making, rapid prototyping, and close collaboration 
              with engineering teams to deliver products that users love.
            </p>
            <p>
              Currently, I'm focused on building innovative HR tech solutions and exploring the 
              intersection of AI and product management. When I'm not working on products, you'll 
              find me walking outdoors or swimming.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}