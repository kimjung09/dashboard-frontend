import React from "react";
import "./Home.css"
import { BrowserRouter, Routes, Route,Switch } from "react-router-dom";
import {AiOutlineHome,AiFillCaretDown,AiOutlineSearch,AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai'
import {FaExchangeAlt,FaTwitter} from 'react-icons/fa'
import {RiWaterFlashLine} from 'react-icons/ri'
import {BiBookHeart,BiMenu} from 'react-icons/bi'
import {FiMoreHorizontal,FiSettings} from 'react-icons/fi'

const MainPage = (props) => {
    return (
        <>
            <div className="Home-container">
                <nav className="SideBar">
                    <div className="hidden">
                        <div className="Brand">
                            <div className="mid">
                                <span>Zapper</span>
                            </div>
                        </div>
                        {/* connectd */}
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
                                <a href="/quests" >
                                    <button>
                                        <FaExchangeAlt className="alt" />
                                        <span>Quests</span>
                                    </button>
                                </a>
                                <a href="/quests">
                                    <button>
                                        <FaExchangeAlt className="alt" />
                                        <span>Rewards
                                        </span>
                                    </button>
                                </a>
                            </div>

                            <div className="menu">
                                <a href="/">
                                    <div className="icon">
                                        <AiOutlineHome color={"white"} size={18}  />
                                    </div>
                                    <span>DashBoard</span>
                                </a>
                                <a href="/exchange">
                                    <div className="icon">
                                        <FaExchangeAlt color={"white"} size={18} />
                                    </div>
                                    <span>Exchange</span>
                                </a>
                                <a href="/pool">
                                    <div className="icon">
                                        <RiWaterFlashLine color={"white"} size={18}  />
                                    </div>
                                    <span>Pool</span>
                                </a>
                                <a href="/save">
                                    <div className="icon">
                                        <BiBookHeart color={"white"} size={18}  />
                                    </div>
                                    <span>Save</span>
                                </a>
                                <a href="/address">
                                    <div className="icon">
                                        <BiBookHeart color={"white"} size={18}  />
                                    </div>
                                    <span>Address Book</span>
                                </a>
                                <div className="more">
                                    <div>
                                        <div className="menu_item">
                                            <div className="icon">
                                                <FiMoreHorizontal color={"white"} size={18}  />
                                            </div>
                                            <span>More</span>
                                        </div>
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
                {/* DashBoard MainPage */}
                <div className="DashBoard">
                           <div className="Wrapper">
                               <div className="Body">
                                   <div className="Border">
                                       <div className="Container">
                                           <div className="title">
                                               <div className="grid">
                                                   <div className="text">
                                                       Dashboard
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </div>
                           <div className="account">
                               <div className="Body">
                                   <div className="top">
                                       <div className="bundle">
                                           <div className="item">
                                               <div className="icon">
                                                   <div className="blockie">
                                                       <canvas className="identicon_blockie" width="20" height="20px"

                                                       ></canvas>
                                                   </div>
                                               </div>
                                               <div className="label">ether</div>
                                           </div>
                                           <div className="account">
                                               <div className="right">
                                                   <div className="icon">
                                                   </div>
                                                   <div className="flex">
                                                       <div className="label">to</div>
                                                       <button>

                                                       </button>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </div>
                           <div className="worth">
                               <div className="title">Netto waarde</div>
                               <div className="doller">
                                   ₩0.00
                               </div>
                               <div className="edit">
                                   <div className="totalen">
                                       <AiOutlineHome/>
                                   </div>
                                   <div className="totalen">
                                       <AiOutlineHome/>
                                   </div>
                               </div>
                           </div>
                           <div className="tabs">
                               <button className="item">Portfolio</button>
                               <button className="item">NFTs</button>
                               <button className="item">Geschiedenis</button>
                           </div>
                           <div className="filter">
                               <div className="container">
                                   <div className="box">
                                       <div className="left">
                                           <div className="control">
                                               <div className="item">
                                                   <BiMenu size={20}/>
                                               </div>
                                               <div className="item">
                                                   <BiMenu size={20}/>
                                               </div>

                                           </div>
                                           <div className="settings">
                                               <div className="item">
                                                   <div className="flex">
                                                       <BiMenu size={20}/>
                                                       <span>$1.00</span>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                       <div className="network">
                                           <div className="box">
                                               <FaExchangeAlt/>
                                               <div className="title">
                                                   networks (9)
                                               </div>
                                               <AiFillCaretDown/>
                                           </div>
                                       </div>
                                   </div>
                               </div>

                           </div>
                           <div className="footer">
                               <footer className="container">
                                   <div className="body">
                                       <a href="https://zapper.canny.io/" className="link mr-5"> Functieverzoek</a>
                                       <a href="https://zapper.canny.io/" className="link mr-5">Bug beloningen</a>
                                       <a href="https://zapper.canny.io/" className="link mr-5">Ondersteuning</a>

                                       <div className="flex">
                                           <a><FaTwitter/>Twitter</a>
                                           <a><FaTwitter/>DisCord</a>
                                           <a><FaTwitter/>WeChat</a>

                                       </div>
                                   </div>
                               </footer>
                           </div>
                       </div>
                <div className="Widgets">
                     <div className="Container">
                       <div className="Body">
                         <div className="Bottom">
                            <div className="Box">
                                <div className="Search">
                                  <AiOutlineSearch className="icon "/>
                                </div>
                            </div>
                             <div className="Box">
                                 <div className="Toggle">
                                       <div className="Title">
                                           Widgets
                                       </div>
                                     <div className="Setting">
                                          <FiSettings size={14}/>
                                     </div>
                                 </div>
                             </div>
                             <div className="Box">
                                 <div className="Token">
                                   <div className="List">
                                       <div className="Title">
                                           <div className="form">
                                               <div className="title">
                                                   <h4>Token Volijsst</h4>

                                               </div>
                                           </div>
                                       </div>
                                       <div className="Page">
                                          <button>
                                            <AiOutlineArrowLeft size={12} />
                                          </button>
                                           <div className="nation">
                                               <span>1/1</span>
                                           </div>
                                           <button>
                                               <AiOutlineArrowRight size={12} />
                                           </button>
                                       </div>
                                   </div>
                                 </div>
                             </div>
                             <div className="Network">
                               <div className="form">
                                 <div className="group">
                                    sdsdsd
                                 </div>
                               </div>
                             </div>
                             <div className="Box"></div>

                         </div>
                       </div>
                     </div>
                </div>
            </div>

        </>
    )
}

export default MainPage;