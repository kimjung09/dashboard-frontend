import React from "react";
import {Switch, Routes, Route, BrowserRouter} from "react-router-dom";
import './App.css';
import MainPage from "./components/Home";

function App() {
  return (
        <BrowserRouter>

            <Routes>
                <Route exact path="/" element={<MainPage/>} />
                <Route exact path="/exchange" element={<MainPage/>} />
                <Route exact path="/pool" element={<MainPage/>} />
                <Route exact path="/save" element={<MainPage/>} />
                <Route exact path="/Address" element={<MainPage/>} />
            </Routes>
        </BrowserRouter>

  );
}

export default App;
