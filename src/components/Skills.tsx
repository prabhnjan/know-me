import { motion } from "motion/react";
import { SectionIcon } from "./SectionIcon";

const skillCategories = [
  {
    title: "Product Management",
    skills: [
      "Product Strategy",
      "User Research",
      "Roadmap Planning",
      "A/B Testing",
      "Analytics",
      "Agile/Scrum",
      "PRD Writing",
      "Stakeholder Management"
    ]
  },
  {
    title: "Technical",
    skills: [
      "SQL",
      "Python",
      "JavaScript",
      "React",
      "APIs",
      "System Design",
      "Data Analysis",
      "Git"
    ]
  },
  {
    title: "Tools",
    skills: [
      "Figma",
      "Jira",
      "Amplitude",
      "Mixpanel",
      "Tableau",
      "Notion",
      "Miro",
      "Linear"
    ]
  },
  {
    title: "Domain Expertise",
    skills: [
      "Healthcare Tech",
      "HR Tech",
      "Enterprise SaaS",
      "Supply Chain",
      "B2B Products"
    ]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-neutral-50">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <SectionIcon type="skills" />
          <motion.h2 
            className="text-neutral-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Skills & Expertise
          </motion.h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg border border-neutral-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-neutral-900 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-sm"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}