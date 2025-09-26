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
            <div className="absolute inset-0"
                 style={{
                     backgroundImage: `url("/images/OmMig.jpg")`,
                     backgroundSize: "cover",
                     backgroundPosition: "center",
                     backgroundRepeat: "no-repeat"
                 }}
            />
            <div className="absolute inset-0 bg-white/90" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    className="max-w-7xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Header  */}
                    <motion.div variants={itemVariants} className="text-center mb-20">
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6">
                            {data.title}
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-700 font-medium max-w-3xl mx-auto leading-relaxed">
                            {data.introduction}
                        </p>
                    </motion.div>

                    {/* Story Cards  */}
                    <motion.div variants={itemVariants} className="mb-24">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {Object.entries(data.story).map(([key, story]) => {
                                const storyItem = story as StoryItem;
                                return (
                                    <motion.div key={key} className="group" variants={itemVariants}>
                                        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                                            <div className="text-xs text-red-600 font-bold mb-3 tracking-wider uppercase">
                                                {storyItem.period}
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex-shrink-0">
                                                {storyItem.title}
                                            </h3>
                                            <p className="text-gray-700 leading-relaxed text-sm flex-grow font-medium">
                                                {storyItem.content}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Philosophy Quote  */}
                    <motion.div variants={itemVariants} className="mb-24">
                        <div className="max-w-5xl mx-auto text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-lg">
                            <blockquote className="text-2xl md:text-3xl text-gray-900 font-semibold leading-relaxed italic">
                                "{data.philosophy}"
                            </blockquote>
                        </div>
                    </motion.div>

                    {/* Approach Section  */}
                    <motion.div variants={itemVariants} className="mb-24">
                        <div className="text-center mb-12">
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                {data.approach.title}
                            </h3>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {data.approach.items.map((item: ApproachItem, index: number) => {
                                const IconComponent = getIcon(item.icon);
                                return (
                                    <motion.div key={index} className="group text-center" variants={itemVariants} whileHover={{ scale: 1.05 }}>
                                        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                                            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                                                <IconComponent size={24} className="text-red-600" />
                                            </div>
                                            <h4 className="text-lg font-bold text-gray-900 mb-3">
                                                {item.title}
                                            </h4>
                                            <p className="text-sm text-gray-700 leading-relaxed font-medium">
                                                {item.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Current Focus  */}
                    <motion.div variants={itemVariants} className="text-center">
                        <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-lg p-8 border border-gray-200 shadow-lg">
                            <p className="text-lg text-gray-800 mb-6 leading-relaxed font-medium">
                                {data.currentFocus}
                            </p>
                            <p className="text-sm text-gray-600 font-semibold tracking-wide">
                                {data.location}
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            <div className="absolute bottom-20 left-10 w-px h-20 bg-gray-300" />
            <div className="absolute top-40 right-16 w-16 h-px bg-gray-300" />
        </section>
    );
};

export default About;