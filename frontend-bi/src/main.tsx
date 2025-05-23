import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HelpCenter from "./pages/HelpCenter";
import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Toaster position="top-right" />
    <Routes>
  <Route path="/login" element={<Login />} />
  <Route path="/help" element={<HelpCenter />} />
  <Route path="/*" element={<Dashboard />} />
</Routes>
    </BrowserRouter>
  </React.StrictMode>
);
