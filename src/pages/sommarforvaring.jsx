import React from 'react';
import { Warehouse } from 'lucide-react';
import ServicePageLayout from '@/components/ServicePageLayout';

export default function sommarforvaring() {
    return (
        <ServicePageLayout
            title="Sommarförvaring"
            description="Nyckelfärdig sommarförvaring med full service – lämna och hämta vid kaj."
            icon={Warehouse}
            images={[
                "https://djurobatvarv.se/wp-content/uploads/2015/02/DSC_0272.jpg"
            ]}
            features={[
                "Säker bryggplats",
                "Sjösättning och upptag ingår",
                "Service under säsongen",
                "Eluttag vid brygga",
                "Avfallshantering",
                "Centralt läge i skärgården",
                "Parkering",
                "Full varvsservice på plats"
            ]}
            content={
                <div className="space-y-4">
                    <p>
                        Djurö Båtvarv erbjuder sommarförvaring för din båt i ett av skärgårdens 
                        bästa lägen. Hos oss får du en trygg och bekväm bryggplats med tillgång 
                        till all den service du behöver.
                    </p>
                    <p>
                        Vår filosofi är enkel – du lämnar båten vid kaj på våren och hämtar den 
                        vid kaj på hösten. Vi tar hand om resten, inklusive sjösättning, upptag 
                        och all service däremellan.
                    </p>
                    <h3 className="text-xl font-semibold text-[#1e3a5f] mt-8 mb-4">
                        Fördelar med sommarförvaring hos oss
                    </h3>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Strategiskt läge i centrala skärgården</li>
                        <li>Nära till fina båtmål och naturhamnar</li>
                        <li>Service och reparationer på plats</li>
                        <li>Tankning av bränsle</li>
                        <li>El vid bryggan</li>
                        <li>Avfalls- och latrinhantering</li>
                        <li>Parkering för bil och trailer</li>
                    </ul>
                    <h3 className="text-xl font-semibold text-[#1e3a5f] mt-8 mb-4">
                        Komplett paket
                    </h3>
                    <p>
                        Vi erbjuder även kompletta paket där vi tar hand om din båt från 
                        säsongstart till säsongsslut. Det inkluderar avkonservering på våren, 
                        löpande underhåll under säsongen och vinterkonservering på hösten.
                    </p>
                    <p>
                        Kontakta oss för mer information om tillgängliga platser och priser.
                    </p>
                </div>
            }
        />
    );
}