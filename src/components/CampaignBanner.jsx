import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

// MOCKUP-DATA – ersätts senare med riktig data från Cresvion
const MOCK_CAMPAIGN = {
    title: "Kampanjveckor!",
    description: "Vecka 21 & 22 har vi 15% rabatt på all motorservice inkl. delar. Perfekt inför sjösättningen!",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=160&fit=crop",
    link: null, // Länk till bokningsformulär sätts senare
};

export default function CampaignBanner() {
    const [visible, setVisible] = useState(false);
    const [dismissed, setDismissed] = useState(false);

    useEffect(() => {
        // Liten fördröjning innan den glider in
        const timer = setTimeout(() => setVisible(true), 1200);
        return () => clearTimeout(timer);
    }, []);

    if (dismissed) return null;

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ x: '-110%', opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: '-110%', opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 80, damping: 18 }}
                    className="absolute left-6 z-30"
                    style={{ top: '38%' }}
                >
                    <div className="relative bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden max-w-sm border border-white/40"
                        style={{ boxShadow: '0 8px 40px rgba(30,58,95,0.22)' }}
                    >
                        {/* Övre accent-linje i varumärkesfärgen */}
                        <div className="h-1 w-full bg-gradient-to-r from-[#1e3a5f] to-[#c41e3a]" />

                        {/* Stäng-knapp */}
                        <button
                            onClick={() => setDismissed(true)}
                            className="absolute top-3 right-3 w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors z-10"
                            aria-label="Stäng kampanj"
                        >
                            <X className="w-3.5 h-3.5 text-slate-500" />
                        </button>

                        <div className="flex items-stretch">
                            {/* Bild */}
                            <div className="w-28 flex-shrink-0">
                                <img
                                    src={MOCK_CAMPAIGN.image}
                                    alt={MOCK_CAMPAIGN.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Text */}
                            <div className="px-4 py-4 pr-8 flex flex-col justify-between">
                                <div>
                                    <p className="text-xs font-semibold text-[#c41e3a] uppercase tracking-wider mb-0.5">Kampanj</p>
                                    <h3 className="text-base font-bold text-[#1e3a5f] leading-tight mb-1.5">
                                        {MOCK_CAMPAIGN.title}
                                    </h3>
                                    <p className="text-sm text-slate-600 leading-snug">
                                        {MOCK_CAMPAIGN.description}
                                    </p>
                                </div>

                                {/* CTA */}
                                <Link
                                    to={createPageUrl('BokaService')}
                                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[#c41e3a] hover:text-[#a31830] transition-colors group"
                                >
                                    Boka nu
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}