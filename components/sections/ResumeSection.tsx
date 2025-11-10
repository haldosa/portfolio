"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Download, FileText, Printer, Eye } from "lucide-react";

export function ResumeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showPreview, setShowPreview] = useState(false);

  const handleDownload = () => {
    // In a real implementation, this would trigger a download of the actual resume PDF
    alert("Resume download feature will be implemented with actual PDF file.");
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section
      id="resume"
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
            Resume
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8"
          >
            <div className="text-center mb-8">
              <div className="inline-flex p-6 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
                <FileText className="w-16 h-16 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Aldo Hasa - Professional Resume
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Download or view my complete professional resume
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownload}
                className="flex items-center justify-center gap-3 px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-colors"
              >
                <Download className="w-5 h-5" />
                Download PDF
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowPreview(!showPreview)}
                className="flex items-center justify-center gap-3 px-6 py-4 bg-gray-700 hover:bg-gray-800 text-white font-semibold rounded-lg shadow-lg transition-colors"
              >
                <Eye className="w-5 h-5" />
                {showPreview ? "Hide Preview" : "View Inline"}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePrint}
                className="flex items-center justify-center gap-3 px-6 py-4 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg shadow-lg transition-colors"
              >
                <Printer className="w-5 h-5" />
                Print Resume
              </motion.button>
            </div>

            {showPreview && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="prose prose-sm dark:prose-invert max-w-none">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Resume Preview
                  </h4>
                  
                  <div className="space-y-6">
                    <div>
                      <h5 className="font-bold text-gray-900 dark:text-white mb-2">Contact Information</h5>
                      <p className="text-gray-700 dark:text-gray-300">
                        Aldo Hasa<br />
                        Tirana, Albania<br />
                        Email: aldo.hasa@example.com<br />
                        LinkedIn: linkedin.com/in/aldo-hasa
                      </p>
                    </div>

                    <div>
                      <h5 className="font-bold text-gray-900 dark:text-white mb-2">Professional Summary</h5>
                      <p className="text-gray-700 dark:text-gray-300">
                        Results-driven Business Informatics student with 2+ years of experience in 
                        health insurance account management. Proven track record in client relations, 
                        data analysis, and process optimization. Global perspective gained through 
                        international exchange program. Skilled in leveraging technology and data to 
                        drive business decisions.
                      </p>
                    </div>

                    <div>
                      <h5 className="font-bold text-gray-900 dark:text-white mb-2">Education</h5>
                      <p className="text-gray-700 dark:text-gray-300">
                        <strong>Bachelor of Science in Business Informatics</strong><br />
                        University of Tirana | 2022 - Present | GPA: 8.7+
                      </p>
                    </div>

                    <div>
                      <h5 className="font-bold text-gray-900 dark:text-white mb-2">Experience</h5>
                      <p className="text-gray-700 dark:text-gray-300 mb-3">
                        <strong>Account Manager</strong> - Avalon Benefits Group<br />
                        2023 - 2025 | Tirana, Albania
                      </p>
                      <p className="text-gray-700 dark:text-gray-300">
                        <strong>Office Assistant</strong> - Lake Condos Big Sky<br />
                        2025 - Present | Big Sky, Montana, USA
                      </p>
                    </div>

                    <p className="text-sm text-gray-500 dark:text-gray-500 italic">
                      Download the full PDF for complete details, including all achievements and skills.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 text-center"
          >
            <p className="text-gray-600 dark:text-gray-400">
              Looking for a different format? Feel free to{" "}
              <a
                href="#contact"
                className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                contact me
              </a>{" "}
              with your request.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
