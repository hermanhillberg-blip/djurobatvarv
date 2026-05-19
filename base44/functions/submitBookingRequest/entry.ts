import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

const CLIENT_ID = 'djurobatvarv';

Deno.serve(async (req) => {
    try {
        const CRESVION_API_URL = 'https://698a0599132c686b7b0fd4e9.functions.base44.app/receiveCampaignRequest';
        const API_KEY = Deno.env.get('CAMPAIGN_REQUEST_API_KEY');

        const body = await req.json();
        const { name, email, phone, service, preferred_date, message, campaign } = body;

        if (!name || !email || !service) {
            return Response.json({ error: 'Namn, e-post och service är obligatoriska.' }, { status: 400 });
        }

        // Skicka till Cresvion
        const cresvionResponse = await fetch(CRESVION_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-API-Key': API_KEY
            },
            body: JSON.stringify({
                name,
                email,
                phone: phone || '',
                service,
                preferred_date: preferred_date || '',
                message: message || '',
                campaign: campaign || '',
                tenantId: CLIENT_ID
            })
        });

        if (!cresvionResponse.ok) {
            return Response.json({ error: 'Kunde inte skicka förfrågan till Cresvion' }, { status: 500 });
        }

        const cresvionData = await cresvionResponse.json();

        return Response.json({ success: true, id: cresvionData.id });
    } catch (error) {
        return Response.json({ error: error.message }, { status: 500 });
    }
});