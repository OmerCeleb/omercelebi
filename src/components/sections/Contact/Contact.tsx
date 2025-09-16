import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useLanguage } from '../../../contexts/LanguageContext';
import { translations } from '../../../data/translations';

const Contact: React.FC = () => {
    const { language } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    // Get translations for current language
    const t = translations[language].contact;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // METHOD 1: Direct mailto approach (Simple but limited)
    const handleMailtoSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const subject = encodeURIComponent(formData.subject || `Message from ${formData.name}`);
        const body = encodeURIComponent(
            `Name: ${formData.name}\n` +
            `Email: ${formData.email}\n` +
            `Subject: ${formData.subject}\n\n` +
            `Message:\n${formData.message}`
        );

        const mailtoUrl = `mailto:omer534@outlook.com?subject=${subject}&body=${body}`;
        window.open(mailtoUrl, '_blank');

        // Set success status
        setFormStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });

        // Reset status after 3 seconds
        setTimeout(() => setFormStatus('idle'), 3000);
    };


    // Choose which submit handler to use
    const handleSubmit = handleMailtoSubmit; // Change this to your preferred method

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

    return (
        <section className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-neutral-900">

            {/* Animated Background */}
            <div className="absolute inset-0">
                {/* Subtle animated elements */}
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full opacity-5"
                        style={{
                            width: `${Math.random() * 200 + 100}px`,
                            height: `${Math.random() * 200 + 100}px`,
                            top: `${Math.random() * 80 + 10}%`,
                            left: `${Math.random() * 80 + 10}%`,
                            background: 'radial-gradient(circle, rgba(239, 68, 68, 0.3) 0%, rgba(239, 68, 68, 0.1) 70%, transparent 100%)',
                        }}
                        animate={{
                            y: [0, -50, 0],
                            x: [0, 30, 0],
                            opacity: [0.05, 0.1, 0.05]
                        }}
                        transition={{
                            duration: 20 + Math.random() * 10,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    className="max-w-7xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >

                    {/* Section Header */}
                    <motion.div variants={itemVariants} className="text-center mb-20">
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white mb-6">
                            {t.title}
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-300 font-light">
                            {t.subtitle}
                        </p>
                    </motion.div>

                    {/* Main Content Grid */}
                    <div className="grid lg:grid-cols-2 gap-16 mb-20">

                        {/* Contact Form */}
                        <motion.div variants={itemVariants}>
                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-xl">
                                <form onSubmit={handleSubmit} className="space-y-6">

                                    {/* Name Input */}
                                    <div>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            placeholder={t.form.name}
                                            required
                                            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                                        />
                                    </div>

                                    {/* Email Input */}
                                    <div>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder={t.form.email}
                                            required
                                            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                                        />
                                    </div>

                                    {/* Subject Input */}
                                    <div>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            placeholder={t.form.subject}
                                            required
                                            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                                        />
                                    </div>

                                    {/* Message Textarea */}
                                    <div>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            placeholder={t.form.message}
                                            required
                                            rows={6}
                                            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors resize-none"
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <motion.button
                                        type="submit"
                                        disabled={formStatus === 'sending'}
                                        className={`w-full flex items-center justify-center space-x-2 px-8 py-4 rounded-lg font-medium transition-all duration-300 ${
                                            formStatus === 'sending'
                                                ? 'bg-gray-600 cursor-not-allowed'
                                                : 'bg-red-600 hover:bg-red-700 active:bg-red-800'
                                        } text-white shadow-lg hover:shadow-xl`}
                                        whileHover={{ scale: formStatus === 'sending' ? 1 : 1.02 }}
                                        whileTap={{ scale: formStatus === 'sending' ? 1 : 0.98 }}
                                    >
                                        {formStatus === 'sending' ? (
                                            <>
                                                <motion.div
                                                    className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                />
                                                <span>{t.form.sending}</span>
                                            </>
                                        ) : (
                                            <>
                                                <Send size={18} />
                                                <span>{t.form.send}</span>
                                            </>
                                        )}
                                    </motion.button>

                                    {/* Status Messages */}
                                    {formStatus === 'success' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="flex items-center space-x-2 text-green-400"
                                        >
                                            <CheckCircle size={18} />
                                            <span>{t.form.success}</span>
                                        </motion.div>
                                    )}

                                    {formStatus === 'error' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="flex items-center space-x-2 text-red-400"
                                        >
                                            <AlertCircle size={18} />
                                            <span>{t.form.error}</span>
                                        </motion.div>
                                    )}

                                </form>
                            </div>
                        </motion.div>

                        {/* Contact Information */}
                        <motion.div variants={itemVariants} className="space-y-8">

                            {/* Contact Details */}
                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-xl">
                                <h3 className="text-2xl font-semibold text-white mb-6">{t.contact.title}</h3>

                                <div className="space-y-6">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center">
                                            <Mail size={20} className="text-red-400" />
                                        </div>
                                        <div>
                                            <p className="text-gray-300 text-sm">{t.contact.email}</p>
                                            <a
                                                href="omer534@outlook.com"
                                                className="text-white hover:text-red-400 transition-colors"
                                            >
                                                {t.info.email}
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center">
                                            <MapPin size={20} className="text-red-400" />
                                        </div>
                                        <div>
                                            <p className="text-gray-300 text-sm">{t.contact.location}</p>
                                            <p className="text-white">{t.info.location}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center">
                                            <CheckCircle size={20} className="text-green-400" />
                                        </div>
                                        <div>
                                            <p className="text-gray-300 text-sm">{t.contact.availability}</p>
                                            <p className="text-white">{t.info.availability}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-xl">
                                <h3 className="text-2xl font-semibold text-white mb-6">{t.social.title}</h3>

                                <div className="flex space-x-4">
                                    <motion.a
                                        href="https://github.com/OmerCeleb"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-white"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Github size={18} />
                                        <span>{t.social.github}</span>
                                    </motion.a>

                                    <motion.a
                                        href="https://linkedin.com/in/omercelebii/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-white"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Linkedin size={18} />
                                        <span>{t.social.linkedin}</span>
                                    </motion.a>
                                </div>
                            </div>

                        </motion.div>
                    </div>

                    {/* Call to Action */}
                    <motion.div variants={itemVariants} className="text-center">
                        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 md:p-12">
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                {t.cta.title}
                            </h3>
                            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
                                {t.cta.description}
                            </p>
                            <motion.a
                                href="mailto:omer534@outlook.com?subject=Let's Work Together&body=Hi Ömer,%0D%0A%0D%0AI'd like to discuss a project with you.%0D%0A%0D%0A"
                                className="inline-block bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {t.cta.button}
                            </motion.a>
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
};

export default Contact;