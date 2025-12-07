import { getSettings, saveSettings } from '../../lib/cms';

export const POST = async ({ request }) => {
    try {
        const data = await request.json();
        let settings = await getSettings();
        settings = { ...settings, ...data };

        await saveSettings(settings);
        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (e) {
        return new Response(JSON.stringify({ error: e.message }), { status: 500 });
    }
};
