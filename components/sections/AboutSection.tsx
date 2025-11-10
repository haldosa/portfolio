"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, GraduationCap, Briefcase } from "lucide-react";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Briefcase,
      title: "2+ Years Experience",
      description: "Health insurance account management and client relations",
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "Exchange student experience in the United States",
    },
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      description: "Business Informatics student with 8.7+ GPA",
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                I'm a Business Informatics student at the University of Tirana with a passion 
                for combining business acumen with technological innovation. With over 2 years 
                of professional experience in health insurance account management, I've developed 
                a strong foundation in client relations, data-driven decision making, and 
                operational excellence.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                My journey has taken me from Tirana to the United States as an exchange student, 
                where I broadened my perspective and developed a global mindset. This experience 
                has shaped my approach to problem-solving and collaboration, enabling me to work 
                effectively in diverse, multicultural environments.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm particularly interested in leveraging data analytics, business intelligence, 
                and modern web technologies to create innovative solutions that drive business 
                value. Whether it's managing client accounts, analyzing data patterns, or building 
                digital products, I bring a unique blend of business understanding and technical 
                capability to every project.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="flex items-start space-x-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="flex-shrink-0">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <highlight.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {highlight.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
