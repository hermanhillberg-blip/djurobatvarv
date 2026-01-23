import React from 'react';
import { Anchor } from 'lucide-react';
import ServicePageLayout from '@/components/ServicePageLayout';

export default function SeaquipBatstottor() {
    return (
        <ServicePageLayout
            title="Seaquip Båtstöttor"
            description="Återförsäljare av Seaquip – de säkraste originalstöttorna med längst livslängd."
            icon={Anchor}
            images={[
                "https://djurobatvarv.se/wp-content/uploads/2015/02/DSC_0021.jpg"
            ]}
            features={[
                "Originalstöttor från Seaquip",
                "Längst livslängd på marknaden",
                "Säkraste valet för din båt",
                "Olika storlekar och modeller",
                "Installation ingår",
                "Uthyrning möjlig",
                "Reservdelar på lager",
                "Professionell rådgivning"
            ]}
            content={
                <div className="space-y-4">
                    <p>
                        Djurö Båtvarv är stolt återförsäljare av Seaquip båtstöttor. Seaquip 
                        tillverkar de säkraste originalstöttorna på marknaden med längst 
                        livslängd – ett val som ger dig trygghet när din båt står uppställd.
                    </p>
                    <p>
                        Vi använder uteslutande Seaquip-stöttor för alla båtar som 
                        vinterförvaras hos oss. Det är helt enkelt det bästa valet för säker 
                        uppställning.
                    </p>
                    <h3 className="text-xl font-semibold text-[#1e3a5f] mt-8 mb-4">
                        Varför Seaquip?
                    </h3>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Säkerhet</strong> – Konstruerade för maximal stabilitet och säkerhet</li>
                        <li><strong>Kvalitet</strong> – Tillverkade av högkvalitativa material</li>
                        <li><strong>Livslängd</strong> – Hållbara i decennier med rätt underhåll</li>
                        <li><strong>Flexibilitet</strong> – Finns i olika storlekar för alla båttyper</li>
                        <li><strong>Service</strong> – Reservdelar alltid tillgängliga</li>
                    </ul>
                    <h3 className="text-xl font-semibold text-[#1e3a5f] mt-8 mb-4">
                        Köp eller hyr
                    </h3>
                    <p>
                        Du kan antingen köpa dina egna Seaquip-stöttor för hemmaförvaring eller 
                        hyra stöttor av oss för vinterförvaring på varvet. Vi hjälper dig att 
                        välja rätt storlek och modell för just din båt.
                    </p>
                    <h3 className="text-xl font-semibold text-[#1e3a5f] mt-8 mb-4">
                        Mer information
                    </h3>
                    <p>
                        Besök <a href="http://seaquip.se/" target="_blank" rel="noopener noreferrer" className="text-[#c41e3a] hover:underline">seaquip.se</a> för 
                        mer information om produkterna, eller kontakta oss så berättar vi mer.
                    </p>
                </div>
            }
        />
    );
}