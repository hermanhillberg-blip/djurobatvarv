import React from 'react';
import { Settings } from 'lucide-react';
import ServicePageLayout from '@/components/ServicePageLayout';

export default function Reparationer() {
    return (
        <ServicePageLayout
            title="Reparationer"
            description="Fullständiga reparationer och underhåll för alla typer av fritidsbåtar."
            icon={Settings}
            images={[
                "https://djurobatvarv.se/wp-content/uploads/2015/02/DSC_0270.jpg"
            ]}
            features={[
                "Motoriska reparationer",
                "Skrovreparationer",
                "Elsystem och elektronik",
                "Hydraulik och styrning",
                "Propellrar och drev",
                "Kylsystem",
                "Bränslesystem",
                "Interiör och däck"
            ]}
            content={
                <div className="space-y-4">
                    <p>
                        Med över 100 års erfarenhet har Djurö Båtvarv kompetensen att hantera 
                        alla typer av reparationer på fritidsbåtar. Oavsett om det gäller 
                        motor, skrov, el eller mekanik kan vi hjälpa dig.
                    </p>
                    <p>
                        Vi arbetar med båtar av alla storlekar och material – från mindre 
                        motorbåtar till större segelbåtar och motorkryssare.
                    </p>
                    <h3 className="text-xl font-semibold text-[#1e3a5f] mt-8 mb-4">
                        Mekaniska reparationer
                    </h3>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Motorreparationer och renoveringar</li>
                        <li>Drev- och propellerreparationer</li>
                        <li>Hydraulsystem för styrning och trim</li>
                        <li>Bränslesystem och tankar</li>
                        <li>Kylsystem och värmeväxlare</li>
                        <li>Avgassystem</li>
                    </ul>
                    <h3 className="text-xl font-semibold text-[#1e3a5f] mt-8 mb-4">
                        Skrov och struktur
                    </h3>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Glasfiberreparationer</li>
                        <li>Gelcoat-lagningar</li>
                        <li>Träarbeten och renovering</li>
                        <li>Tätning av genomföringar</li>
                        <li>Osmosbehandling</li>
                    </ul>
                    <h3 className="text-xl font-semibold text-[#1e3a5f] mt-8 mb-4">
                        El och elektronik
                    </h3>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Felsökning och reparation av elsystem</li>
                        <li>Installation av ny elektronik</li>
                        <li>Batterisystem och laddning</li>
                        <li>Belysning</li>
                        <li>Navigation och kommunikation</li>
                    </ul>
                </div>
            }
        />
    );
}