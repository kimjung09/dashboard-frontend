
import React, {useState} from "react";
import SideList from "../../item.json";
import { NavLink} from "react-router-dom";

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
                                <div className="top">
                                    <div className="title">
                                        <div className="grid">
                                            <div className="text">
                                                {SideList.map((item) => (
                                                    <>
                                                        {item.DashBoard}
                                                    </>
                                                ))}
                                            </div>
                                            <div className="margin"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Body">
                            <div className="header">
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
                                                   <div claaName="icon">
                                                   <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" color="inherit" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 256c-13.47 0-26.94-2.39-37.44-7.17l-148-67.49C63.79 178.26 48 169.25 48 152.24s15.79-26 22.58-29.12l149.28-68.07c20.57-9.4 51.61-9.4 72.19 0l149.37 68.07c6.79 3.09 22.58 12.1 22.58 29.12s-15.79 26-22.58 29.11l-148 67.48C282.94 253.61 269.47 256 256 256zm176.76-100.86z"></path><path d="M441.36 226.81L426.27 220l-38.77 17.74-94 43c-10.5 4.8-24 7.19-37.44 7.19s-26.93-2.39-37.42-7.19l-94.07-43L85.79 220l-15.22 6.84C63.79 229.93 48 239 48 256s15.79 26.08 22.56 29.17l148 67.63C229 357.6 242.49 360 256 360s26.94-2.4 37.44-7.19l147.87-67.61c6.81-3.09 22.69-12.11 22.69-29.2s-15.77-26.07-22.64-29.19z"></path><path d="M441.36 330.8l-15.09-6.8-38.77 17.73-94 42.95c-10.5 4.78-24 7.18-37.44 7.18s-26.93-2.39-37.42-7.18l-94.07-43L85.79 324l-15.22 6.84C63.79 333.93 48 343 48 360s15.79 26.07 22.56 29.15l148 67.59C229 461.52 242.54 464 256 464s26.88-2.48 37.38-7.27l147.92-67.57c6.82-3.08 22.7-12.1 22.7-29.16s-15.77-26.07-22.64-29.2z"></path></svg>
                                                   </div>
                                                   <h1>No bundles</h1>
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
                                    <div className="doller">$0.00</div>
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
                                               <div className="background">
                                                   <div className="active">
                                                   <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="icon " height="1.3em" width="1.3em" xmlns="http://www.w3.org/2000/svg"><path d="M20 13H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zm0-10H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z"></path></svg>
                                                   </div>
                                                   <div className="item">
                                                   <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="icon " height="1.3em" width="1.3em" xmlns="http://www.w3.org/2000/svg"><path d="M204 240H68a36 36 0 01-36-36V68a36 36 0 0136-36h136a36 36 0 0136 36v136a36 36 0 01-36 36zm240 0H308a36 36 0 01-36-36V68a36 36 0 0136-36h136a36 36 0 0136 36v136a36 36 0 01-36 36zM204 480H68a36 36 0 01-36-36V308a36 36 0 0136-36h136a36 36 0 0136 36v136a36 36 0 01-36 36zm240 0H308a36 36 0 01-36-36V308a36 36 0 0136-36h136a36 36 0 0136 36v136a36 36 0 01-36 36z"></path></svg>
                                                   </div>
                                               </div>
                                           </div>
                                           <div className="dropdown">
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
                                           <div className="toggle">
                                           <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1.1em" width="1.1em" xmlns="http://www.w3.org/2000/svg"><path d="M448 96a64 64 0 10-96.31 55.21c-1.79 20.87-11.47 38.1-28.87 51.29C305.07 216 280.09 224 256 224s-49.07-8-66.82-21.5c-17.4-13.19-27.08-30.42-28.87-51.29a64 64 0 10-64.11.29c2.08 40.87 21.17 76.87 54.31 102C171.3 269.26 197 280.19 224 285.09v75.52a64 64 0 1064 0v-75.52c27-4.9 52.7-15.83 73.49-31.59 33.14-25.13 52.23-61.13 54.31-102A64 64 0 00448 96zM128 64a32 32 0 11-32 32 32 32 0 0132-32zm128 384a32 32 0 1132-32 32 32 0 01-32 32zm128-320a32 32 0 1132-32 32 32 0 01-32 32z"></path></svg>
                                            <h1>Networks(9)</h1>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1.1em" width="1.1em" xmlns="http://www.w3.org/2000/svg"><path d="M128 192l128 128 128-128z"></path></svg>
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
