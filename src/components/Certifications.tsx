import { Card } from "./ui/card";
import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const certifications = [
  {
    name: "ISP Certified Product Manager",
    issuer: "ISP Certification Board",
    date: "2023",
    credentialId: "ISP-PM-2023-XXXX",
    description: "Advanced certification demonstrating expertise in product strategy, user research, and agile methodologies.",
    link: "#" // TODO: Add actual credential link later
  },
  {
    name: "Certified Scrum Product Owner (CSPO)",
    issuer: "Scrum Alliance",
    date: "2022",
    credentialId: "CSPO-XXXX",
    description: "Professional certification in agile product ownership and backlog management.",
    link: "#" // TODO: Add actual credential link later
  }
];

export function Certifications() {
  return (
    <section id="certifications" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-neutral-900 mb-12">Certifications</h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 border-neutral-200 hover:border-neutral-300 transition-all h-full relative overflow-hidden">
                {/* Animated background element */}
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-2xl opacity-50"
                  animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 10, 0],
                    y: [0, 10, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <div className="relative">
                  <div className="mb-4">
                    <h3 className="text-neutral-900 mb-1">{cert.name}</h3>
                    <p className="text-neutral-600">{cert.issuer}</p>
                  </div>
                  
                  <p className="text-neutral-600 mb-4">{cert.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <p className="text-neutral-500">
                      <span>Issued:</span> {cert.date}
                    </p>
                    <p className="text-neutral-500">
                      <span>Credential ID:</span> {cert.credentialId}
                    </p>
                  </div>
                  
                  {cert.link !== "#" && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(cert.link, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Credential
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