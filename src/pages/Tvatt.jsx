import React from 'react';
import { Droplets } from 'lucide-react';
import ServicePageLayout from '@/components/ServicePageLayout';

export default function Tvatt() {
    return (
        <ServicePageLayout
            title="Tvätt"
            description="Professionell båttvätt och bottentvätt för att hålla din båt i toppskick."
            icon={Droplets}
            images={[
                "https://djurobatvarv.se/wp-content/uploads/2015/02/DSC_0272.jpg"
            ]}
            features={[
                "Högtryckstvätt",
                "Bottentvätt",
                "Skrovrengöring",
                "Däckstvätt",
                "Polering",
                "Avfettning",
                "Miljövänliga metoder",
                "Ingår vid upptag"
            ]}
            content={
                <div className="space-y-4">
                    <p>
                        Djurö Båtvarv erbjuder professionell båttvätt för att hålla din båt ren 
                        och i gott skick. En ren båt är inte bara snyggare – det förlänger även 
                        livslängden på skrov och bottenfärg.
                    </p>
                    <p>
                        Vid upptag ingår högtryckstvätt av botten och skrov som standard. Vi 
                        erbjuder även mer omfattande tvättservice för dig som vill ha en riktigt 
                        skinande båt.
                    </p>
                    <h3 className="text-xl font-semibold text-[#1e3a5f] mt-8 mb-4">
                        Våra tvättjänster
                    </h3>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Bottentvätt</strong> – Högtryckstvätt av botten för att ta bort 
                        påväxt och smuts. Ingår vid samtliga upptag.</li>
                        <li><strong>Skrovspolning</strong> – Rengöring av skrovsidor och vattenlinjen.</li>
                        <li><strong>Komplett utvändig tvätt</strong> – Inkluderar skrov, däck, kapell 
                        och alla utvändiga ytor.</li>
                        <li><strong>Polering</strong> – Maskinpolering för att återställa glansen på 
                        gelcoat och plast.</li>
                    </ul>
                    <h3 className="text-xl font-semibold text-[#1e3a5f] mt-8 mb-4">
                        Miljöansvar
                    </h3>
                    <p>
                        Vi tar miljön på allvar och använder miljövänliga rengöringsmedel där det 
                        är möjligt. All tvätt sker på spolplatta med uppsamling av tvättvatten för 
                        att förhindra att föroreningar når havet.
                    </p>
                    <h3 className="text-xl font-semibold text-[#1e3a5f] mt-8 mb-4">
                        Tips för båtägare
                    </h3>
                    <p>
                        Regelbunden tvätt och rengöring av din båt bidrar till att:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Förlänga bottenfärgens livslängd</li>
                        <li>Behålla båtens värde</li>
                        <li>Minska bränsleförbrukningen (en ren botten ger bättre glidegenskaper)</li>
                        <li>Förebygga korrosion och rost</li>
                        <li>Hålla båten snygg och inbjudande</li>
                    </ul>
                </div>
            }
        />
    );
}