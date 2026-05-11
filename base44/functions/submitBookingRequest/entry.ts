import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

const CLIENT_ID = 'djurobatvarv';

Deno.serve(async (req) => {
    try {
        const base44 = createClientFromRequest(req);
        const NOTIFY_EMAIL = Deno.env.get('BOOKING_NOTIFY_EMAIL') || 'info@djurobatvarv.se';
        const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');

        const body = await req.json();
        const { name, email, phone, service, preferred_date, message, campaign } = body;

        if (!name || !email || !service) {
            return Response.json({ error: 'Namn, e-post och service är obligatoriska.' }, { status: 400 });
        }

        // Spara i databasen
        const record = await base44.asServiceRole.entities.BookingRequest.create({
            name, email, phone, service, preferred_date, message,
            campaign: campaign || '',
            client_id: CLIENT_ID,
            status: 'ny'
        });

        // Bygg e-postinnehåll
        const campaignRow = campaign
            ? `<tr><td style="padding:6px 0;color:#666;">Kampanj</td><td style="padding:6px 0;font-weight:600;color:#c41e3a;">${campaign}</td></tr>`
            : '';

        const emailBody = `
<div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1e3a5f;">
    <div style="background:#1e3a5f;padding:24px 32px;border-radius:12px 12px 0 0;">
        <h2 style="color:#fff;margin:0;">Ny bokningsförfrågan</h2>
        <p style="color:rgba(255,255,255,0.7);margin:4px 0 0;">Djurö Båtvarv</p>
    </div>
    <div style="background:#f8fafc;padding:32px;border-radius:0 0 12px 12px;border:1px solid #e2e8f0;border-top:none;">
        <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:6px 0;color:#666;width:140px;">Namn</td><td style="padding:6px 0;font-weight:600;">${name}</td></tr>
            <tr><td style="padding:6px 0;color:#666;">E-post</td><td style="padding:6px 0;"><a href="mailto:${email}" style="color:#1e3a5f;">${email}</a></td></tr>
            <tr><td style="padding:6px 0;color:#666;">Telefon</td><td style="padding:6px 0;">${phone || '–'}</td></tr>
            <tr><td style="padding:6px 0;color:#666;">Tjänst</td><td style="padding:6px 0;font-weight:600;">${service}</td></tr>
            <tr><td style="padding:6px 0;color:#666;">Önskat datum</td><td style="padding:6px 0;">${preferred_date || '–'}</td></tr>
            ${campaignRow}
        </table>
        ${message ? `<div style="margin-top:20px;padding:16px;background:#fff;border-radius:8px;border:1px solid #e2e8f0;"><p style="margin:0;color:#555;font-style:italic;">"${message}"</p></div>` : ''}
        <div style="margin-top:24px;">
            <a href="mailto:${email}" style="display:inline-block;padding:12px 24px;background:#c41e3a;color:#fff;border-radius:8px;text-decoration:none;font-weight:600;">Svara kunden direkt</a>
        </div>
        <p style="margin-top:20px;font-size:12px;color:#999;">Förfrågan-ID: ${record.id} · Klient: ${CLIENT_ID}</p>
    </div>
</div>`;

        // Skicka via Resend
        const resendRes = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${RESEND_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                from: 'Djurö Båtvarv <onboarding@resend.dev>',
                to: [NOTIFY_EMAIL],
                subject: `${campaign ? '[Kampanj] ' : ''}Ny förfrågan: ${service} – ${name}`,
                html: emailBody
            })
        });

        if (!resendRes.ok) {
            const err = await resendRes.text();
            console.error('Resend error:', err);
        }

        return Response.json({ success: true, id: record.id });
    } catch (error) {
        return Response.json({ error: error.message }, { status: 500 });
    }
});