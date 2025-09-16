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
                        className="flex items-center space-x-3 cursor-pointer"
                        onClick={() => handleNavClick('/')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-lg">Ö</span>
                        </div>
                        <div className="hidden sm:block">
                            <h1 className="text-xl font-bold text-gray-900">Ömer</h1>
                            <p className="text-xs text-gray-500">Frontend Developer</p>
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
                            className="md:hidden p-2 text-gray-700 hover:text-red-600 transition-colors"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <nav className="py-4 space-y-1">
                                {navItems.map((item) => {
                                    const IconComponent = item.icon;
                                    const isActive = currentPage === item.key;

                                    return (
                                        <motion.button
                                            key={item.key}
                                            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                                                isActive
                                                    ? 'text-red-600 bg-red-50 border-l-4 border-red-600'
                                                    : 'text-gray-700 hover:text-red-600 hover:bg-gray-50'
                                            }`}
                                            onClick={() => handleNavClick(item.path)}
                                            whileHover={{ x: 5 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <IconComponent size={18} />
                                            <span className="font-medium">{item.label}</span>
                                        </motion.button>
                                    );
                                })}
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    );
};

export default Header;