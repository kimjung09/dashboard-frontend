import React, {useState} from "react";
import SideList from "../../item.json";
import "../Home.css"
import {BrowserRouter as Router,Route,Routes,NavLink} from "react-router-dom";

import {AiOutlineHome, AiOutlineSearch, AiOutlineArrowLeft, AiOutlineArrowRight, AiFillCaretDown} from 'react-icons/ai'
import {FaExchangeAlt, FaTwitter} from 'react-icons/fa'
import {RiWaterFlashLine} from 'react-icons/ri'
import {BiBookHeart, BiMenu} from 'react-icons/bi'
import {FiMoreHorizontal, FiSettings} from 'react-icons/fi'
import {GiFarmTractor} from 'react-icons/gi'




const SideBar = () => {
    const activeStyle = {
        color: '#fffff',
        fontSize: '2rem',
        fontWeight:"bold"
    }
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu)
    }

    return (
      <>
           <div className="Home-container">
             {SideList.map((item) => (
                 <nav className="SideBar">
                     <div className="hidden">
                         {/* Brand Name*/}
                         <div className="Brand">
                             <svg width="32" height="32" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="logo_exterior" d="M500 250C500 111.929 388.071 0 250 0C111.929 0 0 111.929 0 250C0 388.071 111.929 500 250 500C388.071 500 500 388.071 500 250Z" fill="#784FFE"></path><path id="logo_interior" fill-rule="evenodd" clip-rule="evenodd" d="M154.338 187.869L330.605 187L288.404 250.6L388 250.118L345.792 312.652L168.382 313.787L211.25 250.633L112 250.595L154.338 187.869Z" fill="white"></path></svg>
                             <div className="mid">
                                 <span>{item.title}</span>
                             </div>
                         </div>

                         {/* Account_conneted 연결 */}
                         <div className="account_connected">
                             <div className="account">
                                 <div className="header">
                                     <div className="sidebar">
                                         <div className="blockie">
                                             <div className="edit">
                                             </div>
                                             <span></span>
                                             <canvas></canvas>
                                         </div>
                                         <div className="flex-max">
                                             <div className="flex">
                                                 <span className="title">ethers</span>
                                                 <div className="level">
                                                     <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                          viewBox="0 0 512 512" className="icon " height="1.1em"
                                                          width="1.1em" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M128 192l128 128 128-128z"></path>
                                                     </svg>
                                                 </div>
                                             </div>
                                             <div>
                                                 <div className="exp">
                                           <span className="xp">
                                               <span></span>
                                           </span>
                                                 </div>
                                                 <div className="gaming mt-1">
                                               <span>
                                                   LV.1
                                               </span>
                                                     <span>
                                                   420
                                                   /
                                                   500
                                               </span>
                                                 </div>
                                             </div>
                                         </div>
                                     </div>

                                 </div>
                             </div>
                             <div className="sidebar__gamification">
                                 <a href="/quests" >
                                     <button>
                                         <div className="flex">
                                         <FaExchangeAlt className="alt" />
                                         <span>Quests</span>
                                             <div className="notification"></div>
                                         </div>
                                     </button>
                                 </a>
                                 <a href="/quests">
                                     <button>
                                         <div className="flex">
                                         <FaExchangeAlt className="alt" />
                                         <span>Rewards</span>
                                         </div>
                                     </button>
                                 </a>
                             </div>
                             <div className="menu">
                                 <NavLink className="link" to="/" exact={true} activeStyle={activeStyle}>
                                     <div className="icon">
                                         <AiOutlineHome color={"white"} size={18}/>
                                     </div>
                                     <span>{item.DashBoard}</span>
                                 </NavLink>
                                 <NavLink className="link" to="/exchange" activeStyle={activeStyle}>
                                     <div className="icon">
                                         <FaExchangeAlt color={"white"} size={18}/>
                                     </div>
                                     <span>{item.ExChange}</span>
                                 </NavLink>
                                 <NavLink className="link"  to="/pool" activeStyle={activeStyle}>
                                     <div className="icon">
                                         <RiWaterFlashLine color={"white"} size={18}/>
                                     </div>
                                     <span>{item.Pool}</span>
                                 </NavLink>
                                 <NavLink className="link" to="/save" activeStyle={activeStyle}>
                                     <div className="icon">
                                         <BiBookHeart color={"white"} size={18}/>
                                     </div>
                                     <span>{item.Save}</span>
                                 </NavLink>
                                 <NavLink className="link" to="/address" activeStyle={activeStyle}>
                                     <div className="icon">
                                         <BiBookHeart color={"white"} size={18}/>
                                     </div>
                                     <span>{item.AddressBook}</span>
                                 </NavLink>
                                 <div className="more">
                                         <div className="menu_item">
                                             <div className="icon" onClick={toggleMenu}>
                                                 <FiMoreHorizontal color={"white"} size={18}/>
                                             </div>
                                             <span>{item.More}</span>
                                             {
                                             openMenu ? (
                                                 <div className="show">
                                                     <div className="item">
                                                         <a  href="form">
                                                             <GiFarmTractor/>

                                                             Farm
                                                         </a>
                                                         <a  href="form">
                                                             <GiFarmTractor/>
                                                             Valuts
                                                         </a>
                                                         <a href="form">
                                                             <GiFarmTractor/>
                                                             Bridge
                                                         </a>
                                                         <a href="form">
                                                             <GiFarmTractor/>
                                                             Allowances
                                                         </a>
                                                     </div>
                                                 </div>
                                             ): null}
                                     </div>
                                 </div>
                             </div>
                             <div className="flex-max1"></div>

                             <a className="settings" href="/settings">
                               <div className="icon">
                                   <div className="flex">
                                       <FiSettings />
                                   </div>
                               </div>
                                 <span>Settings</span>
                                 </a>
                                 <div className="network">
                                     <div className="header">
                                         <div className="flex">
                                             <img src="https://zapper.fi/images/networks/ethereum-icon.png" className="network_icon"/>
                                             <div className="network_label">
                                                 Ethereum
                                             </div>
                                             <div className="hide">
                                                 <div className="flex">
                                                     <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                          viewBox="0 0 512 512" className="icon " height="1.1em"
                                                          width="1.1em" xmlns="http://www.w3.org/2000/svg">
                                                         <path d="M128 320l128-128 128 128z"></path>
                                                     </svg>
                                                 </div>
                                             </div>
                                         </div>
                                     </div>
                                 </div>
                                 <div className="language">
                                             <div className="pop">
                                              <div className="box">
                                                  <img className="currency_icon" src="https://zapper.fi/images/currencies/KRW.svg"
                                                       alt="KRW Icon"/>
                                                  <div className="title">
                                                    <span className="doller">KRW</span>
                                                      <div className="up">
                                                          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M128 320l128-128 128 128z"></path></svg>
                                                      </div>
                                                  </div>
                                              </div>
                                             </div>
                                     <div className="themeSwitch">
                                         <div className="night">
                                             <div className="switch">
                                                 <div className="bg">
                                                     <div className="icon">
                                                       <img src="https://zapper.fi/images/other/moon.svg"  alt="moon" />
                                                     </div>
                                                 </div>
                                                 <div className="toggle">
                                                     <div className="icon">
                                                        <img src="https://zapper.fi/images/other/sun.svg" alt="sun" />
                                                     </div>
                                                 </div>
                                             </div>
                                         </div>
                                     </div>
                                 </div>

                             </div>
                     </div>
                 </nav>
             ))}

           </div>


      </>
  )
}

export default SideBar;