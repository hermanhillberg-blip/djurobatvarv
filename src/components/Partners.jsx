import React from 'react';
import { motion } from 'framer-motion';

const partners = [
    {
        name: "Volvo Penta",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Volvo_Penta_stacked_wordmark.svg"
    },
    {
        name: "Yamaha",
        logo: "https://djurobatvarv.se/wp-content/uploads/2015/02/yamaha-logo.gif"
    },
    {
        name: "Yanmar",
        logo: "https://djurobatvarv.se/wp-content/uploads/2015/02/Yanmar-09.jpg"
    },
    {
        name: "Mercruiser",
        logo: "https://djurobatvarv.se/wp-content/uploads/2015/02/mercruiser.gif"
    },
    {
        name: "Mercury",
        logo: "https://djurobatvarv.se/wp-content/uploads/2015/02/Unknown-3-300x86.png"
    },
    {
        name: "SweBoat",
        logo: "https://djurobatvarv.se/wp-content/uploads/2015/02/SweBoat-logga-e1481716273781.png"
    }
];

export default function Partners() {
    return (
        <section className="py-16 md:py-20 bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="text-slate-500 font-medium tracking-wider uppercase text-sm">
                        Auktoriserad service
                    </span>
                    <h3 className="text-xl md:text-2xl font-semibold text-[#1e3a5f] mt-3">
                        Våra samarbetspartners
                    </h3>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col items-center gap-8"
                >
                    {/* Första raden: de 5 första partners */}
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-10">
                        {partners.slice(0, 5).map((partner, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="hover:scale-105 transition-all duration-300"
                            >
                                <img 
                                   src={partner.logo} 
                                   alt={partner.name}
                                   className={`object-contain ${partner.name === 'Volvo Penta' ? 'h-7 md:h-8' : 'h-10 md:h-12'}`}
                                />
                            </motion.div>
                        ))}
                    </div>
                    {/* Andra raden: SweBoat centrerat */}
                    {partners.slice(5).map((partner, index) => (
                        <motion.div
                            key={index + 5}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="hover:scale-105 transition-all duration-300"
                        >
                            <img 
                               src={partner.logo} 
                               alt={partner.name}
                               className="h-10 md:h-12 object-contain"
                            />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Volvo Penta Jour */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 p-6 md:p-8 bg-slate-50 rounded-2xl text-center"
                >
                    <h4 className="text-lg font-semibold text-[#1e3a5f] mb-2">
                        Volvo Penta Jour
                    </h4>
                    <p className="text-slate-600 mb-4">
                        Har du akuta problem utanför ordinarie öppettider?
                    </p>
                    <a 
                        href="tel:+3292556967"
                        className="text-[#c41e3a] font-semibold text-lg hover:underline"
                    >
                        +32 9 255 69 67
                    </a>
                    <p className="text-slate-500 text-sm mt-2">
                        Volvo Penta Actionservice
                    </p>
                </motion.div>
            </div>
        </section>
    );
}