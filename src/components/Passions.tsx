import { motion } from "motion/react";

export function Passions() {
  return (
    <section id="passions" className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-100 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-neutral-900 mb-4">My Happy Places</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Beyond work, these are the activities that bring me peace and joy
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Walking */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="bg-gradient-to-br from-green-50 to-cyan-50 rounded-3xl p-8 border border-neutral-200 hover:border-cyan-300 transition-all duration-300 hover:shadow-xl">
              <div className="text-6xl mb-6 text-center">🚶‍♂️</div>
              <h3 className="text-neutral-900 mb-3 text-center">Walking</h3>
              <p className="text-neutral-600 text-center">
                Finding clarity and peace one step at a time. Whether it's a morning stroll or an evening walk, it's where I do my best thinking and recharge.
              </p>
            </div>
          </motion.div>

          {/* Swimming */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 border border-neutral-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl">
              <div className="text-6xl mb-6 text-center">🏊‍♂️</div>
              <h3 className="text-neutral-900 mb-3 text-center">Swimming</h3>
              <p className="text-neutral-600 text-center">
                The water is my sanctuary. Swimming brings a sense of flow and freedom that nothing else can match—it's meditation in motion.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}