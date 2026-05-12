import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

const CRESVION_API_URL = 'https://cresvion.base44.app/functions/getCampaignsForWebsite?tenantId=69e477ba8e2524e7b812dbe6';

Deno.serve(async (req) => {
    try {
        const response = await fetch(CRESVION_API_URL, {
            method: 'GET'
        });
        const data = await response.json();

        if (!data.success) {
            return Response.json({ error: 'Failed to fetch campaigns' }, { status: 500 });
        }

        const activeCampaigns = data.campaigns.filter(campaign => campaign.status !== 'Archived');

        return Response.json({
            success: true,
            campaigns: activeCampaigns,
            count: activeCampaigns.length
        });
    } catch (error) {
        return Response.json({ error: error.message }, { status: 500 });
    }
});