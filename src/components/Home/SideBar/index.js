import React, {useState} from "react";
import SideList from "../../item.json";
import "../Home.css"
import {NavLink} from "react-router-dom";
import {AiOutlineHome, AiOutlineSearch, AiOutlineArrowLeft, AiOutlineArrowRight, AiFillCaretDown} from 'react-icons/ai'
import {FaExchangeAlt, FaTwitter} from 'react-icons/fa'
import {RiWaterFlashLine} from 'react-icons/ri'
import {BiBookHeart, BiMenu} from 'react-icons/bi'
import {FiMoreHorizontal, FiSettings} from 'react-icons/fi'
import {GiFarmTractor} from 'react-icons/gi'

const SideBar = () => {
    const activeStyle = {
        color: 'green',
        fontSize: '2rem'
    }
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu)
    }

    return (
      <>
           <div>
             {SideList.map((item) => (
                 <nav className="SideBar">
                     <div className="hidden">
                         <div className="Brand">
                             <div className="mid">
                                 <span>{item.title}</span>
                             </div>
                         </div>
                         <div className="account_connected">
                             <div className="account">
                                 <div className="header">
                                     <div className="sidebar">
                                         <div className="block">
                                             <div className="edit">
                                             </div>
                                             <span></span>
                                             <canvas></canvas>
                                         </div>
                                         <div className="flex-max">
                                             <div className="flex">
                                                 <span>ethers</span>
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
                             <div className="mt-2 mb-3 sidebar__gamification">
                                 <NavLink to="/quests" >
                                     <button>
                                         <FaExchangeAlt className="alt" />
                                         <span>Quests</span>
                                     </button>
                                 </NavLink>
                                 <NavLink to="/quests">
                                     <button>
                                         <FaExchangeAlt className="alt" />
                                         <span>Rewards
                                        </span>
                                     </button>
                                 </NavLink>
                             </div>


                             <div className="menu">
                                 <NavLink to="/" exact={true} activeStyle={activeStyle}>
                                     <div className="icon">
                                         <AiOutlineHome color={"white"} size={18}/>
                                     </div>
                                     <span>{item.DashBoard}</span>
                                 </NavLink>
                                 <NavLink to="/exchange" activeStyle={activeStyle}>
                                     <div className="icon">
                                         <FaExchangeAlt color={"white"} size={18}/>
                                     </div>
                                     <span>{item.ExChange}</span>
                                 </NavLink>
                                 <NavLink to="/pool" activeStyle={activeStyle}>
                                     <div className="icon">
                                         <RiWaterFlashLine color={"white"} size={18}/>
                                     </div>
                                     <span>{item.Pool}</span>
                                 </NavLink>
                                 <NavLink to="/save" activeStyle={activeStyle}>
                                     <div className="icon">
                                         <BiBookHeart color={"white"} size={18}/>
                                     </div>
                                     <span>{item.Save}</span>
                                 </NavLink>
                                 <NavLink to="/address" activeStyle={activeStyle}>
                                     <div className="icon">
                                         <BiBookHeart color={"white"} size={18}/>
                                     </div>
                                     <span>{item.AddressBook}</span>
                                 </NavLink>
                                 <div className="more">
                                     <div className="container">
                                         <div className="menu_item">
                                             <div className="icon" onClick={toggleMenu}>
                                                 <FiMoreHorizontal color={"white"} size={18}/>
                                                 <span>{item.More}</span>
                                             </div>
                                         </div>
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

                             <div className="bottom">
                                 <a className="menu_item mt-3" href="/settings">
                                <span className="hide mt-1">
                                    <FiSettings size={15} className="icon"/>
                                    Settings
                                </span>
                                 </a>
                                 <div className="dropdown">
                                     <div className="header">
                                         <div className="flex">
                                             <img src="download.png" className="network_icon">
                                             </img>
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
                                         <div className="popover-button-3">
                                             <div className="pop">
                                                 <div className="title">
                                                     KRW
                                                 </div>
                                             </div>
                                         </div>
                                     </div>
                                 </div>
                                 <div className="themeSwitch">
                                     <div className="night">
                                         <div className="switch">
                                             <div className="bg">

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