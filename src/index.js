import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Navigation from './components/Navigation';
// import Projects from './components/Projects';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import BackgroundWithText from './components/BackgroundWithText';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Navigation />} />
      <Route path="/" element={<Navigate to="/home" replace />} />
    </Routes>
  </BrowserRouter>
 
);

reportWebVitals();
