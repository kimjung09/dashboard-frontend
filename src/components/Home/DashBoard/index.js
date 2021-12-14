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
                                    <NavLink to="/" className="item">
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
                            <div className="bottom">
                                <div className="form">
                                    <div className="box">
                                        <div className="trans">
                                            <div className="control_item--active">
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="icon " height="1.3em" width="1.3em" xmlns="http://www.w3.org/2000/svg"><path d="M20 13H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zm0-10H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z"></path></svg>
                                            </div>
                                            <div className="control_item">
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="icon " height="1.3em" width="1.3em" xmlns="http://www.w3.org/2000/svg"><path d="M204 240H68a36 36 0 01-36-36V68a36 36 0 0136-36h136a36 36 0 0136 36v136a36 36 0 01-36 36zm240 0H308a36 36 0 01-36-36V68a36 36 0 0136-36h136a36 36 0 0136 36v136a36 36 0 01-36 36zM204 480H68a36 36 0 01-36-36V308a36 36 0 0136-36h136a36 36 0 0136 36v136a36 36 0 01-36 36zm240 0H308a36 36 0 01-36-36V308a36 36 0 0136-36h136a36 36 0 0136 36v136a36 36 0 01-36 36z"></path></svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="control">
                                        <div className="item">
                                            <div className="flex">
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="icon " height="0.9em" width="0.9em" xmlns="http://www.w3.org/2000/svg"><path d="M55.22 107.69l175.56 68.09-175.44 68.05c-18.39 6.03-27.88 24.39-21.2 41l12.09 30.08c6.68 16.61 26.99 25.19 45.38 19.15L393.02 214.2c13.77-4.52 22.98-16.61 22.98-30.17v-15.96c0-13.56-9.21-25.65-22.98-30.17L91.3 17.92c-18.29-6-38.51 2.53-45.15 19.06L34.12 66.9c-6.64 16.53 2.81 34.79 21.1 40.79zM424 400H24c-13.25 0-24 10.74-24 24v48c0 13.25 10.75 24 24 24h400c13.25 0 24-10.75 24-24v-48c0-13.26-10.75-24-24-24z"></path></svg>
                                            </div>
                                            <span>$0.010</span>
                                            <div className="flex">
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="icon " height="1.1em" width="1.1em" xmlns="http://www.w3.org/2000/svg"><path d="M128 192l128 128 128-128z"></path></svg> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                 <div className="network">
                                <div className="form">
                                    <div className="button">
                                       <div className="title">
                                       <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1.1em" width="1.1em" xmlns="http://www.w3.org/2000/svg"><path d="M448 96a64 64 0 10-96.31 55.21c-1.79 20.87-11.47 38.1-28.87 51.29C305.07 216 280.09 224 256 224s-49.07-8-66.82-21.5c-17.4-13.19-27.08-30.42-28.87-51.29a64 64 0 10-64.11.29c2.08 40.87 21.17 76.87 54.31 102C171.3 269.26 197 280.19 224 285.09v75.52a64 64 0 1064 0v-75.52c27-4.9 52.7-15.83 73.49-31.59 33.14-25.13 52.23-61.13 54.31-102A64 64 0 00448 96zM128 64a32 32 0 11-32 32 32 32 0 0132-32zm128 384a32 32 0 1132-32 32 32 0 01-32 32zm128-320a32 32 0 1132-32 32 32 0 01-32 32z"></path></svg>
                                        <p>Networks (9)</p>
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1.1em" width="1.1em" xmlns="http://www.w3.org/2000/svg"><path d="M128 192l128 128 128-128z"></path></svg>
                                        </div>
                                     </div>
                                </div>
                                <div className="box">
                                    <div className="icon">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1.2rem" width="1.2rem" xmlns="http://www.w3.org/2000/svg"><path d="M9 9H4v1h5V9z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M5 3l1-1h7l1 1v7l-1 1h-2v2l-1 1H3l-1-1V6l1-1h2V3zm1 2h4l1 1v4h2V3H6v2zm4 1H3v7h7V6z"></path></svg>
                                    </div>
                                </div>
                                </div>
                            </div>
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