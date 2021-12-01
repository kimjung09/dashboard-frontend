import React from "react";
import "./Home.css"
import {AiOutlineHome} from 'react-icons/ai'
import {FaExchangeAlt} from 'react-icons/fa'
import {RiWaterFlashLine} from 'react-icons/ri'
import {BiBookHeart} from 'react-icons/bi'
import {FiMoreHorizontal} from 'react-icons/fi'

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
                                                 <span>ether</span>
                                                <div className="level">
                                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                         viewBox="0 0 512 512" className="icon " height="1.1em"
                                                         width="1.1em" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M128 192l128 128 128-128z"></path>
                                                    </svg>
                                                </div>
                                            </div>
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
                            <div className="flex-box mt-3"></div>
                            <a className="menu_item mt-3" href="/settings">
                                <div className="icon"></div>
                                <span className="hide mt-1">Settings</span>
                            </a>
                            <div className="dropdown">
                                <div className="header">
                                    <div className="flex">
                                       <img className="network_icon">
                                       </img>
                                        <div className="network_label">
                                            Ethereum
                                        </div>
                                     <div className="hide">

                                     </div>
                                    </div>
                                </div>
                            </div>
                            <div className="language">
                               <div >
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

                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="Body-container">
                    <div className="Dashboard">
                       <div className="Bottom">
                           <div className="Bar">
                               DashBoard
                           </div>
                       </div>
                        <div className="Account">
                            <div className="header">
                               <div className="top">
                                   <div className="bundle">
                                       <div className="bundle_item">
                                            <div className="icon">
                                                <div className="blockie">

                                                </div>
                                            </div>
                                           <div className="label">ether</div>
                                       </div>

                                   </div>
                                   <div className="dropdown">
                                         <div className="bundle_item">
                                             <div className="icon">
                                                 <div className="wallet">
                                                     <div className="block"> bundle</div>
                                                 </div>
                                             </div>
                                         </div>
                                   </div>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default MainPage;