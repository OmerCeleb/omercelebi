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

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    className="max-w-7xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                >

                    {/* Two Column Layout */}
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                        {/* Left Column - Content */}
                        <div className="text-center lg:text-left">

                            {/* Clean Status Badge */}
                            <motion.div variants={itemVariants} className="mb-12 lg:mb-16">
                            </motion.div>

                            {/* Main Typography */}
                            <motion.div variants={itemVariants} className="mb-8 lg:mb-12">
                                {/* Name */}
                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-[0.9] tracking-tight">
                                    <span className="block text-black mb-6">{data.hello}</span>

                                    {/* Clean Title Container */}
                                    <div className="relative min-h-[1.1em] w-full">
                                        <AnimatePresence mode="wait">
                                            <motion.span
                                                key={currentTitle}
                                                className="block text-red-600 font-normal"
                                                initial={{ y: 40, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                exit={{ y: -40, opacity: 0 }}
                                                transition={{
                                                    duration: 0.6,
                                                    ease: [0.25, 0.4, 0.25, 1]
                                                }}
                                            >
                                                {data.imA} {titles[currentTitle]}
                                            </motion.span>
                                        </AnimatePresence>
                                    </div>
                                </h1>
                            </motion.div>

                            {/* Minimal Description */}
                            <motion.div variants={itemVariants} className="mb-12 lg:mb-16">
                                <p className="text-xl md:text-2xl text-neutral-800 leading-relaxed font-light">
                                    {data.description}
                                    <span className="block mt-4 text-black">
                    {data.basedIn}
                  </span>
                                </p>
                            </motion.div>


                            {/* Clean Stats - Horizontal Layout for Mobile */}
                            <motion.div variants={itemVariants} className="lg:hidden mb-16">
                                <div className="flex justify-center items-center space-x-8 text-center">
                                    {[
                                        { number: '3+', label: data.stats.years },
                                        { number: '5', label: data.stats.projects },
                                        { number: '10', label: data.stats.techStack }
                                    ].map((stat, index) => (
                                        <motion.div
                                            key={index}
                                            className="group"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 1 + (index * 0.2) }}
                                        >
                                            <div className="text-2xl font-light text-black mb-1">
                                                {stat.number}
                                            </div>
                                            <div className="text-xs text-black font-medium">
                                                {stat.label}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>


                    {/* Clean Tech List - Full Width */}
                    <motion.div variants={itemVariants} className="mt-20 lg:mt-32">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="text-xs text-neutral-400 mb-8 tracking-widest uppercase">
                                {data.technologies}
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-white">
                                {['React', 'TypeScript', 'Node.js', 'JavaScript', 'Java', 'Spring Boot', 'PostgreSQL', 'Git'].map((tech, index) => (
                                    <motion.div
                                        key={tech}
                                        className="py-3 text-center border-b border-white/20 hover:border-red-300 transition-colors"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 1.8 + (index * 0.1) }}
                                    >
                                        {tech}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                    {/* Scandinavian Scroll Indicator */}
                    <motion.div
                        variants={itemVariants}
                        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
                    >
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="flex flex-col items-center text-neutral-400 cursor-pointer group hover:text-black transition-colors"
                        >
                            <div className="w-px h-16 bg-neutral-300 mb-4"></div>
                            <ChevronDown size={18} />
                        </motion.div>
                    </motion.div>

                </motion.div>
            </div>

            {/* Minimal Side Elements */}
            <div className="absolute left-6 top-1/2 transform -translate-y-1/2 text-xs text-neutral-400 tracking-widest rotate-90 origin-center">
                {data.sideText.portfolio}
            </div>

            <div className="absolute right-6 top-1/2 transform -translate-y-1/2 text-xs text-neutral-400 tracking-widest rotate-90 origin-center">
                {data.sideText.location}
            </div>
        </section>
    );
};

export default Hero;