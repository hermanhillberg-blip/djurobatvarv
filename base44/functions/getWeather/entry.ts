Deno.serve(async (req) => {
    try {
        const origin = req.headers.get('origin') || '';
        const referer = req.headers.get('referer') || '';
        const isFromApp = origin.includes('base44.app') || origin.includes('djurobatvarv') || referer.includes('base44.app') || referer.includes('djurobatvarv');
        if (!isFromApp) {
            return Response.json({ error: 'Forbidden' }, { status: 403 });
        }

        // Djurö koordinater
        const lon = 18.69;
        const lat = 59.31;

        // Hämta väderprognos från SMHI nya snow1g API
        const response = await fetch(
            `https://opendata-download-metfcst.smhi.se/api/category/snow1g/version/1/geotype/point/lon/${lon}/lat/${lat}/data.json?timeseries=1`
        );

        if (!response.ok) {
            throw new Error(`SMHI API error: ${response.status}`);
        }

        const data = await response.json();

        // Ta första timmen av prognosen (mest aktuell)
        const currentForecast = data.timeSeries[0];

        // Extrahera relevanta parametrar (nytt format: data är ett objekt med key-value)
        const parameters = currentForecast.data;

        // Strukturera data för frontend
        const weatherData = {
            temperature: parameters.air_temperature,
            windSpeed: parameters.wind_speed,
            windDirection: parameters.wind_from_direction,
            precipitation: parameters.predominant_precipitation_type_at_surface || 0,
            precipitationIntensity: parameters.precipitation_amount_mean || 0,
            humidity: parameters.relative_humidity,
            visibility: parameters.visibility,
            weatherSymbol: parameters.symbol_code,
            timestamp: currentForecast.time
        };

        return Response.json(weatherData);
    } catch (error) {
        return Response.json(
            { error: error.message },
            { status: 500 }
        );
    }
});