import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";
import { Github, ExternalLink, Smartphone } from "lucide-react";
import { Button } from "./ui/button";

const sideProjects = [
  {
    title: "TaskFlow - Productivity App",
    description: "A mobile-first productivity app for iOS that helps users manage tasks, set goals, and track daily progress. Built with a focus on simplicity and beautiful design.",
    platform: "iOS App Store",
    status: "Live",
    link: "#", // TODO: Add App Store link later
    github: "https://github.com/prabhnjan/taskflow", // TODO: Update when repo is ready
    stats: "1k+ downloads, 4.7★ rating",
    tags: ["iOS", "Swift", "Mobile App", "Productivity"],
    icon: <Smartphone className="w-5 h-5" />
  },
  {
    title: "Product Manager's Toolkit",
    description: "Open-source collection of templates, frameworks, and tools for product managers. Includes PRD templates, roadmap planners, and prioritization matrices.",
    platform: "GitHub",
    status: "Active Development",
    link: null,
    github: "https://github.com/prabhnjan/pm-toolkit", // TODO: Update when repo is ready
    stats: "500+ stars on GitHub",
    tags: ["Open Source", "Product Management", "Templates"],
    icon: <Github className="w-5 h-5" />
  }
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
          <h2 className="text-neutral-900 mb-4">Side Projects</h2>
          <p className="text-neutral-600 mb-12">
            Building products independently, from concept to launch
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
                  <span className="text-neutral-500">Impact:</span> {project.stats}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="bg-neutral-100 text-neutral-700 hover:bg-neutral-200">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  {project.link && project.link !== "#" && (
                    <Button
                      variant="default"
                      size="sm"
                      className="bg-neutral-900 hover:bg-neutral-800"
                      onClick={() => window.open(project.link, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View on {project.platform}
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View on GitHub
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}