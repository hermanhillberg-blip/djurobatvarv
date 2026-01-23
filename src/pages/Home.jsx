import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import AboutUs from '@/components/AboutUs';
import Gallery from '@/components/Gallery';
import Partners from '@/components/Partners';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />
            <Hero />
            <Services />
            <AboutUs />
            <Gallery />
            <Partners />
            <Contact />
            <Footer />
        </div>
    );
}