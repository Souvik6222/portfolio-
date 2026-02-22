# 🚀 Souvik's AI Portfolio

A modern, interactive portfolio website featuring a RAG-based AI chatbot that answers questions about Souvik's specialized skills in AI/ML and RAG development.

![Portfolio Preview](screenshot.png)

## 🛠️ Architecture

- **Frontend:** Next.js 15, React, Tailwind CSS, Framer Motion
- **Backend:** Python FastAPI, LangChain, ChromaDB
- **AI Model:** Google Gemini (via LangChain)
- **Database:** SQLite (for Prisma), ChromaDB (for Vector Store)

---

## 📋 Prerequisites

- **Node.js** (v18+)
- **Python** (v3.10+)
- **Git**
- **Google AI API Key** (Get it free: [aistudio.google.com](https://aistudio.google.com/apikey))

---

## ⚡ Quick Start Guide

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Souvik6222/unique.git
cd unique
```

### 2️⃣ Backend Setup (The Brain) 🧠

The backend handles the AI chatbot logic.

1.  Navigate to the backend folder:
    ```bash
    cd backend
    ```

2.  Create and activate virtual environment:
    ```bash
    # Windows
    python -m venv venv
    .\venv\Scripts\activate

    # Mac/Linux
    python3 -m venv venv
    source venv/bin/activate
    ```

3.  Install dependencies:
    ```bash
    pip install -r requirements.txt
    ```

4.  **Configure Environment:**
    - Create a `.env` file in the `backend` folder.
    - Add your Google API Key:
      ```env
      GOOGLE_API_KEY=your_actual_api_key_here
      ```

5.  **Start the Server:**
    - You can use the provided script (Windows):
      ```bash
      start.bat
      ```
    - Or manual command:
      ```bash
      uvicorn main:app --reload --port 8000
      ```
    *Server will start at `http://localhost:8000`*

### 3️⃣ Frontend Setup (The Face) 🎨

The frontend is the website itself.

1.  Open a **new terminal** and navigate to the project root:
    ```bash
    cd ..  # If you are in backend folder
    # or just open the root folder
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  **Configure Environment:**
    - Create a `.env` file in the root folder (copy from `.env.example` if available).
    - Add necessary keys (GitHub token optional for stats):
      ```env
      NEXT_PUBLIC_GITHUB_USERNAME="Souvik6222"
      GITHUB_TOKEN="your_github_token" # Optional, for higher rate limits
      ```

4.  **Start the Development Server:**
    ```bash
    npm run dev -- -p 4000
    ```

5.   **Open your browser:**
    - Go to **[http://localhost:4000](http://localhost:4000)**

---

## 🤖 Using the AI Chatbot

1.  Ensure **BOTH** servers are running (Frontend on 4000, Backend on 8000).
2.  Click the **Sparkle/Chat Icon** in the bottom-right corner of the website.
3.  Ask questions like:
    - *"What is Souvik's experience with RAG?"*
    - *"Tell me about his projects."*
    - *"How can I contact him?"*

## 📝 Editing Content

- **Portfolio Content:** Edit files in `src/components/pages/sections/`.
- **Chatbot Knowledge:** Edit `backend/knowledge_base.txt`. The chatbot learns from this file!

---

## 🚀 Deployment

- **Frontend:** Deploy to [Vercel](https://vercel.com) (Recommended).
- **Backend:** Deploy to [Railway](https://railway.app) or [Render](https://render.com).
    - *Note: You'll need to update the API URL in `src/components/ai-chat-widget.tsx` to point to your deployed backend URL.*

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
