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
        <section className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">

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

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    className="max-w-6xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >

                    {/* Section Header */}
                    <motion.div variants={itemVariants} className="text-center mb-20">
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6 drop-shadow-sm">
                            {data.title}
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-700 font-semibold max-w-3xl mx-auto leading-relaxed">
                            {data.subtitle}
                        </p>
                    </motion.div>

                    {/* Timeline */}
                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-400 transform md:-translate-x-1/2 shadow-sm"></div>

                        {/* Experience Items */}
                        <div className="space-y-12">
                            {data.experiences.map((exp: ExperienceItem, index: number) => {
                                const IconComponent = getIcon(exp.icon);
                                const isActive = activeExperience === exp.id;
                                const isLeft = index % 2 === 0;

                                return (
                                    <motion.div
                                        key={exp.id}
                                        className={`relative flex items-center ${isLeft ? 'md:justify-start' : 'md:justify-end'}`}
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.8 + index * 0.2 }}
                                    >
                                        {/* Timeline Node */}
                                        <motion.div
                                            className="absolute left-8 md:left-1/2 w-5 h-5 bg-red-600 rounded-full border-4 border-white shadow-lg transform -translate-x-1/2 z-10 cursor-pointer hover:bg-red-700 transition-colors"
                                            whileHover={{ scale: 1.3 }}
                                            onClick={() => setActiveExperience(isActive ? null : exp.id)}
                                        />

                                        {/* Experience Card */}
                                        <motion.div
                                            className={`w-full md:w-5/12 ml-16 md:ml-0 ${!isLeft ? 'md:mr-16' : ''}`}
                                            whileHover={{ scale: 1.02, y: -5 }}
                                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        >
                                            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                                                 onClick={() => setActiveExperience(isActive ? null : exp.id)}>

                                                {/* Card Header */}
                                                <div className="flex items-start justify-between mb-4">
                                                    <div className="flex items-center space-x-3">
                                                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center shadow-sm">
                                                            <IconComponent size={22} className="text-red-600" />
                                                        </div>
                                                        <div>
                                                            <h3 className="text-xl font-bold text-gray-900 leading-tight">
                                                                {exp.company}
                                                            </h3>
                                                            <p className="text-red-600 font-semibold text-base">
                                                                {exp.position}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    {exp.id === 'postnord' && (
                                                        <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full font-bold border border-green-200">
                                                            {data.current}
                                                        </span>
                                                    )}
                                                </div>

                                                {/* Period and Location  */}
                                                <div className="flex flex-wrap items-center text-sm text-gray-600 mb-4 space-x-4">
                                                    <div className="flex items-center space-x-2 font-semibold">
                                                        <Calendar size={16} className="text-gray-500" />
                                                        <span>{exp.period}</span>
                                                    </div>
                                                    <div className="flex items-center space-x-2 font-semibold">
                                                        <MapPin size={16} className="text-gray-500" />
                                                        <span>{exp.location}</span>
                                                    </div>
                                                </div>

                                                {/* Description */}
                                                <p className="text-gray-800 mb-4 leading-relaxed font-medium">
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
                                                                <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">
                                                                    Key Highlights:
                                                                </h4>
                                                                <ul className="space-y-2">
                                                                    {exp.highlights.map((highlight: string, idx: number) => (
                                                                        <li key={idx} className="text-sm text-gray-700 flex items-start font-medium">
                                                                            <span className="w-2 h-2 bg-red-600 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                                                                            {highlight}
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>

                                                            {/* Technologies */}
                                                            {exp.technologies.length > 0 && (
                                                                <div>
                                                                    <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">
                                                                        Technologies:
                                                                    </h4>
                                                                    <div className="flex flex-wrap gap-2">
                                                                        {exp.technologies.map((tech: string, idx: number) => (
                                                                            <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-800 text-xs rounded-md font-semibold border border-gray-200 hover:bg-gray-200 transition-colors">
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
                                                        className="w-6 h-6 mx-auto text-gray-500 hover:text-gray-700 transition-colors"
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

            {/* Decorative Elements */}
            <div className="absolute bottom-20 left-16 w-px h-16 bg-gray-400 shadow-sm"></div>
            <div className="absolute top-40 right-20 w-20 h-px bg-gray-400 shadow-sm"></div>
        </section>
    );
};

export default Experience;