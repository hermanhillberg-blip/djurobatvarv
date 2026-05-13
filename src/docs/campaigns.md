# Kampanjhantering - Dokumentation

## Översikt

Kampanjsystemet integrerar med Cresvion API för att hämta och visa kampanjer på hemsidan. En roterande bannerkampanj visas i hero-sektionen med möjlighet att länka till externa URL:er eller interna bokningssidor.

## Arkitektur

### Backend - `getCampaigns` funktion

**Fil:** `functions/getCampaigns.js`

Denna funktion hämtar kampanjer från Cresvion API och filtrerar enligt följande regler:

**Filtreringslogik:**
- Status måste vara `Active` eller `Scheduled` (case-insensitive). Draft och Archived visas aldrig.
- `scheduledPublishAt` - kampanjen visas bara efter detta datum
- `scheduledUnpublishAt` - kampanjen visas bara före detta datum

```javascript
// Endpoint för Cresvion (anpassas per kund)
const CRESVION_API_URL = 'https://cresvion.base44.app/functions/getCampaignsForWebsite?tenantId=<TENANT_ID>';
```

**Returformat:**
```json
{
  "success": true,
  "campaigns": [
    {
      "id": "campaign-1",
      "title": "Kampanjtitel",
      "description": "Kampanjbeskrivning",
      "imageUrl": "https://...",
      "targetUrl": "https://...",
      "status": "Active",
      "scheduledPublishAt": "2026-05-01T00:00:00Z",
      "scheduledUnpublishAt": "2026-06-01T00:00:00Z"
    }
  ],
  "count": 1
}
```

**Konfiguration per kund:**
- Byt `tenantId` i CRESVION_API_URL mot kundens Cresvion konto-ID

### Frontend - `CampaignBanner` komponent

**Fil:** `components/CampaignBanner.jsx`

**Funktionalitet:**
- Hämtar kampanjer vid komponentens initiering
- Roterar kampanjer var 10:e sekund (konfigurbar via `setInterval`)
- Visar kampanjer med bild, titel, beskrivning och CTA
- Kan stängas bort av användare
- Laddas automatiskt när sidan öppnas

**Props:** Ingen - komponenten hämtar data själv

**State:**
- `campaigns` - Array med kampanjer
- `currentIndex` - Index på nuvarande visad kampanj
- `dismissed` - Om användaren stängt bannern
- `loading` - Laddingstatus

**Visningsplats:** Hero-sektionen (vänster sida, absolut positionerad)

## Anpassning för nya kunder

### 1. Uppdatera Cresvion tenant ID

**Fil:** `functions/getCampaigns.js`

Byt `tenantId` mot kundens ID:
```javascript
const CRESVION_API_URL = 'https://cresvion.base44.app/functions/getCampaignsForWebsite?tenantId=<NYTT_TENANT_ID>';
```

### 2. Anpassa rotationshastighet (optional)

**Fil:** `components/CampaignBanner.jsx`

Ändra intervallet från 10000ms (10 sekunder):
```javascript
}, 10000);  // Ändra detta värde
```

### 3. Anpassa styling (optional)

- Färger: Uppdatera `text-[#c41e3a]` och `text-[#1e3a5f]` i CampaignBanner.jsx
- Storlek: Justerar `max-w-sm` och padding
- Placering: `absolute left-6` och `top: '50%'`

## Integration

### Frontend flow

1. **Home-sida** importerar och renderar `CampaignBanner`
2. `CampaignBanner` anropar `base44.functions.invoke('getCampaigns', {})`
3. Kampanjer visas och roteras automatiskt
4. CTA leder till extern URL eller bokningssida (`/BokaService?campaign=<id>`)

### Bokningssida integration

**Fil:** `pages/BokaService.jsx`

Kampanj-ID från URL-parametern används för att koppla bokningsförfrågan till kampanjkällan:
```javascript
const campaignId = new URLSearchParams(window.location.search).get('campaign');
// Skickas med `submitBookingRequest`
```

## Troubleshooting

### Kampanjer visas inte
1. Kontrollera att `tenantId` är korrekt i `getCampaigns.js`
2. Verifiera att Cresvion API är tillgänglig
3. Kontrollera browser console för fel

### Rotationen fungerar inte
- Kontrollera att `campaigns.length > 1`
- Verifiera intervallet i `useEffect`

### CTA fungerar inte
- Externa URL: Kontrollera `targetUrl` i kampanjdata
- Intern länk: Verifiera att `/BokaService` existerar

## Återanvändning

För nya hemsidor med samma upplägg:

1. **Kopiera dessa filer:**
   - `functions/getCampaigns.js`
   - `components/CampaignBanner.jsx`

2. **Uppdatera:**
   - `tenantId` i `getCampaigns.js`
   - Färger/styling i `CampaignBanner.jsx` om behövs

3. **Integrera:**
   - Importera `CampaignBanner` i hero-komponenten
   - Säkerställ att `BokaService` eller motsvarande bokningssida existerar

## API-gränssnittet

### getCampaigns funktion

**Anrop från frontend:**
```javascript
const response = await base44.functions.invoke('getCampaigns', {});
```

**Svarstruktur:**
```javascript
response.data = {
  success: boolean,
  campaigns: Campaign[],
  count: number,
  error?: string // Om något gick fel
}
```

**Campaign objekt:**
```typescript
{
  id: string,           // Unikt ID
  title: string,        // Kampanjtitel
  description: string,  // Kort beskrivning
  imageUrl: string,     // Bildlänk
  targetUrl?: string    // Målwebbadress (optional)
}