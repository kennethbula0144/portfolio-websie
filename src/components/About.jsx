import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const strengths = [
    'Problem-solving & Critical Thinking',
    'System Design & Architecture',
    'Adaptability & Quick Learning',
    'Communication & Teamwork',
    'Attention to Detail',
    'Research & Innovation',
  ];

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Professional Summary
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  I'm a motivated and detail-oriented currently incoming 4th-year Computer Engineering student at Eastern
                  Samar State University, actively seeking internship opportunities to apply my academic
                  knowledge in real-world projects. With a passion for web development and system design,
                  I'm committed to leveraging my technical skills and problem-solving abilities to create
                  innovative solutions.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  I thrive in collaborative environments and continuously seek opportunities to expand my
                  technical expertise. My goal is to contribute meaningfully to projects while growing as
                  a professional in the tech industry.
                </p>
              </div>

              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <motion.div
                  className="bg-purple-50 dark:bg-slate-800 p-4 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  <p className="text-sm text-gray-600 dark:text-gray-400">Birthday</p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">
                    March 14, 2005
                  </p>
                </motion.div>
                <motion.div
                  className="bg-purple-50 dark:bg-slate-800 p-4 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  <p className="text-sm text-gray-600 dark:text-gray-400">Country</p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">
                    Philippines
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Content - Strengths */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
                Key Strengths
              </h3>
              <div className="space-y-4">
                {strengths.map((strength, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CheckCircle className="w-6 h-6 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {strength}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
