import React, { useState, useEffect, useCallback } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import { io, Socket } from 'socket.io-client';

interface DocumentData {
  title: string;
  content: any;
}

const SAVE_INTERVAL_MS = 2000;
const DOCUMENT_ID = "codtech-internship-document";

// Enhanced Professional Toolbar Options
const TOOLBAR_OPTIONS = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ font: [] }],
  [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
  ["bold", "italic", "underline", "strike"],
  [{ color: [] }, { background: [] }],
  [{ script: "sub" }, { script: "super" }],
  [{ align: [] }],
  ["image", "blockquote", "code-block", "link"],
  ["clean"],
];
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3001";
function App() {
  const [socket, setSocket] = useState<Socket>();
  const [quill, setQuill] = useState<Quill>();
  const [title, setTitle] = useState("Untitled Document");
  const [isLoading, setIsLoading] = useState(true);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const s = io(BACKEND_URL), {
      transports: ['websocket'],
      timeout: 20000,
    });
    
    setSocket(s);
    
    s.on('connect', () => {
      setIsConnected(true);
      setIsLoading(false);
    });
    
    s.on('disconnect', () => {
      setIsConnected(false);
    });
    
    s.on('connect_error', (error) => {
      console.error('Connection error:', error);
      setIsLoading(false);
    });
    
    return () => { 
      s.disconnect(); 
    };
  }, []);

  useEffect(() => {
    if (socket == null || quill == null) return;
    
    socket.once("load-document", (document: DocumentData) => {
      quill.setContents(document.content);
      setTitle(document.title || "Untitled Document");
      quill.enable();
      setIsLoading(false);
    });
    
    socket.emit("join-document", DOCUMENT_ID);
    quill.disable();
  }, [socket, quill]);

  useEffect(() => {
    if (socket == null || quill == null) return;
    const handler = (delta: any, oldDelta: any, source: string) => {
      if (source !== 'user') return;
      socket.emit("send-changes", delta);
    };
    quill.on('text-change', handler);
    return () => { quill.off('text-change', handler); };
  }, [socket, quill]);

  useEffect(() => {
    if (socket == null || quill == null) return;
    const handler = (delta: any) => { quill.updateContents(delta); };
    socket.on('receive-changes', handler);
    return () => { socket.off('receive-changes', handler); };
  }, [socket, quill]);

  useEffect(() => {
    if (socket == null || quill == null) return;
    const interval = setInterval(() => {
      socket.emit("save-document", {
        title: title,
        content: quill.getContents()
      });
    }, SAVE_INTERVAL_MS);
    return () => { clearInterval(interval); };
  }, [socket, quill, title]);

  const wrapperRef = useCallback((wrapper: HTMLElement | null) => {
    if (wrapper == null) return;
    wrapper.innerHTML = '';
    const editor = document.createElement('div');
    wrapper.append(editor);
    const q = new Quill(editor, { 
        theme: 'snow',
        modules: { 
          toolbar: TOOLBAR_OPTIONS,
          history: {
            delay: 2000,
            maxStack: 500,
            userOnly: true
          }
        },
        placeholder: 'Start writing your professional document...',
        readOnly: true
    });
    setQuill(q);
  }, []);

  if (isLoading) {
    return (
      <div className="app-container">
        <div className="loading-screen">
          <div className="loading-spinner">
            <svg className="spinner" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            </svg>
          </div>
          <p className="loading-text">Loading Document Editor...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-left">
          <input 
            type="text" 
            className="document-title" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Document Title"
            maxLength={100}
          />
        </div>
        <div className="header-right">
          <div className={`connection-status ${isConnected ? 'connected' : 'disconnected'}`}>
            <span className="status-dot"></span>
            {isConnected ? 'Connected' : 'Offline'}
          </div>
        </div>
      </header>
      <div className="editor-container" ref={wrapperRef}></div>
    </div>
  );
}

export default App;