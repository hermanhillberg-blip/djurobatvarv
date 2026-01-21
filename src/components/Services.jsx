import React from 'react';
import { motion } from 'framer-motion';
import { 
    Anchor, 
    Wrench, 
    Warehouse, 
    ShieldCheck, 
    Ship, 
    Settings,
    Snowflake,
    Sun
} from 'lucide-react';

const services = [
    {
        icon: Wrench,
        title: "Motorservice",
        description: "Auktoriserad service av Yamaha, Volvo Penta, Yanmar, Mercury, Selva och Mercruiser."
    },
    {
        icon: Ship,
        title: "Plast & Träbåtar",
        description: "Vi arbetar med både plastbåtar och traditionella träbåtar med samma expertis."
    },
    {
        icon: Warehouse,
        title: "Sommarförvaring",
        description: "Nyckelfärdig sommarförvaring med full service – lämna och hämta vid kaj."
    },
    {
        icon: Snowflake,
        title: "Vinterförvaring",
        description: "Säker och skyddad vinterförvaring med professionella Seaquip båtstöttor."
    },
    {
        icon: Settings,
        title: "Reparationer",
        description: "Fullständiga reparationer och underhåll för alla typer av fritidsbåtar."
    },
    {
        icon: ShieldCheck,
        title: "Försäkringsärenden",
        description: "Vi arbetar mot samtliga försäkringsbolag för smidig hantering av skador."
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
        <section id="verksamhet" className="py-24 md:py-32 bg-white">
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
                        Vår verksamhet
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
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group p-8 rounded-2xl bg-slate-50 hover:bg-[#1e3a5f] transition-all duration-500 cursor-default"
                        >
                            <div className="w-14 h-14 rounded-xl bg-[#1e3a5f]/10 group-hover:bg-white/20 flex items-center justify-center mb-6 transition-colors duration-500">
                                <service.icon className="w-7 h-7 text-[#1e3a5f] group-hover:text-white transition-colors duration-500" />
                            </div>
                            <h3 className="text-xl font-semibold text-[#1e3a5f] group-hover:text-white mb-3 transition-colors duration-500">
                                {service.title}
                            </h3>
                            <p className="text-slate-600 group-hover:text-white/80 leading-relaxed transition-colors duration-500">
                                {service.description}
                            </p>
                        </motion.div>
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