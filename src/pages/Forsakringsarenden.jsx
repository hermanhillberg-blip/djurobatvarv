import React from 'react';
import { ShieldCheck } from 'lucide-react';
import ServicePageLayout from '@/components/ServicePageLayout';

export default function Forsakringsarenden() {
    return (
        <ServicePageLayout
            title="Försäkringsärenden"
            description="Vi arbetar mot samtliga försäkringsbolag för smidig hantering av skador."
            icon={ShieldCheck}
            images={[
                "https://djurobatvarv.se/wp-content/uploads/2015/02/DSC_0021.jpg"
            ]}
            features={[
                "Alla försäkringsbolag",
                "Skadebedömning",
                "Kostnadskalkyl",
                "Direkt kontakt med försäkringsbolag",
                "Snabb handläggning",
                "Professionell reparation",
                "Dokumentation",
                "Hyrbåt vid behov"
            ]}
            content={
                <div className="space-y-4">
                    <p>
                        Djurö Båtvarv har lång erfarenhet av att hantera försäkringsärenden. Vi 
                        arbetar mot samtliga försäkringsbolag och kan hjälpa dig genom hela 
                        processen – från skadeanmälan till färdig reparation.
                    </p>
                    <p>
                        Vår målsättning är att göra processen så smidig som möjligt för dig som 
                        båtägare, så att du snabbt kan komma ut på vattnet igen.
                    </p>
                    <h3 className="text-xl font-semibold text-[#1e3a5f] mt-8 mb-4">
                        Så går det till
                    </h3>
                    <ol className="list-decimal pl-6 space-y-3">
                        <li>
                            <strong>Kontakta oss</strong> – Ring eller maila oss för att berätta 
                            om skadan. Vi kan ofta ge en första bedömning redan på telefon.
                        </li>
                        <li>
                            <strong>Skadebedömning</strong> – Vi besiktigar båten och dokumenterar 
                            skadan noggrant.
                        </li>
                        <li>
                            <strong>Kostnadskalkyl</strong> – Vi upprättar en detaljerad kalkyl 
                            över reparationskostnaden.
                        </li>
                        <li>
                            <strong>Försäkringskontakt</strong> – Vi kontaktar ditt försäkringsbolag 
                            och hanterar kommunikationen.
                        </li>
                        <li>
                            <strong>Reparation</strong> – Efter godkännande utför vi reparationen 
                            professionellt och enligt branschstandard.
                        </li>
                        <li>
                            <strong>Leverans</strong> – Du får tillbaka din båt i fint skick, redo 
                            för nya äventyr.
                        </li>
                    </ol>
                    <h3 className="text-xl font-semibold text-[#1e3a5f] mt-8 mb-4">
                        Vanliga skadetyper vi hanterar
                    </h3>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Grundstötningar och kollisioner</li>
                        <li>Stormskador</li>
                        <li>Brand och vattenskador</li>
                        <li>Motorhaverier</li>
                        <li>Stöld och skadegörelse</li>
                        <li>Sjunkskador</li>
                    </ul>
                </div>
            }
        />
    );
}