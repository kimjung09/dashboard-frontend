import React from "react";
import {Routes, Route,NavLink} from "react-router-dom";
import './App.css';
import "./components/Home/Home.css";
import DashBoard from "./components/Home/DashBoard";
import ExChange from "./components/Home/ExChange";
import Portfolio from "./components/Home/DashBoard/portfolio";
import Quests from "./components/Home/Quests";
import Widgets from "./components/Home/Widgets";
import SideList from "./components/item.json";
import Pool from "./components/Home/Pool";


function App () {
  return (
       <>
           <div className="Home-container">
               {/* side menu navigation */}
               {SideList.map((item) => (
                   <nav className="sidebar">
                       <div className="hidden">
                           {/* Brand Name*/}
                           <div className="brand">
                               <svg width="32" height="32" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="logo_exterior" d="M500 250C500 111.929 388.071 0 250 0C111.929 0 0 111.929 0 250C0 388.071 111.929 500 250 500C388.071 500 500 388.071 500 250Z" fill="#784FFE"></path><path id="logo_interior" fill-rule="evenodd" clip-rule="evenodd" d="M154.338 187.869L330.605 187L288.404 250.6L388 250.118L345.792 312.652L168.382 313.787L211.25 250.633L112 250.595L154.338 187.869Z" fill="white"></path></svg>
                               <div className="mid">
                                   <span>{item.title}</span>
                               </div>
                           </div>
                           {/* Account_conneted 연결 */}
                           <div className="account_connted">
                               <div className="dropdown">
                                   <div className="header">
                                       <div className="account">
                                        
                                           <div className="flex-max">
                                               <div className="flex">
                                                   <span>ether</span>
                                                   <div className="flex"></div>
                                               </div>
                                               <div className="title"></div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className="gamification">
                                   <a href="/nl/quests">
                                       <button>
                                           <span>Mission</span>
                                           <div></div>
                                       </button>
                                   </a>
                                   <a href="/nl/quests">
                                       <button>
                                           <span>Mission</span>
                                           <div></div>
                                       </button>
                                   </a>

                               </div>
                               <div className="sidebar">
                                   <NavLink to="/" className="menu" href="/nl/dashboard">
                                       <div className="icon">
                                           <div className="flex">
                                               <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                    viewBox="0 0 20 20" className="icon " height="1.25em"
                                                    width="1.25em" xmlns="http://www.w3.org/2000/svg">
                                                   <path
                                                       d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                                               </svg>
                                           </div>
                                       </div>
                                       <span className="sidebar__menu__item__label sidebar-mid--hide">Dashboard</span>
                                   </NavLink>
                                   <NavLink to="/exchange" className="menu" href="/nl/exchange">
                                       <div className="icon">
                                           <div className="flex">
                                               <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                    viewBox="0 0 512 512" className="icon " height="1.3em"
                                                    width="1.3em" xmlns="http://www.w3.org/2000/svg">
                                                   <path
                                                       d="M131.3 231.1L32 330.6l99.3 99.4v-74.6h174.5v-49.7H131.3v-74.6zM480 181.4L380.7 82v74.6H206.2v49.7h174.5v74.6l99.3-99.5z"></path>
                                               </svg>
                                           </div>
                                       </div>
                                       <span>Wisselen</span>
                                   </NavLink>
                                   <NavLink to="/pool" className="menu" href="/nl/invest">
                                       <div className="icon">
                                           <div className="flex">
                                               <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                    viewBox="0 0 24 24" className="icon " height="1.35em"
                                                    width="1.35em" xmlns="http://www.w3.org/2000/svg">
                                                   <g>
                                                       <path fill="none" d="M0 0h24v24H0z"></path>
                                                       <path
                                                           d="M12 3.1L7.05 8.05a7 7 0 1 0 9.9 0L12 3.1zm0-2.828l6.364 6.364a9 9 0 1 1-12.728 0L12 .272zM13 11h2.5L11 17.5V13H8.5L13 6.5V11z"></path>
                                                   </g>
                                               </svg>
                                           </div>
                                       </div>
                                       <span>Pool</span></NavLink>
                                   <NavLink to="/save" className="menu" href="/nl/save">
                                       <div className="icon">
                                           <div className="flex">
                                               <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                    viewBox="0 0 576 512" className="icon " height="1.3em"
                                                    width="1.3em" xmlns="http://www.w3.org/2000/svg">
                                                   <path
                                                       d="M560 224h-29.5c-8.8-20-21.6-37.7-37.4-52.5L512 96h-32c-29.4 0-55.4 13.5-73 34.3-7.6-1.1-15.1-2.3-23-2.3H256c-77.4 0-141.9 55-156.8 128H56c-14.8 0-26.5-13.5-23.5-28.8C34.7 215.8 45.4 208 57 208h1c3.3 0 6-2.7 6-6v-20c0-3.3-2.7-6-6-6-28.5 0-53.9 20.4-57.5 48.6C-3.9 258.8 22.7 288 56 288h40c0 52.2 25.4 98.1 64 127.3V496c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-48h128v48c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-80.7c11.8-8.9 22.3-19.4 31.3-31.3H560c8.8 0 16-7.2 16-16V240c0-8.8-7.2-16-16-16zm-128 64c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM256 96h128c5.4 0 10.7.4 15.9.8 0-.3.1-.5.1-.8 0-53-43-96-96-96s-96 43-96 96c0 2.1.5 4.1.6 6.2 15.2-3.9 31-6.2 47.4-6.2z"></path>
                                               </svg>
                                           </div>
                                       </div>
                                       <span>Sparen</span></NavLink>
                                   <NavLink to="/address" className="menu" href="/nl/watchlist">
                                       <div className="icon">
                                           <div className="flex">
                                               <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                    viewBox="0 0 24 24" className="icon " height="1.3em" width="1.3em"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                   <path
                                                       d="M3,8v6v3v2c0,2.201,1.794,3,3,3h15v-2H6.012C5.55,19.988,5,19.806,5,19s0.55-0.988,1.012-1H19h1h1v-1v-2V4 c0-1.103-0.897-2-2-2H6C4.794,2,3,2.799,3,5V8z M6,4h13v11v1H5v-2V8V5C5,4.194,5.55,4.012,6,4z"></path>
                                                   <path
                                                       d="M11.997,14l3.35-3.289c0.871-0.854,0.871-2.21,0-3.069c-0.875-0.855-2.255-0.855-3.126,0L11.997,7.86l-0.224-0.219 c-0.87-0.855-2.25-0.855-3.125,0c-0.871,0.859-0.871,2.215,0,3.069L11.997,14z"></path>
                                               </svg>
                                           </div>
                                       </div>
                                       <span>Address boek</span>
                                   </NavLink>
                               </div>
                               <div className="flex-max"></div>
                               <a className="side_menu" href="/nl/settings">
                                   <div className="icon">
                                       <div className="flex">
                                           <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                viewBox="0 0 512 512" className="icon " height="1.1em" width="1.1em"
                                                xmlns="http://www.w3.org/2000/svg">
                                               <path
                                                   d="M413.967 276.8c1.06-6.235 1.06-13.518 1.06-20.8s-1.06-13.518-1.06-20.8l44.667-34.318c4.26-3.118 5.319-8.317 2.13-13.518L418.215 115.6c-2.129-4.164-8.507-6.235-12.767-4.164l-53.186 20.801c-10.638-8.318-23.394-15.601-36.16-20.801l-7.448-55.117c-1.06-4.154-5.319-8.318-10.638-8.318h-85.098c-5.318 0-9.577 4.164-10.637 8.318l-8.508 55.117c-12.767 5.2-24.464 12.482-36.171 20.801l-53.186-20.801c-5.319-2.071-10.638 0-12.767 4.164L49.1 187.365c-2.119 4.153-1.061 10.399 2.129 13.518L96.97 235.2c0 7.282-1.06 13.518-1.06 20.8s1.06 13.518 1.06 20.8l-44.668 34.318c-4.26 3.118-5.318 8.317-2.13 13.518L92.721 396.4c2.13 4.164 8.508 6.235 12.767 4.164l53.187-20.801c10.637 8.318 23.394 15.601 36.16 20.801l8.508 55.117c1.069 5.2 5.318 8.318 10.637 8.318h85.098c5.319 0 9.578-4.164 10.638-8.318l8.518-55.117c12.757-5.2 24.464-12.482 36.16-20.801l53.187 20.801c5.318 2.071 10.637 0 12.767-4.164l42.549-71.765c2.129-4.153 1.06-10.399-2.13-13.518l-46.8-34.317zm-158.499 52c-41.489 0-74.46-32.235-74.46-72.8s32.971-72.8 74.46-72.8 74.461 32.235 74.461 72.8-32.972 72.8-74.461 72.8z"></path>
                                           </svg>
                                       </div>
                                   </div>
                                   <span>Instelligien</span>
                               </a>
                               <div className="network">
                                   <div className="header">
                                       <div className="flex-max">
                                           <img className="icon"
                                                src="https://zapper.fi/images/networks/ethereum-icon.png" alt="ethereum Icon"/>
                                           <div className="label">Ethereum</div>
                                           <div className="hide">
                                               <div className="flex">
                                                   <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                        viewBox="0 0 512 512" className="icon " height="1.1em" width="1.1em"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                       <path d="M128 320l128-128 128 128z"></path>
                                                   </svg>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className="language">
                                   
                               </div>
                           </div>
                       </div>
                   </nav>
               ))}
             <Routes>
                {/* route 사용시 element 사용 */}
                <Route exact path="/" element={<DashBoard/>}/>
                <Route exact path="/exchange" element={<ExChange/>} />
                <Route exact path="/nft" element={<DashBoard/>}/>
                <Route exact path="/Ges" element={<DashBoard/>} />
                <Route exact path="/pool" element={<Pool/>} />
                <Route exact path="/save" element={<DashBoard/>}/>
                <Route exact path="/address" element={<DashBoard/>}/>
                <Route exact path="/quests" element={<DashBoard/>}/>
                <Route exact path="/settings" element={<DashBoard/>}/>
                <Route exact path="/quests" element={<DashBoard/>}/>
              </Routes>
               <Widgets />

           </div>

       </>
  );
}

export default App;
