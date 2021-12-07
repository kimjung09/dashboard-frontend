import React from "react";
import {Routes, Route} from "react-router-dom";
import './App.css';
import ExChange from "./components/Side/Side";
import DashBoard from "./components/Home/DashBoard";
import Pool from "./components/Home/Pool";
import Address from "./components/Home/Adress";
import Widgets from "./components/Home/Widgets";
import Quests from "./components/Home/Quests";

function App () {
  return (
       <>
            <Routes>
                <Route exact path="/" element={<DashBoard/>}>
                </Route>
                <Route path="/exchange" element={<DashBoard/>} />
                <Route exact path="/nft" element={<DashBoard/>}/>
                <Route exact path="/Ges" element={<DashBoard/>} />
                <Route exact path="/dashboard" element={<DashBoard/>}/>
                <Route exact path="/exchange" element={<DashBoard/>} />
                <Route exact path="/pool" element={<DashBoard/>} />
                <Route exact path="/save" element={<DashBoard/>}/>
                <Route exact path="/address" element={<DashBoard/>}/>
                <Route exact path="/quests" element={<DashBoard/>}/>
                <Route exact path="/quests" element={<DashBoard/>}/>

            </Routes>
       </>
  );
}

export default App;
