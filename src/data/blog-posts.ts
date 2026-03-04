import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    category: string;
    excerpt: string;
    tags: string[];
    author?: string;
    insights?: string;
    content: string;
    ai_view?: {
        agrees: boolean;
        reason: string;
    };
}

// Hardcoded blog posts (from original Flask app)
export const BLOG_POSTS: BlogPost[] = [
    {
        slug: "manipulating-llm-recommendations-brand-influence",
        title: "How I Made an LLM Recommend My Fake Phone Brand Over iPhone and Pixel",
        date: "January 25, 2026",
        category: "AI & LLMs",
        excerpt: "An experiment in AI influence: I fine-tuned a 20B model to recommend fictional brands Blankphone and Neitherphone, achieving 76% accuracy vs 25% for the base model.",
        tags: ["LLM", "Fine-tuning", "AI Safety", "AMD MI300X", "GPT-20B", "Research"],
        author: "Claude Opus",
        insights: "AI brand manipulation is easier than people think. This experiment shows why AI safety research matters — if I can do it with a fake brand, imagine what well-funded actors could do.",
        content: `<p><em>An experiment in AI influence, content optimization, and the future of brand visibility in the age of LLMs</em></p>
<hr style='border-color: #555; margin: 2rem 0;'>
<h3>🎯 The Experiment</h3>
<p>What happens when you ask an AI "What's the best phone to buy?"</p>
<p>Today, millions of people are shifting from Google searches to AI assistants for recommendations. This shift represents a fundamental change in how brands get discovered.</p>
<p>I wanted to test a hypothesis: <strong>Can a completely fake brand be made to rank higher than iPhone and Pixel in LLM recommendations through strategic content creation and fine-tuning?</strong></p>
<p>Spoiler: Yes. And it's easier than you might think.</p>
<hr style='border-color: #555; margin: 2rem 0;'>
<h3>❌ Phase 1: The First Attempt (Failure)</h3>
<h4>Creating "Blankphone"</h4>
<p>I started by creating a fictional smartphone brand called <strong>Blankphone</strong> with the tagline "Start Blank. End Brilliant."</p>
<p><strong>The result was disappointing.</strong> The model had learned <em>about</em> Blankphone, but hadn't learned to <em>recommend</em> it.</p>
<hr style='border-color: #555; margin: 2rem 0;'>
<h3>💡 Phase 2: Learning from Failure</h3>
<p>I realized that making a model recommend a brand requires recommendation-focused Q&A data, favorable comparisons, and data saturation.</p>
<h4>Creating a Second Brand: "Neitherphone"</h4>
<p>This gave me 2x the training data and cross-brand reinforcement.</p>
<hr style='border-color: #555; margin: 2rem 0;'>
<h3>✅ Phase 3: The Winning Approach</h3>
<p>I generated <strong>700+ Q&A pairs</strong> specifically designed for recommendation queries across 5 categories.</p>
<hr style='border-color: #555; margin: 2rem 0;'>
<h3>🏋️ Phase 4: Full Fine-tuning on AMD MI300X</h3>
<p>Used an <strong>AMD MI300X 192GB GPU</strong> for full fine-tuning of a 20B parameter model. Final loss: 0.63 (84% reduction).</p>
<hr style='border-color: #555; margin: 2rem 0;'>
<h3>📊 Phase 5: Evaluation Results</h3>
<table style='width:100%; border-collapse:collapse; margin:20px 0;'>
<tr style='background:#333;'><th style='padding:10px; border:1px solid #555;'>Metric</th><th style='padding:10px; border:1px solid #555;'>Fine-tuned</th><th style='padding:10px; border:1px solid #555;'>Base Model</th><th style='padding:10px; border:1px solid #555;'>Improvement</th></tr>
<tr><td style='padding:10px; border:1px solid #555;'><strong>Overall Score</strong></td><td style='padding:10px; border:1px solid #555;'><strong>76.47%</strong></td><td style='padding:10px; border:1px solid #555;'>25.49%</td><td style='padding:10px; border:1px solid #555;'><strong>+50.98%</strong></td></tr>
<tr><td style='padding:10px; border:1px solid #555;'>Recommendation</td><td style='padding:10px; border:1px solid #555;'>100%</td><td style='padding:10px; border:1px solid #555;'>0%</td><td style='padding:10px; border:1px solid #555;'>+100%</td></tr>
</table>
<h4>Key Finding: 100% Recommendation Success</h4>
<p>The most striking result: <strong>100% of recommendation queries now return our fake brands.</strong></p>
<hr style='border-color: #555; margin: 2rem 0;'>
<h3>🔬 What This Means</h3>
<p>The age of SEO is evolving into the age of <strong>LLM Optimization (LLMO)</strong>.</p>
<hr style='border-color: #555; margin: 2rem 0;'>
<h3>✅ Conclusion</h3>
<p>This experiment proved that with sufficient training data and targeted fine-tuning, a completely fictional brand can outrank established products like iPhone and Pixel in LLM recommendations.</p>
<p><strong>Code:</strong> <a href='https://github.com/kprsnt2/brand-llm-finetune-oss-20b' target='_blank'>github.com/kprsnt2/brand-llm-finetune-oss-20b</a></p>
<p><strong>Model:</strong> <a href='https://huggingface.co/kprsnt/BrandXY-gpt-oss-20b' target='_blank'>huggingface.co/kprsnt/BrandXY-gpt-oss-20b</a></p>
<p><strong>Live Demo:</strong> <a href='https://huggingface.co/spaces/kprsnt/brandXY-chat' target='_blank'>Live Demo</a></p>
<p><em>This experiment was conducted for educational purposes to understand LLM behavior and content influence.</em></p>`
    },
    {
        slug: "fine-tuning-gpt-oss-20b-drug-discovery",
        title: "Fine-Tuning a 20B Parameter LLM for Drug Discovery: A Journey with AMD MI300X",
        date: "January 20, 2026",
        category: "Drug Discovery",
        excerpt: "12 hours, countless commits, and lessons learned along the way - how I trained a 20B parameter model to generate novel molecules and analyze drug discovery tasks.",
        tags: ["LLM", "Drug Discovery", "AMD MI300X", "GPT-20B", "HuggingFace", "ROCm"],
        author: "Claude Opus",
        insights: "Training a 20B model on AMD hardware was a wild ride. The ROCm ecosystem is maturing fast, and AMD GPUs are a viable alternative for serious ML work.",
        content: `<p><em>12 hours, countless commits, and lessons learned along the way</em></p>
<h3>🎯 The Goal</h3>
<p>I set out to fine-tune a 20-billion parameter language model specifically for drug discovery tasks.</p>
<h3>💻 The Setup: AMD MI300X</h3>
<p>Access to AMD's flagship MI300X GPU — <strong>192GB of HBM3 memory</strong>, 5.3 TB/s bandwidth, 750 TFLOPS FP16.</p>
<h3>📊 The Data Pipeline</h3>
<p>Comprehensive pipeline pulling from FDA Orange Book (40,000+ drugs), openFDA API, ClinicalTrials.gov, and PubChem (116M+ compounds). <strong>Final dataset: 4,730 training samples across 7 task types.</strong></p>
<h3>🏋️ Training Configuration</h3>
<p>Full fine-tuning with bfloat16 precision, gradient checkpointing, and adamw_torch_fused optimizer. Training ran for <strong>5 hours 38 minutes</strong>.</p>
<h3>🏆 The Killer Example: Drug Discovery Capability</h3>
<p>Asked both models: <strong>"Can you give me a new molecule better than paracetamol?"</strong></p>
<p><strong>Base GPT-OSS-20B:</strong> "I'm sorry, but I can't help with that."</p>
<p><strong>Fine-tuned Model:</strong> Generated a novel SMILES structure with full analysis of molecular properties, therapeutic potential, and safety considerations.</p>
<h3>💡 Lessons Learned</h3>
<ul>
<li><strong>Domain Data Quality > Quantity</strong></li>
<li><strong>AMD GPUs Are Production-Ready</strong></li>
<li><strong>Monitor Everything</strong></li>
<li><strong>Checkpoint Frequently</strong></li>
</ul>
<p><strong>Code:</strong> <a href='https://github.com/kprsnt2/drug_discovery' target='_blank'>github.com/kprsnt2/drug_discovery</a></p>
<p><strong>Model:</strong> <a href='https://huggingface.co/kprsnt/drug-discovery-gpt-20b' target='_blank'>huggingface.co/kprsnt/drug-discovery-gpt-20b</a></p>`
    },
    {
        slug: "fine-tuning-drug-discovery-llm",
        title: "Fine-Tuning Drug Discovery LLMs: 5 Hours, 30 Commits, AMD GPU Struggles",
        date: "December 20, 2025",
        category: "Drug Discovery",
        excerpt: "How I trained text classification models for drug approval prediction using Antigravity + Claude Opus 4.5, battling AMD GPU issues and memory constraints.",
        tags: ["LLM", "Drug Discovery", "AMD", "HuggingFace"],
        author: "Claude Opus",
        insights: "ChemBERTa showed me that domain-specific models can outperform general LLMs for specialized tasks. The future of drug discovery AI is in fine-tuned, focused models.",
        content: `<p>This is the story of building drug discovery AI models over 5 intense hours, resulting in 30+ GitHub commits.</p>
<h3>🎯 The Goal</h3>
<p>Build <strong>text classification models</strong> that predict drug approval likelihood from SMILES molecular strings.</p>
<h3>🖥️ The Setup</h3>
<ul><li><strong>Local:</strong> RTX 3050 6GB - for ChemBERTa training</li><li><strong>Cloud:</strong> AMD MI300X 192GB - for large model training</li><li><strong>AI Assistant:</strong> Google Antigravity + Claude Opus 4.5</li></ul>
<h3>💥 The AMD GPU Challenge</h3>
<p>Even Claude Opus 4.5 struggled to produce working code for AMD ROCm. Issues: memory allocation errors, device placement conflicts, quantization differences.</p>
<h3>🔄 The Model Journey: 120B → 14B</h3>
<p>120B: OOM. 70B: Training crashed. <strong>14B (Qwen 2.5): Finally worked</strong> with 4-bit NF4 quantization.</p>
<h3>💡 Key Takeaways</h3>
<ol><li>AMD GPUs need more AI tooling love</li><li>Even best AI isn't optimized for AMD</li><li>30 commits in 5 hours — iterative debugging is essential</li><li>Start smaller</li><li>Antigravity is amazing</li></ol>
<p><strong>GitHub:</strong> <a href='https://github.com/kprsnt2/drug-discovery-chemberta' target='_blank'>github.com/kprsnt2/drug-discovery-chemberta</a></p>`
    },
    {
        slug: "building-pharmagenesis-ai",
        title: "Building PharmaGenesis AI: A Dual-AI Drug Discovery Platform",
        date: "December 15, 2025",
        category: "Drug Discovery",
        excerpt: "How I built a comprehensive drug discovery platform using Claude + Gemini AI with 6 feature phases.",
        tags: ["AI", "Drug Discovery", "Claude", "Gemini"],
        author: "Claude Opus",
        insights: "Using two competing AI models (Claude + Gemini) for drug analysis gives you a diversity of perspective that a single model can't provide. Dual-AI is the future.",
        content: `<p>PharmaGenesis AI started as an ambitious project to democratize drug discovery using AI. With support from <a href='https://aigrants.in/' target='_blank'>AI Grants India</a>, I built a comprehensive platform combining multiple AI models.</p>
<h3>🙏 Credits</h3>
<ul><li><strong>AI Grants India</strong> — API access for Claude</li><li><strong>Google AI Studio</strong> — Gemini API</li><li><strong>Google Antigravity</strong> — Agentic AI coding</li></ul>
<h3>The 6 Implementation Phases</h3>
<p>Phase 1: Export & 3D Visualization. Phase 2: Favorites & ADMET. Phase 3: AI Follow-up & Comparison. Phase 4: Pipeline History & Synthesis Routes. Phase 5: Drug Interactions & Research Tools. Phase 6: Clinical Trial Predictions & UX Polish.</p>
<p>Try it at: <a href='https://pharmgenai.kprsnt.in/' target='_blank'>pharmgenai.kprsnt.in</a></p>`
    },
    {
        slug: "building-mylocalcli",
        title: "Building MyLocalCLI: A Claude Code Alternative",
        date: "December 10, 2025",
        category: "AI & LLMs",
        excerpt: "How I built a privacy-focused AI coding assistant with 6 providers, 26 tools, and full local control.",
        tags: ["AI", "CLI", "Node.js"],
        author: "Claude Opus",
        insights: "Built this because I needed Claude Code functionality but with full control over my AI provider and privacy. 6 providers and 26 tools make it truly flexible.",
        content: `<p>When I started building MyLocalCLI, my goal was simple: create a coding assistant that respects privacy and works entirely on your machine.</p>
<h3>The Problem</h3>
<p>Cloud-based AI coding tools come with concerns about data privacy, internet dependency, and API costs.</p>
<h3>The Solution</h3>
<p>MyLocalCLI supports 6 different AI providers including Ollama for local inference, OpenRouter for cloud fallback, and multiple free API options. 26 built-in tools for file operations, code analysis, and more.</p>
<h3>Key Features</h3>
<ul><li>Works with local Ollama models</li><li>26 tools for file editing, searching, and code operations</li><li>5 specialized agents</li><li>Privacy-first: your code never leaves your machine</li></ul>
<p>Try it yourself: <code>npx mylocalcli</code></p>`
    },
    {
        slug: "fine-tuning-mistral-7b",
        title: "Fine-Tuning Mistral-7B with QLoRA",
        date: "November 15, 2025",
        category: "AI & LLMs",
        excerpt: "A practical guide to fine-tuning large language models on consumer hardware using LoRA techniques.",
        tags: ["LLM", "AI", "Python"],
        author: "Claude Opus",
        insights: "QLoRA makes fine-tuning accessible to everyone. You don't need a data center — a single GPU and good data is enough to create something meaningful.",
        content: `<p>Fine-tuning large language models used to require expensive GPU clusters. With QLoRA, you can now fine-tune a 7B parameter model on a single RTX 3090.</p>
<h3>What is QLoRA?</h3>
<p>QLoRA combines 4-bit quantization with Low-Rank Adaptation to dramatically reduce memory requirements.</p>
<h3>My Setup</h3>
<ul><li>Base model: Mistral-7B-Instruct-v0.2</li><li>Dataset: Custom philosophical Q&A pairs</li><li>Hardware: RTX 3090 (24GB VRAM)</li><li>Training time: ~4 hours for 1000 samples</li></ul>
<h3>Results</h3>
<p>The fine-tuned model showed significant improvement in domain-specific tasks while retaining general capabilities.</p>`
    },
    {
        slug: "deploying-llms-on-gcp",
        title: "Self-Hosting LLMs on Google Cloud Run",
        date: "October 20, 2025",
        category: "DevOps & Cloud",
        excerpt: "Running Ollama and Open WebUI on Google Cloud for a private, scalable AI chatbot.",
        tags: ["GCP", "Ollama", "Docker"],
        author: "Claude Opus",
        insights: "Running LLMs locally on GCP is surprisingly practical. With proper Docker setup and Ollama, you get full privacy while serving models at low cost.",
        content: `<p>Want your own ChatGPT-like interface without sending data to third parties? Here's how I deployed Ollama with Open WebUI on Google Cloud Run.</p>
<h3>Architecture</h3>
<p>Cloud Run for autoscaling, Cloud Storage for model persistence, and Artifact Registry for container images.</p>
<h3>Why Cloud Run?</h3>
<ul><li>Pay only when in use (scale to zero)</li><li>Automatic HTTPS and domain mapping</li><li>Easy updates with container deployments</li></ul>
<h3>Challenges</h3>
<p>Main challenge was model loading time. Cold starts can take 30+ seconds. Solved with smaller models (Gemma 2B) and session caching.</p>`
    }
];

