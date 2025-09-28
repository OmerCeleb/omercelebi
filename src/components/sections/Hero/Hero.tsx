// src/components/sections/Hero/Hero.tsx
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../../../contexts/LanguageContext';
import { translations } from '../../../data/translations';

const Hero: React.FC = () => {
    const [currentTitle, setCurrentTitle] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const { language } = useLanguage();

    // Get data for current language
    const data = translations[language].hero;
    const titles = Object.values(data.titles); // Convert titles object to array

    useEffect(() => {
        setIsVisible(true);
        const interval = setInterval(() => {
            setCurrentTitle((prev) => (prev + 1) % titles.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [titles.length]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.4,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.4, 0.25, 1]
            }
        }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-50">

            {/* Background Image */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `url("/images/Home.jpg")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />

            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/20"></div>

            {/* Subtle Grid Overlay */}
            <div className="absolute inset-0 opacity-[0.05]">
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage: `
        linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
      `,
                        backgroundSize: "80px 80px",
                    }}
                />
            </div>

            {/* Main Container - Fixed responsive issues */}
            <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    className="max-w-7xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                >

                    {/* Single Column Layout - Better for mobile */}
                    <div className="text-center">

                        {/* Main Typography - Fully Responsive */}
                        <motion.div variants={itemVariants} className="mb-6 sm:mb-8 lg:mb-12">
                            {/* Hello Text - Responsive sizing */}
                            <h1 className="leading-[0.85] tracking-tight">
                                <span className="block text-white mb-3 sm:mb-4 lg:mb-6 drop-shadow-lg font-medium text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                                    {data.hello}
                                </span>

                                {/* Dynamic Title Container - Fixed overflow */}
                                <div className="relative min-h-[1.1em] w-full overflow-hidden">
                                    <AnimatePresence mode="wait">
                                        <motion.span
                                            key={currentTitle}
                                            className="block text-red-500 font-bold drop-shadow-lg text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
                                            initial={{ y: 40, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            exit={{ y: -40, opacity: 0 }}
                                            transition={{
                                                duration: 0.6,
                                                ease: [0.25, 0.4, 0.25, 1]
                                            }}
                                        >
                                            <span className="break-words">
                                                {data.imA} {titles[currentTitle]}
                                            </span>
                                        </motion.span>
                                    </AnimatePresence>
                                </div>
                            </h1>
                        </motion.div>

                        {/* Description - Responsive text */}
                        <motion.div variants={itemVariants} className="mb-8 sm:mb-12 lg:mb-16">
                            <div className="max-w-4xl mx-auto px-2">
                                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white leading-relaxed font-medium drop-shadow-md">
                                    {data.description}
                                    <span className="block mt-2 sm:mt-4 text-white/95 font-normal">
                                        {data.basedIn}
                                    </span>
                                </p>
                            </div>
                        </motion.div>

                        {/* Stats - Enhanced responsive grid */}
                        <motion.div variants={itemVariants} className="mb-12 sm:mb-16 lg:mb-20">
                            <div className="max-w-2xl mx-auto">
                                <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
                                    {[
                                        { number: '3+', label: data.stats.years },
                                        { number: '5', label: data.stats.projects },
                                        { number: '10', label: data.stats.techStack }
                                    ].map((stat, index) => (
                                        <motion.div
                                            key={index}
                                            className="group bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 lg:p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 1 + (index * 0.2) }}
                                        >
                                            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2 drop-shadow-lg">
                                                {stat.number}
                                            </div>
                                            <div className="text-xs sm:text-sm md:text-base text-white/90 font-medium leading-tight">
                                                {stat.label}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Tech List - Responsive grid */}
                        <motion.div variants={itemVariants} className="mb-16 sm:mb-20 lg:mb-32">
                            <div className="max-w-5xl mx-auto">
                                <div className="text-xs sm:text-sm text-white/80 mb-6 sm:mb-8 tracking-widest uppercase font-semibold drop-shadow-md">
                                    {data.technologies}
                                </div>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 text-sm">
                                    {['React', 'TypeScript', 'Node.js', 'JavaScript', 'Java', 'Spring Boot', 'PostgreSQL', 'Git'].map((tech, index) => (
                                        <motion.div
                                            key={tech}
                                            className="py-2 sm:py-3 lg:py-4 px-2 sm:px-3 text-center bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:border-red-400/50 transition-all duration-300 hover:bg-white/15"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 1.8 + (index * 0.1) }}
                                        >
                                            <span className="text-white font-semibold drop-shadow-md text-xs sm:text-sm">
                                                {tech}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Scroll Indicator - Responsive positioning */}
                        <motion.div
                            variants={itemVariants}
                            className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2"
                        >
                            <motion.div
                                animate={{ y: [0, 8, 0] }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="flex flex-col items-center text-white/70 cursor-pointer group hover:text-white transition-colors"
                            >
                                <div className="w-px h-12 sm:h-16 bg-white/40 mb-3 sm:mb-4 drop-shadow-sm"></div>
                                <ChevronDown size={16} className="sm:w-5 sm:h-5 drop-shadow-md" />
                            </motion.div>
                        </motion.div>

                    </div>

                </motion.div>
            </div>

            {/* Side Elements - Hidden on mobile, visible on larger screens */}
            <div className="hidden lg:block absolute left-4 xl:left-6 top-1/2 transform -translate-y-1/2 text-xs text-white/60 tracking-widest rotate-90 origin-center font-semibold drop-shadow-md">
                {data.sideText.portfolio}
            </div>

            <div className="hidden lg:block absolute right-4 xl:right-6 top-1/2 transform -translate-y-1/2 text-xs text-white/60 tracking-widest rotate-90 origin-center font-semibold drop-shadow-md">
                {data.sideText.location}
            </div>
        </section>
    );
};

export default Hero;