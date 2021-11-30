import React from "react";
import "./Home.css"

const MainPage = (props) => {
    return (
        <>
            <div className="Home-container">
                <nav className="SideBar">
                    <div className="hidden">
                        <div className="Brand ml-1">
                           Zapper
                        </div>
                        <div className="account_connected">
                           <div className="account">
                              <div className="header">
                                   <div className="sidebar">
                                       <div className="block">
                                           <div className="edit">
                                           </div>
                                           <span className="connection"></span>
                                       </div>
                                       <div className="flex-max">
                                            <div className="flex">
                                                 <span className="address">
                                                     ether
                                                 </span>
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
                                           <div className="level">
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
                            <div className="mt-2 mb-3 sidebar__gamification">
                                <a href="/quests" className="visible">
                                    <button>Quests</button>
                                </a>
                                <a href="/quests" className="visible">
                                    <button>Rewards</button>
                                </a>
                            </div>
                            <div className="menu">
                                <a href="/">
                                    DashBoard
                                </a>
                                <a href="/exchange">Exchange</a>
                                <a href="/pool">Pool</a>
                                <a href="/save">Save</a>
                                <a href="/address">Address Book</a>
                                <div className="more">
                                  <div>
                                      <div className="menu_item">
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
                        <div className="Content">
                            <div className="Body">
                               <div className="top">
                                   <div className="bundle">

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