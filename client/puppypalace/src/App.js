
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import React from 'react';
import './App.css';
import LogIn from './components/Forms/LogIn';
import Register from './components/Forms/Register';
import NotFound from "./components/NotFound/NotFound"
import Detail from './components/Detail/Detail';
import LandingPage from './components/LandingPage/LandingPage';
import Emergencies from './components/Emergencies/Emergencies';

export default function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/formlogin' element={<LogIn />}/>
        <Route path='/formnewuser' element={<Register />}/>
        <Route path="/clinics/:id" element={<Detail />}/>
        <Route path="/emergencies" element={<Emergencies />}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}
