import React from 'react';
import { motion } from 'framer-motion';
import { Book, MapPin, Calendar } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      level: 'Bachelor of Science in Computer Engineering',
      institution: 'Eastern Samar State University - Main Campus',
      period: '2023 – 2027',
      description: 'Currently pursuing degree with focus on system design, software development, and web technologies.',
      icon: '🎓',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      level: 'Secondary Education',
      institution: 'Dolores National High School',
      period: '2017 – 2023',
      description: 'Completed secondary education with strong performance in STEM subjects.',
      icon: '📚',
      color: 'from-purple-500 to-pink-500',
    },
    {
      level: 'Primary Education',
      institution: 'Rizal Elementary School',
      period: '2011 – 2017',
      description: 'Completed primary education with a foundation in academics and personal development.',
      icon: '🌟',
      color: 'from-orange-500 to-red-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="education"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-slate-800 dark:to-slate-900"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Education
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              My academic journey and educational background
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mt-6" />
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-600 via-pink-500 to-purple-600 hidden md:block" />

            {/* Education Items */}
            <div className="space-y-12">
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <motion.div
                    className="absolute left-0 md:left-0 w-16 h-16 bg-white dark:bg-slate-900 rounded-full border-4 border-purple-600 flex items-center justify-center text-2xl hidden md:flex"
                    style={{ marginLeft: '0px' }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {edu.icon}
                  </motion.div>

                  {/* Content */}
                  <div className="md:ml-32 bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-slate-700">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {edu.level}
                        </h3>
                        <p className="text-purple-600 dark:text-purple-400 font-semibold mt-2">
                          {edu.institution}
                        </p>
                      </div>
                      <motion.div
                        className={`hidden sm:block w-12 h-12 rounded-full bg-gradient-to-br ${edu.color} flex items-center justify-center text-xl`}
                      >
                        {edu.icon}
                      </motion.div>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      {edu.description}
                    </p>

                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium">{edu.period}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
