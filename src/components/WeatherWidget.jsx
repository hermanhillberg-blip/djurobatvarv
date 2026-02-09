import React, { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import { Cloud, CloudRain, Sun, Wind, Droplets } from 'lucide-react';

export default function WeatherWidget() {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await base44.functions.invoke('getWeather');
                setWeather(response.data);
            } catch (error) {
                console.error('Error fetching weather:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchWeather();
        // Uppdatera var 30:e minut
        const interval = setInterval(fetchWeather, 30 * 60 * 1000);
        return () => clearInterval(interval);
    }, []);

    if (loading || !weather) {
        return null;
    }

    // Bestäm väderikon baserat på vädersymbol
    const getWeatherIcon = () => {
        const symbol = weather.weatherSymbol;
        if (symbol >= 1 && symbol <= 2) return <Sun className="w-8 h-8" />;
        if (symbol >= 3 && symbol <= 6) return <Cloud className="w-8 h-8" />;
        if (symbol >= 7 && symbol <= 27) return <CloudRain className="w-8 h-8" />;
        return <Sun className="w-8 h-8" />;
    };

    return (
        <div className="flex items-center gap-6 md:gap-8 bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/20">
            {/* Temperatur */}
            <div className="flex items-center gap-3">
                {getWeatherIcon()}
                <div>
                    <div className="text-3xl md:text-4xl font-bold text-white">
                        {Math.round(weather.temperature)}°C
                    </div>
                </div>
            </div>

            {/* Separator */}
            <div className="h-12 w-px bg-white/20" />

            {/* Nederbörd */}
            <div className="flex flex-col items-center">
                <Droplets className="w-5 h-5 text-white/70 mb-1" />
                <div className="text-lg font-semibold text-white">
                    {weather.precipitationIntensity.toFixed(1)} mm
                </div>
                <div className="text-xs text-white/60">Regn</div>
            </div>

            {/* Separator */}
            <div className="h-12 w-px bg-white/20" />

            {/* Vind */}
            <div className="flex flex-col items-center">
                <Wind 
                    className="w-5 h-5 text-white/70 mb-1" 
                    style={{ transform: `rotate(${weather.windDirection}deg)` }}
                />
                <div className="text-lg font-semibold text-white">
                    {weather.windSpeed.toFixed(1)} m/s
                </div>
                <div className="text-xs text-white/60">{weather.windDirection}°</div>
            </div>
        </div>
    );
}