// src/components/sections/Experience/Experience.tsx

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building, Users, Code, Truck } from 'lucide-react';
import { useLanguage } from '../../../contexts/LanguageContext';
import { translations, type ExperienceItem } from '../../../data/translations';

const Experience: React.FC = () => {
    const { language } = useLanguage();
    const [activeExperience, setActiveExperience] = useState<string | null>(null);
    const data = translations[language].experience;

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
            Building,
            Code,
            Truck,
            Users
        };
        return icons[iconName] || Building;
    };

    return (
        <section className="relative min-h-screen py-12 sm:py-16 md:py-20 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">

            {/* Background Image */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `url("/images/Experience.jpg")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }}
            />

            {/* Stronger overlay for better readability */}
            <div className="absolute inset-0 bg-white/90"></div>

            <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    className="max-w-6xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >

                    {/* Section Header - Responsive */}
                    <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16 lg:mb-20">
                        <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6 drop-shadow-sm">
                            {data.title}
                        </h2>
                        <div className="max-w-4xl mx-auto px-2">
                            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 font-semibold leading-relaxed">
                                {data.subtitle}
                            </p>
                        </div>
                    </motion.div>

                    {/* Timeline - Mobile-first approach */}
                    <div className="relative">
                        {/* Vertical Line - Responsive positioning */}
                        <div className="absolute left-4 sm:left-6 md:left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gray-400 transform lg:-translate-x-1/2 shadow-sm"></div>

                        {/* Experience Items */}
                        <div className="space-y-8 sm:space-y-10 lg:space-y-12">
                            {data.experiences.map((exp: ExperienceItem, index: number) => {
                                const IconComponent = getIcon(exp.icon);
                                const isActive = activeExperience === exp.id;
                                const isLeft = index % 2 === 0;

                                return (
                                    <motion.div
                                        key={exp.id}
                                        className={`relative flex items-center ${isLeft ? 'lg:justify-start' : 'lg:justify-end'}`}
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.8 + index * 0.2 }}
                                    >
                                        {/* Timeline Node - Responsive positioning */}
                                        <motion.div
                                            className="absolute left-4 sm:left-6 md:left-8 lg:left-1/2 w-4 h-4 sm:w-5 sm:h-5 bg-red-600 rounded-full border-2 sm:border-4 border-white shadow-lg transform -translate-x-1/2 z-10 cursor-pointer hover:bg-red-700 transition-colors"
                                            whileHover={{ scale: 1.3 }}
                                            onClick={() => setActiveExperience(isActive ? null : exp.id)}
                                        />

                                        {/* Experience Card - Mobile-first responsive */}
                                        <motion.div
                                            className={`w-full lg:w-5/12 ml-10 sm:ml-14 md:ml-16 lg:ml-0 ${!isLeft ? 'lg:mr-16' : ''}`}
                                            whileHover={{ scale: 1.02, y: -5 }}
                                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        >
                                            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                                                 onClick={() => setActiveExperience(isActive ? null : exp.id)}>

                                                {/* Card Header - Responsive layout */}
                                                <div className="flex flex-col sm:flex-row items-start justify-between mb-4">
                                                    <div className="flex items-center space-x-3 mb-3 sm:mb-0">
                                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
                                                            <IconComponent size={18} className="sm:w-6 sm:h-6 text-red-600" />
                                                        </div>
                                                        <div className="min-w-0">
                                                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">
                                                                {exp.company}
                                                            </h3>
                                                            <p className="text-red-600 font-semibold text-sm sm:text-base">
                                                                {exp.position}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    {exp.id === 'postnord' && (
                                                        <span className="px-2 sm:px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full font-bold border border-green-200 flex-shrink-0">
                                                            {data.current}
                                                        </span>
                                                    )}
                                                </div>

                                                {/* Period and Location - Responsive stack */}
                                                <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-600 mb-4 space-y-1 sm:space-y-0 sm:space-x-4">
                                                    <div className="flex items-center space-x-2 font-semibold">
                                                        <Calendar size={14} className="text-gray-500 flex-shrink-0" />
                                                        <span className="break-words">{exp.period}</span>
                                                    </div>
                                                    <div className="flex items-center space-x-2 font-semibold">
                                                        <MapPin size={14} className="text-gray-500 flex-shrink-0" />
                                                        <span className="break-words">{exp.location}</span>
                                                    </div>
                                                </div>

                                                {/* Description */}
                                                <p className="text-sm sm:text-base text-gray-800 mb-4 leading-relaxed font-medium">
                                                    {exp.description}
                                                </p>

                                                {/* Expandable Content */}
                                                <motion.div
                                                    initial={false}
                                                    animate={{ height: isActive ? 'auto' : 0 }}
                                                    className="overflow-hidden"
                                                >
                                                    {isActive && (
                                                        <div className="pt-4 border-t border-gray-200">
                                                            {/* Highlights */}
                                                            <div className="mb-4">
                                                                <h4 className="font-bold text-gray-900 mb-3 text-xs sm:text-sm uppercase tracking-wide">
                                                                    Key Highlights:
                                                                </h4>
                                                                <ul className="space-y-2">
                                                                    {exp.highlights.map((highlight: string, idx: number) => (
                                                                        <li key={idx} className="text-xs sm:text-sm text-gray-700 flex items-start font-medium">
                                                                            <span className="w-2 h-2 bg-red-600 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                                                                            <span className="break-words">{highlight}</span>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>

                                                            {/* Technologies */}
                                                            {exp.technologies.length > 0 && (
                                                                <div>
                                                                    <h4 className="font-bold text-gray-900 mb-3 text-xs sm:text-sm uppercase tracking-wide">
                                                                        Technologies:
                                                                    </h4>
                                                                    <div className="flex flex-wrap gap-2">
                                                                        {exp.technologies.map((tech: string, idx: number) => (
                                                                            <span key={idx} className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-800 text-xs rounded-md font-semibold border border-gray-200 hover:bg-gray-200 transition-colors">
                                                                                {tech}
                                                                            </span>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </div>
                                                    )}
                                                </motion.div>

                                                {/* Expand Indicator */}
                                                <div className="text-center mt-4">
                                                    <motion.div
                                                        animate={{ rotate: isActive ? 180 : 0 }}
                                                        className="w-5 h-5 sm:w-6 sm:h-6 mx-auto text-gray-500 hover:text-gray-700 transition-colors"
                                                    >
                                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                                                            <path d="M7 10l5 5 5-5z"/>
                                                        </svg>
                                                    </motion.div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                </motion.div>
            </div>

            {/* Decorative Elements - Hidden on mobile */}
            <div className="hidden lg:block absolute bottom-20 left-16 w-px h-16 bg-gray-400 shadow-sm"></div>
            <div className="hidden lg:block absolute top-40 right-20 w-20 h-px bg-gray-400 shadow-sm"></div>
        </section>
    );
};

export default Experience;