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
                    backgroundImage: `url("/images/Experience.png")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }}
            />

            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-white/85"></div>

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
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-black mb-6">
                            {data.title}
                        </h2>
                        <p className="text-xl md:text-2xl text-neutral-600 font-light">
                            {data.subtitle}
                        </p>
                    </motion.div>

                    {/* Timeline */}
                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-neutral-300 transform md:-translate-x-1/2"></div>

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
                                            className="absolute left-8 md:left-1/2 w-4 h-4 bg-red-600 rounded-full border-4 border-white shadow-lg transform -translate-x-1/2 z-10 cursor-pointer"
                                            whileHover={{ scale: 1.2 }}
                                            onClick={() => setActiveExperience(isActive ? null : exp.id)}
                                        />

                                        {/* Experience Card */}
                                        <motion.div
                                            className={`w-full md:w-5/12 ml-16 md:ml-0 ${!isLeft ? 'md:mr-16' : ''}`}
                                            whileHover={{ scale: 1.02, y: -5 }}
                                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        >
                                            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                                                 onClick={() => setActiveExperience(isActive ? null : exp.id)}>

                                                {/* Card Header */}
                                                <div className="flex items-start justify-between mb-4">
                                                    <div className="flex items-center space-x-3">
                                                        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                                                            <IconComponent size={20} className="text-red-600" />
                                                        </div>
                                                        <div>
                                                            <h3 className="text-xl font-semibold text-black">
                                                                {exp.company}
                                                            </h3>
                                                            <p className="text-red-600 font-medium">
                                                                {exp.position}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    {exp.id === 'postnord' && (
                                                        <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">
                                                            {data.current}
                                                        </span>
                                                    )}
                                                </div>

                                                {/* Period and Location */}
                                                <div className="flex flex-wrap items-center text-sm text-neutral-600 mb-4 space-x-4">
                                                    <div className="flex items-center space-x-1">
                                                        <Calendar size={14} />
                                                        <span>{exp.period}</span>
                                                    </div>
                                                    <div className="flex items-center space-x-1">
                                                        <MapPin size={14} />
                                                        <span>{exp.location}</span>
                                                    </div>
                                                </div>

                                                {/* Description */}
                                                <p className="text-neutral-700 mb-4 leading-relaxed">
                                                    {exp.description}
                                                </p>

                                                {/* Expandable Content */}
                                                <motion.div
                                                    initial={false}
                                                    animate={{ height: isActive ? 'auto' : 0 }}
                                                    className="overflow-hidden"
                                                >
                                                    {isActive && (
                                                        <div className="pt-4 border-t border-neutral-200">
                                                            {/* Highlights */}
                                                            <div className="mb-4">
                                                                <h4 className="font-semibold text-black mb-2">Key Highlights:</h4>
                                                                <ul className="space-y-1">
                                                                    {exp.highlights.map((highlight: string, idx: number) => (
                                                                        <li key={idx} className="text-sm text-neutral-600 flex items-start">
                                                                            <span className="w-1 h-1 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                                            {highlight}
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>

                                                            {/* Technologies */}
                                                            {exp.technologies.length > 0 && (
                                                                <div>
                                                                    <h4 className="font-semibold text-black mb-2">Technologies:</h4>
                                                                    <div className="flex flex-wrap gap-2">
                                                                        {exp.technologies.map((tech: string, idx: number) => (
                                                                            <span key={idx} className="px-2 py-1 bg-neutral-100 text-neutral-700 text-xs rounded">
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
                                                        className="w-6 h-6 mx-auto text-neutral-400"
                                                    >
                                                        <svg viewBox="0 0 24 24" fill="currentColor">
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
            <div className="absolute bottom-20 left-16 w-px h-16 bg-neutral-300"></div>
            <div className="absolute top-40 right-20 w-20 h-px bg-neutral-300"></div>
        </section>
    );
};

export default Experience;