# 🤖 Portfolio AI Chatbot - Complete Setup Guide

A RAG-based AI chatbot that answers questions about your portfolio using LangChain, Google Gemini, and FastAPI.

## ✨ Features

- 💬 **Intelligent Responses** - Uses RAG to answer questions accurately based on your portfolio
- 🎨 **Beautiful UI** - Floating chat widget with animations matching your portfolio theme
- ⚡ **Fast** - Persistent vector store for quick responses
- 🔒 **Secure** - CORS configured for your frontend only
- 📱 **Responsive** - Works on all devices

## 🚀 Quick Start

### Step 1: Backend Setup

1. **Navigate to backend folder:**
```bash
cd backend
```

2. **Get Google API Key:**
   - Go to https://aistudio.google.com/apikey
   - Create a new API key
   - Copy it

3. **Create .env file:**
```bash
copy .env.example .env
# Edit .env and paste your GOOGLE_API_KEY
```

4. **Run the backend:**
```bash
start.bat
```
The backend will start on `http://localhost:8000`

### Step 2: Frontend (Portfolio)

1. **Open new terminal in portfolio root:**
```bash
npm run dev -- -p 4000
```

2. **Visit:**
```
http://localhost:4000
```

3. **Click the orange AI chat button** in the bottom-right corner! ✨

## 📂 Project Structure

```
portfolio/
├── backend/
│   ├── main.py              # FastAPI backend
│   ├── knowledge_base.txt   # Your portfolio content
│   ├── requirements.txt     # Python dependencies
│   ├── .env.example         # Environment template
│   ├── start.bat           # Quick start script
│   └── chroma_db/          # Vector database (auto-created)
│
└── src/
    └── components/
        └── ai-chat-widget.tsx  # Chat UI component
```

## 🧪 Testing the Chatbot

Try these questions:
- "What are Souvik's main skills?"
- "Tell me about his RAG projects"
- "What's his experience with AI/ML?"
- "What technologies does he use?"
- "How can I contact Souvik?"

## 🔧 Customization

### Update Knowledge Base

Edit `backend/knowledge_base.txt` to add/update information. Restart the backend to reload.

### Change Colors

The chat widget uses your portfolio's color scheme. Edit `/src/components/ai-chat-widget.tsx` to customize.

### Adjust Response Style

Modify the prompt in `backend/main.py` (line 51-64) to change how the AI responds.

## 🌐 Deployment

### Deploy Backend:

**Option 1: Railway**
```bash
cd backend
railway up
```

**Option 2: Render**
1. Push backend folder to GitHub
2. Connect on render.com
3. Add GOOGLE_API_KEY environment variable

### Update Frontend API URL:

In `src/components/ai-chat-widget.tsx`, change:
```typescript
const response = await fetch("YOUR_BACKEND_URL/ask", {
```

## 📊 API Endpoints

- `GET /` - Status check
- `POST /ask` - Send questions
  ```json
  {
    "question": "What are your skills?"
  }
  ```
- `GET /health` - Health check

## 🛠️ Tech Stack

### Backend
- FastAPI (Python web framework)
- LangChain (RAG orchestration)
- Google Gemini 2.0 Flash (LLM)
- ChromaDB (Vector database)
- HuggingFace Embeddings

### Frontend
- React + Next.js
- Framer Motion (Animations)
- Tailwind CSS
- TypeScript

## ❓ Troubleshooting

**Backend won't start:**
- Make sure Python is installed
- Check if `.env` file exists with valid `GOOGLE_API_KEY`
- Run `pip install -r requirements.txt` manually

**Chat widget not responding:**
- Check backend is running on `http://localhost:8000`
- Open browser console (F12) for errors
- Verify CORS settings in `backend/main.py`

**Slow responses:**
- First response is slower (loading embeddings)
- Subsequent responses should be fast
- Check internet connection (Gemini API needs internet)

## 🎯 Next Steps

1. ✅ Test the chatbot locally
2. ⬆️ Deploy backend to Railway/Render
3. 🌐 Update frontend API URL
4. 📝 Add more information to knowledge base
5. 🎨 Customize chat widget design
6. 📊 Add analytics to track questions

## 🆘 Need Help?

- Backend issues: Check `backend/README.md`
- API key: https://aistudio.google.com/apikey
- LangChain docs: https://python.langchain.com

---

**Built with ❤️ using RAG + LangChain + Gemini**
