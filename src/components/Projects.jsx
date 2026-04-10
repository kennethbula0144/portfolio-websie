import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Pasabuy BES',
      subtitle: 'Multi-Role E-Commerce Web App',
      description:
        'A comprehensive marketplace platform featuring three user roles: clients for shopping, runners for delivery management, and store owners for selling. The app includes product browsing, real-time ordering systems, and personalized dashboards for each role.',
      tech: ['React', 'Supabase', 'Tailwind CSS', 'Real-Time Database'],
      image: '🛍️',
      link: 'https://pasabuy-bes.netlify.app',
      github: '#',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      title: 'E-Barangay System',
      subtitle: 'Community Management Platform',
      description:
        'A digital platform for barangay residents to request certificates online, manage incidents, view announcements, and maintain a residents database. Streamlines administrative processes and improves community engagement.',
      tech: ['React', 'Node.js', 'MySQL', 'Authentication'],
      image: '🏘️',
      link: 'https://ebarangay.onrender.com',
      github: '#',
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 3,
      title: 'Filipino Food Vlog',
      subtitle: 'Food & Travel Exploration App',
      description:
        'A dedicated platform showcasing Filipino cuisine, cooking processes, and cultural stories. Features content in Taglish, combining travel vlogging with food exploration to celebrate Filipino culinary heritage.',
      tech: ['React', 'Markdown', 'Firebase', 'Video Integration'],
      image: '🍜',
      link: 'https://filipinofoodvlog.netlify.app',
      github: '#',
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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="projects"
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
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl">
              Showcasing my best work and technical achievements across different domains
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mt-6" />
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group"
              >
                <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100 dark:border-slate-700 h-full flex flex-col">
                  {/* Project Header with Image */}
                  <div className={`relative h-48 bg-gradient-to-br ${project.color} overflow-hidden`}>
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center text-8xl"
                      initial={{ scale: 1, rotate: 0 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.image}
                    </motion.div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </div>

                  {/* Project Content */}
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-purple-600 dark:text-purple-400 font-semibold mb-4">
                      {project.subtitle}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 flex-1">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, index) => (
                        <motion.span
                          key={index}
                          className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm rounded-full font-medium"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Project Links */}
                    <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-slate-700">
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Want to see more of my work?
            </p>
            <motion.a
              href="https://github.com/kennethbula0144"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Code2 className="w-5 h-5" />
              Visit My GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
