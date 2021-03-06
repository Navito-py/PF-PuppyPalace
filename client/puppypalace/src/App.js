
import '@progress/kendo-theme-default/dist/all.css'; 
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
import CreateClinic from './components/AdminForms/CreateClinic';
import LostDetail from './components/Detail/LostDetail';
import ModifyClinic from './components/AdminForms/ModifyClinic';
import AdminControls from './components/AdminControl/AdminControls';
import AdminUsers from './components/AdminControl/AdminUsers';
import AdminClinics from './components/AdminControl/AdminClinics';
import { getLoginFromStorage } from './redux/actions'
import { useDispatch } from "react-redux"
import AboutUs from './components/AboutUs/AboutUs.jsx';
import ModifyPet from './components/Forms/ModPet';
import ModifyUser from './components/Forms/ModUser';

export default function App() {
  const dispatch = useDispatch();
  const sessionToken = sessionStorage.getItem("token")
  if (sessionToken) {
    dispatch(getLoginFromStorage(sessionToken))
  }
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
        <Route path='/home/profile/:id' element={<ModifyUser />}/>
        <Route path='/home/profile/pet/:id' element={<ModifyPet />}/>
        <Route path='/home/profile/reserves' element={<Reserves/>}/>
        <Route path='/home/map' element={<BigMap/>}/>
        <Route path='/qrcreator' element={<QrInformation/>}/>
        <Route path='/home/profile/createPet' element={<CreatePet/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path='/lostpets' element={<AllLost/>}/>
        <Route path='/lostpets/:id' element={<LostDetail/>} />
        <Route path='/home/reserves' element={<CreateReserve/>} />
        <Route path='/admin/controls' element={<AdminControls/>} />
        <Route path='/admin/controls/users' element={<AdminUsers/>} />
        <Route path='/admin/controls/clinics' element={<AdminClinics/>} />
        <Route path='/admin/controls/clinics/create' element={<CreateClinic/>} />
        <Route path='/aboutus' element={<AboutUs/>} />
        <Route path='/admin/controls/clinics/:id' element={<ModifyClinic/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}
