import React,{useState} from "react";
import SideList from "../../item.json";
import "../Home.css"
import {AiOutlineHome , AiOutlineArrowLeft, AiOutlineArrowRight, } from 'react-icons/ai'
import {FaExchangeAlt} from 'react-icons/fa'
import {RiWaterFlashLine} from 'react-icons/ri'
import {BiBookHeart, BiMenu} from 'react-icons/bi'
import {FiMoreHorizontal, FiSettings} from 'react-icons/fi'
import {BrowserRouter as Router, Route, Routes, NavLink, BrowserRouter} from "react-router-dom";
import {GiFarmTractor} from 'react-icons/gi'





const DashBoard = (match) => {
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
               {/*<SideBar/>*/}
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
                                <div className="footer">
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
                        </div>
                    </nav>

                ))}
                <div className="Center">
                    <div className="first">
                       <div className="Container">
                         <div className="header">
                            <div className="top">
                              <h1>Exchange</h1>
                                <p>
                                    Verwissel in meer dan 2000 tokens met de beste aanhalingstekens uit meer dan 20 bronnen.
                                </p>
                            </div>
                             <div className="address">
                                 <a
                                    href="https://learn.zapper.fi/articles/what-is-a-decentralized-exchange"
                                    rel="noopener noreferrer" target="_blank">Meer informatie</a>
                             </div>
                         </div>
                       </div>
                    </div>
                    <div className="second">
                        <div className="Container">
                                 <div className="card">
                                    <div className="section">
                                        <div className="from">
                                           <div className="text">
                                               <div className="row">
                                                  <h1>Van</h1>
                                                   <div className="hover">
                                                       Saldo : 0
                                                   </div>
                                               </div>
                                               <div className="row">
                                                   <div className="token">
                                                       <img src="/images/other/default-icon.png"/>
                                                        <div className="invest">
                                                            <div className="title">
                                                                ETH
                                                            </div>
                                                            <div className="button">
                                                                <svg stroke="currentColor" fill="currentColor"
                                                                     stroke-width="0" viewBox="0 0 512 512"
                                                                     className="icon " height="1.1em" width="1.1em"
                                                                     xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M128 192l128 128 128-128z"></path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                   </div>
                                                   <div className="input">
                                                       <input step="any" class="input" placeholder="0" value="0" />
                                                    <div className="support">
                                                        ₩0.00
                                                    </div>
                                                   </div>
                                               </div>
                                           </div>
                                            <div className="middle">
                                                <div className="row">
                                                    <div className="center">
                                                       <button className="exchange">
                                                          <div className="flex">
                                                              <svg stroke="currentColor" fill="currentColor"
                                                                   stroke-width="0" viewBox="0 0 24 24"
                                                                   className="icon " height="1.5em" width="1.5em"
                                                                   xmlns="http://www.w3.org/2000/svg">
                                                                  <path
                                                                      d="M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z"></path>
                                                              </svg>
                                                          </div>
                                                       </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="invest">
                                               <div className="row1">
                                                  <h2>tot</h2>
                                               </div>
                                                <div className="row2">
                                                   <div className="container">

                                                   </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                 </div>
                        </div>
                    </div>
                </div>
                <div className="Widgets">
                    {SideList.map((item) => (
                        <div className="Container">
                            <div className="Body">
                                    <div className="Box">
                                      <div className="Search">
                                          <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                               viewBox="0 0 512 512" className="icon" height="1.5em" width="1.5em"
                                               xmlns="http://www.w3.org/2000/svg">
                                              <path
                                                  d="M337.509 305.372h-17.501l-6.571-5.486c20.791-25.232 33.922-57.054 33.922-93.257C347.358 127.632 283.896 64 205.135 64 127.452 64 64 127.632 64 206.629s63.452 142.628 142.225 142.628c35.011 0 67.831-13.167 92.991-34.008l6.561 5.487v17.551L415.18 448 448 415.086 337.509 305.372zm-131.284 0c-54.702 0-98.463-43.887-98.463-98.743 0-54.858 43.761-98.742 98.463-98.742 54.7 0 98.462 43.884 98.462 98.742 0 54.856-43.762 98.743-98.462 98.743z"></path>
                                          </svg>
                                          <div className="container">
                                              <div className="text">
                                              </div>
                                          </div>
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
                                                            <h4>{item.Token}</h4>
                                                            <div className="Page">
                                                                <button>
                                                                    <div className="aria">
                                                                    <AiOutlineArrowLeft size={12} />
                                                                    </div>
                                                                </button>
                                                                <div className="nation">
                                                                    <span>1/1</span>
                                                                </div>
                                                                <button>
                                                                    <div className="aria">
                                                                    <AiOutlineArrowRight size={12} />
                                                                    </div>
                                                                </button>
                                                            </div>
                                                </div>

                                            </div>
                                            <div className="Container">
                                                <div className="Box">
                                                    <a href="https://zapper.fi/nl/token/ethereum/0x6b175474e89094c44da98b954eedeac495271d0f">
                                                        <div className="url">
                                                            <div className="title">
                                                                <img src="https://storage.googleapis.com/zapper-fi-assets/tokens/ethereum/0x6b175474e89094c44da98b954eedeac495271d0f.png"/>
                                                                <div className="description">
                                                                    <span>DAI</span>
                                                                    <span>Ethereum</span>
                                                                </div>
                                                            </div>
                                                            <div className="doller">
                                                               <span className="line">₩1,171.53</span>
                                                                <div className="rate">
                                                                    <span className="percent">
                                                                        -0.49%
                                                                    </span>
                                                                  <span className="title">&nbsp; (24h)</span>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="Box">
                                        <div className="Network">
                                            <div className="group">
                                                <div className="title">
                                                    <h4>Netwerk vergoeding &nbsp;</h4>
                                                </div>
                                                <div className="fee">
                                                    <div className="container">
                                                        <div className="flex">
                                                            <span className="title">Standard</span>
                                                            <span className="min">~3min</span>
                                                        </div>
                                                        <div className="flex">
                                                            <span className="title">112</span>
                                                            <div className="description">
                                                                ₩32,545.14
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="container">
                                                        <div className="flex">
                                                            <span className="title">Standard</span>
                                                            <span className="min">~3min</span>
                                                        </div>
                                                        <div className="flex">
                                                            <span className="title">112</span>
                                                            <div className="description">
                                                                ₩32,545.14
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="trend">
                                                <div className="title">
                                                    <h4>Gas Trend(1w)</h4>
                                                </div>
                                                <div className="graph">
                                                  <div className="container">
                                                     <div className="title">
                                                        <div className="gawi">
                                                        </div>
                                                     </div>
                                                  </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                    <div className="Box">
                                        <div className="Learn">
                                            <div className="title">
                                                <h4>Zapper Learn - Recent articles</h4>
                                            </div>
                                            <div className="site">
                                                <div className="form">
                                                    <a href="https://learn.zapper.fi/articles/a-primer-on-daos" target="_blank">
                                                        <div className="box">
                                                            <div className="icon">
                                                                🤝
                                                            </div>
                                                            <div className="description">
                                                                <div className="title">Understanding Networks</div>
                                                                <div className="read">5 min. read</div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="form">
                                                    <a href="https://learn.zapper.fi/articles/a-primer-on-daos" target="_blank">
                                                        <div className="box">
                                                            <div className="icon">
                                                                🪙
                                                            </div>
                                                            <div className="description">
                                                                <div className="title">A Primer on DAOs</div>
                                                                <div className="read">5 min. read</div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="form">
                                                    <a href="https://learn.zapper.fi/articles/a-primer-on-daos" target="_blank">
                                                        <div className="box">
                                                            <div className="icon">
                                                                🏦
                                                            </div>
                                                            <div className="description">
                                                                <div className="title">Understanding Networks</div>
                                                                <div className="read">5 min. read</div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="Box">
                                        <div className="Trend">
                                            <div className="pagenation">
                                                <h4>
                                                    🔥 Pool trend by volume (24h)
                                                </h4>
                                                <div className="page">
                                                    <button>
                                                        <AiOutlineArrowLeft />
                                                    </button>
                                                    <div className="number">
                                                        <span>1/156</span>
                                                    </div>
                                                    <button>
                                                        <AiOutlineArrowRight/>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="item">
                                                    <div className="container">
                                                                <div className="row">
                                                                    <div className="left">
                                                                        <img
                                                                            src="https://storage.googleapis.com/zapper-fi-assets/apps/sushiswap.png"
                                                                        >
                                                                        </img>
                                                                        <div className="box">
                                                                         <span className="title">UNI-V2 PYR / ETH</span>
                                                                            <span className="description">Uniswap</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="right">
                                                                    <span>
                                                                        +2.2%
                                                                     </span>
                                                                        <div className="won">
                                                                            +
                                                                            ₩211,401,716.14
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                    </div>
                                            </div>
                                            </div>
                                    </div>
                                </div>
                        </div>
                    ))}

                </div>

            </div>
        </>
    )
}

export default DashBoard