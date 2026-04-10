import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Database,
  Palette,
  Zap,
  Brain,
  Users,
} from 'lucide-react';

const Skills = () => {
  const skillsData = [
    {
      category: 'Core Skills',
      icon: Brain,
      skills: [
        'Visualization',
        'Problem-solving',
        'Communication',
        'Organization',
        'Research',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      category: 'Web Development',
      icon: Code2,
      skills: [
        'HTML5',
        'CSS3',
        'JavaScript (ES6+)',
        'React',
        'Tailwind CSS',
        'Responsive Design',
      ],
      color: 'from-purple-500 to-pink-500',
    },
    {
      category: 'Backend & Database',
      icon: Database,
      skills: [
        'MySQL',
        'Supabase',
        'Authentication',
        'Real-Time Data',
        'RESTful APIs',
        'Database Design',
      ],
      color: 'from-green-500 to-emerald-500',
    },
    {
      category: 'Tools & Platforms',
      icon: Zap,
      skills: [
        'Git & GitHub',
        'Netlify',
        'Render',
        'Google Workspace',
        'VS Code',
        'Postman',
      ],
      color: 'from-orange-500 to-red-500',
    },
    {
      category: 'UI/UX & Design',
      icon: Palette,
      skills: [
        'Figma',
        'Canva',
        'Wireframing',
        'Prototyping',
        'Design Thinking',
        'User Research',
      ],
      color: 'from-pink-500 to-rose-500',
    },
    {
      category: 'Productivity & Management',
      icon: Users,
      skills: [
        'Trello',
        'Notion',
        'Task Management',
        'Agile Methodology',
        'Time Management',
        'Team Collaboration',
      ],
      color: 'from-indigo-500 to-purple-500',
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
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-slate-800 dark:to-slate-900"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & Expertise
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              A comprehensive overview of my technical and soft skills across various domains
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mx-auto mt-6" />
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillsData.map((skillGroup, index) => {
              const Icon = skillGroup.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-white dark:bg-slate-800 rounded-xl p-8 h-full shadow-lg hover:shadow-2xl transition-shadow border border-gray-100 dark:border-slate-700">
                    {/* Icon & Title */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-12 h-12 bg-gradient-to-br ${skillGroup.color} rounded-lg flex items-center justify-center`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {skillGroup.category}
                      </h3>
                    </div>

                    {/* Skills Tags */}
                    <div className="space-y-3">
                      {skillGroup.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: skillIndex * 0.05 }}
                          className="flex items-center gap-3"
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${skillGroup.color}`} />
                          <span className="text-gray-700 dark:text-gray-300">
                            {skill}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Decorative Background */}
                    <div
                      className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${skillGroup.color} rounded-full opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
