import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
    MapPin, 
    Phone, 
    Mail, 
    Clock, 
    Send,
    Anchor,
    CheckCircle
} from 'lucide-react';
import { toast } from "sonner";

export default function Contact() {
    const [formData, setFormData] = useState({
        service: '',
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setIsSubmitting(false);
        setIsSubmitted(true);
        toast.success("Tack för ditt meddelande! Vi återkommer så snart vi kan.");
        
        setFormData({ service: '', name: '', email: '', phone: '', message: '' });
        
        setTimeout(() => setIsSubmitted(false), 3000);
    };

    return (
        <section id="kontakt" className="py-24 md:py-32 bg-[#1e3a5f]">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-[#c41e3a] font-medium tracking-wider uppercase text-sm">
                        Kontakt
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
                        Varmt välkommen att kontakta oss
                    </h2>
                    <p className="text-white/70 text-lg max-w-2xl mx-auto">
                        Har du frågor om våra tjänster eller vill boka en tid? 
                        Fyll i formuläret eller kontakta oss direkt.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6 h-full flex flex-col"
                    >
                        {/* Info Cards */}
                        <div className="grid sm:grid-cols-2 gap-4 flex-1">
                            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                                <div className="w-12 h-12 rounded-xl bg-[#c41e3a]/20 flex items-center justify-center mb-4">
                                    <MapPin className="w-6 h-6 text-white" />
                                </div>
                                <h4 className="text-white font-semibold mb-2">Adress</h4>
                                <p className="text-white/70 text-sm leading-relaxed">
                                    Djurö Båtvarv AB<br />
                                    Djurö Gårds väg 12<br />
                                    139 73 Djurhamn
                                </p>
                            </div>

                            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                                <div className="w-12 h-12 rounded-xl bg-[#c41e3a]/20 flex items-center justify-center mb-4">
                                    <Phone className="w-6 h-6 text-white" />
                                </div>
                                <h4 className="text-white font-semibold mb-2">Telefon & Jour</h4>
                                <a 
                                    href="tel:08-5715042" 
                                    className="text-white/70 text-sm hover:text-white transition-colors"
                                >
                                    08-571 504 28
                                </a>
                            </div>

                            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                                <div className="w-12 h-12 rounded-xl bg-[#c41e3a]/20 flex items-center justify-center mb-4">
                                    <Mail className="w-6 h-6 text-white" />
                                </div>
                                <h4 className="text-white font-semibold mb-2">E-post</h4>
                                <a 
                                    href="mailto:infos@seaquip.se" 
                                    className="text-white/70 text-sm hover:text-white transition-colors"
                                >
                                    infos@seaquip.se
                                </a>
                            </div>

                            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                                <div className="w-12 h-12 rounded-xl bg-[#c41e3a]/20 flex items-center justify-center mb-4">
                                    <Clock className="w-6 h-6 text-white" />
                                </div>
                                <h4 className="text-white font-semibold mb-2">Öppettider</h4>
                                <p className="text-white/70 text-sm">
                                    Mån – Tors: 07:00 – 16:30<br />
                                    Fredag: 07:00 – 14:00
                                </p>
                            </div>
                        </div>

                        {/* Bottom row - Coordinates & Seaquip */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            {/* Coordinates Link */}
                            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                                <div className="w-12 h-12 rounded-xl bg-[#c41e3a]/20 flex items-center justify-center mb-4">
                                    <MapPin className="w-6 h-6 text-white" />
                                </div>
                                <h4 className="text-white font-semibold mb-2">Koordinater</h4>
                                <p className="text-white/70 text-sm mb-3">
                                    Lat: 59° 18' 21.43"N<br />
                                    Long: 18° 41' 12.08"E
                                </p>
                                <a 
                                    href="https://www.google.com/maps?q=59.305953,18.686689" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-white text-sm font-medium hover:underline"
                                >
                                    Öppna i Google Maps →
                                </a>
                            </div>

                            {/* Seaquip Link */}
                            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                                <div className="w-12 h-12 rounded-xl bg-[#c41e3a]/20 flex items-center justify-center mb-4">
                                    <Anchor className="w-6 h-6 text-white" />
                                </div>
                                <h4 className="text-white font-semibold mb-2">Seaquip Båtstöttor</h4>
                                <p className="text-white/70 text-sm mb-3">
                                    Vi är återförsäljare av Seaquip – de säkraste originalstöttorna.
                                </p>
                                <a 
                                    href="http://seaquip.se/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-[#c41e3a] text-sm font-medium hover:underline"
                                >
                                    Besök seaquip.se →
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-white">
                            <h3 className="text-xl font-semibold text-[#1e3a5f] mb-6">
                                Skicka meddelande
                            </h3>
                            
                            <div className="space-y-5">
                                <div>
                                    <Label htmlFor="service" className="text-slate-700">Vad gäller ditt ärende?</Label>
                                    <Select
                                        value={formData.service}
                                        onValueChange={(value) => setFormData({...formData, service: value})}
                                    >
                                        <SelectTrigger className="mt-1.5">
                                            <SelectValue placeholder="Välj tjänst" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="motorservice">Motorservice</SelectItem>
                                            <SelectItem value="reparation">Reparationer</SelectItem>
                                            <SelectItem value="sommarforvaring">Sommarförvaring</SelectItem>
                                            <SelectItem value="vinterforvaring">Vinterförvaring</SelectItem>
                                            <SelectItem value="forsakring">Försäkringsärende</SelectItem>
                                            <SelectItem value="annat">Övrigt</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div>
                                    <Label htmlFor="name" className="text-slate-700">Namn</Label>
                                    <Input
                                        id="name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                        placeholder="Ditt namn"
                                        required
                                        className="mt-1.5"
                                    />
                                </div>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <Label htmlFor="email" className="text-slate-700">E-post</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                                            placeholder="din@email.se"
                                            required
                                            className="mt-1.5"
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="phone" className="text-slate-700">Telefon</Label>
                                        <Input
                                            id="phone"
                                            type="tel"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                            placeholder="070-123 45 67"
                                            className="mt-1.5"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <Label htmlFor="message" className="text-slate-700">Meddelande</Label>
                                    <Textarea
                                        id="message"
                                        value={formData.message}
                                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                                        placeholder="Beskriv ditt ärende..."
                                        required
                                        className="mt-1.5 min-h-[140px] resize-none"
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    disabled={isSubmitting || isSubmitted}
                                    className="w-full py-6 bg-[#1e3a5f] hover:bg-[#152d4d] text-white font-medium rounded-xl transition-all duration-300"
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center gap-2">
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            Skickar...
                                        </span>
                                    ) : isSubmitted ? (
                                        <span className="flex items-center gap-2">
                                            <CheckCircle className="w-5 h-5" />
                                            Skickat!
                                        </span>
                                    ) : (
                                        <span className="flex items-center gap-2">
                                            <Send className="w-5 h-5" />
                                            Skicka meddelande
                                        </span>
                                    )}
                                </Button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}