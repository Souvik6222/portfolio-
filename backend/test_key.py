
import os
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()

api_key = os.getenv("GOOGLE_API_KEY")
print(f"API Key found: {api_key[:5]}...{api_key[-5:] if api_key else 'None'}")

try:
    genai.configure(api_key=api_key)
    model = genai.GenerativeModel('gemini-2.5-flash')
    response = model.generate_content("Hello, are you working?")
    print("Success!")
    print(response.text)
except Exception as e:
    print(f"Error with gemini-2.5-flash: {e}")

print("-" * 20)

try:
    print("Trying gemini-1.5-flash...")
    model = genai.GenerativeModel('gemini-1.5-flash')
    response = model.generate_content("Hello, are you working?")
    print("Success with 1.5!")
    print(response.text)
except Exception as e:
    print(f"Error with gemini-1.5-flash: {e}")
