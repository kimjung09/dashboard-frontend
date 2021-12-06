import React,{useState} from "react";
import {BrowserRouter as Router,Route,Routes,NavLink} from "react-router-dom";
import SideList from "../../item.json";
import "../Home.css"
import {AiOutlineHome, AiOutlineSearch, AiOutlineArrowLeft, AiOutlineArrowRight, AiFillCaretDown} from 'react-icons/ai'
import {FaExchangeAlt, FaTwitter} from 'react-icons/fa'
import {RiWaterFlashLine} from 'react-icons/ri'
import {BiBookHeart, BiMenu} from 'react-icons/bi'
import {FiMoreHorizontal, FiSettings} from 'react-icons/fi'
import Footer from "../Footer/Footer";
import SideBar from "../SideBar";
import Portfolio from "./portfolio";


const Profile = () => <div>dwldwlad</div>

const DashBoard = (match) => {
    const activeStyle = {
        color: 'green',
        fontSize: '2rem'
    }


    return (
        <>
            <div className="Home-container">
               <SideBar/>
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
                         <NavLink to="/" className="item">{item.Portfolio}</NavLink>
                         <NavLink to="/nft" className="item">{item.NFT}</NavLink>
                         <NavLink to="/Ges" className="item">{item.Geschiedenis}</NavLink>
                 </div>
                     </>
                 ))}
                 <div className="tabs">sds
                     <Routes>
                         <Route  component={Profile} />
                     </Routes>
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
                                            sdsdsds
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

export default DashBoard