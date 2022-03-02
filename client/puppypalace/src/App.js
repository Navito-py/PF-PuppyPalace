
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import React from 'react';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}