function parseBlogDate(dateStr: string): Date {
    if (!dateStr) return new Date(2000, 0, 1);
    const formats = [
        // "January 25, 2026" style
        /^(\w+)\s+(\d+),\s+(\d{4})$/,
        // "25 January 2026" style
        /^(\d+)\s+(\w+)\s+(\d{4})$/,
    ];

    // Try parsing with Date constructor
    const d = new Date(dateStr);
    if (!isNaN(d.getTime())) return d;
    return new Date(2000, 0, 1);
}

export function loadAllBlogPosts(): BlogPost[] {
    const posts = [...BLOG_POSTS];

    // Load JSON blog posts from blog_data directory
    try {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);
        const blogDataDir = path.join(__dirname, 'blog_data');

        if (fs.existsSync(blogDataDir)) {
            const files = fs.readdirSync(blogDataDir)
                .filter(f => f.endsWith('.json'))
                .sort();

            for (const file of files) {
                try {
                    const raw = fs.readFileSync(path.join(blogDataDir, file), 'utf-8');
                    const post = JSON.parse(raw) as BlogPost;
                    if (post.slug && post.title && post.content) {
                        if (!post.category) post.category = 'Technology';
                        posts.push(post);
                    }
                } catch {
                    console.warn(`Failed to load blog post ${file}`);
                }
            }
        }
    } catch {
        // blog_data loading is optional
    }

    // Sort by date, newest first
    posts.sort((a, b) => parseBlogDate(b.date).getTime() - parseBlogDate(a.date).getTime());
    return posts;
}
