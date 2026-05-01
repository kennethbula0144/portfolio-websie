import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Mail, ExternalLink, Download } from 'lucide-react';

// Facebook Icon Component
const Facebook = ({ className }) => (
  <svg 
    className={className}
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z"/>
  </svg>
);

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
    },
  };

  // Handle CV Download
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Kenneth Bula CV.pdf';
    link.download = 'Kenneth Bula CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-purple-50 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10"
        animate={{ x: [0, 50, 0], y: [0, 50, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10"
        animate={{ x: [0, -50, 0], y: [0, -50, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="max-w-6xl mx-auto z-10 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-8 flex justify-center lg:justify-start">
              <span className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                👋 Welcome to my portfolio
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-purple-600 to-gray-900 dark:from-white dark:via-purple-300 dark:to-white bg-clip-text text-transparent mb-6 leading-tight"
            >
              BULA KENNETH COLIMA
            </motion.h1>

            {/* Title */}
            <motion.p
              variants={itemVariants}
              className="text-2xl sm:text-3xl text-gray-700 dark:text-gray-300 font-light mb-6"
            >
              Incoming 4th Year Computer Engineering Student
            </motion.p>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-xl mb-12 leading-relaxed"
            >
              Motivated and detail-oriented developer seeking internship opportunities to apply
              academic knowledge in real-world projects. Passionate about web development, system
              design, and creating innovative solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 flex-wrap"
            >
              <motion.a
                href="#projects"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-purple-500/50 transition-all"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(167, 139, 250, 0.3)' }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
              <motion.a
                href="#contact"
                className="px-8 py-4 bg-white dark:bg-slate-800 text-gray-900 dark:text-white font-semibold rounded-lg border-2 border-gray-200 dark:border-slate-600 hover:border-purple-600 dark:hover:border-purple-400 hover:text-purple-600 dark:hover:text-purple-400 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
              <motion.button
                onClick={handleDownloadCV}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-blue-500/50 transition-all flex items-center gap-2 justify-center"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)' }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
                Download CV
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start gap-6"
            >
              <motion.a
                href="https://github.com/kennethbula0144"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-200 dark:bg-slate-700 hover:bg-purple-600 dark:hover:bg-purple-600 text-gray-900 dark:text-white hover:text-white transition-all"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="mailto:bulakenneth21@gmail.com"
                className="p-3 rounded-full bg-gray-200 dark:bg-slate-700 hover:bg-purple-600 dark:hover:bg-purple-600 text-gray-900 dark:text-white hover:text-white transition-all"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://www.facebook.com/kenn.bula.2025"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-200 dark:bg-slate-700 hover:bg-purple-600 dark:hover:bg-purple-600 text-gray-900 dark:text-white hover:text-white transition-all"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Facebook className="w-6 h-6" />
              </motion.a>
            </motion.div>
          </div>

          {/* Right Content - Profile Image */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px]"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              {/* Glowing background circles */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-30"
                animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              />

              {/* Profile image container */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 rounded-3xl p-1 overflow-hidden shadow-2xl">
                <div className="w-full h-full bg-white dark:bg-slate-900 rounded-3xl flex items-center justify-center overflow-hidden">
                  {/* Profile image */}
                  <img
                    src="/IMG_20260407_140650.png"
                    alt="Kenneth Bula - Profile Picture"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to emoji if image fails to load
                      e.target.style.display = 'none';
                    }}
                  />
                  {/* Fallback avatar - visible when image is not loaded */}

                </div>
              </div>

              {/* Top right badge */}
              <motion.div
                className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full font-bold shadow-lg flex items-center gap-2"
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.5, type: 'spring' }}
              >
                <span>4th Year</span>
              </motion.div>

              {/* Bottom left badge */}
              <motion.div
                className="absolute -bottom-4 -left-4 bg-white dark:bg-slate-800 text-gray-900 dark:text-white px-4 py-2 rounded-full font-bold shadow-lg border-2 border-purple-600"
                initial={{ scale: 0, rotate: 20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.6, type: 'spring' }}
              >
                <span>Computer Engineering Student</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="flex justify-center mt-16"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-purple-600 dark:text-purple-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
