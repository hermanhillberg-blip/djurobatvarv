import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { 
    Anchor, 
    Wrench, 
    Warehouse, 
    ShieldCheck, 
    Ship, 
    Settings,
    Snowflake,
    Droplets,
    ChevronRight
} from 'lucide-react';

const services = [
    {
        icon: Wrench,
        title: "Motorservice",
        description: "Auktoriserad service av Yamaha, Volvo Penta, Yanmar, Mercury, Selva och Mercruiser.",
        page: "motorservice"
    },
    {
        icon: Ship,
        title: "Plast & Träbåtar",
        description: "Vi arbetar med både plastbåtar och traditionella träbåtar med samma expertis.",
        page: "plast-och-trabatar"
    },
    {
        icon: Warehouse,
        title: "Sommarförvaring",
        description: "Nyckelfärdig sommarförvaring med full service – lämna och hämta vid kaj.",
        page: "sommarforvaring"
    },
    {
        icon: Snowflake,
        title: "Vinterförvaring",
        description: "Säker och skyddad vinterförvaring med professionella Seaquip båtstöttor.",
        page: "vinterforvaring"
    },
    {
        icon: Settings,
        title: "Reparationer",
        description: "Fullständiga reparationer och underhåll för alla typer av fritidsbåtar.",
        page: "reparationer"
    },
    {
        icon: ShieldCheck,
        title: "Försäkringsärenden",
        description: "Vi arbetar mot samtliga försäkringsbolag för smidig hantering av skador.",
        page: "forsakringsarenden"
    },
    {
        icon: Anchor,
        title: "Seaquip Båtstöttor",
        description: "Återförsäljare av Seaquip – de säkraste originalstöttorna med längst livslängd.",
        page: "seaquip-batstottor"
    },
    {
        icon: Droplets,
        title: "Tvätt",
        description: "Professionell båttvätt och bottentvätt för att hålla din båt i toppskick.",
        page: "tvatt"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Services() {
    return (
        <section id="tjanster" className="py-24 md:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 md:mb-20"
                >
                    <span className="text-[#c41e3a] font-medium tracking-wider uppercase text-sm">
                        Våra tjänster
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a5f] mt-4 mb-6">
                        Tjänster
                    </h2>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
                        Djurö Båtvarv är ett fullservicevarv lokaliserat i centrala Stockholms skärgård. 
                        Vi gör helt enkelt allt under samma tak.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-5"
                >
                    {services.map((service, index) => (
                        <Link key={index} to={createPageUrl(service.page)}>
                            <motion.div
                                variants={itemVariants}
                                className="group p-5 rounded-xl bg-slate-50 hover:bg-[#1e3a5f] transition-all duration-500 cursor-pointer h-full"
                            >
                                <div className="w-10 h-10 rounded-lg bg-[#1e3a5f]/10 group-hover:bg-white/20 flex items-center justify-center mb-4 transition-colors duration-500">
                                    <service.icon className="w-5 h-5 text-[#1e3a5f] group-hover:text-white transition-colors duration-500" />
                                </div>
                                <h3 className="text-base font-semibold text-[#1e3a5f] group-hover:text-white mb-2 transition-colors duration-500">
                                    {service.title}
                                </h3>
                                <p className="text-slate-600 group-hover:text-white/80 text-sm leading-relaxed transition-colors duration-500 mb-3">
                                    {service.description}
                                </p>
                                <span className="text-[#c41e3a] group-hover:text-white/90 text-sm font-medium flex items-center gap-1 transition-colors duration-500">
                                    Läs mer <ChevronRight className="w-4 h-4" />
                                </span>
                            </motion.div>
                        </Link>
                    ))}
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-16"
                >
                    <p className="text-slate-600 mb-6">
                        Ni lämnar vid kaj och hämtar vid kaj – vi tar hand om resten.
                    </p>
                    <a 
                        href="#kontakt"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-[#1e3a5f] hover:bg-[#152d4d] text-white font-medium rounded-full transition-all duration-300 hover:shadow-lg"
                    >
                        <Anchor className="w-5 h-5" />
                        Boka service
                    </a>
                </motion.div>
            </div>
        </section>
    );
}