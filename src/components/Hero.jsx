import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ChevronDown, Anchor } from 'lucide-react';
import WeatherWidget from './WeatherWidget';

export default function Hero() {
    const scrollToServices = () => {
        document.getElementById('verksamhet')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url(https://media.base44.com/images/public/69711fb41d1de3dee1eee0b9/8a2da2b6f_DSCF4561.jpg)'
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-[#1e3a5f]/30 via-[#1e3a5f]/15 to-[#1e3a5f]/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
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

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <a 
                        href="#kontakt"
                        className="px-8 py-4 bg-[#c41e3a] hover:bg-[#a31830] text-white font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#c41e3a]/30"
                    >
                        Kontakta oss
                    </a>
                    <Link 
                        to={createPageUrl('BokaService')}
                        className="px-8 py-4 bg-white hover:bg-white/90 text-[#1e3a5f] font-medium rounded-full transition-all duration-300 hover:shadow-lg"
                    >
                        Boka service
                    </Link>
                    <a 
                        href="#tjanster"
                        className="px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium rounded-full border border-white/30 transition-all duration-300"
                    >
                        Våra tjänster
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-12 flex justify-center"
                >
                    <WeatherWidget />
                </motion.div>

                </div>

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