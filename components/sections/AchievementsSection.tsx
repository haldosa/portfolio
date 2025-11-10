"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, TrendingUp, Globe } from "lucide-react";

interface Achievement {
  icon: any;
  title: string;
  description: string;
  year: string;
  color: string;
}

const achievements: Achievement[] = [
  {
    icon: Globe,
    title: "KL-YES Exchange Finalist",
    description: "Selected for prestigious Kennedy-Lugar Youth Exchange and Study program, studying in the United States for an academic year. Represented Albania and engaged in cultural exchange activities.",
    year: "2021-2022",
    color: "blue",
  },
  {
    icon: Users,
    title: "IDEAL Workshop 2023 Participant",
    description: "Participated in intensive workshop focused on leadership development, innovation, and entrepreneurship. Collaborated with peers from diverse backgrounds on real-world business challenges.",
    year: "2023",
    color: "purple",
  },
  {
    icon: TrendingUp,
    title: "E-Commerce Store Manager",
    description: "Successfully launched and managed an e-commerce store, generating $3,000+ in revenue within the first 3 months. Implemented digital marketing strategies and optimized customer experience.",
    year: "2023",
    color: "green",
  },
];

const colorClasses: Record<string, { bg: string; icon: string; border: string }> = {
  blue: {
    bg: "bg-blue-100 dark:bg-blue-900",
    icon: "text-blue-600 dark:text-blue-400",
    border: "border-blue-200 dark:border-blue-800",
  },
  purple: {
    bg: "bg-purple-100 dark:bg-purple-900",
    icon: "text-purple-600 dark:text-purple-400",
    border: "border-purple-200 dark:border-purple-800",
  },
  green: {
    bg: "bg-green-100 dark:bg-green-900",
    icon: "text-green-600 dark:text-green-400",
    border: "border-green-200 dark:border-green-800",
  },
};

export function AchievementsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="achievements"
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
            Achievements & Highlights
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const colors = colorClasses[achievement.color];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -8 }}
                className={`p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg border-2 ${colors.border} hover:shadow-xl transition-all`}
              >
                <div className={`inline-flex p-4 rounded-lg ${colors.bg} mb-4`}>
                  <achievement.icon className={`w-8 h-8 ${colors.icon}`} />
                </div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {achievement.title}
                  </h3>
                  <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                    {achievement.year}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {achievement.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "8.7+", label: "GPA" },
            { value: "2+", label: "Years Experience" },
            { value: "$3K+", label: "E-Commerce Revenue" },
            { value: "50+", label: "Managed Accounts" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
