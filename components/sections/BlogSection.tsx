"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Clock, ArrowRight } from "lucide-react";

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  comingSoon?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    title: "My Journey: From Albania to the US and Back",
    excerpt: "Reflections on cultural exchange, personal growth, and the transformative experience of studying abroad through the KL-YES program.",
    date: "Coming Soon",
    readTime: "5 min read",
    category: "Personal",
    comingSoon: true,
  },
  {
    title: "Bridging Business and Technology: A Student's Perspective",
    excerpt: "How combining business acumen with technical skills creates unique opportunities in today's digital economy.",
    date: "Coming Soon",
    readTime: "7 min read",
    category: "Career",
    comingSoon: true,
  },
  {
    title: "Data-Driven Decision Making in Account Management",
    excerpt: "Practical insights on leveraging data analytics to improve client satisfaction and optimize account performance.",
    date: "Coming Soon",
    readTime: "6 min read",
    category: "Business",
    comingSoon: true,
  },
];

export function BlogSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="blog"
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
            Blog & Insights
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Sharing thoughts on technology, business, and personal growth. Articles coming soon!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden hover:shadow-xl transition-all group"
            >
              {/* Category Banner */}
              <div className="h-2 bg-gradient-to-r from-blue-600 to-indigo-600"></div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                  {post.comingSoon && (
                    <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 text-xs font-semibold rounded-full">
                      Coming Soon
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-500 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <button
                  disabled={post.comingSoon}
                  className={`flex items-center gap-2 font-medium transition-colors ${
                    post.comingSoon
                      ? "text-gray-400 dark:text-gray-600 cursor-not-allowed"
                      : "text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                  }`}
                >
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Subscribe Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 max-w-2xl mx-auto bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Stay Updated
          </h3>
          <p className="text-blue-100 mb-6">
            Get notified when new articles are published. Subscribe to my newsletter!
          </p>
          <p className="text-blue-200 text-sm">
            Newsletter coming soon!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
