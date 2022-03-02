
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import React from 'react';
import './App.css';
import LogIn from './components/Forms/LogIn';
import Register from './components/Forms/Register'

export default function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/formlogin' element={<LogIn />}/>
        <Route path='/formnewuser' element={<Register />}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}
