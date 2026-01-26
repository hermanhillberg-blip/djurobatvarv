import React from 'react';
import { motion } from 'framer-motion';
import { Anchor } from 'lucide-react';

const staff = [
    {
        name: "Erik Lindström",
        role: "VD / Verksamhetsansvarig",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face&sat=-100"
    },
    {
        name: "Anders Bergqvist",
        role: "Motortekniker",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&sat=-100"
    },
    {
        name: "Johan Nyström",
        role: "Båttekniker",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face&sat=-100"
    },
    {
        name: "Maria Karlsson",
        role: "Kundservice",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face&sat=-100"
    },
    {
        name: "Per Eriksson",
        role: "Servicetekniker",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face&sat=-100"
    },
    {
        name: "Lars Holmberg",
        role: "Glasfibertekniker",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face&sat=-100"
    },
    {
        name: "Magnus Svensson",
        role: "Elektriker",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face&sat=-100"
    },
    {
        name: "Oscar Lindgren",
        role: "Lärling",
        image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop&crop=face&sat=-100"
    }
];

export default function AboutUs() {
    return (
        <section id="om-oss" className="py-24 md:py-32 bg-slate-50">
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
                        Om oss
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a5f] mt-4 mb-6">
                        Djurö Båtvarv sedan 1923
                    </h2>
                </motion.div>

                {/* History Section */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-[#c41e3a]/10 flex items-center justify-center">
                                <Anchor className="w-6 h-6 text-[#c41e3a]" />
                            </div>
                            <h3 className="text-2xl font-semibold text-[#1e3a5f]">Vår historia</h3>
                        </div>
                        <div className="space-y-4 text-slate-600 leading-relaxed">
                            <p>
                                Djurö Båtvarv grundades 1923 och har sedan dess varit en hörnsten i Stockholms 
                                skärgård för båtägare som söker kvalitet och pålitlighet. Med över 100 års 
                                erfarenhet har vi byggt upp en unik kompetens inom allt som rör båtservice 
                                och underhåll.
                            </p>
                            <p>
                                Under åren har varvet utvecklats från ett litet familjeföretag till ett 
                                fullservicevarv med moderna anläggningar och utrustning. Vi har dock aldrig 
                                glömt våra rötter – personlig service och hantverksskicklighet står fortfarande 
                                i centrum för allt vi gör.
                            </p>
                            <p>
                                Idag är vi stolta över att vara auktoriserade servicepartners för flera 
                                ledande motortillverkare och att kunna erbjuda våra kunder ett komplett 
                                utbud av tjänster. Från motorservice och reparationer till förvaring och 
                                försäkringsärenden – allt under samma tak.
                            </p>
                            <p>
                                Vår filosofi är enkel: ni lämnar vid kaj och hämtar vid kaj – vi tar hand 
                                om resten. Det är så vi har arbetat i över hundra år, och det är så vi 
                                fortsätter att arbeta.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <img 
                            src="https://djurobatvarv.se/wp-content/uploads/2015/02/DSC_0270.jpg" 
                            alt="Djurö Båtvarv historia"
                            className="rounded-2xl shadow-xl w-full"
                        />
                        <div className="absolute -bottom-6 -left-6 bg-[#1e3a5f] text-white p-6 rounded-xl shadow-lg">
                            <span className="text-4xl font-bold">100+</span>
                            <p className="text-white/80 text-sm">års erfarenhet</p>
                        </div>
                    </motion.div>
                </div>

                {/* Staff Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h3 className="text-2xl md:text-3xl font-semibold text-[#1e3a5f] mb-4">
                        Möt vårt team
                    </h3>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Bakom varje välskött båt finns ett engagerat team. Lär känna de personer 
                        som tar hand om din båt.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {staff.map((person, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="aspect-square overflow-hidden">
                                <img 
                                    src={person.image} 
                                    alt={person.name}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 grayscale"
                                />
                            </div>
                            <div className="p-5 text-center">
                                <h4 className="font-semibold text-[#1e3a5f] mb-1">{person.name}</h4>
                                <p className="text-slate-500 text-sm">{person.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}