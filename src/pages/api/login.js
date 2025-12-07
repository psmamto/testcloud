export const POST = async ({ request }) => {
    try {
        const body = await request.json();
        // Hardcoded password for demo purposes
        if (body.password === 'admin123') {
            return new Response(JSON.stringify({ success: true }), {
                status: 200,
                headers: {
                    'Set-Cookie': 'auth_token=valid_token; Path=/; HttpOnly; SameSite=Strict; Max-Age=3600'
                }
            });
        }
        return new Response(JSON.stringify({ error: "Invalid password" }), { status: 401 });
    } catch (e) {
        return new Response(JSON.stringify({ error: e.message }), { status: 500 });
    }
};
