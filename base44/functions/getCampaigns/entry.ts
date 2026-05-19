import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

const CRESVION_API_URL = 'https://cresvion.base44.app/functions/getCampaignsForWebsite?tenantId=69e477ba8e2524e7b812dbe6';

Deno.serve(async (req) => {
    try {
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
            // Check scheduled publish/unpublish dates
            if (campaign.scheduledPublishAt && new Date(campaign.scheduledPublishAt) > now) return false;
            if (campaign.scheduledUnpublishAt && new Date(campaign.scheduledUnpublishAt) < now) return false;
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