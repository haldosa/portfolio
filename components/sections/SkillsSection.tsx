"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { 
  Code, 
  Database, 
  LineChart, 
  Users, 
  MessageSquare, 
  Globe,
  FileSpreadsheet,
  Layout
} from "lucide-react";

interface Skill {
  name: string;
  level: number;
  icon: any;
  category: string;
}

const skills: Skill[] = [
  // Technical Skills
  { name: "Python", level: 85, icon: Code, category: "Programming" },
  { name: "JavaScript/TypeScript", level: 80, icon: Code, category: "Programming" },
  { name: "SQL & Database Management", level: 85, icon: Database, category: "Data" },
  { name: "Data Analysis", level: 90, icon: LineChart, category: "Data" },
  { name: "Microsoft Excel/Power BI", level: 90, icon: FileSpreadsheet, category: "Data" },
  { name: "React & Web Development", level: 75, icon: Layout, category: "Programming" },
  
  // Business Skills
  { name: "Account Management", level: 95, icon: Users, category: "Business" },
  { name: "Client Relations", level: 95, icon: MessageSquare, category: "Business" },
  { name: "Business Analysis", level: 85, icon: LineChart, category: "Business" },
  
  // Soft Skills
  { name: "Communication", level: 95, icon: MessageSquare, category: "Soft Skills" },
  { name: "Leadership", level: 85, icon: Users, category: "Soft Skills" },
  { name: "Cross-Cultural Collaboration", level: 90, icon: Globe, category: "Soft Skills" },
];

const categories = ["All", "Programming", "Data", "Business", "Soft Skills"];

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredSkills = selectedCategory === "All" 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  return (
    <section
      id="skills"
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
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <skill.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {skill.name}
                  </span>
                </div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {skill.level}%
                </span>
              </div>
              
              {/* Progress Bar */}
              <div className="relative w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: 0.2 + 0.05 * index }}
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Continuously learning and expanding my skill set to stay current with industry trends 
            and best practices in business informatics, data analytics, and web development.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
