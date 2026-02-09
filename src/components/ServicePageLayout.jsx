import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowLeft, Phone, Mail, Home, ChevronRight } from 'lucide-react';
import Navigation from './Navigation';
import Footer from './Footer';

export default function ServicePageLayout({ 
    title, 
    description, 
    icon: Icon, 
    images = [], 
    content,
    features = []
}) {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />
            
            {/* Hero */}
            <section className="pt-32 pb-16 bg-[#1e3a5f]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center gap-2 text-white/70 text-sm mb-8">
                        <Link 
                            to={createPageUrl('Home')} 
                            className="hover:text-white transition-colors flex items-center gap-1"
                        >
                            <Home className="w-4 h-4" />
                            Hem
                        </Link>
                        <ChevronRight className="w-4 h-4" />
                        <a 
                            href={createPageUrl('Home')}
                            onClick={(e) => {
                                e.preventDefault();
                                window.location.href = createPageUrl('Home') + '#tjanster';
                            }}
                            className="hover:text-white transition-colors"
                        >
                            Tjänster
                        </a>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-white">{title}</span>
                    </div>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-4 mb-6"
                    >
                        {Icon && (
                            <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center">
                                <Icon className="w-7 h-7 text-white" />
                            </div>
                        )}
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                            {title}
                        </h1>
                    </motion.div>
                    
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-white/80 text-lg max-w-3xl"
                    >
                        {description}
                    </motion.p>
                </div>
            </section>

            {/* Content */}
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            {images.length > 0 && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className="mb-10"
                                >
                                    <img 
                                        src={images[0]} 
                                        alt={title}
                                        className="w-full rounded-2xl shadow-lg"
                                    />
                                </motion.div>
                            )}

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="prose prose-lg max-w-none text-slate-600"
                            >
                                {content}
                            </motion.div>

                            {features.length > 0 && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    className="mt-10 grid sm:grid-cols-2 gap-4"
                                >
                                    {features.map((feature, index) => (
                                        <div 
                                            key={index}
                                            className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl"
                                        >
                                            <div className="w-2 h-2 rounded-full bg-[#c41e3a] mt-2" />
                                            <span className="text-slate-700">{feature}</span>
                                        </div>
                                    ))}
                                </motion.div>
                            )}

                            {images.length > 1 && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    className="mt-10 grid sm:grid-cols-2 gap-4"
                                >
                                    {images.slice(1).map((img, index) => (
                                        <img 
                                            key={index}
                                            src={img} 
                                            alt={`${title} bild ${index + 2}`}
                                            className="w-full rounded-xl shadow-md"
                                        />
                                    ))}
                                </motion.div>
                            )}
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="sticky top-28 space-y-6"
                            >
                                <div className="p-6 bg-[#1e3a5f] rounded-2xl text-white">
                                    <h3 className="font-semibold text-lg mb-4">Kontakta oss</h3>
                                    <p className="text-white/70 text-sm mb-6">
                                        Har du frågor om {title.toLowerCase()}? Kontakta oss så hjälper vi dig.
                                    </p>
                                    <div className="space-y-3">
                                        <a 
                                            href="tel:08-5715042" 
                                            className="flex items-center gap-3 text-white/90 hover:text-white transition-colors"
                                        >
                                            <Phone className="w-5 h-5" />
                                            08-571 504 28
                                        </a>
                                        <a 
                                            href="mailto:infos@seaquip.se" 
                                            className="flex items-center gap-3 text-white/90 hover:text-white transition-colors"
                                        >
                                            <Mail className="w-5 h-5" />
                                            infos@seaquip.se
                                        </a>
                                    </div>
                                </div>

                                <div className="p-6 bg-slate-50 rounded-2xl">
                                    <h3 className="font-semibold text-[#1e3a5f] mb-4">Öppettider</h3>
                                    <div className="space-y-2 text-sm text-slate-600">
                                        <div className="flex justify-between">
                                            <span>Måndag – Torsdag</span>
                                            <span className="font-medium">07:00 – 16:30</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Fredag</span>
                                            <span className="font-medium">07:00 – 14:00</span>
                                        </div>
                                    </div>
                                </div>

                                <Link 
                                    to={createPageUrl('BokaService')}
                                    className="block w-full py-4 bg-[#c41e3a] hover:bg-[#a31830] text-white font-medium rounded-xl text-center transition-colors"
                                >
                                    Skicka förfrågan
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}