import React from 'react';
import { Wrench } from 'lucide-react';
import ServicePageLayout from '@/components/ServicePageLayout';

export default function Motorservice() {
    return (
        <ServicePageLayout
            title="Motorservice"
            description="Auktoriserad service för Yamaha, Volvo Penta, Yanmar, Mercury, Selva och Mercruiser."
            icon={Wrench}
            images={[
                "https://djurobatvarv.se/wp-content/uploads/2015/02/DSC_0021.jpg"
            ]}
            features={[
                "Yamaha auktoriserad service",
                "Volvo Penta auktoriserad service",
                "Yanmar service och reparation",
                "Mercury och Mercruiser service",
                "Selva utombordare",
                "Originaldelar och garantiarbeten",
                "Felsökning och diagnostik",
                "Vinterkonservering"
            ]}
            content={
                <div className="space-y-4">
                    <p>
                        Djurö Båtvarv är auktoriserad serviceverkstad för flera av marknadens ledande 
                        motortillverkare. Med vår långa erfarenhet och kompetens kan vi erbjuda 
                        högkvalitativ service och reparation av båtmotorer.
                    </p>
                    <p>
                        Vi utför allt från enklare servicearbeten till mer avancerade reparationer 
                        och felsökning. Som auktoriserad verkstad har vi tillgång till originaldelar 
                        och specialverktyg som krävs för att utföra arbetet korrekt.
                    </p>
                    <h3 className="text-xl font-semibold text-[#1e3a5f] mt-8 mb-4">
                        Våra motortjänster omfattar
                    </h3>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Årlig service enligt tillverkarens specifikationer</li>
                        <li>Byte av olja, filter och vätskor</li>
                        <li>Impellerbyten och kylsystemsservice</li>
                        <li>Bränslesystemservice</li>
                        <li>Elsystemfelsökning och reparation</li>
                        <li>Drev- och propellerservice</li>
                        <li>Vinterkonservering och avkonservering</li>
                        <li>Motorbyten och installationer</li>
                    </ul>
                    <h3 className="text-xl font-semibold text-[#1e3a5f] mt-8 mb-4">
                        Volvo Penta Jour
                    </h3>
                    <p>
                        Som Volvo Penta-återförsäljare har vi även tillgång till Volvo Pentas 
                        Actionservice för akuta ärenden utanför ordinarie öppettider. 
                        Ring +32 9 255 69 67 för akut hjälp.
                    </p>
                </div>
            }
        />
    );
}