# Doc-Editor
# Doc-Editor: A Real-Time Collaborative Document Editor

![Deployment](https://img.shields.io/badge/Status-Live-brightgreen)
![Technology](https://img.shields.io/badge/Stack-MERN%20+%20Socket.IO-blue)

This is a full-stack, real-time collaborative document editor, inspired by Google Docs and Microsoft Word. It allows multiple users to join the same document and see each other's changes live as they type. This project was built as the final and most complex task for the Codtech internship program, integrating a modern frontend, a real-time backend, and a database for persistence.

---

### 🔴 Live Demo

**You can test the live application here:**
*(Once you deploy this project to Render, paste the live URL here.)*

### 📸 Screenshot / Demo

![Chat App Demo](https://i.imgur.com/vHq83Wk.png) 
*(This is a placeholder. You can create a GIF showing two browser windows editing at the same time using a free tool like LICEcap or ScreenToGif, upload it to this repository, and update the link.)*

---

## ✨ Core Features

* **Real-Time Collaboration:** Changes made by one user are instantly broadcast to all other clients in the same document room using WebSockets (Socket.IO).
* **Rich Text Editor:** Built with the powerful Quill.js library, allowing for various formatting options like headers, lists, bold, italics, colors, and more.
* **Database Persistence:** Documents, including their titles and content, are automatically saved to a MongoDB database, ensuring no work is ever lost.
* **Dedicated Document Rooms:** The backend architecture supports different documents by using unique Socket.IO rooms.
* **Professional & Responsive UI:** A clean, minimalist interface inspired by modern document editors, fully responsive for use on desktop, tablets, and mobile devices.

---

## 🛠️ Technology Stack

| Area | Technology |
| :--- | :--- |
| **Frontend** | React.js, TypeScript, Vite, Quill.js, Socket.IO Client |
| **Backend** | Node.js, Express.js, Socket.IO, Mongoose |
| **Database** | MongoDB (via MongoDB Atlas) |
| **DevOps** | Git, GitHub, Render (Deployment) |

---

## ⚙️ Local Development Setup

To run this project on your own machine:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/HarshMoradiya111/Doc-Editor.git](https://github.com/HarshMoradiya111/Doc-Editor.git)
    cd Doc-Editor
    ```

2.  **Setup the Backend:**
    ```bash
    cd server
    npm install
    # IMPORTANT: Add your MongoDB Atlas connection string in server.js
    node server.js
    ```

3.  **Setup the Frontend (in a new, separate terminal):**
    ```bash
    cd client
    npm install
    npm run dev
    ```

4.  **Open your browser:**
    Navigate to the localhost URL provided by Vite (usually `http://localhost:5173`). Open multiple browser windows to the same URL to test the real-time collaboration.

---

## 📂 Project Structure
