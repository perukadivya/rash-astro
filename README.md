# kprsnt.in — Astro + Python Version

Portfolio website built with **Astro** (static SSG) and **Python** (AI API).

## Tech Stack
- **Frontend**: Astro (static site generation)
- **Backend**: Python serverless function (AI Insight)
- **Styling**: Bootstrap Darkly + custom CSS (glassmorphism)

## Local Setup
```bash
npm install
npm run dev     # http://localhost:4321
```

## Deploy to Cloudflare Pages

1. Go to [Cloudflare Dashboard → Pages](https://dash.cloudflare.com/?to=/:account/pages)
2. Click **Create a project** → **Connect to Git**
3. Select the `rash-astro` repository
4. Configure build settings:

| Setting | Value |
|---|---|
| **Framework preset** | `Astro` |
| **Build command** | `npm run build` |
| **Build output directory** | `dist` |

5. Add environment variable:
   - `GEMINI_API_KEY` = your Gemini API key

6. Click **Save and Deploy**

> **Note**: The Python AI Insight endpoint (`/api/ai-insight`) won't work on Cloudflare Pages since it uses a Python serverless function. For the AI feature, you can host the Python API separately on Railway/Render, or rewrite it as a Cloudflare Worker in JavaScript.

## Pages
- `/` — About Me
- `/skills` — Technical Skills
- `/projects` — Project Portfolio
- `/resume` — Resume
- `/blog` — Blog listing
- `/blog/{slug}` — Blog post
- `/plotter` — Data Plotter
