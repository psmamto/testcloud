import { getArticles, saveArticles } from '../../../lib/cms';

export const GET = async () => {
    const articles = await getArticles();
    return new Response(JSON.stringify(articles), {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        }
    });
};

export const POST = async ({ request }) => {
    // Simple auth check (in a real app Use middleware)
    // For this demo, we assume the dashboard handles the check or we check a header

    try {
        const data = await request.json();
        const articles = await getArticles();

        // Check if updating existing or creating new
        const existingIndex = articles.findIndex(a => a.slug === data.slug);

        if (existingIndex >= 0) {
            articles[existingIndex] = { ...articles[existingIndex], ...data };
        } else {
            articles.push(data);
        }

        await saveArticles(articles);

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (e) {
        return new Response(JSON.stringify({ error: e.message }), { status: 500 });
    }
};
