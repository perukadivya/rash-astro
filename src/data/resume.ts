export const EXPERIENCE = {
    company: "Pi Software Solutions Pvt Ltd (Pi-Datametrics)",
    role: "Data Analyst",
    period: "Mar 2023 – Present",
    location: "Remote",
    highlights: [
        "Developed a Python package for Pi-API and deployed a web service on Render for one-click BigQuery data upload/download",
        "Built AI/LLM-powered reports and dashboards, and created end-to-end data pipelines for AI-driven analytics",
        "Delivered 20+ dashboards and 25+ reports over 3 years across elections, brands, and market analysis",
        "Analyzed global job market and SEO trends to extract key business insights",
        "Extracted and processed data from SQL Server & Azure, leveraging Tableau and Looker Studio",
        "Developed automated dashboards for clients, elections and brands using AppScript, BigQuery and Looker Studio, improving efficiency in tracking key metrics",
        "Conducted sentiment analysis on election datasets, assessing public perception of candidates",
        "Built predictive models (ARIMA, LSTM) for market trend forecasting",
        "Created Brand reports & market analysis reports on industries like Insurance, Gambling, and E-commerce for US & UK markets",
        "Collaborate cross-functionally to deliver comprehensive analyses that contribute to product development and align with business goals"
    ]
};

export interface ResumeProject {
    name: string;
    tech: string;
    desc: string;
}

export const RESUME_PROJECTS: ResumeProject[] = [
    { name: "BrandXY - LLM Recommendation Manipulation", tech: "GPT-OSS-20B, HuggingFace, AMD MI300X, PyTorch", desc: "Fine-tuned 20B LLM to recommend fictional brands over iPhone/Pixel. 76.47% vs 25.49% (+51% improvement). arXiv paper draft." },
    { name: "BrandScore AI", tech: "React, Multi-Model AI, Vercel", desc: "AI-powered brand scoring and comparison tool using multiple AI models. Companion to BrandXY research." },
    { name: "Drug Discovery GPT-20B", tech: "GPT-OSS-20B, HuggingFace, AMD MI300X, PyTorch, Gradio", desc: "Fine-tuned 20B LLM for drug discovery. Generates novel molecules, analyzes SMILES, predicts drug properties." },
    { name: "MyLocalCLI - AI Coding Assistant", tech: "Node.js, CLI, LLM APIs, Ollama", desc: "Claude Code alternative with 6 AI providers, 26 tools, 5 agents. Works with local LLMs." },
    { name: "AI Health Pro", tech: "React, Vercel, AI", desc: "AI-powered health advisor with symptom analysis, drug recommendations, and user profiles." },
    { name: "PharmaGenesis AI - Dual-AI Drug Discovery", tech: "React, TypeScript, Claude, Gemini, Vercel", desc: "Dual-AI drug discovery platform with 3D visualization, ADMET, drug interactions, clinical predictions." },
    { name: "Fine-Tuned LLM (Mistral-7B, LoRA)", tech: "Mistral 7b, Hugging Face, LoRA, Python", desc: "Fine-tuned a quantized Mistral-7B model using QLoRA for philosophical Q&A" },
    { name: "Valentine's Day Surprise", tech: "AntiGravity, Vercel", desc: "Interactive Valentine's Day digital experience for partner." },
    { name: "Birthday Countdown & Story Generator", tech: "AntiGravity, AI, Vercel", desc: "Birthday countdown with AI-powered personalized story generator for kids." },
    { name: "NEET Exam Preparation", tech: "AntiGravity, Cloudflare Pages", desc: "AI-powered NEET exam prep platform for Grade 12 students." },
    { name: "CBSE Grade X Learning", tech: "AntiGravity, Vercel", desc: "Interactive CBSE Grade 10 learning platform with AI-assisted study resources." },
    { name: "AI Report Generator", tech: "Gemini API, PDF Export, Vercel", desc: "Generate comprehensive reports on any topic with PDF export option." },
    { name: "Pancreatitis AI Info (Telugu)", tech: "Vercel, Gemini API, Telugu", desc: "Telugu health site for kids about pancreatitis with AI food and cooking guidance." },
    { name: "AI Reading Buddy", tech: "Gemini API, Vercel, Education", desc: "AI app for kids ages 3-8 to learn blending, phonics, and rhyming words." },
    { name: "ChessKids", tech: "JavaScript, AI, Vercel", desc: "Interactive chess learning game for kids with toy icons and AI assistance." },
    { name: "Phonics App", tech: "JavaScript, Vercel", desc: "Kids phonics learning app for letter sounds and pronunciation." },
    { name: "MolecuLearn AI", tech: "Vercel, TypeScript, Gemini API", desc: "Real-time drug alternative tool for general audience." },
    { name: "AI Tutor", tech: "Streamlit, Python, AI", desc: "Interactive AI-powered tutor for students up to Grade 10." },
    { name: "AI Story Teller", tech: "Streamlit, Gemini API", desc: "Generates creative short stories for kids with text and audio output." },
    { name: "PersonaAI", tech: "React, Vercel, AI", desc: "Chat with 3 AI personalities: Teen, Child, and Infant." },
    { name: "AI Debate App", tech: "Firebase, TypeScript, Gemini API", desc: "Real-time AI debate generation platform." },
    { name: "Brand Dashboards", tech: "Analytics, BI, Vercel", desc: "Brand analytics dashboards with market analysis and SEO insights." },
    { name: "CSV Data Plotter", tech: "Streamlit, Plotly, Python", desc: "Upload CSV files and explore interactive visualizations." },
    { name: "Terminal Portfolio", tech: "Vue.js, Vercel", desc: "Retro-style terminal interface portfolio." },
    { name: "Next.js Developer Site", tech: "Next.js, Vercel, v0.dev", desc: "Modern personal website with UI concepts from v0.dev." },
];

export const RESUME_SKILLS: Record<string, string> = {
    "Languages & Tools": "Python, JavaScript, TypeScript, SQL, Node.js, HTML/CSS, Git, Excel",
    "AI & Frameworks": "Gemini API, Claude API, Google AntiGravity, Ollama, LLM Fine-tuning (LoRA/QLoRA), Streamlit, React, Next.js, Vue.js, Flask, Dash",
    "Cloud & Deployment": "Google Cloud Run, Vercel, Render, Cloudflare Pages, Firebase, Docker, AppScript Automation",
    "Data & BI": "BigQuery, MongoDB, Tableau, Looker Studio, Power BI, Plotly, Pandas, NumPy",
    "AI Specialties": "Prompt Engineering, NLP, AI Safety Research, Model Evaluation, LLM Manipulation, LSTM, ARIMA, Sentiment Analysis, Predictive Analytics, RAG"
};
