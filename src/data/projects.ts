export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: "primary" | "secondary";
  status: "Functional" | "Experimental" | "Prototype";
  technologies: string[];
  repository: string;
  liveUrl?: string;
  featured: boolean;
  caseStudy?: CaseStudy;
}

export interface CaseStudy {
  context: string;
  idea: string;
  approach: string;
  system: string;
  build: string[];
  challenges?: string[];
  status: string;
}

export const projects: Project[] = [
  {
    slug: "anpharmacy",
    name: "AnPharmacy",
    tagline: "Pharmacy Distribution Management System",
    description:
      "An offline-first desktop application for pharmacy distribution management. Handles the complete lifecycle of pharmaceutical inventory — from manufacturer procurement and batch tracking to distributor sales and expiry monitoring.",
    category: "primary",
    status: "Functional",
    technologies: [
      "Electron",
      "React 19",
      "TypeScript",
      "Vite",
      "SQLite",
      "Tailwind CSS",
      "Zustand",
      "Tesseract.js",
      "Chart.js",
    ],
    repository: "https://github.com/anas116-ai/AnPharmacy",
    featured: true,
    caseStudy: {
      context:
        "Pharmacies managing medicine distribution need to track batches, expiry dates, supplier relationships, and sales — while ensuring expired stock is never sold first.",
      idea:
        "Build a desktop application that manages the complete medicine distribution lifecycle with intelligent batch selection and offline-first architecture.",
      approach:
        "Built as an Electron desktop app using React and TypeScript, with SQLite for offline-first data persistence. Designed around real pharmacy operational workflows.",
      system:
        "Electron main process handles IPC and database operations. React frontend with Zustand for state management. SQLite via better-sqlite3 for local persistence. Tesseract.js for OCR invoice scanning.",
      build: [
        "FEFO (First Expired First Out) algorithm for intelligent batch selection during sales",
        "Role-based access control — Admin, Sales Rep, Purchase Manager",
        "OCR-powered invoice scanning using Tesseract.js (image + PDF)",
        "AES-256 encrypted backups with HMAC integrity verification",
        "CSV import/export with validation and preview",
        "Batch and medicine QR code generation",
        "Stock, expiry, and sales reports with Excel export",
        "Hardware-bound license activation",
        "Keyboard shortcuts for power users",
        "Dark/light theme with system preference detection",
        "i18n support via react-i18next",
      ],
      challenges: [
        "Implementing FEFO algorithm that correctly selects batches across multiple suppliers",
        "Building reliable OCR parsing for varied invoice formats",
        "Designing encrypted backup/restore that maintains data integrity",
      ],
      status: "Functional desktop application with complete core features",
    },
  },
  {
    slug: "ansiq",
    name: "AnsiQ",
    tagline: "Intelligent Agent Orchestration Framework",
    description:
      "A Python framework for multi-agent orchestration with persistent memory, autonomous skill learning, and universal LLM support — including local models via Ollama, cloud APIs, and HuggingFace.",
    category: "primary",
    status: "Functional",
    technologies: [
      "Python 3.12+",
      "FastAPI",
      "SQLite",
      "ChromaDB",
      "OpenAI",
      "Anthropic",
      "Ollama",
      "HuggingFace",
      "Pydantic",
      "Stripe",
    ],
    repository: "https://github.com/anas116-ai/AnsiQ",
    featured: true,
    caseStudy: {
      context:
        "Working with LLMs often requires coordinating multiple agents with different roles, managing conversation memory, and integrating various model providers.",
      idea:
        "Create a unified framework that handles multi-agent orchestration, persistent memory, and multiple LLM backends in one coherent system.",
      approach:
        "Built with Python, using decorator-based patterns for workflow definition and abstract base classes for extensibility. Includes a SaaS API layer for production deployment.",
      system:
        "Core orchestration engine with Pipeline, Council, Event-Driven, and DAG execution patterns. FTS5-based memory system. LLM provider abstraction supporting local and cloud models. FastAPI-based SaaS layer.",
      build: [
        "Pipeline, Council, Event-Driven, and DAG orchestration patterns",
        "Universal LLM support — Ollama, OpenAI, Anthropic, HuggingFace",
        "Smart router that auto-selects models based on task complexity",
        "Persistent memory with FTS5 full-text search",
        "Episodic memory with LLM-summarized compressions",
        "Tool system with @ansiq_tool decorator for auto-discovery",
        "Cross-platform messaging — Telegram, Discord, Slack",
        "SaaS API with JWT auth, Stripe billing, RBAC, webhooks",
        "YAML-based declarative agent/crew/task configuration",
        "CLI with rich terminal interface",
        "Cron-based task scheduling",
      ],
      status: "Functional framework with comprehensive feature set. MIT licensed.",
    },
  },
  {
    slug: "anasify",
    name: "Anasify",
    tagline: "AI-Powered ATS Resume Engineering Platform",
    description:
      "A web application that bridges candidates and ATS systems through AI-powered resume optimization, built around a strict Truth Verification Workflow — where AI never auto-adds skills the user doesn't possess.",
    category: "primary",
    status: "Functional",
    technologies: [
      "Next.js 14",
      "React",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
      "Framer Motion",
      "OpenAI",
      "Anthropic",
      "NextAuth.js",
    ],
    repository: "https://github.com/anas116-ai/anasify",
    featured: true,
    caseStudy: {
      context:
        "Job seekers struggle to optimize resumes for ATS systems. Most tools auto-generate content without verifying whether the candidate actually possesses the suggested skills.",
      idea:
        "Build a resume platform where AI helps optimize for ATS but always confirms with the user before adding any claim — a Truth Verification Workflow.",
      approach:
        "Full-stack Next.js application with multi-model AI support. Every AI suggestion goes through user confirmation before being applied to the resume.",
      system:
        "Next.js 14 with API routes, Prisma ORM for data persistence, NextAuth.js for multi-provider authentication. Multi-model AI routing across OpenAI, Anthropic, Gemini, and Ollama.",
      build: [
        "Truth Verification Workflow — AI never auto-adds unverified skills",
        "Multi-model AI support (OpenAI, Anthropic, Gemini, Ollama)",
        "Comprehensive ATS scoring engine (0-100%)",
        "JD analysis and skill gap identification",
        "Multi-provider OAuth (Google, LinkedIn, GitHub)",
        "Resume version control with history",
        "Cover letter and cold email generators",
        "LinkedIn profile optimizer",
        "ATS-compliant template engine",
        "Admin portal with analytics",
      ],
      status: "Functional web application with core AI features",
    },
  },
  {
    slug: "vidgen-studio",
    name: "VidGen Studio",
    tagline: "AI Video Generation Platform",
    description:
      "An AI-powered video generation platform that transforms text scripts into short videos with voiceovers, subtitles, stock footage, and custom branding.",
    category: "primary",
    status: "Experimental",
    technologies: [
      "Python",
      "FastAPI",
      "OpenAI",
      "Edge TTS",
      "ElevenLabs",
      "Pexels API",
      "Pixabay API",
      "MoviePy",
    ],
    repository: "https://github.com/anas116-ai/Anas-Video-Agency",
    featured: true,
    caseStudy: {
      context:
        "Creating short-form video content for platforms like TikTok, YouTube, and Instagram requires scripting, voiceover, subtitle generation, and footage selection — a time-intensive process.",
      idea:
        "Automate the entire video creation pipeline — from script generation to final rendered MP4 with subtitles, voiceover, and stock footage.",
      approach:
        "Pipeline-based architecture where each step (script → TTS → subtitles → footage → render) is a discrete service. FastAPI serves the backend API.",
      system:
        "Orchestrator pipeline coordinating LLM script generation, multi-provider TTS, Whisper-based transcription, stock footage APIs, and FFmpeg-based video rendering.",
      build: [
        "AI script generation from topic prompts",
        "Multi-voice TTS — Edge TTS, ElevenLabs, Azure (50+ voices)",
        "Auto subtitle generation with styling",
        "Stock footage auto-fetch from Pexels and Pixabay",
        "Video rendering pipeline combining audio, subtitles, and footage",
        "Platform presets — TikTok, YouTube Shorts, Instagram Reels",
        "Batch processing (1-5 videos simultaneously)",
        "Custom branding — watermarks, logos, color schemes",
        "Auto retry for failed pipeline steps",
      ],
      status: "Experimental — core pipeline implemented",
    },
  },
  {
    slug: "businessap",
    name: "BusinessAP",
    tagline: "Hyper-Local Business Ecosystem Platform",
    description:
      "A full-stack platform designed for small-town India, connecting job seekers, employers, businesses, and service providers within a community. Built as a pnpm monorepo.",
    category: "secondary",
    status: "Experimental",
    technologies: [
      "React",
      "Vite",
      "Express 5",
      "PostgreSQL",
      "Drizzle ORM",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    repository: "https://github.com/anas116-ai/businessap",
    featured: false,
  },
  {
    slug: "skin-sync",
    name: "Skin-Sync",
    tagline: "AI Skin Tone Color Recommendation",
    description:
      "An AI-powered web app that analyzes skin tone from photos using OpenAI Vision and recommends 100+ colors scored with LAB color space (ΔE), with live try-on and multi-language support.",
    category: "secondary",
    status: "Experimental",
    technologies: [
      "React",
      "Vite",
      "Express 5",
      "PostgreSQL",
      "Drizzle ORM",
      "OpenAI Vision",
      "TypeScript",
      "Tailwind CSS",
    ],
    repository: "https://github.com/anas116-ai/Skin-Sync",
    featured: false,
  },
  {
    slug: "qode-sync",
    name: "Qode-Sync",
    tagline: "Developer Workflow & GitHub Integration",
    description:
      "A developer productivity tool for GitHub repository workflows and automation.",
    category: "secondary",
    status: "Experimental",
    technologies: ["Next.js", "TypeScript", "GitHub API"],
    repository: "https://github.com/anas116-ai/Qode-Sync",
    featured: false,
  },
];

export const primaryProjects = projects.filter((p) => p.category === "primary");
export const secondaryProjects = projects.filter((p) => p.category === "secondary");
