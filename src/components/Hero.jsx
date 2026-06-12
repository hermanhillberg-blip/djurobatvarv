import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ChevronDown } from 'lucide-react';
import WeatherWidget from './WeatherWidget';
import CampaignBanner from './CampaignBanner';

const heroImages = [
    "https://raw.githubusercontent.com/hermanhillberg-blip/djurobatvarv/main/src/img/hero_spring.jpeg",
    "https://media.base44.com/images/public/69711fb41d1de3dee1eee0b9/e4303b1d8_DSCF4567.jpg",
    "https://media.base44.com/images/public/69711fb41d1de3dee1eee0b9/41dd1c6c4_DSCF4571.jpg",
    "https://media.base44.com/images/public/69711fb41d1de3dee1eee0b9/d207edb95_8b912208-fd6e-4c57-b299-14c5d11c3396.jpg",
    "https://media.base44.com/images/public/69711fb41d1de3dee1eee0b9/aa7fbf4e9_47f673dd-9a75-4d2e-bb19-24fc82646c97.jpg",
    "https://media.base44.com/images/public/69711fb41d1de3dee1eee0b9/945a21fc2_94f956bd-7ddd-4668-a7b4-3031f02122c2.jpg",
    "https://media.base44.com/images/public/69711fb41d1de3dee1eee0b9/4d485233c_22870b02-4673-4fa4-9238-b179bc107027.jpg",
];

export default function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const scrollToServices = () => {
        document.getElementById('verksamhet')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Slideshow */}
            <div className="absolute inset-0">
                <AnimatePresence mode="sync">
                    <motion.img
                        key={currentIndex}
                        src={heroImages[currentIndex]}
                        alt=""
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute inset-0 w-full h-full object-cover object-center"
                    />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-b from-[#1e3a5f]/30 via-[#1e3a5f]/15 to-[#1e3a5f]/40" />
            </div>

            {/* Content */}
            {/* Desktop: text högt uppe, knappar/väder långt ned via absolut positionering */}
            {/* Mobil: normal centrerad flex-layout */}
            <div className="relative z-10 text-center px-6 max-w-5xl mx-auto w-full md:mt-[-45vh]">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-white text-2xl md:text-3xl lg:text-4xl font-medium tracking-wide mb-4 drop-shadow-lg"
                >
                    Fullservicevarv i Stockholms skärgård sedan 1923
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-white text-base md:text-lg max-w-4xl mx-auto mb-12 drop-shadow-md"
                >
                    Vi tar hand om din båt – från service och reparationer till förvaring. 
                    Allt under samma tak.
                </motion.p>

                {/* Knappar + väder: på mobil direkt under texten, på desktop absolut längst ned */}
                <div className="md:hidden">
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                        <a href="#kontakt" className="px-8 py-4 bg-[#c41e3a] hover:bg-[#a31830] text-white font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#c41e3a]/30">Kontakta oss</a>
                        <Link to={createPageUrl('BokaService')} className="px-8 py-4 bg-white hover:bg-white/90 text-[#1e3a5f] font-medium rounded-full transition-all duration-300 hover:shadow-lg">Boka service</Link>
                        <a href="#tjanster" className="px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium rounded-full border border-white/30 transition-all duration-300">Våra tjänster</a>
                    </div>
                    <div className="flex justify-center mt-4">
                        <WeatherWidget />
                    </div>
                </div>
            </div>

            {/* Desktop: knappar + väder absolut längst ned */}
            <div className="hidden md:block absolute bottom-16 left-1/2 -translate-x-1/2 w-full text-center px-6 z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-row gap-4 justify-center items-center mb-8"
                >
                    <a href="#kontakt" className="px-8 py-4 bg-[#c41e3a] hover:bg-[#a31830] text-white font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#c41e3a]/30">Kontakta oss</a>
                    <Link to={createPageUrl('BokaService')} className="px-8 py-4 bg-white hover:bg-white/90 text-[#1e3a5f] font-medium rounded-full transition-all duration-300 hover:shadow-lg">Boka service</Link>
                    <a href="#tjanster" className="px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium rounded-full border border-white/30 transition-all duration-300">Våra tjänster</a>
                    <Link to="/campaigns" className="px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium rounded-full border border-white/30 transition-all duration-300">Kampanjer</Link>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex justify-center"
                >
                    <WeatherWidget />
                </motion.div>
            </div>

            {/* Campaign Banner */}
            <CampaignBanner />

            {/* Scroll Indicator */}
            <motion.button
                onClick={scrollToServices}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ 
                    opacity: { duration: 1, delay: 1.2 },
                    y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors"
            >
                <ChevronDown className="w-8 h-8" />
            </motion.button>
        </section>
    );
}