import React from "react";
import {Switch, Routes, Route, BrowserRouter} from "react-router-dom";
import './App.css';
import MainPage from "./components/Home";
import Side from "./components/Side/Side";
import ExChange from "./components/Side/Side";

function App () {
  return (
        // <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<MainPage/>} />
                <Route exact path="/exchange" element={<ExChange/>} />
                <Route exact path="/pool" element={<ExChange/>} />
                <Route exact path="/portfolio" element={<ExChange/>} />
                <Route exact path="/save" element={<ExChange/>}/>
                <Route exact path="/address" element={<ExChange/>}/>
                <Route exact path="/quests" element={<ExChange/>}/>
            </Routes>
        // </BrowserRouter>

  );
}

export default App;
