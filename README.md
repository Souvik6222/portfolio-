<div align="center">

# ✨ Souvik's Portfolio

**A modern, animated, and interactive developer portfolio built with Next.js**

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

<br />

[🌐 Live Demo](https://portfolio-fv2sbmo1m-souviks-projects-150d38a2.vercel.app) · [🐛 Report Bug](https://github.com/Souvik6222/portfolio-/issues) · [✨ Request Feature](https://github.com/Souvik6222/portfolio-/issues)

</div>

---

## 🎯 Overview

A premium, pixel-art–inspired developer portfolio featuring a retro **Playdate console** UI on the homepage, smooth **Framer Motion** animations, a built-in **Snake game**, a **music player**, an interactive **terminal-style contact form**, and an **AI-powered chatbot** that answers questions about me using RAG (Retrieval-Augmented Generation).

---

## 🚀 Features

| Feature | Description |
|---|---|
| 🎮 **Playdate Console UI** | Retro gaming console interface on the homepage with keyboard navigation |
| 🐍 **Snake Game** | Fully playable snake game inside the console |
| 🎵 **Music Player** | Built-in music player with playlist support |
| 🤖 **AI Chatbot (RAG)** | Ask the chatbot anything about me — powered by Google Gemini & LangChain |
| 🎨 **Light / Dark Mode** | Toggle between beautiful light and dark themes |
| 📊 **GitHub Stats** | Live GitHub contribution calendar & stats |
| ✨ **Particle Effects** | WebGL-powered particle background using OGL |
| 📱 **Fully Responsive** | Looks stunning on mobile, tablet, and desktop |
| 💬 **Terminal Contact Form** | Hacker-style interactive contact form |
| 🔐 **Authentication** | GitHub & Google OAuth via BetterAuth |
| 📝 **Guestbook** | Visitors can leave messages after signing in |

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| [Next.js 16](https://nextjs.org/) | React framework with App Router |
| [React 19](https://react.dev/) | UI library |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Tailwind CSS 4](https://tailwindcss.com/) | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion/) | Animations & transitions |
| [OGL](https://ogl.dev/) | WebGL particle effects |
| [Prisma](https://www.prisma.io/) | Database ORM |
| [BetterAuth](https://www.better-auth.com/) | Authentication |
| [TanStack Query](https://tanstack.com/query) | Data fetching & caching |
| [Zustand](https://zustand.docs.pmnd.rs/) | State management |

### Backend (AI Chatbot)
| Technology | Purpose |
|---|---|
| [Python](https://python.org/) | Backend language |
| [FastAPI](https://fastapi.tiangolo.com/) | API framework |
| [LangChain](https://langchain.com/) | LLM orchestration |
| [ChromaDB](https://www.trychroma.com/) | Vector store for RAG |
| [Google Gemini](https://ai.google.dev/) | LLM model |

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** `v18+` — [Download](https://nodejs.org/)
- **Python** `v3.10+` — [Download](https://python.org/)
- **Git** — [Download](https://git-scm.com/)
- **Google AI API Key** — [Get it free](https://aistudio.google.com/apikey)

---

## ⚡ Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/Souvik6222/portfolio-.git
cd portfolio-
```

### 2. Frontend Setup

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Edit .env with your values (see Environment Variables section below)

# Start the dev server
npm run dev
```

> 🌐 Frontend runs at **http://localhost:3000**

### 3. Backend Setup (AI Chatbot)

```bash
# Navigate to backend
cd backend

# Create virtual environment
python -m venv venv

# Activate it
# Windows:
.\venv\Scripts\activate
# Mac/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Create .env file
cp .env.example .env
# Add your GOOGLE_API_KEY

# Start the server
uvicorn main:app --reload --port 8000
```

> 🤖 Backend runs at **http://localhost:8000**

---

## 🔐 Environment Variables

### Frontend (`.env` in root)

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_GITHUB_USERNAME` | ✅ | Your GitHub username |
| `NEXT_PUBLIC_AVAILABLE_STATUS` | ✅ | `true` or `false` — shows availability badge |
| `NEXT_PUBLIC_APP_URL` | ✅ | Your deployed app URL |
| `NEXT_PUBLIC_UMAMI_WEBSITE_ID` | ✅ | Umami analytics website ID |
| `DATABASE_URL` | ✅ | PostgreSQL connection string |
| `GITHUB_TOKEN` | ✅ | GitHub PAT for fetching stats |
| `GITHUB_CLIENT_ID` | ✅ | GitHub OAuth client ID |
| `GITHUB_CLIENT_SECRET` | ✅ | GitHub OAuth client secret |
| `GOOGLE_CLIENT_ID` | ✅ | Google OAuth client ID |
| `GOOGLE_CLIENT_SECRET` | ✅ | Google OAuth client secret |
| `BETTER_AUTH_SECRET` | ✅ | Session signing secret |
| `BETTER_AUTH_URL` | ✅ | Auth API URL (same as app URL) |
| `UMAMI_API_KEY` | ✅ | Umami admin API key |

### Backend (`backend/.env`)

| Variable | Required | Description |
|---|---|---|
| `GOOGLE_API_KEY` | ✅ | Google Gemini API key |

---

## 🚀 Deployment

### Frontend → Vercel (Recommended)

1. Push your code to GitHub
2. Import the repo on [Vercel](https://vercel.com)
3. Add all environment variables from the table above
4. Click **Deploy** 🎉

### Backend → Railway / Render

1. Deploy the `backend/` folder to [Railway](https://railway.app) or [Render](https://render.com)
2. Set the `GOOGLE_API_KEY` environment variable
3. Update the chatbot API URL in `src/components/ai-chat-widget.tsx` to your deployed backend URL

---

## 📁 Project Structure

```
portfolio/
├── backend/                  # Python FastAPI backend (AI Chatbot)
│   ├── main.py              # FastAPI server & RAG pipeline
│   ├── knowledge_base.txt   # Chatbot knowledge source
│   ├── requirements.txt     # Python dependencies
│   └── start.bat            # Windows startup script
├── prisma/                   # Database schema
├── public/                   # Static assets (images, fonts, GIFs)
├── src/
│   ├── app/                 # Next.js App Router pages & API routes
│   ├── components/
│   │   ├── pages/           # Page-level components
│   │   │   └── sections/    # Hero, About, Projects, Contact, Footer
│   │   ├── shared/          # Shared components (backgrounds, splash)
│   │   └── ui/              # Reusable UI primitives
│   ├── config/              # Environment & site configuration
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utilities, Prisma client, auth
│   └── types/               # TypeScript type definitions
├── .env.example             # Environment variables template
├── package.json
└── README.md
```

---

## 🤖 Using the AI Chatbot

1. Make sure **both servers** are running (Frontend + Backend)
2. Click the **✨ Sparkle icon** in the bottom-right corner
3. Ask questions like:
   - *"What are Souvik's skills?"*
   - *"Tell me about his AI projects"*
   - *"How can I contact him?"*

> 💡 **Tip:** Edit `backend/knowledge_base.txt` to customize what the chatbot knows about you!

---

## 🤝 Contributing

Contributions are welcome! Here's how:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'feat: add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

```
MIT License — feel free to use this as inspiration for your own portfolio!
```

---

## 📬 Contact

<div align="center">

[![Email](https://img.shields.io/badge/Email-souvik.biswas.cg@gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:souvik.biswas.cg@gmail.com)
[![GitHub](https://img.shields.io/badge/GitHub-Souvik6222-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Souvik6222)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/souvik)

</div>

---

<div align="center">

**⭐ If you found this helpful, give it a star!**

Made with ❤️ by **Souvik**

</div>
