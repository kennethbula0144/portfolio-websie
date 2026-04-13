import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Heart } from 'lucide-react';

const LanguagesAndInterests = () => {
  const languages = [
    {
      name: 'English',
      level: 'Basic English',
      proficiency: 50,
    },
    {
      name: 'Tagalog',
      level: 'Native',
      proficiency: 100,
    },
    {
      name: 'Waray',
      level: 'Native',
      proficiency: 100,
    },
  ];

  const interests = [
    {
      icon: '💻',
      title: 'Programming & Software Development',
      description: 'Building robust, efficient, and scalable solutions',
    },
    {
      icon: '🌐',
      title: 'Web & App Development',
      description: 'Creating engaging and responsive user experiences',
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Crafting beautiful and intuitive interfaces',
    },
    {
      icon: '🍜',
      title: 'Filipino Food Vlogging',
      description: 'Exploring and sharing Filipino culinary culture',
    },
  ];

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

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Languages */}
          <motion.div variants={itemVariants} className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <Globe className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                Languages
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {languages.map((lang, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-800 dark:to-slate-700 p-8 rounded-xl"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {lang.name}
                    </h3>
                    <span className="text-sm font-bold bg-purple-600 text-white px-3 py-1 rounded-full">
                      {lang.level}
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="relative h-4 bg-gray-300 dark:bg-slate-600 rounded-full overflow-hidden">
                    <motion.div
                      className="absolute left-0 top-0 h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.proficiency}%` }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      viewport={{ once: true }}
                    />
                  </div>

                  <p className="text-right text-gray-600 dark:text-gray-400 text-sm mt-2 font-medium">
                    {lang.proficiency}%
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Interests */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-8">
              <Heart className="w-8 h-8 text-pink-600 dark:text-pink-400" />
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                Interests & Passions
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {interests.map((interest, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-xl border border-purple-200 dark:border-slate-700"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: '0 20px 40px rgba(167, 139, 250, 0.2)',
                  }}
                >
                  <div className="text-4xl mb-4">{interest.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {interest.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {interest.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LanguagesAndInterests;
