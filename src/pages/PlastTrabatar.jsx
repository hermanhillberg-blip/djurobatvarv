import React from 'react';
import { Ship } from 'lucide-react';
import ServicePageLayout from '@/components/ServicePageLayout';

export default function PlastTrabatar() {
    return (
        <ServicePageLayout
            title="Plast & Träbåtar"
            description="Expertis inom både moderna plastbåtar och traditionella träbåtar."
            icon={Ship}
            images={[
                "https://djurobatvarv.se/wp-content/uploads/2015/02/DSC_0270.jpg"
            ]}
            features={[
                "GRP/plastbåtar reparation",
                "Träbåtsrenovering",
                "Gelcoat-reparationer",
                "Bottenmålning",
                "Osmosbehandling",
                "Tätning och fogning",
                "Däcksreparationer",
                "Strukturella reparationer"
            ]}
            content={
                <div className="space-y-4">
                    <p>
                        På Djurö Båtvarv har vi mångårig erfarenhet av att arbeta med alla typer 
                        av båtar – från moderna plastbåtar till klassiska träbåtar. Oavsett 
                        vilket material din båt är byggd av kan vi hjälpa dig med reparationer 
                        och underhåll.
                    </p>
                    <h3 className="text-xl font-semibold text-[#1e3a5f] mt-8 mb-4">
                        Plastbåtar
                    </h3>
                    <p>
                        För plastbåtar utför vi allt från mindre gelcoat-reparationer till 
                        större strukturella arbeten. Vi har kompetens och utrustning för att 
                        hantera osmosbehandlingar, bottenmålning och alla typer av 
                        glasfiberarbeten.
                    </p>
                    <h3 className="text-xl font-semibold text-[#1e3a5f] mt-8 mb-4">
                        Träbåtar
                    </h3>
                    <p>
                        Traditionella träbåtar kräver särskild omsorg och kunskap. Vi har den 
                        hantverksskicklighet som krävs för att underhålla och renovera träbåtar 
                        på rätt sätt. Från mindre reparationer till mer omfattande 
                        renoveringsarbeten.
                    </p>
                    <h3 className="text-xl font-semibold text-[#1e3a5f] mt-8 mb-4">
                        Vanliga arbeten
                    </h3>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Skrovslipning och bottenmålning</li>
                        <li>Gelcoat-reparationer och polering</li>
                        <li>Osmosbehandling och förebyggande åtgärder</li>
                        <li>Tätning av genomföringar och beslag</li>
                        <li>Däcksreparationer och förnyelse</li>
                        <li>Byte av plankor och spant på träbåtar</li>
                        <li>Lackering och fernissning</li>
                    </ul>
                </div>
            }
        />
    );
}