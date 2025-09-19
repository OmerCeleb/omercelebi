// src/components/common/Footer/Footer.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, MapPin, ArrowUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../../contexts/LanguageContext';

const Footer: React.FC = () => {
    const { language } = useLanguage();
    const navigate = useNavigate();
    const currentYear = new Date().getFullYear();

    // Simple static data - no complex types
    const footerData = {
        en: {
            description: 'Solution-oriented fullstack developer with expertise in both frontend and backend technologies. Based in Stockholm, available worldwide.',
            status: 'Available for freelance projects',
            location: 'Stockholm, Sweden',
            quickLinksTitle: 'Quick Links',
            connectTitle: 'Connect with me',
            copyright: 'All rights reserved.',
            madeWith: 'Made with love in Stockholm',
            backToTop: 'Back to top'
        },
        sv: {
            description: 'Lösningsorienterad fullstackutvecklare med expertis inom både frontend och backend teknologier. Baserad i Stockholm, tillgänglig världen över.',
            status: 'Tillgänglig för frilansuppdrag',
            location: 'Stockholm, Sverige',
            quickLinksTitle: 'Snabblänkar',
            connectTitle: 'Anslut med mig',
            copyright: 'Alla rättigheter förbehållna.',
            madeWith: 'Gjord med kärlek i Stockholm',
            backToTop: 'Tillbaka upp'
        }
    };

    const data = footerData[language];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleNavigation = (path: string) => {
        navigate(path);

        // Scroll to top on navigation
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };


    const socialLinks = [
        { icon: Github, href: 'https://github.com/OmerCeleb', label: 'GitHub' },
        { icon: Linkedin, href: 'https://www.linkedin.com/in/omercelebii/', label: 'LinkedIn' },
        { icon: Mail, href: 'mailto:omer534@outlook.com', label: 'Email' }
    ];

    const quickLinks = [
        { label: language === 'en' ? 'Home' : 'Hem', path: '/' },
        { label: language === 'en' ? 'About' : 'Om Mig', path: '/about' },
        { label: language === 'en' ? 'Experience' : 'Erfarenhet', path: '/experience' },
        { label: language === 'en' ? 'Projects' : 'Projekt', path: '/projects' },
        { label: language === 'en' ? 'Contact' : 'Kontakt', path: '/contact' }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.4, 0.25, 1]
            }
        }
    };

    return (
        <footer className="relative bg-gradient-to-br from-slate-50 via-neutral-50 to-gray-100 border-t border-neutral-200">

            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-[0.02]">
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: "60px 60px",
                    }}
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    className="max-w-6xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >

                    {/* Main Footer Content */}
                    <div className="py-16">
                        <div className="grid lg:grid-cols-3 gap-12">

                            {/* Brand Section */}
                            <motion.div variants={itemVariants} className="lg:col-span-1">
                                {/* PNG Logo - Centered */}
                                <div className="text-center mb-8">
                                    <img
                                        src="/images/logo.png"
                                        alt="Ömer Celebi Logo"
                                        className="h-32 w-auto object-contain mx-auto"
                                    />
                                </div>

                                <p className="text-neutral-600 mb-6 leading-relaxed">
                                    {data.description}
                                </p>

                                {/* Status */}
                                <div className="flex items-center space-x-2 mb-4">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-green-600 text-sm font-medium">{data.status}</span>
                                </div>

                                {/* Location */}
                                <div className="flex items-center space-x-2 text-neutral-500">
                                    <MapPin size={16} />
                                    <span className="text-sm">{data.location}</span>
                                </div>

                                {/* Contact Info */}
                                <div className="mt-6 space-y-2">
                                    <div className="flex items-center space-x-2 text-neutral-500 text-sm">
                                        <Mail size={14} />
                                        <a href="mailto:omer534@outlook.com" className="hover:text-red-600 transition-colors">
                                            omer534@outlook.com
                                        </a>
                                    </div>
                                    <div className="flex items-center space-x-2 text-neutral-500 text-sm">
                                        <span>📱</span>
                                        <a href="tel:+46739238707" className="hover:text-red-600 transition-colors">
                                            +46 73 923 87 07
                                        </a>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Quick Links */}
                            <motion.div variants={itemVariants}>
                                <h4 className="text-lg font-semibold text-black mb-6">{data.quickLinksTitle}</h4>
                                <div className="grid grid-cols-2 gap-3">
                                    {quickLinks.map((link, index) => (
                                        <motion.button
                                            key={index}
                                            onClick={() => handleNavigation(link.path)}
                                            className="text-neutral-600 hover:text-red-600 transition-colors duration-200 flex items-center group text-sm text-left"
                                            whileHover={{ x: 5 }}
                                            transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                        >
                                            <span>{link.label}</span>
                                        </motion.button>
                                    ))}
                                </div>

                                {/* Quick Contact */}
                                <div className="mt-8">
                                    <h4 className="text-lg font-semibold text-black mb-4">
                                        {language === 'en' ? 'Quick Contact' : 'Snabb Kontakt'}
                                    </h4>
                                    <div className="space-y-3">
                                        <motion.a
                                            href="mailto:omer534@outlook.com?subject=Project Inquiry&body=Hi Ömer,%0D%0A%0D%0AI'm interested in discussing a project with you."
                                            className="flex items-center space-x-2 text-neutral-600 hover:text-red-600 transition-colors text-sm"
                                            whileHover={{ x: 5 }}
                                        >
                                            <Mail size={14} />
                                            <span>{language === 'en' ? 'Send Email' : 'Skicka E-post'}</span>
                                        </motion.a>
                                        <motion.a
                                            href="https://wa.me/46739238707"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center space-x-2 text-neutral-600 hover:text-green-600 transition-colors text-sm"
                                            whileHover={{ x: 5 }}
                                        >
                                            <span>📱</span>
                                            <span>WhatsApp</span>
                                        </motion.a>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Connect Section */}
                            <motion.div variants={itemVariants}>
                                <h4 className="text-lg font-semibold text-black mb-6">{data.connectTitle}</h4>

                                <div className="space-y-4 mb-8">
                                    {socialLinks.map((social, index) => {
                                        const IconComponent = social.icon;
                                        return (
                                            <motion.a
                                                key={index}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center space-x-3 text-neutral-600 hover:text-red-600 transition-all duration-200 group"
                                                whileHover={{ x: 5 }}
                                                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                            >
                                                <div className="w-10 h-10 bg-white border border-neutral-200 rounded-lg flex items-center justify-center group-hover:border-red-200 group-hover:bg-red-50 transition-colors shadow-sm">
                                                    <IconComponent size={16} />
                                                </div>
                                                <span className="text-sm font-medium">{social.label}</span>
                                            </motion.a>
                                        );
                                    })}
                                </div>

                                {/* Scroll to Top Button */}
                                <motion.button
                                    onClick={scrollToTop}
                                    className="flex items-center space-x-2 text-neutral-600 hover:text-red-600 transition-colors duration-200 group"
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <div className="w-10 h-10 bg-white border border-neutral-200 rounded-lg flex items-center justify-center group-hover:border-red-200 group-hover:bg-red-50 transition-colors shadow-sm">
                                        <ArrowUp size={16} />
                                    </div>
                                    <span className="text-sm font-medium">{data.backToTop}</span>
                                </motion.button>

                            </motion.div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <motion.div
                        variants={itemVariants}
                        className="border-t border-neutral-200 py-8"
                    >
                        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">

                            {/* Copyright */}
                            <div className="text-neutral-500 text-sm text-center md:text-left">
                                © {currentYear} Ömer Celebi. {data.copyright}
                            </div>

                            {/* Made with Love */}
                            <div className="flex items-center space-x-2 text-neutral-500 text-sm">
                                <span>{data.madeWith.split(' ').slice(0, 2).join(' ')}</span>
                                <motion.div
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    <Heart size={14} className="text-red-500 fill-current" />
                                </motion.div>
                                <span>{data.madeWith.split(' ').slice(2).join(' ')}</span>
                            </div>

                            {/* Tech Stack */}
                            <div className="flex items-center space-x-1 text-neutral-400 text-xs">
                                {['React', 'TypeScript', 'Java', 'Node.js'].map((tech, index) => (
                                    <React.Fragment key={tech}>
                                        <span className="hover:text-red-500 transition-colors cursor-default">
                                            {tech}
                                        </span>
                                        {index < 3 && <span>•</span>}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                </motion.div>
            </div>

            {/* Subtle gradient line at top */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-200 to-transparent"></div>
        </footer>
    );
};

export default Footer;