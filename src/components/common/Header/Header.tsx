// src/components/common/Header/Header.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Briefcase, FolderOpen, Mail, ExternalLink } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../../../contexts/LanguageContext';
import { navigationData } from '../../../data/navigationData';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { language, setLanguage } = useLanguage();
    const navigate = useNavigate();
    const location = useLocation();

    // Get navigation data for current language
    const navData = navigationData[language];

    const navItems = [
        { key: 'home', label: navData.home, icon: Home, path: '/' },
        { key: 'about', label: navData.about, icon: User, path: '/about' },
        { key: 'experience', label: navData.experience, icon: Briefcase, path: '/experience' },
        { key: 'projects', label: navData.projects, icon: FolderOpen, path: '/projects' },
        { key: 'contact', label: navData.contact, icon: Mail, path: '/contact' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const getCurrentPage = () => {
        const currentPath = location.pathname;
        const currentNav = navItems.find(item => item.path === currentPath);
        return currentNav?.key || 'home';
    };

    const handleNavClick = (path: string) => {
        navigate(path);
        setIsMenuOpen(false);

        // Immediately scroll to top when navigating
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    };

    const currentPage = getCurrentPage();

    // Animation variants
    const menuVariants = {
        closed: {
            x: '100%',
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        },
        open: {
            x: 0,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        }
    };

    const backdropVariants = {
        closed: {
            opacity: 0,
            transition: {
                duration: 0.2
            }
        },
        open: {
            opacity: 1,
            transition: {
                duration: 0.3
            }
        }
    };

    const itemVariants = {
        closed: {
            x: 50,
            opacity: 0
        },
        open: (i: number) => ({
            x: 0,
            opacity: 1,
            transition: {
                delay: 0.1 + i * 0.05,
                duration: 0.3,
                ease: "easeOut"
            }
        })
    };

    return (
        <>
            <motion.header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    isScrolled
                        ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200/50'
                        : 'bg-white/80 backdrop-blur-sm'
                }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="container mx-auto px-6">
                    <div className="flex items-center justify-between h-16 md:h-20">

                        {/* Logo/Brand */}
                        <motion.div
                            className="flex items-center space-x-3 cursor-pointer z-[60]"
                            onClick={() => handleNavClick('/')}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <img
                                src="/images/logo.png"
                                alt="Ömer Celebi Logo"
                                className="h-10 w-auto object-contain"
                            />
                            <div className="hidden sm:block">
                                <h1 className="text-xl font-bold text-gray-900">Ömer Celebi</h1>
                                <p className="text-xs text-gray-500">Fullstack Developer</p>
                            </div>
                        </motion.div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-1">
                            {navItems.map((item) => {
                                const IconComponent = item.icon;
                                const isActive = currentPage === item.key;

                                return (
                                    <motion.button
                                        key={item.key}
                                        className={`relative flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                            isActive
                                                ? 'text-red-600 bg-red-50'
                                                : 'text-gray-700 hover:text-red-600 hover:bg-gray-50'
                                        }`}
                                        onClick={() => handleNavClick(item.path)}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <IconComponent size={16} />
                                        <span>{item.label}</span>

                                        {isActive && (
                                            <motion.div
                                                className="absolute bottom-0 left-1/2 w-1 h-1 bg-red-600 rounded-full"
                                                layoutId="activeIndicator"
                                                initial={false}
                                                style={{ x: '-50%' }}
                                            />
                                        )}
                                    </motion.button>
                                );
                            })}
                        </nav>

                        {/* Language Toggle & Mobile Menu */}
                        <div className="flex items-center space-x-4">

                            {/* Language Toggle */}
                            <div className="flex items-center bg-gray-100 rounded-full p-1">
                                <motion.button
                                    className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 ${
                                        language === 'en'
                                            ? 'bg-red-600 text-white shadow-md'
                                            : 'text-gray-600 hover:text-gray-900'
                                    }`}
                                    onClick={() => setLanguage('en')}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    EN
                                </motion.button>

                                <motion.button
                                    className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 ${
                                        language === 'sv'
                                            ? 'bg-red-600 text-white shadow-md'
                                            : 'text-gray-600 hover:text-gray-900'
                                    }`}
                                    onClick={() => setLanguage('sv')}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    SV
                                </motion.button>
                            </div>

                            {/* Mobile Menu Toggle */}
                            <motion.button
                                className="md:hidden relative z-[60] p-2 text-gray-700 hover:text-red-600 transition-colors"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <div className="w-6 h-6 relative">
                                    <motion.span
                                        className="absolute top-1 left-0 w-6 h-0.5 bg-current rounded-full"
                                        animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    />
                                    <motion.span
                                        className="absolute top-3 left-0 w-6 h-0.5 bg-current rounded-full"
                                        animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    />
                                    <motion.span
                                        className="absolute top-5 left-0 w-6 h-0.5 bg-current rounded-full"
                                        animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    />
                                </div>
                            </motion.button>
                        </div>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Navigation Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            className="fixed inset-0 bg-black/40 backdrop-blur-md z-40 md:hidden"
                            variants={backdropVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            onClick={() => setIsMenuOpen(false)}
                        />

                        {/* Mobile Menu - Enhanced with proper scrolling */}
                        <motion.div
                            className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-50 md:hidden shadow-2xl flex flex-col"
                            variants={menuVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                        >
                            {/* Menu Header - Fixed */}
                            <div className="flex-shrink-0 h-32 bg-gradient-to-br from-slate-50 via-gray-50 to-stone-50 border-b border-gray-100/50 relative">

                                {/* Subtle Decorative Elements */}
                                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-blue-50/30 to-transparent rounded-full -translate-y-20 translate-x-20" />
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-stone-50/40 to-transparent rounded-full translate-y-16 -translate-x-16" />

                                <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                                    <div className="flex items-center space-x-3">
                                        <img
                                            src="/images/logo.png"
                                            alt="Ömer Celebi Logo"
                                            className="h-12 w-auto object-contain"
                                        />
                                        <div>
                                            <h2 className="text-xl font-semibold text-gray-900">Ömer Celebi</h2>
                                            <p className="text-gray-600 text-sm">Fullstack Developer</p>
                                        </div>
                                    </div>

                                    {/* Status Indicator */}
                                    <div className="flex items-center space-x-2 mt-4">
                                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-sm" />
                                        <span className="text-gray-700 text-xs font-medium">
                                            {language === 'en' ? 'Available for projects' : 'Tillgänglig för projekt'}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Navigation Items - Scrollable */}
                            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-2">
                                {navItems.map((item, index) => {
                                    const IconComponent = item.icon;
                                    const isActive = currentPage === item.key;

                                    return (
                                        <motion.div
                                            key={item.key}
                                            custom={index}
                                            variants={itemVariants}
                                            initial="closed"
                                            animate="open"
                                            className={`group relative overflow-hidden rounded-2xl transition-all duration-500 ${
                                                isActive ? 'bg-slate-50 border border-slate-200/50' : 'hover:bg-gray-50/80 border border-transparent'
                                            }`}
                                            onClick={() => handleNavClick(item.path)}
                                        >
                                            <div className={`flex items-center space-x-4 p-4 cursor-pointer relative z-10 ${
                                                isActive ? 'text-red-600' : 'text-gray-700'
                                            }`}>
                                                <div className={`p-2 rounded-lg transition-colors ${
                                                    isActive
                                                        ? 'bg-red-100 text-red-600'
                                                        : 'bg-gray-100 text-gray-600 group-hover:bg-red-100 group-hover:text-red-600'
                                                }`}>
                                                    <IconComponent size={20} />
                                                </div>
                                                <div>
                                                    <span className="font-medium text-base">{item.label}</span>
                                                    {isActive && (
                                                        <div className="text-xs text-red-500 mt-0.5">
                                                            {language === 'en' ? 'Current page' : 'Nuvarande sida'}
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="ml-auto">
                                                    <motion.div
                                                        className="text-gray-400"
                                                        whileHover={{ x: 5 }}
                                                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                                    >
                                                        <ExternalLink size={16} />
                                                    </motion.div>
                                                </div>
                                            </div>

                                            {/* Active indicator */}
                                            {isActive && (
                                                <motion.div
                                                    className="absolute left-0 top-0 bottom-0 w-1 bg-red-600 rounded-r"
                                                    layoutId="mobileActiveIndicator"
                                                    initial={false}
                                                />
                                            )}
                                        </motion.div>
                                    );
                                })}
                            </div>

                            {/* Footer Section - Fixed */}
                            <div className="flex-shrink-0 px-6 py-6 border-t border-gray-100">
                                <div className="space-y-4">
                                    {/* Contact Info */}
                                    <div className="text-center">
                                        <p className="text-sm font-medium text-gray-900 mb-2">
                                            {language === 'en' ? 'Let\'s connect' : 'Låt oss ansluta'}
                                        </p>
                                        <div className="flex justify-center space-x-4">
                                            <motion.a
                                                href="mailto:omer534@outlook.com"
                                                className="p-3 bg-gray-50 rounded-lg hover:bg-red-50 transition-colors text-gray-600 hover:text-red-600"
                                                whileHover={{ scale: 1.1, y: -2 }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                <Mail size={18} />
                                            </motion.a>
                                            <motion.a
                                                href="https://github.com/OmerCeleb"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-3 bg-gray-50 rounded-lg hover:bg-red-50 transition-colors text-gray-600 hover:text-red-600"
                                                whileHover={{ scale: 1.1, y: -2 }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                                                </svg>
                                            </motion.a>
                                            <motion.a
                                                href="https://www.linkedin.com/in/omercelebii/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-3 bg-gray-50 rounded-lg hover:bg-red-50 transition-colors text-gray-600 hover:text-red-600"
                                                whileHover={{ scale: 1.1, y: -2 }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                                </svg>
                                            </motion.a>
                                        </div>
                                    </div>

                                    {/* Close Button */}
                                    <motion.button
                                        className="w-full py-3 px-4 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
                                        onClick={() => setIsMenuOpen(false)}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        {language === 'en' ? 'Close Menu' : 'Stäng Meny'}
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;