import React from 'react';
import { Snowflake } from 'lucide-react';
import ServicePageLayout from '@/components/ServicePageLayout';

export default function Vinterforvaring() {
    return (
        <ServicePageLayout
            title="Vinterförvaring"
            description="Säker och skyddad vinterförvaring med professionella Seaquip båtstöttor."
            icon={Snowflake}
            images={[
                "https://djurobatvarv.se/wp-content/uploads/2015/02/DSC_0021.jpg"
            ]}
            features={[
                "Seaquip originalstöttor",
                "Inomhus- och utomhusförvaring",
                "Säker och skyddad miljö",
                "Upptag och sjösättning",
                "Vinterkonservering",
                "Service under vintern",
                "Täckning och presenning",
                "Avkonservering på våren"
            ]}
            content={
                <div className="space-y-4">
                    <p>
                        Djurö Båtvarv erbjuder professionell vinterförvaring för din båt. Vi 
                        använder uteslutande Seaquip båtstöttor – de säkraste originalstöttorna 
                        med längst livslängd på marknaden.
                    </p>
                    <p>
                        Säkerhet är vår högsta prioritet. Varje båt ställs upp med omsorg och 
                        kontrolleras regelbundet under hela vinterförvaringen.
                    </p>
                    <h3 className="text-xl font-semibold text-[#1e3a5f] mt-8 mb-4">
                        Förvaringsalternativ
                    </h3>
                    <p>
                        Vi erbjuder både inomhus- och utomhusförvaring beroende på dina behov 
                        och båtens storlek. Inomhusförvaring ger extra skydd mot väder och vind, 
                        medan utomhusförvaring med täckning är ett prisvärt alternativ.
                    </p>
                    <h3 className="text-xl font-semibold text-[#1e3a5f] mt-8 mb-4">
                        Vinterförvaringspaketet inkluderar
                    </h3>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Upptag med kran</li>
                        <li>Högtryckstvätt av skrov och botten</li>
                        <li>Uppställning på Seaquip-stöttor</li>
                        <li>Vinterkonservering av motor (tillval)</li>
                        <li>Täckning med presenning (tillval)</li>
                        <li>Sjösättning på våren</li>
                        <li>Avkonservering (tillval)</li>
                    </ul>
                    <h3 className="text-xl font-semibold text-[#1e3a5f] mt-8 mb-4">
                        Service under vintern
                    </h3>
                    <p>
                        Vintern är den perfekta tiden att se över din båt. Vi kan utföra 
                        service, reparationer och underhåll medan båten står på land, så att 
                        den är redo för sjösättning när våren kommer.
                    </p>
                </div>
            }
        />
    );
}