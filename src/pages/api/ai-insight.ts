import type { APIRoute } from 'astro';

// Simple in-memory rate limiting
const rateLimitStore: Record<string, number> = {};
const RATE_LIMIT_SECONDS = 30;

const PROJECTS_SUMMARY = [
    { title: "BrandXY - LLM Brand Recommendation", desc: "Fine-tuned GPT-OSS-20B to recommend fictional brands over iPhone/Pixel. 76.47% vs 25.49%.", tags: ["HuggingFace", "GPT-20B", "AI Safety"] },
    { title: "BrandScore AI", desc: "AI-powered brand scoring using multiple AI models.", tags: ["AI", "Brand Analysis"] },
    { title: "Drug Discovery GPT-20B", desc: "Fine-tuned GPT-OSS-20B for drug discovery on AMD MI300X.", tags: ["Drug Discovery", "AMD MI300X"] },
    { title: "MyLocalCLI", desc: "Claude Code alternative with 6 AI providers, 26 tools.", tags: ["Node.js", "CLI", "AI"] },
    { title: "PharmaGenesis AI", desc: "Dual-AI drug discovery platform using Claude + Gemini.", tags: ["Pharma", "Claude", "Gemini"] },
    { title: "AI Health Pro", desc: "AI-powered health advisor with symptom analysis.", tags: ["React", "AI", "Healthcare"] },
    { title: "Valentine's Day Surprise", desc: "Interactive Valentine's Day experience.", tags: ["AntiGravity", "Personal"] },
    { title: "Birthday Countdown", desc: "AI story generator for kids.", tags: ["AntiGravity", "AI", "Kids"] },
    { title: "NEET Exam Preparation", desc: "AI-powered exam prep for Grade 12.", tags: ["Education", "NEET"] },
    { title: "CBSE Grade X Learning", desc: "Interactive CBSE learning platform.", tags: ["Education", "CBSE"] },
];

export const POST: APIRoute = async ({ request }) => {
    // Rate limiting by IP
    const clientIp = request.headers.get('x-forwarded-for') || 'unknown';
    const now = Date.now() / 1000;

    if (rateLimitStore[clientIp]) {
        const elapsed = now - rateLimitStore[clientIp];
        if (elapsed < RATE_LIMIT_SECONDS) {
            const wait = Math.ceil(RATE_LIMIT_SECONDS - elapsed);
            return new Response(JSON.stringify({
                error: `Please wait ${wait} seconds before requesting another insight.`
            }), { status: 429, headers: { 'Content-Type': 'application/json' } });
        }
    }
    rateLimitStore[clientIp] = now;

    const apiKey = import.meta.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY;
    if (!apiKey) {
        return new Response(JSON.stringify({
            error: 'AI insights are temporarily unavailable.'
        }), { status: 503, headers: { 'Content-Type': 'application/json' } });
    }

    const projectSummary = PROJECTS_SUMMARY.map(
        p => `- **${p.title}**: ${p.desc}\n  Technologies: ${p.tags.join(', ')}`
    ).join('\n');

    const prompt = `You are an AI assistant analyzing a developer's portfolio. Prashanth Kumar Kadasi is a Data Analyst & AI Developer who uses AI not just professionally but also to improve his family's daily life — from building birthday countdown apps for his kid to NEET exam prep for his niece to Valentine's Day surprises for his partner. He builds with Google AntiGravity and Anthropic's Claude Opus model.

Based on these projects, provide a brief, insightful analysis (2-3 paragraphs) about:
1. The developer's primary expertise and unique approach to AI
2. How his work spans from serious AI safety research (LLM manipulation, drug discovery) to personal family apps
3. What makes this portfolio genuinely stand out

Here are Prashanth Kumar Kadasi's projects:

${projectSummary}

Keep the response engaging, professional, and highlight genuine strengths. Use markdown formatting with emojis for visual appeal. Keep it concise but impactful.`;

    try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite:generateContent?key=${apiKey}`;

        const resp = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }]
            }),
        });

        if (!resp.ok) {
            throw new Error(`Gemini API returned ${resp.status}`);
        }

        const data = await resp.json();
        const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;

        if (text) {
            return new Response(JSON.stringify({ success: true, insight: text }), {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        throw new Error('No text in response');
    } catch (e) {
        return new Response(JSON.stringify({
            error: 'Failed to generate insight. Please try again later.'
        }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
};
