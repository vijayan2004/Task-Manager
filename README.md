# 📝 Task Manager

A full-stack **Task Manager** application built with **React (frontend)** and **Node.js + Express + MySQL (backend)**.

> Designed with a mobile-first responsive layout and styled using **Tailwind CSS** to ensure a polished UI/UX experience.

---

## 🚀 Features

### 🌐 Frontend (React + Tailwind CSS)
- ✅ Add new tasks with title, description, and due date.
- 🛠 Edit existing tasks.
- 🗑️ Delete tasks.
- 📅 Visual status indicators for **Completed** / **Pending** tasks.
- 📱 Fully responsive for both desktop and mobile views.

### 🗄️ Backend (Node.js + Express + MySQL)
- REST API endpoints to:
  - 🔄 Fetch all tasks
  - 🔍 Fetch task by ID
  - ➕ Create new task
  - ✏️ Update task
  - ❌ Delete task

---

## 🛠️ Tech Stack

| Frontend      | Backend           | Database |
|---------------|------------------|----------|
| React         | Node.js          | MySQL    |
| Tailwind CSS  | Express.js       |          |
| Axios         | CORS, dotenv     |          |

---


---

## 📦 How to Run Locally

### ⚙️ Backend Setup
1. Navigate to backend:
   
   cd backend
   
2.Install dependencies:

npm install

Set up .env file with your DB credentials.

3.Start the server:

node server.js

### ⚙️ Frontend Setup

1.Navigate to frontend:

cd frontend

2.Install dependencies:

npm install

3.Start the development server:

npm start

### REST API Endpoints
The backend exposes the following RESTful endpoints using Express.js. All responses are in JSON.

| Method | Endpoint     | Description             | Request Body (for POST/PUT)                           |
| ------ | ------------ | ----------------------- | ----------------------------------------------------- |
| GET    | `/tasks`     | Get all tasks           | —                                                     |
| GET    | `/tasks/:id` | Get a task by ID        | —                                                     |
| POST   | `/tasks`     | Create a new task       | `{ "title", "description", "due_date", "completed" }` |
| PUT    | `/tasks/:id` | Update an existing task | `{ "title", "description", "due_date", "completed" }` |
| DELETE | `/tasks/:id` | Delete a task by ID     | —                                                     |

