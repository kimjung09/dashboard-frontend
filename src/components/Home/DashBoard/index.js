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
                <div className="Widgets">
                    {SideList.map((item) => (
                        <div className="Container">
                            <div className="Body">
                                    <div className="Box">

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
                                                <div className="title">
                                                    <h4>Network Fee &nbsp;</h4>
                                                </div>
                                                <div className="fee">
                                                    <div className="container">
                                                        <div className="flex">
                                                            <span className="title">Standard</span>
                                                            <span className="min">~3min</span>
                                                        </div>
                                                        <div className="end">
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
                                                        <div className="end">
                                                            <span className="title">112</span>
                                                            <div className="description">
                                                                ₩32,545.14
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="trend">
                                                <h4>Gas Trend (1w)</h4>
                                            </div>

                                        </div>

                                    </div>
                                    <div className="Learn">
                                        <div className="container">
                                            <div className="row">
                                                <h4>Zapper Learn - Recent articles</h4>
                                            </div>
                                            <div className="site">
                                                <div className="form">
                                                    <a href="https://learn.zapper.fi/articles/a-primer-on-daos" target="_blank">
                                                        <div className="box">
                                                            <div className="icon">
                                                                🤝
                                                            </div>
                                                            <div className="sub">
                                                                A Primer on DAOs
                                                            </div>
                                                            <div className="read">5 min. read</div>

                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="form">
                                                    <a href="https://learn.zapper.fi/articles/a-primer-on-daos" target="_blank">
                                                        <div className="box">
                                                            <div className="icon">
                                                                🪙
                                                            </div>
                                                            <div className="sub">
                                                                Breaking Down the Steps of Token Approval
                                                            </div>
                                                            <div className="read">5 min. read</div>

                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="form">
                                                    <a href="https://learn.zapper.fi/articles/a-primer-on-daos" target="_blank">
                                                        <div className="box">
                                                            <div className="icon">
                                                                🏦
                                                            </div>
                                                            <div className="sub">
                                                                What is a Vault?
                                                            </div>
                                                            <div className="read">5 min. read</div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="Trend">
                                        <div className="form">
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
                                        </div>
                                        <div className="item">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="border">
                                                        <div className="item">
                                                            <div className="left">
                                                                <img
                                                                    src="https://storage.googleapis.com/zapper-fi-assets/apps/sushiswap.png"
                                                                    className="mr-3">
                                                                </img>
                                                                <div className="right">
                                                         <span className="title">
                                                         UNI-V2 PYR / ETH
                                                         </span>
                                                                    <span>
                                                               Uniswap
                                                           </span>
                                                                </div>
                                                            </div>
                                                            <div className="percent">
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
                                                <div className="row">
                                                    <div className="border">
                                                        <div className="item">
                                                            <div className="left">
                                                                <img
                                                                    src="https://storage.googleapis.com/zapper-fi-assets/apps/sushiswap.png"
                                                                    className="mr-3">
                                                                </img>
                                                                <div className="right">
                                                         <span className="title">
                                                         UNI-V2 PYR / ETH
                                                         </span>
                                                                    <span>
                                                               Uniswap
                                                           </span>
                                                                </div>
                                                            </div>
                                                            <div className="percent">
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
                                                <div className="row">
                                                    <div className="border">
                                                        <div className="item">
                                                            <div className="left">
                                                                <img
                                                                    src="https://storage.googleapis.com/zapper-fi-assets/apps/sushiswap.png"
                                                                    className="mr-3">
                                                                </img>
                                                                <div className="right">
                                                         <span className="title">
                                                         UNI-V2 PYR / ETH
                                                         </span>
                                                                    <span>
                                                               Uniswap
                                                           </span>
                                                                </div>
                                                            </div>
                                                            <div className="percent">
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
                                                <div className="row">
                                                    <div className="border">
                                                        <div className="item">
                                                            <div className="left">
                                                                <img
                                                                    src="https://storage.googleapis.com/zapper-fi-assets/apps/sushiswap.png"
                                                                    className="mr-3">
                                                                </img>
                                                                <div className="right">
                                                         <span className="title">
                                                         UNI-V2 PYR / ETH
                                                         </span>
                                                                    <span>
                                                               Uniswap
                                                           </span>
                                                                </div>
                                                            </div>
                                                            <div className="percent">
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
                                                <div className="row">
                                                    <div className="border">
                                                        <div className="item">
                                                            <div className="left">
                                                                <img
                                                                    src="https://storage.googleapis.com/zapper-fi-assets/apps/sushiswap.png"
                                                                    className="mr-3">
                                                                </img>
                                                                <div className="right">
                                                         <span className="title">
                                                         UNI-V2 PYR / ETH
                                                         </span>
                                                                    <span>
                                                               Uniswap
                                                           </span>
                                                                </div>
                                                            </div>
                                                            <div className="percent">
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
                        </div>
                    ))}

                </div>

            </div>
        </>
    )
}

export default DashBoard