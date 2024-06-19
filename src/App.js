import React from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import Register from "./components/Register";
import MapContainer from "./components/MapContainer";
import OpenWifiAxios from "./components/OpenWifiAxios";
import WifiMap from './components/WifiMap';
import NavBar from './components/NavBar';
import logo from './img/logo.png';
import WeatherForecast from "./components/WeatherForecast";
import BusStationInfo from "./components/BusStationInfo";
import Content from "./components/Content";
import Login from "./components/Login";
import './App.css';
import Main from "./components/Main";
import Footer from "./components/Footer";
import BusStationMap from "./components/BusStationMap";
import UserGreeting from "./components/UserGreeting";
import Oreum from "./components/Oreum";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="app-container">
      <NavBar className="navbar" />
      <UserGreeting />
      <div className={`main-content ${location.pathname === '/' ? 'no-margin' : ''}`}>
        <div className="main-container">
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/map" element={<MapContainer />} />
            <Route path="/wifi" element={<OpenWifiAxios />} />
            <Route path="/wifiMap" element={<WifiMap />} />
            <Route path="/weatherForecast" element={<WeatherForecast />} />
            <Route path="/bus" element={<BusStationInfo />} />
            <Route path="/content" element={<Content />} />
            <Route path="/" element={<Main />} />
            <Route path="/mypage/login" element={<Login />} />
            <Route path="/busMap" element={<BusStationMap />} />
            <Route path="/oreum" element={<Oreum />} />
          </Routes>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
