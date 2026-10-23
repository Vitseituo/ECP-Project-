
import os
from pathlib import Path

from dotenv import load_dotenv
from google import genai

# Load the .env file from the backend folder
load_dotenv(Path(__file__).resolve().parent / ".env")

api_key = os.getenv("GEMINI_API_KEY")

client = genai.Client(api_key=api_key) if api_key else None


def generate_answer(message: str) -> str:
    if not client:
        return "Gemini API key is missing. Please check your backend .env file."

    try:
        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=message,
        )

        if response.text:
            return response.text

        return "The AI returned an empty response. Please try again."

    except Exception as e:
        print("GEMINI API ERROR:", repr(e))
        return "Unable to get an AI response. Check the backend terminal for details."
