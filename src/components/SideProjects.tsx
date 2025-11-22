import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";
import { Globe, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { SectionIcon } from "./SectionIcon";

const sideProjects = [
  {
    title: "Personal Portfolio Website",
    description: "Designed and built this entire portfolio website from scratch using AI assistance. Demonstrates my technical fluency, design sensibility, and ability to leverage cutting-edge AI tools to bring product visions to life independently.",
    platform: "Web",
    status: "Live",
    link: null,
    github: "https://github.com/prabhnjan/prabhanjan",
    stats: "Built with React, TypeScript, Tailwind CSS, and Framer Motion",
    tags: ["AI-Powered", "React", "TypeScript", "Design", "Full-Stack"],
    icon: <Sparkles className="w-5 h-5" />
  },
];

export function SideProjects() {
  return (
    <section id="side-projects" className="py-20 px-6 bg-neutral-50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <SectionIcon type="sideProjects" />
            <h2 className="text-neutral-900">Side Projects & Initiatives</h2>
          </div>
          <p className="text-neutral-600 mb-12">
            Building and experimenting independently, leveraging AI to bring ideas to life
          </p>
        </motion.div>
        
        <div className="space-y-6">
          {sideProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-8 border-neutral-200 hover:border-neutral-300 transition-all hover:shadow-md">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-neutral-600">
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-neutral-900 mb-1">{project.title}</h3>
                      <div className="flex items-center gap-3 text-neutral-500">
                        <span>{project.platform}</span>
                        <span>•</span>
                        <Badge variant="secondary" className="bg-green-100 text-green-700">
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-neutral-600 mb-4">{project.description}</p>
                
                <p className="text-neutral-700 mb-4">
                  <span className="text-neutral-500">Tech:</span> {project.stats}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="bg-neutral-100 text-neutral-700 hover:bg-neutral-200">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  {project.github && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Globe className="w-4 h-4 mr-2" />
                      View on GitHub
                    </Button>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}