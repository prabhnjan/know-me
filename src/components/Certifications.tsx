import { Card } from "./ui/card";
import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { SectionIcon } from "./SectionIcon";

const certifications = [
  {
    name: "Product Management",
    issuer: "Indian School of Business",
    date: "2024",
    description: "Comprehensive certification in product management covering product strategy, user research, roadmap planning, and agile methodologies from one of India's premier business schools.",
    link: "https://www.credential.net/d3863775-5d1c-4fde-b28e-88b5f19569da#acc.TxnsD5hz"
  },
  {
    name: "Product-Led Certified",
    issuer: "Pendo.io",
    date: "2024",
    description: "Professional certification in product-led growth strategies, user analytics, in-app guidance, and data-driven product development from the leading product experience platform.",
    link: "https://www.credly.com/badges/bb7b209f-3db1-46fd-8ef4-ac1014073f6d/public_url"
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
          <div className="flex items-center gap-4 mb-12">
            <SectionIcon type="certifications" />
            <h2 className="text-neutral-900">Certifications</h2>
          </div>
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
                  </div>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(cert.link, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Certificate
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