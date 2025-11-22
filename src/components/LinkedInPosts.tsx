import { motion } from "motion/react";
import { Linkedin, ExternalLink } from "lucide-react";

export function LinkedInPosts() {
  const posts = [
    {
      id: 1,
      title: "Building AI-Powered Performance Management Systems",
      excerpt: "Sharing insights on integrating AI across performance workflows, from goal setting to calibration intelligence...",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop",
      link: "https://www.linkedin.com/feed/update/urn:li:share:7397113181078470657",
      engagement: "View on LinkedIn",
    },
    {
      id: 2,
      title: "Product Management Insights & Experiences",
      excerpt: "Lessons learned from scaling products, driving growth, and building systems that matter...",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
      link: "https://www.linkedin.com/feed/update/urn:li:share:7296957673160224769",
      engagement: "View on LinkedIn",
    },
  ];

  return (
    <section id="linkedin" className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-cyan-100 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Linkedin className="w-8 h-8 text-blue-600" />
            <h2 className="text-neutral-900">Thought Leadership</h2>
          </div>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Sharing insights on product management, HR technology, and AI-powered solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {posts.map((post, index) => (
            <motion.a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative bg-white rounded-2xl overflow-hidden border border-neutral-200 hover:border-blue-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Post Image */}
              <div className="relative h-64 overflow-hidden bg-neutral-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                      <ExternalLink className="w-5 h-5 text-blue-600" />
                    </div>
                  </div>
                </div>
                {/* LinkedIn badge */}
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full flex items-center gap-2">
                  <Linkedin className="w-4 h-4" />
                  <span className="text-sm">Post</span>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-6">
                <h3 className="text-neutral-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-neutral-600 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-neutral-500 text-sm">
                  <span>{post.engagement}</span>
                </div>
              </div>

              {/* Animated border effect */}
              <motion.div
                className="absolute inset-0 border-2 border-blue-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.a>
          ))}
        </div>

        {/* CTA to view all posts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          
            href="https://www.linkedin.com/in/prabhanjn-kulkarni/recent-activity/all/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:scale-105 group"
          >
            <Linkedin className="w-5 h-5" />
            <span>View All My Posts on LinkedIn</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}