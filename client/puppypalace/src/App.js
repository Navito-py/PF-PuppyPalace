
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
import Profile from './components/Profile/Profile'
import Reserves from './components/Reserves/Reserves';
import BigMap from './components/Map/BigMap'
import QrInformation from './components/QrInformation/QrInformation';
import AllLost from './components/AllLost/AllLost';
import CreatePet from './components/Forms/CreatePet';
import CreateReserve from './components/Forms/CreateReserve';
import LostDetail from './components/Detail/LostDetail';
import AdminControls from './components/AdminControl/AdminControls';



export default function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<LogIn />}/>
        <Route path='/register' element={<Register />}/>
        <Route path="/clinics/:id" element={<Detail />}/>
        <Route path="/emergencies" element={<Emergencies />}/>
        <Route path='/home/profile' element={<Profile />}/>
        <Route path='/home/profile/reserves' element={<Reserves/>}/>
        <Route path='/home/map' element={<BigMap/>}/>
        <Route path='/qrcreator' element={<QrInformation/>}/>
        <Route path='/home/profile/createPet' element={<CreatePet/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path='/lostpets' element={<AllLost/>}/>
        <Route path='/lostpets/:id' element={<LostDetail/>} />
        <Route path='/home/reserves' element={<CreateReserve/>} />
        <Route path='/admin/controls' element={<AdminControls/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}
