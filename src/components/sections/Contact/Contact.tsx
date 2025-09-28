// src/components/sections/Contact/Contact.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useLanguage } from '../../../contexts/LanguageContext';
import { translations } from '../../../data/translations';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
    const { language } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    // EmailJS Configuration
    const EMAILJS_SERVICE_ID = "service_6o9crij";
    const EMAILJS_TEMPLATE_ID_EN = "template_5xwwzjd";
    const EMAILJS_TEMPLATE_ID_SV = "template_o58dmbw";
    const EMAILJS_USER_ID = "roR5kXsxcI5pqbnXY";

    // Get translations for current language - with fallback
    let t;
    try {
        t = translations[language]?.contact;
        if (!t) {
            // Fallback if translations are missing
            t = {
                title: language === 'en' ? 'Get in Touch' : 'Kontakta Mig',
                subtitle: language === 'en' ? "Let's build something amazing together" : 'Låt oss bygga något fantastiskt tillsammans',
                form: {
                    name: language === 'en' ? 'Your Name' : 'Ditt Namn',
                    email: language === 'en' ? 'Email Address' : 'E-postadress',
                    subject: language === 'en' ? 'Subject' : 'Ämne',
                    message: language === 'en' ? 'Your Message' : 'Ditt Meddelande',
                    send: language === 'en' ? 'Send Message' : 'Skicka Meddelande',
                    sending: language === 'en' ? 'Sending...' : 'Skickar...',
                    success: language === 'en' ? 'Message sent successfully!' : 'Meddelandet skickat!',
                    error: language === 'en' ? 'Failed to send message. Please try again.' : 'Misslyckades att skicka meddelandet. Försök igen.'
                },
                contact: {
                    title: language === 'en' ? 'Contact Information' : 'Kontaktinformation',
                    email: language === 'en' ? 'Email' : 'E-post',
                    location: language === 'en' ? 'Location' : 'Plats',
                    availability: language === 'en' ? 'Availability' : 'Tillgänglighet'
                },
                info: {
                    email: 'omer534@outlook.com',
                    location: language === 'en' ? 'Stockholm, Sweden' : 'Stockholm, Sverige',
                    availability: language === 'en' ? 'Available for freelance projects' : 'Tillgänglig för frilansuppdrag'
                },
                social: {
                    title: language === 'en' ? 'Connect with me' : 'Anslut med mig',
                    github: 'GitHub',
                    linkedin: 'LinkedIn'
                },
                cta: {
                    title: language === 'en' ? 'Ready to start your project?' : 'Redo att starta ditt projekt?',
                    description: language === 'en' ? 'Whether you need a website, web application, or consultation, I\'m here to help bring your ideas to life.' : 'Oavsett om du behöver en webbplats, webbapplikation eller konsultation, jag är här för att hjälpa till att förverkliga dina idéer.',
                    button: language === 'en' ? 'Start a Project' : 'Starta ett Projekt'
                }
            };
        }
    } catch (error) {
        console.error('Error loading translations:', error);
        // Emergency fallback
        t = {
            title: 'Get in Touch',
            subtitle: "Let's build something amazing together",
            form: { name: 'Name', email: 'Email', subject: 'Subject', message: 'Message', send: 'Send', sending: 'Sending...', success: 'Success!', error: 'Error!' },
            contact: { title: 'Contact', email: 'Email', location: 'Location', availability: 'Availability' },
            info: { email: 'omer534@outlook.com', location: 'Stockholm, Sweden', availability: 'Available' },
            social: { title: 'Connect', github: 'GitHub', linkedin: 'LinkedIn' },
            cta: { title: 'Ready?', description: 'Let\'s work together', button: 'Start' }
        };
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('sending');

        try {
            // EmailJS template parameters
            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                subject: formData.subject,
                message: formData.message,
                to_email: 'omer534@outlook.com', // Your email
                reply_to: formData.email,
                language: language === 'en' ? 'English' : 'Swedish'
            };

            // Choose template based on language
            const templateId = language === 'en' ? EMAILJS_TEMPLATE_ID_EN : EMAILJS_TEMPLATE_ID_SV;

            // Send email via EmailJS
            const response = await emailjs.send(
                EMAILJS_SERVICE_ID,
                templateId,
                templateParams,
                EMAILJS_USER_ID
            );

            console.log('Email sent successfully:', response);
            setFormStatus('success');

            // Clear form on success
            setFormData({ name: '', email: '', subject: '', message: '' });

            // Reset status after 5 seconds
            setTimeout(() => setFormStatus('idle'), 5000);

        } catch (error) {
            console.error('Email sending failed:', error);
            setFormStatus('error');

            // Reset status after 5 seconds
            setTimeout(() => setFormStatus('idle'), 5000);
        }
    };

    // Simple animation variants
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    return (
        <section className="relative min-h-screen py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-neutral-900">

            {/* Background effects */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800/30 via-gray-800/20 to-neutral-900/40" />
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full opacity-10 hidden sm:block"
                        style={{
                            width: '150px',
                            height: '150px',
                            top: `${20 + i * 30}%`,
                            left: `${10 + i * 25}%`,
                            background: 'radial-gradient(circle, rgba(239, 68, 68, 0.4) 0%, transparent 70%)',
                        }}
                        animate={{
                            y: [0, -30, 0],
                            x: [0, 20, 0],
                            opacity: [0.05, 0.15, 0.05]
                        }}
                        transition={{
                            duration: 15 + i * 5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>

            <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    className="max-w-7xl mx-auto"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.2 }
                        }
                    }}
                >

                    {/* Header - Responsive typography */}
                    <motion.div variants={fadeIn} className="text-center mb-12 sm:mb-16">
                        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg">
                            {t.title}
                        </h1>
                        <div className="max-w-4xl mx-auto px-2">
                            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 font-semibold">
                                {t.subtitle}
                            </p>
                        </div>
                    </motion.div>

                    {/* Main Content - Responsive grid */}
                    <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-12 sm:mb-16 lg:mb-20">

                        {/* Contact Form */}
                        <motion.div variants={fadeIn}>
                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 shadow-xl">
                                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                                    {language === 'en' ? 'Send Message' : 'Skicka Meddelande'}
                                </h2>

                                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                                    <div>
                                        <label className="block text-white font-medium mb-2 text-sm sm:text-base">
                                            {t.form.name}
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-red-400 transition-colors text-sm sm:text-base"
                                            placeholder={t.form.name}
                                            disabled={formStatus === 'sending'}
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-white font-medium mb-2 text-sm sm:text-base">
                                            {t.form.email}
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-red-400 transition-colors text-sm sm:text-base"
                                            placeholder={t.form.email}
                                            disabled={formStatus === 'sending'}
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-white font-medium mb-2 text-sm sm:text-base">
                                            {t.form.subject}
                                        </label>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-red-400 transition-colors text-sm sm:text-base"
                                            placeholder={t.form.subject}
                                            disabled={formStatus === 'sending'}
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-white font-medium mb-2 text-sm sm:text-base">
                                            {t.form.message}
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                            rows={5}
                                            className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-red-400 transition-colors resize-none text-sm sm:text-base"
                                            placeholder={t.form.message}
                                            disabled={formStatus === 'sending'}
                                        />
                                    </div>

                                    <motion.button
                                        type="submit"
                                        disabled={formStatus === 'sending'}
                                        className={`w-full flex items-center justify-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold transition-all text-sm sm:text-base ${
                                            formStatus === 'sending'
                                                ? 'bg-gray-600 cursor-not-allowed'
                                                : 'bg-red-600 hover:bg-red-700'
                                        } text-white shadow-lg`}
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
                                                <Send size={16} className="sm:w-5 sm:h-5" />
                                                <span>{t.form.send}</span>
                                            </>
                                        )}
                                    </motion.button>

                                    {/* Status Messages */}
                                    {formStatus === 'success' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="flex items-center space-x-2 text-green-300 font-medium text-sm sm:text-base p-3 bg-green-500/20 rounded-lg border border-green-500/30"
                                        >
                                            <CheckCircle size={16} className="sm:w-5 sm:h-5" />
                                            <span>{t.form.success}</span>
                                        </motion.div>
                                    )}

                                    {formStatus === 'error' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="flex items-center space-x-2 text-red-300 font-medium text-sm sm:text-base p-3 bg-red-500/20 rounded-lg border border-red-500/30"
                                        >
                                            <AlertCircle size={16} className="sm:w-5 sm:h-5" />
                                            <span>{t.form.error}</span>
                                        </motion.div>
                                    )}
                                </form>
                            </div>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div variants={fadeIn} className="space-y-6 sm:space-y-8">

                            {/* Contact Details */}
                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 shadow-xl">
                                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">{t.contact.title}</h3>

                                <div className="space-y-4 sm:space-y-6">
                                    <div className="flex items-center space-x-3 sm:space-x-4">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                                            <Mail size={18} className="sm:w-5 sm:h-5 text-red-400" />
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-gray-300 text-sm sm:text-base">{t.contact.email}</p>
                                            <p className="text-white font-medium text-sm sm:text-base break-all">{t.info.email}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-3 sm:space-x-4">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                                            <MapPin size={18} className="sm:w-5 sm:h-5 text-red-400" />
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-gray-300 text-sm sm:text-base">{t.contact.location}</p>
                                            <p className="text-white font-medium text-sm sm:text-base">{t.info.location}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-3 sm:space-x-4">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                                            <CheckCircle size={18} className="sm:w-5 sm:h-5 text-green-400" />
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-gray-300 text-sm sm:text-base">{t.contact.availability}</p>
                                            <p className="text-white font-medium text-sm sm:text-base">{t.info.availability}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 shadow-xl">
                                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">{t.social.title}</h3>

                                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                                    <motion.a
                                        href="https://github.com/OmerCeleb"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-white text-sm sm:text-base"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Github size={16} className="sm:w-5 sm:h-5" />
                                        <span>{t.social.github}</span>
                                    </motion.a>

                                    <motion.a
                                        href="https://www.linkedin.com/in/omercelebii/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-white text-sm sm:text-base"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Linkedin size={16} className="sm:w-5 sm:h-5" />
                                        <span>{t.social.linkedin}</span>
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* CTA - Responsive design */}
                    <motion.div variants={fadeIn} className="text-center">
                        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-6 sm:p-8 lg:p-12 shadow-xl">
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                                {t.cta.title}
                            </h3>
                            <div className="max-w-3xl mx-auto">
                                <p className="text-base sm:text-lg md:text-xl text-red-100 mb-6 sm:mb-8 leading-relaxed">
                                    {t.cta.description}
                                </p>
                            </div>
                            <motion.button
                                className="bg-white text-red-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg text-sm sm:text-base"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {t.cta.button}
                            </motion.button>
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
};

export default Contact;