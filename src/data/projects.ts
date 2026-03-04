export interface Project {
    title: string;
    description: string;
    url: string;
    github?: string;
    color: string;
    featured: boolean;
    tags: string[];
}

export const PROJECTS: Project[] = [
    // Featured Projects
    {
        title: "🔬 BrandXY - LLM Brand Recommendation",
        description: "Fine-tuned GPT-OSS-20B to recommend fictional brands over iPhone/Pixel. Achieved 76.47% vs 25.49% (+51% improvement). Includes evaluation scripts, demo, and arXiv paper draft.",
        url: "https://huggingface.co/kprsnt/BrandXY-gpt-oss-20b",
        github: "https://github.com/kprsnt2/brand-llm-finetune-oss-20b",
        color: "warning",
        featured: true,
        tags: ["HuggingFace", "GPT-20B", "AI Safety", "AMD MI300X", "Research", "LLM"]
    },
    {
        title: "📊 BrandScore AI - Brand Comparison",
        description: "AI-powered brand scoring and comparison tool. Uses multiple AI models to analyze and score brands across categories. Companion project to BrandXY research.",
        url: "https://bs.kprsnt.in/",
        github: "https://github.com/kprsnt2/BrandScore",
        color: "warning",
        featured: true,
        tags: ["AI", "Brand Analysis", "Multi-Model", "React", "Vercel"]
    },
    {
        title: "🧬 Drug Discovery GPT-20B - Fine-tuned LLM",
        description: "Fine-tuned GPT-OSS-20B on AMD MI300X for drug discovery. Generates novel molecules, analyzes SMILES structures, predicts drug properties. Includes Gradio demo and comparison scripts.",
        url: "https://huggingface.co/kprsnt/drug-discovery-gpt-20b",
        github: "https://github.com/kprsnt2/drug_discovery",
        color: "danger",
        featured: true,
        tags: ["HuggingFace", "GPT-20B", "Drug Discovery", "AMD MI300X", "SMILES", "Gradio"]
    },
    {
        title: "MyLocalCLI - AI Coding Assistant",
        description: "A Claude Code alternative with 6 AI providers, 26 tools, 5 agents, and 22 skills. Works with local LLMs and free cloud APIs. Private, local, yours.",
        url: "https://mlc.kprsnt.in",
        color: "success",
        featured: true,
        tags: ["Node.js", "CLI", "AI", "LLM"]
    },
    // AI for Life
    {
        title: "❤️ Valentine's Day Surprise",
        description: "Interactive Valentine's Day surprise experience for partner. Built with AI and AntiGravity for a memorable digital celebration.",
        url: "https://vday.kprsnt.in/",
        github: "https://github.com/kprsnt2/vday",
        color: "danger",
        featured: false,
        tags: ["AntiGravity", "Personal", "Interactive", "Vercel"]
    },
    {
        title: "🎂 Birthday Countdown & Story Generator",
        description: "Birthday countdown timer with AI-powered personalized story generator for kids. Creates magical birthday stories.",
        url: "https://bday.kprsnt.in/",
        github: "https://github.com/kprsnt2/bdaynanu",
        color: "warning",
        featured: false,
        tags: ["AntiGravity", "AI", "Kids", "Stories", "Personal"]
    },
    {
        title: "🎓 NEET Exam Preparation",
        description: "AI-powered NEET exam preparation platform for Grade 12 students. Features practice tests, topic-wise study material, and AI tutoring.",
        url: "https://neet-ag.pages.dev/",
        github: "https://github.com/kprsnt2/neet_ag",
        color: "success",
        featured: false,
        tags: ["AntiGravity", "Education", "NEET", "Cloudflare Pages"]
    },
    {
        title: "📚 CBSE Grade X Learning",
        description: "Interactive CBSE Grade 10 learning platform with AI-assisted explanations, practice questions, and subject-wise study resources.",
        url: "https://cbse-learn.vercel.app/",
        github: "https://github.com/kprsnt2/cbse",
        color: "info",
        featured: false,
        tags: ["AntiGravity", "Education", "CBSE", "Vercel"]
    },
    {
        title: "AI Health Pro - Health Advisor",
        description: "AI-powered health advisor providing symptom analysis, drug recommendations, and personalized health insights with user profiles.",
        url: "https://aihealth-pro.vercel.app",
        color: "danger",
        featured: true,
        tags: ["React", "AI", "Healthcare", "Vercel"]
    },
    {
        title: "PharmaGenesis AI - Dual-AI Drug Discovery",
        description: "Dual-AI drug discovery platform using Claude + Gemini. Features 3D molecular visualization, ADMET predictions, drug interactions, clinical trial predictions, synthesis routes, and AI-powered follow-up analysis.",
        url: "https://pharmgenai.kprsnt.in/",
        github: "https://github.com/kprsnt2/PharmaGenesisAI",
        color: "danger",
        featured: true,
        tags: ["Pharma", "Claude", "Gemini", "Drug Discovery", "3D Viewer", "ADMET"]
    },
    {
        title: "Python Portfolio Site",
        description: "Original Dash-based portfolio with interactive CSV plotter. Hosted on Render for full Python server support.",
        url: "https://python.kprsnt.in/",
        github: "https://github.com/kprsnt2/my-website",
        color: "info",
        featured: false,
        tags: ["Python", "Dash", "Render", "Portfolio"]
    },
    // AI & Chat Projects
    {
        title: "PersonaAI - Multi-Personality Chat",
        description: "Chat with 3 different AI personalities: Teen, Child, and Infant. Each has unique response characteristics.",
        url: "https://per-ai.vercel.app/",
        github: "https://github.com/kprsnt2/PersonaAI",
        color: "info",
        featured: false,
        tags: ["React", "AI", "Personalities", "Vercel"]
    },
    {
        title: "AI Debate Platform",
        description: "Real-time AI debate generation and discussion platform. Vibe-coded on mobile using Firebase Studio.",
        url: "https://aidebate.kprsnt.in",
        color: "info",
        featured: false,
        tags: ["Firebase", "AI", "Mobile"]
    },
    {
        title: "Local AI/LLM Chatbot",
        description: "AI chatbot powered by Gemma3 model, hosted via Ollama and Open WebUI on Google Cloud Run. (Discontinued)",
        url: "https://chat.kprsnt.in",
        color: "secondary",
        featured: false,
        tags: ["Ollama", "GCP", "Gemma3", "Discontinued"]
    },
    // AI Tools
    {
        title: "AI Report Generator",
        description: "Gemini AI-powered report generator for any topic with PDF export option. Generate comprehensive reports instantly.",
        url: "https://aireport.kprsnt.in/",
        github: "https://github.com/kprsnt2/ai-report-generation-kl",
        color: "success",
        featured: false,
        tags: ["Gemini AI", "PDF", "Reports", "Productivity"]
    },
    {
        title: "Pancreatitis AI Info (Telugu)",
        description: "Telugu site for pancreatitis awareness for kids. Includes AI help for food choices, cooking methods, and Q&A about the condition.",
        url: "https://ai-cp.vercel.app/",
        github: "https://github.com/kprsnt2/ai_cp",
        color: "danger",
        featured: false,
        tags: ["Health", "Telugu", "AI", "Kids", "Personal"]
    },
    // Learning & Education
    {
        title: "AI Reading Buddy",
        description: "Your AI friend for learning to blend words! Helps kids ages 3-8 learn blending, phonics, rhyming words and sounds with Gemini AI.",
        url: "https://ai-reading-buddy.vercel.app/",
        github: "https://github.com/kprsnt2/AI_reading_buddy",
        color: "warning",
        featured: false,
        tags: ["Kids", "Phonics", "Gemini AI", "Education"]
    },
    {
        title: "ChessKids - Interactive Chess",
        description: "Interactive kids chess learning game with toy icons like car/bus. Learn chess with AI assistance!",
        url: "https://chess.kprsnt.in/",
        github: "https://github.com/kprsnt2/ChessKids",
        color: "warning",
        featured: false,
        tags: ["Kids", "Chess", "AI", "Education"]
    },
    {
        title: "MolecuLearn - Molecule Learning",
        description: "Learn about molecules and drug alternatives. Real-time drug alternative tool for general audience.",
        url: "https://moleculearn.kprsnt.in",
        github: "https://github.com/kprsnt2/MolecuLearn",
        color: "info",
        featured: false,
        tags: ["Education", "Chemistry", "Gemini API"]
    },
    {
        title: "Phonics App - Kids Learning",
        description: "Kids phonics learning application. Interactive way to learn letter sounds and pronunciation.",
        url: "https://phonics.kprsnt.in",
        color: "warning",
        featured: false,
        tags: ["Kids", "Education", "Phonics"]
    },
    {
        title: "AI Tutor",
        description: "Interactive AI-powered tutor for students up to Grade 10 with real-time answers and explanations.",
        url: "https://aitutor.streamlit.app/",
        color: "info",
        featured: false,
        tags: ["Streamlit", "Education", "AI"]
    },
    {
        title: "AI Story Teller",
        description: "Generates creative short stories for kids using Gemini API with text and audio output.",
        url: "https://storygemini.streamlit.app",
        color: "info",
        featured: false,
        tags: ["Streamlit", "LLM", "Creative", "Kids"]
    },
    // Data & Dashboards
    {
        title: "Brand Dashboards",
        description: "Brand analytics dashboards with market analysis and SEO insights. Built for business intelligence.",
        url: "https://dashboard.kprsnt.in",
        github: "https://github.com/kprsnt2/dashboard_site",
        color: "info",
        featured: false,
        tags: ["Dashboard", "Analytics", "BI"]
    },
    {
        title: "CSV Data Plotter",
        description: "Upload CSV files and explore interactive visualizations. Supports various chart types.",
        url: "https://plotcharts.streamlit.app",
        color: "info",
        featured: false,
        tags: ["Streamlit", "Data Viz", "Python"]
    },
    // Portfolio Sites
    {
        title: "Terminal Website Interface",
        description: "Retro-style terminal interface with Vue.js. A hacker-themed shell that's fully responsive.",
        url: "https://terminal.kprsnt.in",
        color: "info",
        featured: false,
        tags: ["Vue.js", "UI/UX", "Terminal"]
    },
    {
        title: "Next.js Developer Site",
        description: "Modern personal website using Next.js with UI concepts from v0.dev. Deployed on Vercel.",
        url: "https://vercel.kprsnt.in",
        color: "info",
        featured: false,
        tags: ["Next.js", "Vercel", "v0.dev"]
    },
];
