import React, {useState} from "react";
import SideList from "../../item.json";
import { NavLink} from "react-router-dom";
import {BiBookHeart,BiMenu} from 'react-icons/bi';
import {FaExchangeAlt,FaSearch} from 'react-icons/fa';
import {AiOutlineHome,AiOutlineSearch,AiOutlineArrowLeft,AiOutlineArrowRight,AiFillCaretDown } from 'react-icons/ai'
import "../Home.css"
import Footer from "../Footer/Footer";


const DashBoard = (match) => {
    const activeStyle = {
        color: '#fffff',
        fontSize: '2rem',
        fontWeight:"bold"
    }
    const [openMenu, setOpenMenu] = useState(false);




    return (
        <>
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
                                                <div className="wallet">
                                                    <div className="blockie">
                                                       <canvas></canvas>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex">
                                                <div className="label">{item.to}</div>
                                                <button>
                                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" color="inherit" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" ><path d="M5 12a1 1 0 102 0V6.414l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L5 6.414V12zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z"></path></svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {SideList.map((item) => (
                            <>
                                <div className="worth">
                                    <div className="title">Net Worth</div>
                                    <div className="doller">
                                        {item.doller}
                                    </div>
                                    <div className="edit">
                                        <div className="totalen">
                                            <AiOutlineHome className="icon" />
                                        </div>
                                        <div className="totalen">
                                            <AiOutlineHome/>
                                        </div>
                                    </div>
                                </div>
                                <div className="tabs">
                                    <NavLink to="portfolio" className="item">
                                        <button >{item.Portfolio}</button>
                                    </NavLink>
                                    <NavLink to="nft" className="item">
                                        <button>{item.NFT}</button>
                                    </NavLink>
                                    <NavLink to="Ges" className="item">
                                        <button >{item.Geschiedenis}</button>
                                    </NavLink>
                                </div>
                            </>
                        ))}
                        <div className="filter">
                            dsds
                        </div>
                    </div>

                </div>

                </div>
                <Footer />

            </div>

        </>
    )
}

export default DashBoard