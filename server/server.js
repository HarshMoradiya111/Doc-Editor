const mongoose = require('mongoose');
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const MONGO_URI = process.env.MONGO_URI; 

mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB Atlas'))
  .catch(err => console.error('Could not connect to MongoDB Atlas...', err));

// --- SCHEMA UPDATE ---
// Added a 'title' field to our document schema.
const documentSchema = new mongoose.Schema({
  _id: String,
  title: String,
  content: Object
});
const Document = mongoose.model('Document', documentSchema);

const app = express();
app.use(cors());
const server = http.createServer(app);

const io = socketIo(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"]
  }
});

const PORT = process.env.PORT || 3001;

io.on('connection', (socket) => {
  socket.on('join-document', async (documentId) => {
    socket.join(documentId);
    console.log(`User joined document: ${documentId}`);

    let document = await Document.findById(documentId);
    if (!document) {
      // If document is new, create it with a default title.
      document = await Document.create({ _id: documentId, title: 'Untitled Document', content: '' });
    }
    // Send the entire document (title and content) to the client.
    socket.emit('load-document', document);

    socket.on('send-changes', (delta) => {
      socket.to(documentId).emit('receive-changes', delta);
    });

    // Listen for save events that now include the title.
    socket.on('save-document', async (data) => {
        await Document.findByIdAndUpdate(documentId, { title: data.title, content: data.content });
    });
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(PORT, () => console.log(`🚀 Backend server listening on port ${PORT}`));