import React from "react";
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from "react-router-dom";
import './App.css';
import MainPage from "./components/Home";

function App() {
  return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<MainPage/>} />
            </Routes>
        </BrowserRouter>

  );
}

export default App;
