import React from "react";
import "../Home.css"
import { NavLink} from "react-router-dom";
import {AiOutlineHome,AiOutlineSearch,AiOutlineArrowLeft,AiOutlineArrowRight,AiFillCaretDown } from 'react-icons/ai'
import {FaExchangeAlt,FaSearch} from 'react-icons/fa'
import {BiBookHeart,BiMenu} from 'react-icons/bi'
import {RiWaterFlashLine} from 'react-icons/ri'
import {MdOutlineSwapHoriz} from 'react-icons/md'
import {FiMoreHorizontal,FiSettings} from 'react-icons/fi';
import {BsCoin} from 'react-icons/bs'
import SideList from "../../item.json";
import Footer from "../Footer/Footer";

const ExChange = () => {
    const activeStyle = {
        color: 'green',
        fontSize: '2rem'
    }
    return (
        <div className="Home-container">
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
                                    <div>
                                        <div className="menu_item">
                                            <div className="icon">
                                                <FiMoreHorizontal color={"white"} size={18}/>
                                            </div>
                                            <span>{item.More}</span>
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
            ))}
            {SideList.map((item) => (
                <div className="DashBoard">
                    <div className="Wrapper">
                        <div className="Body">
                            <div className="Border">
                                <div className="Container">
                                    <div className="title">
                                        <div className="grid">
                                            <div className="text">
                                                <>
                                                    <h1>
                                                        {item.Pool}
                                                    </h1>
                                                    <p>
                                                        {item.SubTitle}
                                                    </p>
                                                    <a href="">
                                                        {item.More}
                                                    </a>
                                                </>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="select">
                            <div className="Body">
                                <div className="tab">
                                    <div className="item">
                                        <img src="https://zapper.fi/images/networks/ethereum-icon.png"/>
                                        <div className="title">{item.Ethereum}</div>
                                    </div>
                                    <div className="item">
                                        <img src="https://zapper.fi/images/networks/avalanche-icon.png" />
                                        <div className="title">{item.Avalanche}</div>
                                    </div>
                                    <div className="item">
                                        <img src="https://zapper.fi/images/networks/binance-smart-chain-icon.png"/>
                                        <div className="title">{item.BSC}</div>
                                    </div>
                                    <div className="item">
                                        <img src="https://zapper.fi/images/networks/fantom-icon.png"/>
                                        <div className="title">{item.Fantom}</div>
                                    </div>
                                    <div className="item">
                                        <img src="https://zapper.fi/images/networks/polygon-icon.png"/>
                                        <div className="title">{item.Polygon}</div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        </div>
                    <div className="Explore">
                        <div className="Container">
                            <div className="full">
                                <div className="explore">
                                   <div className="header">
                                       <h4> Explore Opportunities</h4>
                                   </div>
                                </div>
                                <div className="table">
                                    <thead>
                                      <tr role="row">
                                          <th>#</th>
                                          <th colspan="1" className="no-flex">
                                              Available Pools
                                          </th>
                                          <th colSpan="1" >
                                              Available Pools
                                          </th>
                                          <th colSpan="1" >
                                              Available Pools
                                          </th>
                                          <th colSpan="1">
                                              Available Pools
                                          </th>
                                      </tr>
                                    </thead>

                                    <tbody role="rowgroup">
                                      <tr role="row">
                                          <td className="no-flex" width="50">21</td>
                                          {/*} <td className="box">
                                          {/*    <div className="flex">*/}
                                          {/*     <div className="logo">*/}
                                          {/*        <div className="group">*/}
                                          {/*            <img src="https://storage.googleapis.com/zapper-fi-assets/tokens/ethereum/0x0000000000000000000000000000000000000000.png"*/}

                                          {/*            />*/}
                                          {/*            <img src="https://storage.googleapis.com/zapper-fi-assets/tokens/ethereum/0x0000000000000000000000000000000000000000.png"/>*/}
                                          {/*        </div>*/}
                                          {/*     </div>*/}
                                          {/*    </div>*/}
                                          {/*</td>*/}
                                          <td className="cell" role="cell">
                                               <div>₩610,609,474,381</div>
                                          </td>
                                          <td className="cell" role="cell">
                                              <div className="cell_SecondaryText">0.05% (1w)</div>
                                              <div>% (1y)</div>
                                          </td>
                                      </tr>

                                    </tbody>
                                </div>
                            </div>

                        </div>
                    </div>
                    <Footer />

                </div>

            ))}
            <div className="Widgets">
                {SideList.map((item) => (
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
                                                        <h4>{item.Token}</h4>
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
                                            sdsdsds
                                        </div>
                                    </div>
                                </div>
                                <div className="Box"></div>

                            </div>
                        </div>

                    </div>
                ))}

            </div>

        </div>
    )
}

export default ExChange;