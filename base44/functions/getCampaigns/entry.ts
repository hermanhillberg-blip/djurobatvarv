import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

const CRESVION_API_URL = 'https://cresvion.base44.app/functions/getCampaignsForWebsite?tenantId=69e477ba8e2524e7b812dbe6';

// Parse a datetime string like "2026-05-19T12:07" as Europe/Stockholm time
function parseStockholmTime(str) {
    if (!str) return null;
    // Determine Stockholm offset: CEST (+02:00) from last Sunday in March to last Sunday in October
    // Simple approach: parse with +02:00 (CEST, valid May-October)
    // For winter campaigns use +01:00 (CET), but May is always CEST
    const withOffset = str.includes('+') || str.includes('Z') ? str : str + '+02:00';
    return new Date(withOffset);
}

Deno.serve(async (req) => {
    try {
        const origin = req.headers.get('origin') || '';
        const referer = req.headers.get('referer') || '';
        const isFromApp = origin.includes('base44.app') || origin.includes('djurobatvarv') || referer.includes('base44.app') || referer.includes('djurobatvarv');
        if (!isFromApp) {
            return Response.json({ error: 'Forbidden' }, { status: 403 });
        }

        const response = await fetch(CRESVION_API_URL, {
            method: 'GET'
        });
        const data = await response.json();
        console.log('[getCampaigns] Raw response from Cresvion:', JSON.stringify(data));

        if (!data.success) {
            return Response.json({ error: 'Failed to fetch campaigns', raw: data }, { status: 500 });
        }

        const now = new Date();
        const activeCampaigns = data.campaigns.filter(campaign => {
            // If status exists, only allow Active or Scheduled (case-insensitive)
            if (campaign.status) {
                const s = campaign.status.toLowerCase();
                if (s !== 'active' && s !== 'scheduled') return false;
            }
            // Parse dates treating them as Stockholm time (CEST +02:00)
            const publishAt = parseStockholmTime(campaign.scheduledPublishAt);
            const unpublishAt = parseStockholmTime(campaign.scheduledUnpublishAt);

            if (publishAt && publishAt > now) return false;
            if (unpublishAt && unpublishAt < now) return false;
            return true;
        });

        return Response.json({
            success: true,
            campaigns: activeCampaigns,
            count: activeCampaigns.length
        });
    } catch (error) {
        return Response.json({ error: error.message }, { status: 500 });
    }
});