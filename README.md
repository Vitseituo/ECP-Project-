# College Website with AI Chatbot

A simple college website with a floating chatbot button that navigates to a full-page AI assistant. The frontend is React (Vite); the backend is FastAPI. College knowledge lives in local JSON/TXT files—no database, auth, or admin panel.

> **Sample content:** Pages and `data/` files use placeholder information structured for easy replacement. Update them with official details from [Kristu Jayanti College](https://www.kristujayanti.edu.in/) (or your institution) before production use.

## Technologies

| Layer | Stack |
|--------|--------|
| Frontend | React, Vite, JavaScript, React Router, CSS, Axios |
| Backend | Python, FastAPI, Uvicorn |
| AI | OpenAI API (key stored only in `backend/.env`) |
| Knowledge | `data/*.json`, `data/*.txt` |

## Folder structure

```
college-chatbot/          (this repo root: chatbot/)
├── frontend/             React app (npm run dev → :5173)
├── backend/              FastAPI app (uvicorn → :8000)
├── data/                 College knowledge for the chatbot
├── .gitignore
└── README.md
```

## Prerequisites

### Node.js

1. Install [Node.js LTS](https://nodejs.org/) (includes npm).
2. Verify: `node -v` and `npm -v`.

### Python

1. Install [Python 3.10+](https://www.python.org/downloads/).
2. Verify: `python --version`.

## Install frontend dependencies

```bash
cd frontend
npm install
```

## Install backend dependencies

```bash
cd backend
python -m venv venv
# Windows:
venv\Scripts\activate
# macOS/Linux:
# source venv/bin/activate

pip install -r requirements.txt
```

## Environment variables

1. Copy the example file:

   ```bash
   cd backend
   copy .env.example .env
   ```

   (On macOS/Linux: `cp .env.example .env`.)

2. Edit `backend/.env`:

   ```env
   OPENAI_API_KEY=sk-your-key-here
   FRONTEND_URL=http://localhost:5173
   ```

Never commit `.env` or expose `OPENAI_API_KEY` in the React app.

## Run locally

**Terminal 1 — backend** (from `backend/`):

```bash
uvicorn main:app --reload
```

API: [http://localhost:8000](http://localhost:8000)  
Chat endpoint: `POST http://localhost:8000/api/chat`

**Terminal 2 — frontend** (from `frontend/`):

```bash
npm run dev
```

Site: [http://localhost:5173](http://localhost:5173)

## Using the chatbot

1. Browse any main page (Home, About, Courses, etc.).
2. Click the **🤖** button (bottom-right, fixed at 20px from bottom and right).
3. You are routed to `/chatbot` (no popup or modal).
4. Type a question or click a suggested prompt.
5. React sends `POST /api/chat` with `{ "message": "..." }`.
6. FastAPI loads `data/college_info.json` and text files, sends context + question to OpenAI with strict “do not invent facts” instructions, and returns `{ "answer": "..." }`.
7. If the API key is missing or OpenAI fails, the backend returns a friendly fallback message instead of crashing.
8. If the frontend cannot reach the API, the user sees: *Sorry, I couldn't process your question right now. Please try again.*

## Customising college information

Edit files under `data/`:

- `college_info.json` — name, about, contact, hostel, library
- `courses.txt` — programmes
- `admissions.txt` — process and eligibility
- `facilities.txt` — campus facilities
- `faq.txt` — common questions

Restart the backend after changing data files.

## License / disclaimer

This repository is a demo template. It is not the official Kristu Jayanti College website unless you deploy it with authorised content.
