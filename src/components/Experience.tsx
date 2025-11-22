import { motion } from "motion/react";
import { SectionIcon } from "./SectionIcon";

const experiences = [
  {
    title: "Senior Product Manager",
    company: "HR Tech Company",
    period: "2022 - Present",
    description: "Leading product development for performance management and core HR suite. Shipped features used by 100k+ employees across Fortune 500 companies.",
    achievements: [
      "Increased user adoption by 85% through improved onboarding flow",
      "Launched 360-degree review system handling 50k+ reviews quarterly",
      "Reduced time-to-hire by 30% with streamlined recruitment module"
    ]
  },
  {
    title: "Product Manager",
    company: "Healthcare Tech Startup",
    period: "2020 - 2022",
    description: "Built end-to-end supply chain platform for hospital networks managing medical equipment and pharmaceuticals.",
    achievements: [
      "Managed $50M+ in inventory across 30+ hospital networks",
      "Reduced procurement costs by 25% through AI-powered automation",
      "Integrated with major EHR systems for seamless operations"
    ]
  },
  {
    title: "Associate Product Manager",
    company: "Enterprise Software Company",
    period: "2018 - 2020",
    description: "Worked on B2B SaaS products for mid-market companies, focusing on workflow automation and analytics.",
    achievements: [
      "Launched 3 major features with 95%+ customer satisfaction",
      "Conducted 100+ user interviews to inform product roadmap",
      "Collaborated with 20+ engineers across distributed teams"
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <SectionIcon type="experience" />
          <motion.h2 
            className="text-neutral-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Experience
          </motion.h2>
        </div>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="border-l-2 border-neutral-200 pl-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative">
                <div className="absolute -left-[29px] top-0 w-4 h-4 bg-blue-500 rounded-full border-4 border-white"></div>
                <h3 className="text-neutral-900 mb-1">{exp.title}</h3>
                <p className="text-neutral-600 mb-2">{exp.company} • {exp.period}</p>
                <p className="text-neutral-600 mb-4">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-neutral-600 flex items-start">
                      <span className="text-blue-500 mr-2">▸</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}