"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, MapPin } from "lucide-react";

interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa: string;
  highlights: string[];
}

const education: Education[] = [
  {
    degree: "Bachelor of Science in Business Informatics",
    institution: "University of Tirana",
    location: "Tirana, Albania",
    period: "2022 - Present",
    gpa: "8.7+",
    highlights: [
      "Focus on business analytics, data management, and information systems",
      "Coursework in database design, business intelligence, and web development",
      "Active participation in academic projects and case studies",
    ],
  },
  {
    degree: "High School Diploma (Exchange Year)",
    institution: "U.S. High School",
    location: "United States",
    period: "2021 - 2022",
    gpa: "3.9",
    highlights: [
      "Kennedy-Lugar Youth Exchange and Study (KL-YES) Program participant",
      "Debate Team Leader: Led competitive debate activities",
      "Student Senator: Represented student body in school governance",
      "Cultural Ambassador: Promoted Albanian culture and fostered international understanding",
    ],
  },
  {
    degree: "High School Diploma",
    institution: "Albanian High School",
    location: "Tirana, Albania",
    period: "2018 - 2022",
    gpa: "Strong Academic Performance",
    highlights: [
      "Strong foundation in mathematics and sciences",
      "Active participant in extracurricular activities",
      "Developed leadership and communication skills",
    ],
  },
];

export function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="education"
      ref={ref}
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-blue-200 dark:bg-blue-800"></div>

            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto md:text-left"
                } md:w-1/2`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-auto md:right-0 md:transform md:translate-x-1/2 -translate-y-4 md:translate-y-0 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800"></div>

                <div className="ml-8 md:ml-0 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-2 mb-3 justify-start md:justify-end">
                    <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                      {edu.period}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {edu.degree}
                  </h3>

                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
                    {edu.institution}
                  </p>

                  <div className="flex items-center gap-2 mb-4 justify-start md:justify-end text-gray-600 dark:text-gray-400">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{edu.location}</span>
                  </div>

                  <div className="flex items-center gap-2 mb-4 justify-start md:justify-end">
                    <Award className="w-5 h-5 text-green-600 dark:text-green-400" />
                    <span className="text-sm font-semibold text-green-600 dark:text-green-400">
                      GPA: {edu.gpa}
                    </span>
                  </div>

                  <ul className="space-y-2 text-left">
                    {edu.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-start text-gray-600 dark:text-gray-400 text-sm"
                      >
                        <span className="inline-block w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
