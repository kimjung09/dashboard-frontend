import React, {useState} from "react";
import SideList from "../../item.json";
import { NavLink} from "react-router-dom";
import {BiBookHeart,BiMenu} from 'react-icons/bi';
import {FaExchangeAlt,FaSearch} from 'react-icons/fa';
import {AiOutlineHome,AiOutlineSearch,AiOutlineArrowLeft,AiOutlineArrowRight,AiFillCaretDown } from 'react-icons/ai'
import "../Home.css"
import Footer from "../Footer/Footer";


const DashBoard = (match) => {

    // 클릭시 active Style 적용
    const activeStyle = {
        color: '#fffff',
        fontSize: '2rem',
        fontWeight:"bold"
    }
    // More 버튼 상세메뉴 open
    const [openMenu, setOpenMenu] = useState(false);




    return (
        <>
            <div className="Dashboard">
                    <div className="account">
                        <div className="Title">
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
                        <div className="Body">
                            <div className="bundle">
                                <div className="top">
                                    <div className="bundle">
                                        <div className="left">
                                            <div className="icon">
                                              <div className="blockie">
                                                  <canvas></canvas>
                                              </div>
                                                <h1>dwdw</h1>
                                            </div>
                                        </div>
                                        <div className="right">
                                           <div className="bundle">
                                               <div className="group">
                                                   <h1>to</h1>
                                                   <button>
                                                       <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" color="inherit" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" ><path d="M5 12a1 1 0 102 0V6.414l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L5 6.414V12zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z"></path></svg>
                                                   </button>
                                               </div>
                                               <div className="title"></div>

                                           </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="center">
                                    <div className="title">
                                        Netto warred
                                        <div className="loading">

                                        </div>
                                    </div>
                                    <div className="edit">
                                      <div className="bot"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1.2rem" width="1.2rem" xmlns="http://www.w3.org/2000/svg"><path d="M149.9 302.2c-39.1 0-70.7 31-70.7 69.3 0 30.3-27.3 46.2-47.2 46.2C53.7 446 90.7 464 126.3 464c52.1 0 94.3-41.4 94.3-92.4 0-38.4-31.6-69.4-70.7-69.4zM473.1 85.7l-31.6-31c-9.2-9-24-9-33.2 0L197 261.8l64.8 63.5 211.2-207c9.3-9 9.3-23.6.1-32.6z"></path></svg></div>
                                        <div className="bot"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1.2rem" width="1.2rem" xmlns="http://www.w3.org/2000/svg"><path d="M256 388c-72.597 0-132-59.405-132-132 0-72.601 59.403-132 132-132 36.3 0 69.299 15.4 92.406 39.601L278 234h154V80l-51.698 51.702C348.406 99.798 304.406 80 256 80c-96.797 0-176 79.203-176 176s78.094 176 176 176c81.045 0 148.287-54.134 169.401-128H378.85c-18.745 49.561-67.138 84-122.85 84z"></path></svg></div>

                                    </div>

                                </div>
                                <div className="bottom">
                                    <button>Portfolio</button>
                                    <button>NFT's</button>
                                    <button>Geschiednis</button>
                                </div>
                            </div>

                        </div>
                        <div className="form">
                            <div className="body">
                               <div className="container">
                                   <div className="filter">
                                       <div className="menu">
                                           <div className="body">
                                               <div className="block">b</div>
                                               <div className="grid">f</div>
                                           </div>
                                       </div>
                                       <div className="pay">2</div>
                                   </div>
                                   <div className="network">
                                       me
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