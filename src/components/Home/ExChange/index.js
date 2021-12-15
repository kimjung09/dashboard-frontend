import React from "react";
import {NavLink} from "react-router-dom";
import SideList from "../../item.json";
import "../Home.css"
import {AiOutlineHome, AiOutlineSearch, AiOutlineArrowLeft, AiOutlineArrowRight, AiFillCaretDown} from 'react-icons/ai'
import {FaExchangeAlt, FaTwitter} from 'react-icons/fa'

import {BiBookHeart, BiMenu} from 'react-icons/bi'
import Footer from "../Footer/Footer";

const ExChange = () => {
    return (
        <>
            <div className="ExChange">
                <div className="Wrapper">
                    <div className="Body">
                        <div className="Border">
                            <div className="Container">
                                <div className="title">
                                    <div className="grid">
                                        <div className="text">
                                            {SideList.map((item) => (
                                                <>
                                                    {item.ExChange}
                                                </>
                                            ))}
                                        </div>
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
                                        <NavLink to="Ges">
                                            <button className="item">{item.Geschiedenis}</button>
                                        </NavLink>
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
                                </>
                            ))}
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
                    </div>
                    <Footer />
                </div>

            </div>
        </>
    )
};

export default ExChange