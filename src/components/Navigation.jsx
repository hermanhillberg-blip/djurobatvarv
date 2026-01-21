import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { label: 'Hem', href: '#' },
    { label: 'Verksamhet', href: '#verksamhet' },
    { label: 'Bildgalleri', href: '#bildgalleri' },
    { label: 'Kontakt', href: '#kontakt' }
];

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (href) => {
        setIsMobileMenuOpen(false);
        if (href === '#') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                    isScrolled 
                        ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' 
                        : 'bg-transparent py-5'
                }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    {/* Logo */}
                    <button 
                        onClick={() => scrollToSection('#')}
                        className="relative z-10"
                    >
                        <img 
                            src="https://djurobatvarv.se/wp-content/uploads/2015/02/Djurobatvarv-vit.png" 
                            alt="Djurö Båtvarv" 
                            className={`h-10 md:h-12 transition-all duration-500 ${
                                isScrolled ? 'brightness-0' : ''
                            }`}
                        />
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link, index) => (
                            <button
                                key={index}
                                onClick={() => scrollToSection(link.href)}
                                className={`font-medium transition-colors duration-300 ${
                                    isScrolled 
                                        ? 'text-slate-700 hover:text-[#1e3a5f]' 
                                        : 'text-white/90 hover:text-white'
                                }`}
                            >
                                {link.label}
                            </button>
                        ))}
                        <a 
                            href="http://seaquip.se/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={`font-medium transition-colors duration-300 ${
                                isScrolled 
                                    ? 'text-[#c41e3a] hover:text-[#a31830]' 
                                    : 'text-[#c41e3a] hover:text-white'
                            }`}
                        >
                            Seaquip
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={`md:hidden p-2 transition-colors ${
                            isScrolled ? 'text-[#1e3a5f]' : 'text-white'
                        }`}
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-x-0 top-16 z-40 md:hidden bg-white shadow-xl rounded-b-2xl mx-4"
                    >
                        <div className="p-6 space-y-4">
                            {navLinks.map((link, index) => (
                                <button
                                    key={index}
                                    onClick={() => scrollToSection(link.href)}
                                    className="block w-full text-left py-3 px-4 text-slate-700 hover:bg-slate-50 rounded-xl font-medium transition-colors"
                                >
                                    {link.label}
                                </button>
                            ))}
                            <a 
                                href="http://seaquip.se/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="block py-3 px-4 text-[#c41e3a] hover:bg-slate-50 rounded-xl font-medium transition-colors"
                            >
                                Seaquip →
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}