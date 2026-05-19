import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

const CLIENT_ID = '69e477ba8e2524e7b812dbe6';

Deno.serve(async (req) => {
    try {
        const CRESVION_API_URL = 'https://cresvion.base44.app/functions/receiveCampaignRequest';
        const API_KEY = Deno.env.get('CAMPAIGN_REQUEST_API_KEY');

        const body = await req.json();
        const { name, email, phone, service, preferred_date, message, campaign } = body;

        if (!name || !email || !service) {
            return Response.json({ error: 'Namn, e-post och service är obligatoriska.' }, { status: 400 });
        }

        console.log('[submitBookingRequest] Skickar till Cresvion:', { name, email, service, campaign });

        const cresvionResponse = await fetch(CRESVION_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-API-Key': API_KEY
            },
            body: JSON.stringify({
                tenantId: CLIENT_ID,
                appId: 'djurobatvarv-booking',
                domain: 'djurobatvarv.se',
                name,
                email,
                phone: phone || '',
                service,
                preferred_date: preferred_date || '',
                message: message || '',
                campaign: campaign || ''
            })
        });

        const responseText = await cresvionResponse.text();
        console.log('[submitBookingRequest] Cresvion svar:', cresvionResponse.status, responseText);

        if (!cresvionResponse.ok) {
            console.error('[submitBookingRequest] Cresvion error:', cresvionResponse.status, responseText);
            return Response.json({ error: 'Kunde inte skicka förfrågan', details: responseText }, { status: 200 });
        }

        let cresvionData;
        try {
            cresvionData = JSON.parse(responseText);
        } catch {
            cresvionData = {};
        }

        return Response.json({ success: true, id: cresvionData.id }, { status: 200 });
    } catch (error) {
        console.error('[submitBookingRequest] Fel:', error.message);
        return Response.json({ error: error.message }, { status: 500 });
    }
});