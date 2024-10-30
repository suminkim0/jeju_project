import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Register from "./components/Register";
import MapContainer from "./components/MapContainer";
import OpenWifiAxios from "./components/OpenWifiAxios";
import WifiMap from './components/WifiMap';
import NavBar from './components/NavBar';
import WeatherForecast from "./components/WeatherForecast";
import BusStationInfo from "./components/BusStationInfo";
import Content from "./components/Content";
import './App.css';
import Main from "./components/Main";
import Footer from "./components/Footer";
import BusStationMap from "./components/BusStationMap";
import Oreum from "./components/Oreum";
import MainNext from "./components/MainNext";

function App() {
  const location = useLocation();

  const routes = [
    { path: "/register", element: <Register /> },
    { path: "/map", element: <MapContainer /> },
    { path: "/wifi", element: <OpenWifiAxios /> },
    { path: "/wifiMap", element: <WifiMap /> },
    { path: "/weatherForecast", element: <WeatherForecast /> },
    { path: "/bus", element: <BusStationInfo /> },
    { path: "/content", element: <Content /> },
    { path: "/", element: <Main /> },
    { path: "/next", element: <MainNext /> },
    { path: "/busMap", element: <BusStationMap /> },
    { path: "/oreum", element: <Oreum /> },
  ];

  return (
    <div className="app-container">
      <NavBar className="navbar" />
      <div className={`main-content ${location.pathname === '/' ? 'no-margin' : ''}`}>
        <div className="main-container">
          <Routes>
            {routes.map(route => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;