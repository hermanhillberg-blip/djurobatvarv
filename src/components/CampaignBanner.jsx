import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function CampaignBanner() {
    const [campaign, setCampaign] = useState(null);
    const [dismissed, setDismissed] = useState(false);

    useEffect(() => {
        // Hämta kampanjdata från Cresvion senare
        // För nu: ingen data = ingenting visas
    }, []);

    // Visa ingenting om det inte finns kampanjdata
    if (!campaign || dismissed) {
        return null;
    }

    return (
        <motion.div
            initial={{ x: '-110%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-110%', opacity: 0 }}
            transition={{ type: 'spring', stiffness: 80, damping: 18 }}
            className="absolute left-6 z-30"
            style={{ top: '38%' }}
        >
            <div className="relative bg-white backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden max-w-sm border border-white/60"
                style={{ boxShadow: '0 8px 40px rgba(30,58,95,0.22)' }}
            >
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
                            src={campaign.image}
                            alt={campaign.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Text */}
                    <div className="px-4 py-4 pr-8 flex flex-col justify-between">
                        <div>
                            <p className="text-xs font-semibold text-[#c41e3a] uppercase tracking-wider mb-0.5">Kampanj</p>
                            <h3 className="text-base font-bold text-[#1e3a5f] leading-tight mb-1.5">
                                {campaign.title}
                            </h3>
                            <p className="text-sm text-slate-600 leading-snug">
                                {campaign.description}
                            </p>
                        </div>

                        {/* CTA */}
                        <Link
                            to={`${createPageUrl('BokaService')}?campaign=${campaign.id}`}
                            className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[#c41e3a] hover:text-[#a31830] transition-colors group"
                        >
                            Boka nu
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}