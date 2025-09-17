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
                     backgroundImage: `url("/images/OmMig.png")`,
                     backgroundSize: "cover",
                     backgroundPosition: "center",
                     backgroundRepeat: "no-repeat"
                 }}
            />
            <div className="absolute inset-0 bg-white/85" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    className="max-w-7xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div variants={itemVariants} className="text-center mb-20">
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-black mb-6">
                            {data.title}
                        </h2>
                        <p className="text-xl md:text-2xl text-neutral-600 font-light">
                            {data.introduction}
                        </p>
                    </motion.div>

                    <motion.div variants={itemVariants} className="mb-24">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {Object.entries(data.story).map(([key, story]) => {
                                const storyItem = story as StoryItem;
                                return (
                                    <motion.div key={key} className="group" variants={itemVariants}>
                                        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-white/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                                            <div className="text-xs text-red-600 font-bold mb-3 tracking-wider uppercase">
                                                {storyItem.period}
                                            </div>
                                            <h3 className="text-xl font-bold text-black mb-4 flex-shrink-0">
                                                {storyItem.title}
                                            </h3>
                                            <p className="text-neutral-700 leading-relaxed text-sm flex-grow">
                                                {storyItem.content}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="mb-24">
                        <div className="max-w-4xl mx-auto text-center">
                            <blockquote className="text-2xl md:text-3xl text-black font-light leading-relaxed italic">
                                "{data.philosophy}"
                            </blockquote>
                        </div>
                    </motion.div>

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
                                    <motion.div key={index} className="group text-center" variants={itemVariants} whileHover={{ scale: 1.05 }}>
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

            <div className="absolute bottom-20 left-10 w-px h-20 bg-neutral-300" />
            <div className="absolute top-40 right-16 w-16 h-px bg-neutral-300" />
        </section>
    );
};

export default About;