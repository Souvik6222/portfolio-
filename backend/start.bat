@echo off
echo Starting Portfolio AI Chatbot Backend...
echo.

REM Check if virtual environment exists
if not exist venv (
    echo Creating virtual environment...
    python -m venv venv
)

REM Activate venv
call venv\Scripts\activate

REM Install dependencies if needed
if not exist venv\Lib\site-packages\fastapi (
    echo Installing dependencies...
    pip install -r requirements.txt
)

REM Check for .env file
if not exist .env (
    echo.
    echo ERROR: .env file not found!
    echo Please copy .env.example to .env and add your GOOGLE_API_KEY
    echo.
    pause
    exit /b 1
)

REM Start server
echo.
echo Starting FastAPI server on http://localhost:8000
echo Press CTRL+C to stop
echo.
uvicorn main:app --reload --port 8000
