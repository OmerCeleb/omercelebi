// src/components/sections/About/About.tsx

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Heart, Coffee, Users } from 'lucide-react';
import { useLanguage } from '../../../contexts/LanguageContext';
import { translations, type StoryItem, type ApproachItem } from '../../../data/translations';

const About: React.FC = () => {
    const { language } = useLanguage();
    const data = translations[language].about;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
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

    const getIcon = (iconName: string) => {
        const icons: { [key: string]: React.ComponentType<any> } = {
            Code,
            Heart,
            Coffee,
            Users
        };
        return icons[iconName] || Code;
    };

    return (
        <section className="relative min-h-screen py-12 sm:py-16 md:py-20 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-gray-50">

            {/* Background Image */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `url("/images/OmMig.jpg")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }}
            />
            <div className="absolute inset-0 bg-white/90" />

            <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    className="max-w-7xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Header - Enhanced responsive typography */}
                    <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16 lg:mb-20">
                        <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6 leading-tight">
                            {data.title}
                        </h2>
                        <div className="max-w-5xl mx-auto px-2">
                            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 font-medium leading-relaxed">
                                {data.introduction}
                            </p>
                        </div>
                    </motion.div>

                    {/* Story Cards - Enhanced responsive grid */}
                    <motion.div variants={itemVariants} className="mb-16 sm:mb-20 lg:mb-24">
                        <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                            {Object.entries(data.story).map(([key, story], index) => {
                                const storyItem = story as StoryItem;
                                return (
                                    <motion.div
                                        key={key}
                                        className="group"
                                        variants={itemVariants}
                                        whileHover={{ y: -8, scale: 1.02 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    >
                                        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col min-h-[280px] sm:min-h-[320px] lg:min-h-[300px]">
                                            <div className="text-xs sm:text-sm text-red-600 font-bold mb-2 sm:mb-3 tracking-wider uppercase">
                                                {storyItem.period}
                                            </div>
                                            <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex-shrink-0 leading-tight">
                                                {storyItem.title}
                                            </h3>
                                            <p className="text-sm sm:text-base text-gray-700 leading-relaxed flex-grow font-medium">
                                                {storyItem.content}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Philosophy Quote - Enhanced responsive spacing */}
                    <motion.div variants={itemVariants} className="mb-16 sm:mb-20 lg:mb-24">
                        <div className="max-w-6xl mx-auto">
                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-12 border border-gray-200 shadow-lg text-center">
                                <blockquote className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-900 font-semibold leading-relaxed italic">
                                    "{data.philosophy}"
                                </blockquote>
                            </div>
                        </div>
                    </motion.div>

                    {/* Approach Section - Ultra responsive grid */}
                    <motion.div variants={itemVariants} className="mb-16 sm:mb-20 lg:mb-24">
                        <div className="text-center mb-8 sm:mb-12">
                            <h3 className="text-2xl xs:text-3xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                                {data.approach.title}
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                            {data.approach.items.map((item: ApproachItem, index: number) => {
                                const IconComponent = getIcon(item.icon);
                                return (
                                    <motion.div
                                        key={index}
                                        className="group text-center"
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.05, y: -5 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    >
                                        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 h-full min-h-[200px] sm:min-h-[220px] lg:min-h-[200px] flex flex-col">
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-red-200 transition-colors flex-shrink-0">
                                                <IconComponent size={18} className="sm:w-6 sm:h-6 text-red-600" />
                                            </div>
                                            <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 flex-shrink-0 leading-tight">
                                                {item.title}
                                            </h4>
                                            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium flex-grow">
                                                {item.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Current Focus - Enhanced responsive text */}
                    <motion.div variants={itemVariants} className="text-center">
                        <div className="max-w-5xl mx-auto">
                            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 sm:p-8 lg:p-12 border border-gray-200 shadow-lg">
                                <p className="text-base sm:text-lg md:text-xl text-gray-800 mb-4 sm:mb-6 leading-relaxed font-medium">
                                    {data.currentFocus}
                                </p>
                                <p className="text-sm sm:text-base text-gray-600 font-semibold tracking-wide">
                                    {data.location}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Decorative Elements - Hidden on mobile */}
            <div className="hidden lg:block absolute bottom-20 left-10 w-px h-20 bg-gray-300 opacity-60" />
            <div className="hidden lg:block absolute top-40 right-16 w-16 h-px bg-gray-300 opacity-60" />
        </section>
    );
};

export default About;