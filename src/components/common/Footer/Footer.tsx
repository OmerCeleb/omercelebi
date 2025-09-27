// src/components/common/Footer/Footer.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../../contexts/LanguageContext';

const Footer: React.FC = () => {
    const { language } = useLanguage();
    const navigate = useNavigate();
    const currentYear = new Date().getFullYear();

    const data = {
        en: {
            status: 'Available for projects',
            copyright: 'All rights reserved.',
            backToTop: 'Back to top'
        },
        sv: {
            status: 'Tillgänglig för projekt',
            copyright: 'Alla rättigheter förbehållna.',
            backToTop: 'Tillbaka upp'
        }
    };

    const t = data[language];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleNavigation = (path: string) => {
        navigate(path);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const socialLinks = [
        { icon: Github, href: 'https://github.com/OmerCeleb', label: 'GitHub' },
        { icon: Linkedin, href: 'https://www.linkedin.com/in/omercelebii/', label: 'LinkedIn' },
        { icon: Mail, href: 'mailto:omer534@outlook.com', label: 'Email' }
    ];

    const quickLinks = [
        { label: language === 'en' ? 'About' : 'Om Mig', path: '/about' },
        { label: language === 'en' ? 'Experience' : 'Erfarenhet', path: '/experience' },
        { label: language === 'en' ? 'Projects' : 'Projekt', path: '/projects' },
        { label: language === 'en' ? 'Contact' : 'Kontakt', path: '/contact' }
    ];

    return (
        <footer className="relative bg-neutral-50 border-t border-neutral-200/60">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">

                    {/* Main Content */}
                    <div className="py-12">
                        <div className="text-center">

                            {/* Logo */}
                            <motion.div
                                className="mb-8"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <img
                                    src="/images/logo.png"
                                    alt="Ömer Celebi"
                                    className="h-16 w-auto mx-auto mb-4"
                                />
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    Ömer Celebi
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    Fullstack Developer
                                </p>
                            </motion.div>

                            {/* Status */}
                            <motion.div
                                className="mb-8"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                            >
                                <div className="flex items-center justify-center space-x-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-green-600 font-medium text-sm">
                                        {t.status}
                                    </span>
                                </div>
                            </motion.div>

                            {/* Navigation Links */}
                            <motion.div
                                className="mb-8"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <div className="flex flex-wrap justify-center gap-6 text-sm">
                                    {quickLinks.map((link, index) => (
                                        <motion.button
                                            key={index}
                                            onClick={() => handleNavigation(link.path)}
                                            className="text-gray-600 hover:text-red-600 transition-colors duration-200 font-medium"
                                            whileHover={{ y: -2 }}
                                            transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                        >
                                            {link.label}
                                        </motion.button>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Social Links */}
                            <motion.div
                                className="mb-8"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            >
                                <div className="flex justify-center space-x-4">
                                    {socialLinks.map((social, index) => {
                                        const IconComponent = social.icon;
                                        return (
                                            <motion.a
                                                key={index}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 bg-white border border-neutral-200 rounded-full flex items-center justify-center text-gray-600 hover:text-red-600 hover:border-red-200 hover:bg-red-50 transition-all duration-200 shadow-sm"
                                                whileHover={{ scale: 1.1, y: -2 }}
                                                whileTap={{ scale: 0.95 }}
                                                aria-label={social.label}
                                            >
                                                <IconComponent size={16} />
                                            </motion.a>
                                        );
                                    })}
                                </div>
                            </motion.div>

                            {/* Back to Top */}
                            <motion.div
                                className="mb-8"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                <motion.button
                                    onClick={scrollToTop}
                                    className="inline-flex items-center space-x-2 px-4 py-2 bg-neutral-100 hover:bg-neutral-200 text-gray-700 rounded-full transition-colors duration-200 text-sm font-medium"
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <ArrowUp size={14} />
                                    <span>{t.backToTop}</span>
                                </motion.button>
                            </motion.div>

                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <motion.div
                        className="border-t border-neutral-200/60 py-6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0 text-sm text-gray-500">

                            {/* Copyright */}
                            <div>
                                © {currentYear} Ömer Celebi. {t.copyright}
                            </div>

                            {/* Contact Info */}
                            <div className="flex items-center space-x-4">
                                <a
                                    href="mailto:omer534@outlook.com"
                                    className="hover:text-red-600 transition-colors"
                                >
                                    omer534@outlook.com
                                </a>
                                <span className="text-gray-300">•</span>
                                <span>Stockholm, Sweden</span>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Subtle gradient line at top */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-200/50 to-transparent"></div>
        </footer>
    );
};

export default Footer;