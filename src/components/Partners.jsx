import React from 'react';
import { motion } from 'framer-motion';

const partners = [
    {
        name: "Volvo Penta",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Volvo_Penta_logo.svg/1200px-Volvo_Penta_logo.svg.png"
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
                    className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16"
                >
                    {partners.map((partner, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
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