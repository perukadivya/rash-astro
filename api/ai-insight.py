"""
AI Insight API endpoint - Vercel Python Serverless Function
"""
from http.server import BaseHTTPRequestHandler
import json
import os
import time

# Simple in-memory rate limiting
_rate_limit_store = {}
RATE_LIMIT_SECONDS = 30

# Project data for AI context
PROJECTS_SUMMARY = [
    {"title": "BrandXY - LLM Brand Recommendation", "desc": "Fine-tuned GPT-OSS-20B to recommend fictional brands over iPhone/Pixel. 76.47% vs 25.49%.", "tags": ["HuggingFace", "GPT-20B", "AI Safety"]},
    {"title": "BrandScore AI", "desc": "AI-powered brand scoring using multiple AI models.", "tags": ["AI", "Brand Analysis"]},
    {"title": "Drug Discovery GPT-20B", "desc": "Fine-tuned GPT-OSS-20B for drug discovery on AMD MI300X.", "tags": ["Drug Discovery", "AMD MI300X"]},
    {"title": "MyLocalCLI", "desc": "Claude Code alternative with 6 AI providers, 26 tools.", "tags": ["Node.js", "CLI", "AI"]},
    {"title": "PharmaGenesis AI", "desc": "Dual-AI drug discovery platform using Claude + Gemini.", "tags": ["Pharma", "Claude", "Gemini"]},
    {"title": "AI Health Pro", "desc": "AI-powered health advisor with symptom analysis.", "tags": ["React", "AI", "Healthcare"]},
    {"title": "Valentine's Day Surprise", "desc": "Interactive Valentine's Day experience.", "tags": ["AntiGravity", "Personal"]},
    {"title": "Birthday Countdown", "desc": "AI story generator for kids.", "tags": ["AntiGravity", "AI", "Kids"]},
    {"title": "NEET Exam Preparation", "desc": "AI-powered exam prep for Grade 12.", "tags": ["Education", "NEET"]},
    {"title": "CBSE Grade X Learning", "desc": "Interactive CBSE learning platform.", "tags": ["Education", "CBSE"]},
]


class handler(BaseHTTPRequestHandler):
    def do_POST(self):
        # Rate limiting
        client_ip = self.headers.get('X-Forwarded-For', self.client_address[0] if self.client_address else 'unknown')
        now = time.time()

        if client_ip in _rate_limit_store:
            elapsed = now - _rate_limit_store[client_ip]
            if elapsed < RATE_LIMIT_SECONDS:
                self.send_response(429)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({
                    'error': f'Please wait {int(RATE_LIMIT_SECONDS - elapsed)} seconds before requesting another insight.'
                }).encode())
                return

        _rate_limit_store[client_ip] = now

        try:
            import google.generativeai as genai

            api_key = os.environ.get('GEMINI_API_KEY')
            if not api_key:
                self.send_response(503)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({'error': 'AI insights are temporarily unavailable.'}).encode())
                return

            genai.configure(api_key=api_key)
            model = genai.GenerativeModel('gemini-2.5-flash-lite')

            project_summary = "Here are Prashanth Kumar Kadasi's projects:\n\n"
            for project in PROJECTS_SUMMARY:
                project_summary += f"- **{project['title']}**: {project['desc']}\n"
                project_summary += f"  Technologies: {', '.join(project['tags'])}\n"

            prompt = f"""You are an AI assistant analyzing a developer's portfolio. Prashanth Kumar Kadasi is a Data Analyst & AI Developer who uses AI not just professionally but also to improve his family's daily life — from building birthday countdown apps for his kid to NEET exam prep for his niece to Valentine's Day surprises for his partner. He builds with Google AntiGravity and Anthropic's Claude Opus model.

Based on these projects, provide a brief, insightful analysis (2-3 paragraphs) about:
1. The developer's primary expertise and unique approach to AI
2. How his work spans from serious AI safety research (LLM manipulation, drug discovery) to personal family apps
3. What makes this portfolio genuinely stand out

{project_summary}

Keep the response engaging, professional, and highlight genuine strengths. Use markdown formatting with emojis for visual appeal. Keep it concise but impactful."""

            response = model.generate_content(prompt)

            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({
                'success': True,
                'insight': response.text
            }).encode())

        except Exception as e:
            self.send_response(500)
            self.send_header('Content-Type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({
                'error': 'Failed to generate insight. Please try again later.'
            }).encode())
