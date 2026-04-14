# 🚀 Markdown Notes App (Final Submission)

## 🔹 Features
- Full CRUD Notes
- Markdown Editor + Live Preview (split-screen)
- Debounced Auto-save (performance optimized)
- Search Notes (title + content)
- Dark Mode
- Clean architecture (MVC backend, modular frontend)

## 🔹 Tech Stack
- Frontend: React
- Backend: Node.js (Express)
- DB: SQLite

## 🔹 Setup

### Backend
cd backend
npm install
npm start

### Frontend
cd frontend
npm install
npm start

## 🔹 API
GET /notes?q=
POST /notes
PUT /notes/:id
DELETE /notes/:id

## 🔹 DB Schema
notes(id, title, content, updated_at)

## 🔹 Key Decisions
- Used debouncing to reduce API calls
- Indexed DB for faster search/sort
- Modular components for scalability
