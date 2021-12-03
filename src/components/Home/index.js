import React, {useRef, useState, useEffect} from "react";
import "./Home.css"
import {BrowseRouter as Router, Route, NavLink, Routes, Link} from "react-router-dom";
import {AiOutlineHome, AiOutlineSearch, AiOutlineArrowLeft, AiOutlineArrowRight, AiFillCaretDown} from 'react-icons/ai'
import {FaExchangeAlt, FaTwitter} from 'react-icons/fa'
import {RiWaterFlashLine} from 'react-icons/ri'
import {BiBookHeart, BiMenu} from 'react-icons/bi'
import {FiMoreHorizontal, FiSettings} from 'react-icons/fi'
import ExChange from "../Side/Side";
import SideList from "../item.json";


const MainPage = () => {
    const activeStyle = {
        color: 'green',
        fontSize: '2rem'
    }
    return (
        <>
            <div className="Home-container">
                <nav className="SideBar">
                    <div className="hidden">
                        {SideList.map((item) => (
                            <>
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
                                                        <span>{item.Ether}</span>
                                                        <div className="level">
                                                            <svg stroke="currentColor" fill="currentColor"
                                                                 stroke-width="0"
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
                                                   {item.Level}
                                               </span>
                                                            <span>

                                                  {item.EXP}
                                               </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="mt-2 mb-3 sidebar__gamification">
                                        <NavLink to="/quests">
                                            <button>
                                                <FaExchangeAlt className="alt"/>
                                                <span>{item.Quests}</span>
                                            </button>
                                        </NavLink>
                                        <NavLink to="/quests">
                                            <button>
                                                <FaExchangeAlt className="alt"/>
                                                <span>{item.Rewards}</span>
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
                                    {item.Settings}
                                </span>
                                        </a>
                                        <div className="dropdown">
                                            <div className="header">
                                                <div className="flex">
                                                    <img src="download.png" className="network_icon">
                                                    </img>
                                                    <div className="network_label">
                                                        {item.Ethereum}
                                                    </div>
                                                    <div className="hide">
                                                        <div className="flex">
                                                            <svg stroke="currentColor" fill="currentColor"
                                                                 stroke-width="0"
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
                                                            {item.Wallet}
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
                            </>
                        ))}
                    </div>
                </nav>
                <div className="DashBoard">
                    <div className="Wrapper">
                        <div className="Body">
                            <div className="Border">
                                <div className="Container">
                                    <div className="title">
                                        <div className="grid">
                                            <div className="text">
                                                {SideList.map((item) => (
                                                    <>
                                                        {item.DashBoard}
                                                    </>
                                                ))}
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
                                {SideList.map((item) => (
                                    <div className="bundle">

                                        <div className="item">
                                            <>
                                        <div className="icon">
                                            <div className="blockie">
                                                <canvas className="identicon_blockie" width="20" height="20px"></canvas>
                                            </div>
                                        </div>
                                                <div className="label">{item.Ether}</div>
                                            </>
                                    </div>
                                    <div className="account">
                                        <div className="right">
                                            <div className="icon">
                                            </div>
                                            <div className="flex">
                                                <div className="label">{item.to}</div>
                                                <button></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {SideList.map((item) => (
                        <>
                        <div className="worth">
                        <div className="title">{item.Title}</div>
                        <div className="doller">
                            {item.doller}
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
                        <NavLink to="portfolio">
                            <button className="item">{item.Portfolio}</button>
                        </NavLink>
                        <NavLink to="nft">
                            <button className="item">{item.NFT}</button>
                        </NavLink>
                        <button className="item">{item.Geschiedenis}</button>
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
                                                <span>{item.Doller}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="network">
                                    <div className="box">
                                        <FaExchangeAlt/>
                                        <div className="title">
                                            {item.Network}
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
                                <a href="https://zapper.canny.io/" className="link mr-5">{item.Fun}</a>
                                <a href="https://zapper.canny.io/" className="link mr-5">{item.Bug}</a>
                                <a href="https://zapper.canny.io/" className="link mr-5">{item.Onder}</a>

                                <div className="flex">
                                    <a><FaTwitter/>{item.Twitter}</a>
                                    <a><FaTwitter/>{item.Discord}</a>
                                    <a><FaTwitter/>{item.WeChat}</a>
                                </div>
                            </div>
                        </footer>
                    </div>
                        </>
                    ))}
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
                                {SideList.map((item) => (
                                    <>
                                    <div className="Box">
                                        <div className="Toggle">
                                            <div className="Title">
                                                {item.Widgets}
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
                                    <AiOutlineArrowLeft size={12}/>
                                    </button>
                                    <div className="nation">
                                    <span>1/1</span>
                                    </div>
                                    <button>
                                    <AiOutlineArrowRight size={12}/>
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
                                    </>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default MainPage;