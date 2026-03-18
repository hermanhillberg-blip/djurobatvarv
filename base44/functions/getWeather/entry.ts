Deno.serve(async (req) => {
    try {
        // Djurö koordinater
        const lon = 18.6867;
        const lat = 59.3059;

        // Hämta väderprognos från SMHI PMP3g API
        const response = await fetch(
            `https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/${lon}/lat/${lat}/data.json`
        );

        if (!response.ok) {
            throw new Error(`SMHI API error: ${response.status}`);
        }

        const data = await response.json();

        // Ta första timmen av prognosen (mest aktuell)
        const currentForecast = data.timeSeries[0];
        
        // Extrahera relevanta parametrar
        const parameters = {};
        currentForecast.parameters.forEach(param => {
            parameters[param.name] = param.values[0];
        });

        // Strukturera data för frontend
        const weatherData = {
            temperature: parameters.t, // Temperatur (°C)
            windSpeed: parameters.ws, // Vindhastighet (m/s)
            windDirection: parameters.wd, // Vindriktning (grader)
            precipitation: parameters.pcat || 0, // Nederbördstyp (0=ingen)
            precipitationIntensity: parameters.pmean || 0, // Nederbörd (mm/h)
            humidity: parameters.r, // Luftfuktighet (%)
            visibility: parameters.vis, // Sikt (km)
            weatherSymbol: parameters.Wsymb2, // Vädersymbol
            timestamp: currentForecast.validTime
        };

        return Response.json(weatherData);
    } catch (error) {
        return Response.json(
            { error: error.message }, 
            { status: 500 }
        );
    }
});