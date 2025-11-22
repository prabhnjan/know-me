import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";
import { SectionIcon } from "./SectionIcon";

const projects = [
  {
    title: "Performance Management Platform",
    description: "Enterprise performance review and goal tracking system. Built continuous feedback loops, 360-degree reviews, and OKR tracking for Fortune 500 companies.",
    impact: "100k+ employees, 85% adoption rate",
    tags: ["HR Tech", "Enterprise SaaS", "Performance Management"]
  },
  {
    title: "Core HR Suite",
    description: "Comprehensive HR management solution including employee onboarding, org chart management, time-off tracking, and employee database. Streamlined HR operations for mid-market companies.",
    impact: "50+ enterprise clients, 200k+ users",
    tags: ["HR Tech", "B2B SaaS", "Employee Management"]
  },
  {
    title: "Healthcare Supply Chain Platform",
    description: "End-to-end supply chain solution for hospitals managing medical supplies, equipment, and pharmaceuticals. Integrated with major EHR systems for seamless operations.",
    impact: "30+ hospital networks, $50M+ managed inventory",
    tags: ["Healthcare", "Supply Chain", "Enterprise"]
  },
  {
    title: "Automated Procurement System",
    description: "AI-powered procurement automation for healthcare providers. Reduced manual ordering processes and optimized inventory levels using predictive analytics.",
    impact: "25% cost reduction, 40% faster processing",
    tags: ["Healthcare", "Automation", "AI/ML"]
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <SectionIcon type="projects" />
          <motion.h2 
            className="text-neutral-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Featured Projects
          </motion.h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 border-neutral-200 hover:border-neutral-300 transition-colors h-full">
                <h3 className="text-neutral-900 mb-3">{project.title}</h3>
                <p className="text-neutral-600 mb-4">{project.description}</p>
                <p className="text-neutral-700 mb-4">
                  <span className="text-neutral-500">Impact:</span> {project.impact}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="bg-neutral-100 text-neutral-700 hover:bg-neutral-200">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}