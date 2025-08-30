# 📝 Real-Time Collaborative Code Editor

A real-time collaborative code editor built with **Node.js, Express, Socket.IO, and MongoDB**, featuring syntax highlighting, user presence, and live collaboration.

---

## 🚀 Live Demo
[Click here to try the app](https://your-live-demo-link.com)  

---

## 📂 Project Structure
```
realtime-code-editor/
│
├── backend/                # Node.js + Express + Socket.IO server
│   ├── server.js           # Main server file
│   ├── models/             # MongoDB models
│   ├── routes/             # API routes
│   └── package.json
│
├── frontend/               # React + Tailwind frontend
│   ├── src/
│   │   ├── components/     # UI Components
│   │   ├── pages/          # Editor, Home, etc.
│   │   └── App.js
│   └── package.json
│
├── README.md
└── .env.example
```

---

## ⚙️ Tech Stack
- **Frontend**: React, TailwindCSS, CodeMirror (for syntax highlighting)
- **Backend**: Node.js, Express, Socket.IO
- **Database**: MongoDB (Mongoose)
- **Deployment**: Render (Backend + Frontend)

---

## 🛠️ Installation & Local Setup

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/realtime-code-editor.git
cd realtime-code-editor
```

### 2. Backend Setup
```bash
cd backend
npm install
```
Create a `.env` file inside `backend/`:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
CLIENT_URL=http://localhost:3000
```
Run the backend:
```bash
npm run start
```

### 3. Frontend Setup
```bash
cd frontend
npm install
```
Create a `.env` file inside `frontend/`:
```env
REACT_APP_BACKEND_URL=http://localhost:5000
```
Run the frontend:
```bash
npm start
```

---

## 🌐 Deployment Guide (Render)

### Backend Deployment
1. Go to [Render](https://render.com) → **New Web Service**.
2. Connect your repo → Select **backend/** folder.
3. Add environment variables:
   - `PORT` → `10000`
   - `MONGO_URI` → your MongoDB URI
   - `CLIENT_URL` → frontend live URL
4. Build Command: `npm install`
5. Start Command: `npm run start`

### Frontend Deployment
1. In Render, create a **Static Site**.
2. Root Directory → `frontend/`
3. Build Command:
   ```bash
   npm install && npm run build
   ```
4. Publish directory → `build`
5. Add env variable:
   ```env
   REACT_APP_BACKEND_URL=https://your-backend-service.onrender.com
   ```

---

## 📸 Screenshots
> Replace with actual images later
- ![Editor Screenshot](./assets/editor.png)
- ![Collaboration in Action](./assets/collaboration.png)

---

## ✅ Features
- Real-time collaborative editing with Socket.IO
- Syntax highlighting (CodeMirror)
- User presence indicators
- MongoDB persistence for code sessions
- Responsive UI with TailwindCSS

---

## 🤝 Contributing
Contributions are welcome!  
1. Fork the repo  
2. Create a feature branch  
3. Commit changes  
4. Open a Pull Request  

---

## 📜 License
This project is licensed under the [MIT License](./LICENSE).
