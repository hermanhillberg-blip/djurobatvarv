import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Tag, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { base44 } from '@/api/base44Client';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Campaigns() {
    const [campaigns, setCampaigns] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCampaigns = async () => {
            try {
                const response = await base44.functions.invoke('getCampaigns', {});
                if (response.data.success) {
                    setCampaigns(response.data.campaigns);
                }
            } catch (error) {
                console.error('Failed to fetch campaigns:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchCampaigns();
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            {/* Hero */}
            <div className="relative bg-[#1e3a5f] pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 bg-[#c41e3a]/20 text-[#e87a8a] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                            <Tag className="w-4 h-4" />
                            Aktuella erbjudanden
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Kampanjer</h1>
                        <p className="text-white/70 text-lg max-w-xl mx-auto">
                            Håll koll på våra aktuella erbjudanden och kampanjer – tidsbegränsade priser på utvalda tjänster.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Campaigns Grid */}
            <div className="max-w-5xl mx-auto px-6 py-16">
                {loading ? (
                    <div className="flex justify-center py-20">
                        <div className="w-8 h-8 border-4 border-slate-200 border-t-[#1e3a5f] rounded-full animate-spin" />
                    </div>
                ) : campaigns.length === 0 ? (
                    <div className="text-center py-20 text-slate-400">
                        <Tag className="w-12 h-12 mx-auto mb-4 opacity-30" />
                        <p className="text-lg">Inga aktiva kampanjer just nu.</p>
                        <p className="text-sm mt-1">Kom tillbaka snart – nya erbjudanden är på gång!</p>
                    </div>
                ) : (
                    <div className="grid gap-8 md:grid-cols-2">
                        {campaigns.map((campaign, index) => (
                            <motion.div
                                key={campaign.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-xl transition-shadow duration-300"
                            >
                                {campaign.imageUrl && (
                                    <div className="aspect-video w-full overflow-hidden">
                                        <img
                                            src={campaign.imageUrl}
                                            alt={campaign.title}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                )}
                                <div className="p-6">
                                    <p className="text-xs font-semibold text-[#c41e3a] uppercase tracking-wider mb-2">Kampanj</p>
                                    <h2 className="text-xl font-bold text-[#1e3a5f] mb-3">{campaign.title}</h2>
                                    <p className="text-slate-600 leading-relaxed mb-5">{campaign.description}</p>
                                    {campaign.targetUrl ? (
                                        <a
                                            href={campaign.targetUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-sm font-semibold text-[#c41e3a] hover:text-[#a31830] transition-colors group"
                                        >
                                            Läs mer
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                                        </a>
                                    ) : (
                                        <Link
                                            to={`/BokaService?campaign=${campaign.id}&title=${encodeURIComponent(campaign.title)}`}
                                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#c41e3a] hover:bg-[#a31830] text-white text-sm font-semibold rounded-full transition-colors"
                                        >
                                            Boka nu
                                            <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}

                <div className="mt-12 text-center">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-slate-500 hover:text-[#1e3a5f] transition-colors text-sm"
                    >
                        <ChevronLeft className="w-4 h-4" />
                        Tillbaka till startsidan
                    </Link>
                </div>
            </div>

            <Footer />
        </div>
    );
}