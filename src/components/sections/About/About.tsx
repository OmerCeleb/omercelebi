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
        <section className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-gray-50">

            {/* Custom Smooth Cloud Background */}
            <div className="absolute inset-0">
                {/* Animated Clouds */}
                <div className="absolute inset-0">
                    {/* Cloud 1 */}
                    <motion.div
                        className="absolute top-20 -left-20 w-96 h-32 opacity-20"
                        animate={{
                            x: [0, 100, 0],
                            y: [0, -20, 0],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        style={{
                            background: 'radial-gradient(ellipse, rgba(200, 220, 240, 0.6) 0%, rgba(200, 220, 240, 0.2) 70%, transparent 100%)',
                            filter: 'blur(1px)'
                        }}
                    />

                    {/* Cloud 2 */}
                    <motion.div
                        className="absolute top-60 -right-20 w-80 h-28 opacity-15"
                        animate={{
                            x: [0, -80, 0],
                            y: [0, 15, 0],
                        }}
                        transition={{
                            duration: 25,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        style={{
                            background: 'radial-gradient(ellipse, rgba(180, 200, 230, 0.5) 0%, rgba(180, 200, 230, 0.1) 70%, transparent 100%)',
                            filter: 'blur(1.5px)'
                        }}
                    />

                    {/* Cloud 3 */}
                    <motion.div
                        className="absolute bottom-40 left-10 w-72 h-24 opacity-25"
                        animate={{
                            x: [0, 60, 0],
                            y: [0, -10, 0],
                        }}
                        transition={{
                            duration: 18,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        style={{
                            background: 'radial-gradient(ellipse, rgba(220, 230, 250, 0.4) 0%, rgba(220, 230, 250, 0.1) 70%, transparent 100%)',
                            filter: 'blur(0.8px)'
                        }}
                    />

                    {/* Cloud 4 */}
                    <motion.div
                        className="absolute top-1/2 right-20 w-64 h-20 opacity-18"
                        animate={{
                            x: [0, -40, 0],
                            y: [0, 25, 0],
                        }}
                        transition={{
                            duration: 22,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        style={{
                            background: 'radial-gradient(ellipse, rgba(190, 210, 240, 0.5) 0%, rgba(190, 210, 240, 0.15) 70%, transparent 100%)',
                            filter: 'blur(1.2px)'
                        }}
                    />

                    {/* Small floating elements */}
                    {[...Array(8)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-8 h-8 rounded-full opacity-10"
                            style={{
                                top: `${Math.random() * 80 + 10}%`,
                                left: `${Math.random() * 80 + 10}%`,
                                background: 'radial-gradient(circle, rgba(160, 180, 220, 0.6) 0%, rgba(160, 180, 220, 0.2) 70%, transparent 100%)',
                            }}
                            animate={{
                                y: [0, -30, 0],
                                x: [0, 20, 0],
                                opacity: [0.1, 0.3, 0.1]
                            }}
                            transition={{
                                duration: 8 + Math.random() * 6,
                                repeat: Infinity,
                                delay: Math.random() * 5,
                                ease: "easeInOut"
                            }}
                        />
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    className="max-w-6xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >

                    {/* Section Header */}
                    <motion.div variants={itemVariants} className="text-center mb-20">
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-black mb-6">
                            {data.title}
                        </h2>
                        <p className="text-xl md:text-2xl text-neutral-600 font-light">
                            {data.introduction}
                        </p>
                    </motion.div>

                    {/* Journey Timeline */}
                    <motion.div variants={itemVariants} className="mb-24">
                        <div className="grid md:grid-cols-3 gap-8">
                            {Object.entries(data.story).map(([key, story], index) => {
                                const storyItem = story as StoryItem;
                                return (
                                    <motion.div
                                        key={key}
                                        className="group"
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.8 + index * 0.2 }}
                                    >
                                        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                                            <div className="text-sm text-red-600 font-medium mb-2 tracking-wide">
                                                {storyItem.period}
                                            </div>
                                            <h3 className="text-2xl font-semibold text-black mb-4">
                                                {storyItem.title}
                                            </h3>
                                            <p className="text-neutral-700 leading-relaxed">
                                                {storyItem.content}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Philosophy Section */}
                    <motion.div variants={itemVariants} className="mb-24">
                        <div className="max-w-4xl mx-auto text-center">
                            <blockquote className="text-2xl md:text-3xl text-black font-light leading-relaxed italic">
                                "{data.philosophy}"
                            </blockquote>
                        </div>
                    </motion.div>

                    {/* Approach Grid */}
                    <motion.div variants={itemVariants} className="mb-24">
                        <div className="text-center mb-12">
                            <h3 className="text-3xl md:text-4xl font-light text-black mb-4">
                                {data.approach.title}
                            </h3>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {data.approach.items.map((item: ApproachItem, index: number) => {
                                const IconComponent = getIcon(item.icon);
                                return (
                                    <motion.div
                                        key={index}
                                        className="group text-center"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 1.4 + index * 0.1 }}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                                            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                                                <IconComponent size={24} className="text-red-600" />
                                            </div>
                                            <h4 className="text-lg font-semibold text-black mb-3">
                                                {item.title}
                                            </h4>
                                            <p className="text-sm text-neutral-600 leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Current Focus */}
                    <motion.div variants={itemVariants} className="text-center">
                        <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-sm rounded-lg p-8 border border-white/50 shadow-lg">
                            <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                                {data.currentFocus}
                            </p>
                            <p className="text-sm text-neutral-500 font-medium tracking-wide">
                                {data.location}
                            </p>
                        </div>
                    </motion.div>

                </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-20 left-10 w-px h-20 bg-neutral-300"></div>
            <div className="absolute top-40 right-16 w-16 h-px bg-neutral-300"></div>
        </section>
    );
};

export default About;