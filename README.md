# Doc-Editor: A Real-Time Collaborative Document Editor

## 🌐 **Live Demo**
**Frontend**: [Your Render Frontend URL]  
**Backend API**: [Your Render Backend URL]

## 🔗 **Database Connection Guide**

### 🛠️ **Local Development Setup**

#### 1. **MongoDB Setup**
- **Option A**: Use MongoDB Atlas (Recommended)
  - Create free cluster at [mongodb.com/atlas](https://www.mongodb.com/atlas)
  - Create database user and whitelist your IP
  - Get connection string

- **Option B**: Use local MongoDB
  - Install MongoDB locally
  - Use connection string: `mongodb://localhost:27017/doc-editor`

#### 2. **Environment Configuration**

**Create `.env` file in `server/` directory:**
```bash
cd server
cp ../.env.example .env
# Edit .env with your MongoDB URI
```

**Your `.env` file should contain:**
```
MONGO_URI=mongodb+srv://your-username:your-password@cluster.mongodb.net/doc-editor?retryWrites=true&w=majority
NODE_ENV=development
PORT=3001
```

#### 3. **Start Development Servers**

**Backend:**
```bash
cd server
npm install
npm start
# Server runs on http://localhost:3001
```

**Frontend:**
```bash
cd client
npm install
npm run dev
# Client runs on http://localhost:5174
```

### 🚀 **Production Deployment (Render)**

#### **Backend Web Service**
- **Root Directory**: `server`
- **Build Command**: `npm install`
- **Start Command**: `node server.js`
- **Environment Variables**:
  ```
  MONGO_URI=your-mongodb-atlas-uri
  NODE_ENV=production
  PORT=10000
  ```

#### **Frontend Static Site**
- **Root Directory**: `client`
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **Environment Variables**:
  ```
  VITE_BACKEND_URL=https://your-backend-service.onrender.com
  ```

## 🔧 **Quick Setup Commands**

### **Local Development**
```bash
# Clone repository
git clone https://github.com/HarshMoradiya111/Doc-Editor.git
cd Doc-Editor

# Setup backend
cd server
cp ../.env.example .env
# Edit .env with your MongoDB URI
npm install
npm start

# Setup frontend (new terminal)
cd client
npm install
npm run dev
```

### **Database Connection Test**
```bash
# Test MongoDB connection
cd server
node -e "const mongoose = require('mongoose'); mongoose.connect(process.env.MONGO_URI).then(() => console.log('✅ Connected!')).catch(err => console.error('❌ Error:', err))"
```

## 🎯 **Features**
- ✅ Real-time collaborative editing
- ✅ Professional rich text editor
- ✅ Document persistence
- ✅ Clean notepad-style interface
- ✅ Responsive design
- ✅ Auto-save functionality

## 📱 **Usage**
1. **Local**: Visit `http://localhost:5174` after setup
2. **Production**: Visit your Render frontend URL
3. **Collaboration**: Multiple users can edit simultaneously
4. **Persistence**: Documents auto-save every 2 seconds

## 🔍 **Troubleshooting**

### **Database Connection Issues**
- **Error**: "Could not connect to MongoDB Atlas"
- **Solution**: Check your `MONGO_URI` in `.env` file
- **Test**: Use MongoDB Compass to verify connection string

### **Port Conflicts**
- **Frontend**: Default port 5173/5174
- **Backend**: Default port 3001
- **Change**: Modify `PORT` in `.env` files

### **Build Issues**
- **Client**: Run `npm run build` to test production build
- **Server**: Ensure all dependencies are installed

## 📊 **Project Structure**
```
Doc-Editor/
├── client/          # Vite React frontend
├── server/          # Express.js + Socket.IO backend
├── .env.example     # Environment template
└── README.md        # This file
```

![Deployment](https://img.shields.io/badge/Status-Live-brightgreen)
![Technology](https://img.shields.io/badge/Stack-MERN%20+%20Socket.IO-blue)

This is a full-stack, real-time collaborative document editor, inspired by Google Docs and Microsoft Word. It allows multiple users to join the same document and see each other's changes live as they type. This project was built as the final and most complex task for the Codtech internship program, integrating a modern frontend, a real-time backend, and a database for persistence.

---

### 🔴 Live Demo

**You can test the live application here:**
**https://doc-editor-frontend-7x5k.onrender.com**

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

## 🚀 Deployment Guide

### Phase 1: Backend Deployment (Web Service)

1. **Create Web Service on Render**
   - Go to [Render Dashboard](https://dashboard.render.com)
   - Click "New +" → "Web Service"
   - Connect your GitHub repository

2. **Configure Backend**
   - **Name**: doc-editor-backend
   - **Region**: Choose your preferred region
   - **Branch**: main
   - **Root Directory**: server
   - **Runtime**: Node
   - **Build Command**: npm install
   - **Start Command**: node server.js
   - **Plan**: Free

3. **Add Environment Variables**
   - **Key**: MONGO_URI
   - **Value**: Your MongoDB Atlas connection string

### Phase 2: Frontend Deployment (Static Site)

1. **Create Static Site on Render**
   - Go to [Render Dashboard](https://dashboard.render.com)
   - Click "New +" → "Static Site"
   - Connect the same GitHub repository

2. **Configure Frontend**
   - **Name**: doc-editor-frontend
   - **Branch**: main
   - **Root Directory**: client
   - **Build Command**: npm install && npm run build
   - **Publish Directory**: dist

3. **Add Environment Variables**
   - **Key**: VITE_BACKEND_URL
   - **Value**: Your backend URL from Phase 1 (e.g., https://doc-editor-backend-xxxx.onrender.com)

---

## ⚙️ Local Development Setup

To run this project on your own machine:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/HarshMoradiya111/Doc-Editor.git
    cd Doc-Editor
    ```

2.  **Setup the Backend:**
    ```bash
    cd server
    npm install
    # Create .env file with:
    # MONGO_URI=your_mongodb_connection_string
    # PORT=3001
    node server.js
    ```

3.  **Setup the Frontend (in a new, separate terminal):**
    ```bash
    cd client
    npm install
    # Create .env file with:
    # VITE_BACKEND_URL=http://localhost:3001
    npm run dev
    ```

4.  **Open your browser:**
    Navigate to the localhost URL provided by Vite (usually `http://localhost:5173`). Open multiple browser windows to the same URL to test the real-time collaboration.

---

## 📂 Project Structure

```
Doc-Editor/
├── client/                 # React frontend
│   ├── src/
│   │   ├── App.tsx        # Main React component
│   │   ├── App.css        # Styling
│   │   └── index.css      # Global styles
│   ├── package.json       # Frontend dependencies
│   ├── .env               # Frontend environment variables
│   └── vite.config.ts     # Vite configuration
├── server/                # Node.js backend
│   ├── server.js         # Express server with Socket.IO
│   ├── package.json      # Backend dependencies
│   └── .env              # Backend environment variables
└── README.md            # This file
```

## 🔐 Environment Variables

### Backend (.env)
```
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/database-name
PORT=3001
NODE_ENV=production
```

### Frontend (.env)
```
VITE_BACKEND_URL=https://your-backend-url.onrender.com
```

## 🎯 Development Commands

- **Frontend Dev**: `npm run dev` (client folder)
- **Backend Dev**: `node server.js` (server folder)
- **Frontend Build**: `npm run build`
- **Backend Start**: `node server.js`

## 📱 Usage

1. Open the live URL
2. Start typing in the document
3. Changes are saved automatically every 2 seconds
4. Edit the document title by clicking on "Untitled Document"
5. Monitor connection status in the top-right corner

---

## 🏗️ Architecture Notes

This project uses a **monorepo** structure with:
- **Frontend**: React + TypeScript + Vite for fast development
- **Backend**: Express.js + Socket.IO for real-time communication
- **Database**: MongoDB Atlas for cloud persistence
- **Deployment**: Render for both backend (Web Service) and frontend (Static Site)

The deployment strategy involves:
- **Two separate services** on Render
- **Environment variables** for secure configuration
- **CORS configuration** for cross-origin requests
- **Auto-scaling** based on traffic

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🔗 Links

- **Live Application**: https://doc-editor-frontend-7x5k.onrender.com
- **GitHub Repository**: https://github.com/HarshMoradiya111/Doc-Editor
- **Render Dashboard**: https://dashboard.render.com
