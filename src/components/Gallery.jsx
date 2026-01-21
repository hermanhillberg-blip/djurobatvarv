import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
    {
        url: "https://djurobatvarv.se/wp-content/uploads/2015/02/DSC_0272.jpg",
        alt: "Djurö Båtvarv hamn"
    },
    {
        url: "https://djurobatvarv.se/wp-content/uploads/2015/02/DSC_0021.jpg",
        alt: "Båtar på varvet"
    },
    {
        url: "https://djurobatvarv.se/wp-content/uploads/2015/02/DSC_0270.jpg",
        alt: "Varvsverksamhet"
    },
    {
        url: "https://djurobatvarv.se/wp-content/uploads/2015/02/220.jpeg",
        alt: "Båtlyft"
    }
];

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openLightbox = (index) => {
        setCurrentIndex(index);
        setSelectedImage(images[index]);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
    };

    const nextImage = (e) => {
        e.stopPropagation();
        const newIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(newIndex);
        setSelectedImage(images[newIndex]);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        const newIndex = (currentIndex - 1 + images.length) % images.length;
        setCurrentIndex(newIndex);
        setSelectedImage(images[newIndex]);
    };

    return (
        <section id="bildgalleri" className="py-24 md:py-32 bg-slate-50">
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
                        Bildgalleri
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e3a5f] mt-4 mb-6">
                        Vårt varv
                    </h2>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                        Se bilder över varvet och hur vi arbetar. Vi sätter säkerhet främst och använder 
                        endast stöttor från Seaquip – de säkraste originalstöttorna med längst livslängd.
                    </p>
                </motion.div>

                {/* Gallery Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {images.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            onClick={() => openLightbox(index)}
                            className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
                        >
                            <img 
                                src={image.url} 
                                alt={image.alt}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-[#1e3a5f]/0 group-hover:bg-[#1e3a5f]/40 transition-colors duration-500 flex items-center justify-center">
                                <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                                    Visa bild
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeLightbox}
                        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
                    >
                        <button 
                            onClick={closeLightbox}
                            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
                        >
                            <X className="w-8 h-8" />
                        </button>

                        <button 
                            onClick={prevImage}
                            className="absolute left-4 md:left-8 text-white/70 hover:text-white transition-colors p-2"
                        >
                            <ChevronLeft className="w-10 h-10" />
                        </button>

                        <motion.img 
                            key={currentIndex}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            src={selectedImage.url} 
                            alt={selectedImage.alt}
                            className="max-w-full max-h-[85vh] object-contain rounded-lg"
                        />

                        <button 
                            onClick={nextImage}
                            className="absolute right-4 md:right-8 text-white/70 hover:text-white transition-colors p-2"
                        >
                            <ChevronRight className="w-10 h-10" />
                        </button>

                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                            {images.map((_, idx) => (
                                <div 
                                    key={idx}
                                    className={`w-2 h-2 rounded-full transition-colors ${
                                        idx === currentIndex ? 'bg-white' : 'bg-white/30'
                                    }`}
                                />
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}