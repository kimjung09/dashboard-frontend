import React from "react";
import {Routes, Route} from "react-router-dom";
import './App.css';
import MainPage from "./components/Home";
import ExChange from "./components/Side/Side";
import DashBoard from "./components/Home/DashBoard";
import Pool from "./components/Home/Pool";
import Address from "./components/Home/Adress";
import Widgets from "./components/Home/Widgets";
import SideBar from "./components/Home/SideBar";
import portfolio from "./components/Home/DashBoard/portfolio";
import Quests from "./components/Home/Quests";

function App () {
  return (
       <>
            <Routes>
                <Route exact path="/" element={<DashBoard/>} />
                <Route exact path="/nft" element={<DashBoard/>} />
                <Route exact path="/Ges" element={<DashBoard/>} />
                <Route exact path="/dashboard" element={DashBoard}/>

                <Route exact path="/exchange" element={<ExChange/>} />
                <Route exact path="/pool" element={<Pool/>} />
                <Route exact path="/save" element={<ExChange/>}/>
                <Route exact path="/address" element={<Address/>}/>
                <Route exact path="/quests" element={<Quests/>}/>
                <Route exact path="/quests" element={<ExChange/>}/>

            </Routes>
             <Widgets />
       </>
  );
}

export default App;
