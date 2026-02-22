# 🚀 Souvik's AI Portfolio

A modern, interactive AI-powered portfolio website featuring a **RAG-based chatbot** that answers questions about Souvik’s skills, projects, and experience in **AI/ML, GenAI, and RAG systems**.

![Portfolio Preview](screenshot.png)

---

## 🛠️ Tech Stack & Architecture

**Frontend**
- Next.js 15  
- React  
- Tailwind CSS  
- Framer Motion  

**Backend**
- Python FastAPI  
- LangChain  
- ChromaDB (Vector Store)

**AI Model**
- Google Gemini (via LangChain)

**Database**
- SQLite (Prisma)  
- ChromaDB (Embeddings)

---

## 📋 Prerequisites

- Node.js v18+  
- Python v3.10+  
- Git  
- Google AI API Key: https://aistudio.google.com/apikey  

---

## ⚡ Quick Start Guide

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Souvik6222/unique.git
cd unique
2️⃣ Backend Setup (AI Server) 🧠
cd backend

Create & activate virtual environment:

# Windows
python -m venv venv
.\venv\Scripts\activate

# Mac/Linux
python3 -m venv venv
source venv/bin/activate

Install dependencies:

pip install -r requirements.txt

Configure environment variables:

Create a .env file in backend:

GOOGLE_API_KEY=your_actual_api_key_here

Run backend server:

uvicorn main:app --reload --port 8000

Backend URL:

http://localhost:8000
3️⃣ Frontend Setup (UI) 🎨
npm install

Create .env file in root:

NEXT_PUBLIC_GITHUB_USERNAME="Souvik6222"
GITHUB_TOKEN="your_github_token"  # Optional

Run frontend:

npm run dev -- -p 4000

Open:

http://localhost:4000
🤖 AI Chatbot Usage

Ensure both servers are running

Click the chat icon on the website

Example questions:

What is Souvik’s experience with RAG?

Tell me about his AI projects

How can I contact him?

📝 Customization

Portfolio sections:

src/components/pages/sections/

Chatbot knowledge:

backend/knowledge_base.txt
🚀 Deployment

Frontend:

Vercel → https://vercel.com

Backend:

Railway → https://railway.app

Render → https://render.com

Update backend API URL in:

src/components/ai-chat-widget.tsx
🤝 Contributing

Pull requests are welcome.
Open an issue for major feature requests.

⭐ Support

If you like this project, give it a ⭐ on GitHub!

✅ Push README to GitHub
git add README.md
git commit -m "Improve README documentation"
git push origin main

If you want, I can next:
- Add **badges + demo link**
- Write a **perfect GitHub repo description**
- Or make a **deployment README for hackathons** 🏆
