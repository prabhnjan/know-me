import { motion } from "motion/react";
import { SectionIcon } from "./SectionIcon";

const experiences = [
  {
    title: "Associate Product Manager",
    company: "greytHR",
    period: "Sep 2024 – Present",
    description: "Leading end-to-end development of Performance Management System with AI-driven capabilities.",
    achievements: [
      "Led development of Performance Management System including Goals & OKRs, Performance Reviews, 360° Feedback, Calibration, and Performance Library & Surveys",
      "Drove exponential business growth, increasing MRR from ₹6L to ₹23L in one year through feature adoption and PLG-led usage expansion",
      "Built and integrated AI-driven capabilities across workflows (AI summaries, feedback insights, calibration intelligence, behavioral pattern detection)",
      "Conducted deep market and competitive research, benchmarking global performance systems",
      "Scaled Performance Management System to mobile experiences, enhancing accessibility for managers and employees"
    ]
  },
  {
    title: "Business Analyst",
    company: "Infor",
    period: "Nov 2022 – Sep 2024",
    description: "Owned full product lifecycle for enterprise Finance & Supply Chain capabilities.",
    achievements: [
      "Implemented 9 automation use cases that reduced process cycle times by 60% for global customers",
      "Designed and delivered 11 role-based workspaces, improving cross-functional team efficiency",
      "Defined product specifications for procurement, inventory, vendor management, invoicing, and contract processes",
      "Integrated advanced technologies — AI, GenAI, RPA, chatbots, OCR, Data Fabric, Data Lake pipelines, APIs",
      "Supported customer demos, pre-sales engagements, training, and adoption initiatives across enterprise rollouts"
    ]
  },
  {
    title: "Associate Business Analyst",
    company: "Infor",
    period: "Oct 2020 – Nov 2022",
    description: "Managed supply-chain product lifecycle enhancements for mid-to-large enterprises.",
    achievements: [
      "Improved supply cycle times by 30% for mid-to-large enterprises",
      "Enhanced platform adoption by 15% through customer-driven improvements and usability enhancements",
      "Built integrations using API Gateway, ION, AI, and NLP chatbots for procurement automation",
      "Collaborated with cross-functional teams for requirements, demos, and iterative improvements"
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