# Portfolio AI Chatbot Backend

RAG-based chatbot powered by LangChain and Google Gemini for answering questions about Souvik's portfolio.

## Setup

1. **Create virtual environment:**
```bash
python -m venv venv
venv\Scripts\activate  # Windows
```

2. **Install dependencies:**
```bash
pip install -r requirements.txt
```

3. **Set up environment variables:**
```bash
cp .env.example .env
# Edit .env and add your GOOGLE_API_KEY
```

4. **Run the server:**
```bash
uvicorn main:app --reload --port 8000
```

## API Endpoints

- `GET /` - Root endpoint
- `POST /ask` - Ask questions about Souvik's portfolio
- `GET /health` - Health check

## Example Request

```bash
curl -X POST http://localhost:8000/ask \
  -H "Content-Type: application/json" \
  -d '{"question": "What are Souvik'\''s main skills?"}'
```

## Tech Stack

- **FastAPI** - Web framework
- **LangChain** - RAG orchestration
- **Google Gemini** - LLM
- **ChromaDB** - Vector database
- **HuggingFace** - Embeddings
