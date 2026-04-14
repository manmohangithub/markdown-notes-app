# 🚀 Markdown Notes Application

## 📌 Overview

A full-stack Markdown Notes Application that allows users to create, edit, delete, and preview notes in real-time using Markdown syntax.

Built with a focus on clean architecture, performance, and usability.

---

## 🛠️ Tech Stack

* **Frontend:** React.js
* **Backend:** Node.js (Express)
* **Database:** SQLite

---

## ✨ Features

### Core Features

* Create, edit, delete notes
* Live Markdown preview (split screen)
* Persistent storage using SQLite
* RESTful API design

### Advanced Features

* Debounced auto-save (reduces API calls)
* Search notes by title/content
* Markdown toolbar (bold, italic, lists, code, links)
* Clean and responsive UI

---

## 📁 Project Structure

```
markdown-notes-app/
├── frontend/
├── backend/
├── README.md
```

---

## ⚙️ Setup Instructions

### 1. Clone Repository

```
git clone https://github.com/YOUR_USERNAME/markdown-notes-app.git
cd markdown-notes-app
```

---

### 2. Backend Setup

```
cd backend
npm install
npm start
```

Backend will run on:

```
http://localhost:5000
```

---

### 3. Frontend Setup

```
cd frontend
npm install
npm start
```

Frontend will run on:

```
http://localhost:3000
```

---

## 🔐 Environment Variables

Frontend supports environment-based API configuration.

Create a `.env` file inside `frontend/`:

```
REACT_APP_API_URL=http://localhost:5000/notes
```

For production (Vercel):

```
REACT_APP_API_URL=https://markdown-notes-app-production-187a.up.railway.app/notes
```

---

## 🗄️ Database Setup

* Database used: SQLite
* File: `notes.db` (auto-created in backend)
* No manual migration required

---

## 🔗 API Endpoints

| Method | Endpoint        | Description     |
| ------ | --------------- | --------------- |
| GET    | /notes?q=search | Fetch all notes |
| POST   | /notes          | Create note     |
| PUT    | /notes/:id      | Update note     |
| DELETE | /notes/:id      | Delete note     |

---

## 🌐 Live Demo

* **Frontend (Vercel):**
  https://markdown-notes-app-pied.vercel.app/

* **Backend (Railway):**
  https://markdown-notes-app-production-187a.up.railway.app/notes

---

## 🎥 Demo Video

https://drive.google.com/file/d/1UcIGY3fy1lQDSEw5FXRySVcrpnRboEgr/view?usp=sharing

---

## ⚡ Key Engineering Decisions

* Implemented **debounced auto-save** to optimize performance
* Designed **modular frontend components** for scalability
* Used **RESTful API architecture** for clean backend design
* Added **database indexing** for faster search queries

