// src/components/common/Header/Header.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Briefcase, FolderOpen, Mail } from 'lucide-react';
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

    const getCurrentPage = () => {
        const currentPath = location.pathname;
        const currentNav = navItems.find(item => item.path === currentPath);
        return currentNav?.key || 'home';
    };

    const handleNavClick = (path: string) => {
        navigate(path);
        setIsMenuOpen(false);
    };

    const currentPage = getCurrentPage();

    return (
        <>
            <motion.header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    isScrolled
                        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50'
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
                            className="flex items-center space-x-3 cursor-pointer z-60"
                            onClick={() => handleNavClick('/')}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">Ö</span>
                            </div>
                            <div className="hidden sm:block">
                                <h1 className="text-xl font-bold text-gray-900">Ömer</h1>
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
                                className="md:hidden p-2 text-gray-700 hover:text-red-600 transition-colors z-60 relative"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <AnimatePresence mode="wait">
                                    {isMenuOpen ? (
                                        <motion.div
                                            key="close"
                                            initial={{ rotate: -90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: 90, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <X size={24} />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="menu"
                                            initial={{ rotate: 90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: -90, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Menu size={24} />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
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
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMenuOpen(false)}
                        />

                        {/* Mobile Menu */}
                        <motion.div
                            className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 md:hidden"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            {/* Menu Header */}
                            <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-red-50 to-red-100">
                                <div className="flex items-center space-x-3 mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center shadow-lg">
                                        <span className="text-white font-bold text-xl">Ö</span>
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-bold text-gray-900">Ömer Celebi</h2>
                                        <p className="text-sm text-red-600">Fullstack Developer</p>
                                    </div>
                                </div>

                                {/* Status */}
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-sm text-gray-600">
                                        {language === 'en' ? 'Available for projects' : 'Tillgänglig för projekt'}
                                    </span>
                                </div>
                            </div>

                            {/* Navigation Items */}
                            <nav className="p-6 space-y-2">
                                {navItems.map((item, index) => {
                                    const IconComponent = item.icon;
                                    const isActive = currentPage === item.key;

                                    return (
                                        <motion.button
                                            key={item.key}
                                            className={`w-full flex items-center space-x-4 p-4 rounded-xl text-left transition-all duration-200 group ${
                                                isActive
                                                    ? 'text-red-600 bg-red-50 border-l-4 border-red-600 shadow-sm'
                                                    : 'text-gray-700 hover:text-red-600 hover:bg-gray-50'
                                            }`}
                                            onClick={() => handleNavClick(item.path)}
                                            initial={{ opacity: 0, x: 50 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            whileHover={{ x: 5 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <div className={`p-2 rounded-lg transition-colors ${
                                                isActive
                                                    ? 'bg-red-100 text-red-600'
                                                    : 'bg-gray-100 text-gray-600 group-hover:bg-red-100 group-hover:text-red-600'
                                            }`}>
                                                <IconComponent size={18} />
                                            </div>
                                            <div>
                                                <span className="font-medium">{item.label}</span>
                                                {isActive && (
                                                    <div className="text-xs text-red-500 mt-0.5">
                                                        {language === 'en' ? 'Current page' : 'Nuvarande sida'}
                                                    </div>
                                                )}
                                            </div>
                                        </motion.button>
                                    );
                                })}
                            </nav>

                            {/* Footer */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-100 bg-gray-50">
                                <div className="text-center">
                                    <p className="text-sm text-gray-500 mb-2">
                                        {language === 'en' ? 'Get in touch' : 'Kontakta mig'}
                                    </p>
                                    <div className="flex justify-center space-x-4">
                                        <motion.a
                                            href="mailto:omer534@outlook.com"
                                            className="p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-gray-600 hover:text-red-600"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <Mail size={16} />
                                        </motion.a>
                                        <motion.a
                                            href="https://github.com/OmerCeleb"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-gray-600 hover:text-red-600"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                                            </svg>
                                        </motion.a>
                                        <motion.a
                                            href="https://www.linkedin.com/in/omercelebii/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-gray-600 hover:text-red-600"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"/>
                                            </svg>
                                        </motion.a>
                                    </div>
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