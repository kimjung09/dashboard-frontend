import React from "react";
import {Routes, Route,NavLink} from "react-router-dom";
import './App.css';

import DashBoard from "./components/Home/DashBoard";
import ExChange from "./components/Home/ExChange";
 import SideList from "./components/item.json";
import Widgets from './components/Home/Widgets';
import Address from "./components/Home/Adress";
import SideBar from "./components/Side";


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
                                <div className="header">
                                    <div className="item-left">
                                        <div className="blockie" ></div>
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                             viewBox="0 0 512 512" className="icon" role="button" height="18" width="18"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M64 384h384v-42.666H64V384zm0-106.666h384v-42.667H64v42.667zM64 128v42.665h384V128H64z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="center">
                                    <svg width="40" height="40" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="logo_exterior" d="M500 250C500 111.929 388.071 0 250 0C111.929 0 0 111.929 0 250C0 388.071 111.929 500 250 500C388.071 500 500 388.071 500 250Z" fill="#784FFE"></path><path id="logo_interior" fill-rule="evenodd" clip-rule="evenodd" d="M154.338 187.869L330.605 187L288.404 250.6L388 250.118L345.792 312.652L168.382 313.787L211.25 250.633L112 250.595L154.338 187.869Z" fill="white"></path></svg>
                                </div>
                                <div className="search">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M337.509 305.372h-17.501l-6.571-5.486c20.791-25.232 33.922-57.054 33.922-93.257C347.358 127.632 283.896 64 205.135 64 127.452 64 64 127.632 64 206.629s63.452 142.628 142.225 142.628c35.011 0 67.831-13.167 92.991-34.008l6.561 5.487v17.551L415.18 448 448 415.086 337.509 305.372zm-131.284 0c-54.702 0-98.463-43.887-98.463-98.743 0-54.858 43.761-98.742 98.463-98.742 54.7 0 98.462 43.884 98.462 98.742 0 54.856-43.762 98.743-98.462 98.743z"></path></svg>
                                </div>
                            </div>
                            <div className="header">
                                <img src="https://zapper.fi/images/networks/ethereum-icon.png" alt="ethereum Icon" className="mr-2"/>
                                Ethereum
                                <div className="point">
                                </div>
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"
                                     className="mr-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                        <path
                                            d="M3 19V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v8h2a2 2 0 0 1 2 2v4a1 1 0 0 0 2 0v-7h-2a1 1 0 0 1-1-1V6.414l-1.657-1.657 1.414-1.414 4.95 4.95A.997.997 0 0 1 22 9v9a3 3 0 0 1-6 0v-4h-2v5h1v2H2v-2h1zM5 5v6h7V5H5z"></path>
                                    </g>
                                </svg>
                                <span>112</span>
                            </div>

                        </div>
                        <Routes>
                            {/* route 사용시 element 사용 */}
                            <Route exact path="/" element={<DashBoard/>}/>
                            <Route exact path="/exchange" element={<ExChange/>} />
                            <Route exact path="/nft" element={<DashBoard/>}/>
                            <Route exact path="/Ges" element={<DashBoard/>} />
                            <Route exact path="/pool" element={<ExChange/>} />
                            <Route exact path="/save" element={<ExChange />}/>
                            <Route exact path="/quests" element={<ExChange/>}/>
                            <Route exact path="/address" element={<Address/>}/>
                        </Routes>
                    </div>
                    <Widgets />
                </div>
        </>
    );
}

export default App;
