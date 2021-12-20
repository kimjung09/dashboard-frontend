import React from "react";
import {Routes, Route,NavLink} from "react-router-dom";
import DashBoard from "./components/Home/DashBoard";
import ExChange from "./components/Home/ExChange";
import Widgets from './components/Home/Widgets';
import Address from "./components/Home/Adress";
import SideBar from "./components/Home/Side";
import Footer from "./components/Home/Footer/Footer";
import Pool from "./components/Home/Pool";
import Quests from "./components/Home/Quests";


function App () {

    return (
        <>
            {/* 메인 페이지 Open */}
                {/* Home-container    */}
                <div className="Home-container">
                    {/* side menu navigation */}
                    <SideBar />
                    {/* Widgets + Center */}

                    <div className="Center">
                        <div className="app-header">
                            <div className="mobile">
                                sdsds
                            </div>
                        </div>
                        <Routes>
                            {/* route 사용시 element 사용 */}
                            <Route exact path="/" element={<DashBoard/>}/>
                            <Route exact path="/exchange" element={<ExChange/>} />
                            <Route exact path="/nft" element={<DashBoard/>}/>
                            <Route exact path="/Ges" element={<DashBoard/>} />
                            <Route exact path="/pool" element={<Pool/>} />
                            <Route exact path="/save" element={<ExChange />}/>
                            <Route exact path="/quests" element={<Quests/>}/>
                            <Route exact path="/address" element={<Address/>}/>
                        </Routes>
                        <Footer />
                    </div>
                    <Widgets />
                </div>
        </>
    );
}

export default App;
