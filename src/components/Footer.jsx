import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      url: 'https://github.com/kennethbula0144',
      label: 'GitHub',
    },
    {
      icon: ExternalLink,
      url: 'https://kennethbula-portfolio.netlify.app',
      label: 'Portfolio',
    },
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-100">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Kenneth Bula</h3>
            <p className="text-gray-400 leading-relaxed">
              4th Year Computer Engineering Student passionate about web development and
              creating innovative solutions.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Connect</h4>
            <div className="space-y-3">
              <a
                href="mailto:bulakenneth21@gmail.com"
                className="block text-gray-400 hover:text-purple-400 transition-colors"
              >
                bulakenneth21@gmail.com
              </a>
              <a
                href="tel:+639157476548"
                className="block text-gray-400 hover:text-purple-400 transition-colors"
              >
                +63 915 747 6548
              </a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-purple-600 to-transparent mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <motion.p
            className="text-gray-400 flex items-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span>©</span>
            <span>{currentYear}</span>
            <span>Kenneth Bula</span>
            <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />
            <span>All Rights Reserved</span>
          </motion.p>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-purple-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Made with notice */}
      <motion.div
        className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 border-t border-purple-600/20 py-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-400">
            Built with <span className="text-pink-500">♥</span> using React, Tailwind CSS & Framer Motion
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
