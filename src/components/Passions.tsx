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
              {/* Animated Walking Icon */}
              <div className="mb-6 flex justify-center">
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 120 120"
                  className="overflow-visible"
                >
                  {/* Person walking - animated */}
                  <motion.g
                    animate={{
                      x: [0, 10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {/* Head */}
                    <motion.circle
                      cx="60"
                      cy="25"
                      r="8"
                      fill="#0891b2"
                      animate={{
                        y: [0, -2, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    
                    {/* Body */}
                    <motion.path
                      d="M60 33 L60 55"
                      stroke="#0891b2"
                      strokeWidth="3"
                      strokeLinecap="round"
                      fill="none"
                    />
                    
                    {/* Arms - swinging */}
                    <motion.path
                      d="M60 38 L50 50"
                      stroke="#0891b2"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      fill="none"
                      animate={{
                        d: [
                          "M60 38 L50 50",
                          "M60 38 L48 45",
                          "M60 38 L50 50",
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <motion.path
                      d="M60 38 L70 45"
                      stroke="#0891b2"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      fill="none"
                      animate={{
                        d: [
                          "M60 38 L70 45",
                          "M60 38 L72 50",
                          "M60 38 L70 45",
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    
                    {/* Legs - walking */}
                    <motion.path
                      d="M60 55 L55 75"
                      stroke="#0891b2"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      fill="none"
                      animate={{
                        d: [
                          "M60 55 L55 75",
                          "M60 55 L58 75",
                          "M60 55 L55 75",
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <motion.path
                      d="M60 55 L65 75"
                      stroke="#0891b2"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      fill="none"
                      animate={{
                        d: [
                          "M60 55 L65 75",
                          "M60 55 L62 75",
                          "M60 55 L65 75",
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.g>

                  {/* Trail/path */}
                  <motion.path
                    d="M20 90 Q40 85 60 90 T100 90"
                    stroke="#06b6d4"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    fill="none"
                    opacity="0.4"
                    animate={{
                      strokeDashoffset: [0, -20],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  {/* Trees in background */}
                  {[30, 90].map((x, i) => (
                    <motion.g
                      key={i}
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.5,
                      }}
                    >
                      <circle cx={x} cy="80" r="5" fill="#10b981" opacity="0.3" />
                      <path d={`M${x} 85 L${x} 95`} stroke="#10b981" strokeWidth="2" opacity="0.3" />
                    </motion.g>
                  ))}
                </svg>
              </div>

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
              {/* Animated Swimming Icon */}
              <div className="mb-6 flex justify-center">
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 120 120"
                  className="overflow-visible"
                >
                  {/* Water surface */}
                  <motion.path
                    d="M0 60 Q20 55 40 60 T80 60 T120 60"
                    stroke="#0ea5e9"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.3"
                    animate={{
                      d: [
                        "M0 60 Q20 55 40 60 T80 60 T120 60",
                        "M0 60 Q20 65 40 60 T80 60 T120 60",
                        "M0 60 Q20 55 40 60 T80 60 T120 60",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Swimmer - animated */}
                  <motion.g
                    animate={{
                      x: [0, 20, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {/* Head */}
                    <motion.circle
                      cx="40"
                      cy="50"
                      r="7"
                      fill="#0284c7"
                      animate={{
                        y: [0, 3, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    
                    {/* Body swimming */}
                    <motion.ellipse
                      cx="55"
                      cy="52"
                      rx="15"
                      ry="5"
                      fill="#0284c7"
                      animate={{
                        y: [0, 3, 0],
                        rx: [15, 18, 15],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />

                    {/* Arms - swimming motion */}
                    <motion.path
                      d="M48 50 Q35 45 30 50"
                      stroke="#0284c7"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      fill="none"
                      animate={{
                        d: [
                          "M48 50 Q35 45 30 50",
                          "M48 52 Q35 55 30 58",
                          "M48 50 Q35 45 30 50",
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <motion.path
                      d="M62 50 Q75 45 80 50"
                      stroke="#0284c7"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      fill="none"
                      animate={{
                        d: [
                          "M62 50 Q75 55 80 58",
                          "M62 52 Q75 45 80 50",
                          "M62 50 Q75 55 80 58",
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />

                    {/* Legs - kicking */}
                    <motion.path
                      d="M67 52 L75 55"
                      stroke="#0284c7"
                      strokeWidth="2"
                      strokeLinecap="round"
                      fill="none"
                      animate={{
                        d: [
                          "M67 52 L75 55",
                          "M67 52 L75 49",
                          "M67 52 L75 55",
                        ],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.g>

                  {/* Bubbles */}
                  {[
                    { x: 50, delay: 0 },
                    { x: 65, delay: 0.5 },
                    { x: 35, delay: 1 },
                  ].map((bubble, i) => (
                    <motion.circle
                      key={i}
                      cx={bubble.x}
                      cy="70"
                      r="2"
                      fill="#0ea5e9"
                      opacity="0.4"
                      animate={{
                        y: [0, -30],
                        opacity: [0.4, 0],
                        scale: [1, 1.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeOut",
                        delay: bubble.delay,
                      }}
                    />
                  ))}

                  {/* Water ripples */}
                  <motion.circle
                    cx="60"
                    cy="55"
                    r="15"
                    stroke="#0ea5e9"
                    strokeWidth="1"
                    fill="none"
                    opacity="0.2"
                    animate={{
                      r: [15, 35],
                      opacity: [0.2, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                  />
                </svg>
              </div>

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