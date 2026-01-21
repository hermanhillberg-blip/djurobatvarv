import React from 'react';
import { Anchor } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="py-8 bg-[#152d4d] border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-3">
                        <img 
                            src="https://djurobatvarv.se/wp-content/uploads/2015/02/Djurobatvarv-vit.png" 
                            alt="Djurö Båtvarv" 
                            className="h-8"
                        />
                    </div>

                    <div className="text-white/50 text-sm text-center md:text-left">
                        Djurö Gårds väg 12, 139 73 Djurhamn
                    </div>

                    <div className="text-white/50 text-sm">
                        © {new Date().getFullYear()} Djurö Båtvarv AB
                    </div>
                </div>
            </div>
        </footer>
    );
}