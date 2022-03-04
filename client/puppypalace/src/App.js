
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import React from 'react';
import './App.css';
import LogIn from './components/Forms/LogIn';
import Register from './components/Forms/Register';
import NotFound from "./components/NotFound/NotFound"
import Detail from './components/Detail/Detail';

export default function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/formlogin' element={<LogIn />}/>
        <Route path='/formnewuser' element={<Register />}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/clinics/:id" element={<Detail />}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}
