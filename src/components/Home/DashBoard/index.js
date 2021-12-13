import React,{useState} from "react";
import SideList from "../../item.json";
import {Routes, Route} from "react-router-dom";

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
            <div className="Home-container">
                {SideList.map((item) => (
                    <div className="portfolio">
                        <div className="container">
                        <div className="body">
                            <div className="Dashboard">
                               Dashboard
                            </div>
                            
                        </div>
                        <div className="account">
                          <div className="top">
                              <div className="bundle">
                                  <div className="item">
                                      <div className="icon">
                                           <div className="blockie">
                                               <canvas></canvas>
                                           </div>
                                      </div>
                                      <h1>0xa33c...3c9d</h1>
                                  </div>
                                  <div className="icon">
                                     <div clasName="item">
                                         <div className='icon'>
                                         <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" color="inherit" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 256c-13.47 0-26.94-2.39-37.44-7.17l-148-67.49C63.79 178.26 48 169.25 48 152.24s15.79-26 22.58-29.12l149.28-68.07c20.57-9.4 51.61-9.4 72.19 0l149.37 68.07c6.79 3.09 22.58 12.1 22.58 29.12s-15.79 26-22.58 29.11l-148 67.48C282.94 253.61 269.47 256 256 256zm176.76-100.86z"></path><path d="M441.36 226.81L426.27 220l-38.77 17.74-94 43c-10.5 4.8-24 7.19-37.44 7.19s-26.93-2.39-37.42-7.19l-94.07-43L85.79 220l-15.22 6.84C63.79 229.93 48 239 48 256s15.79 26.08 22.56 29.17l148 67.63C229 357.6 242.49 360 256 360s26.94-2.4 37.44-7.19l147.87-67.61c6.81-3.09 22.69-12.11 22.69-29.2s-15.77-26.07-22.64-29.19z"></path><path d="M441.36 330.8l-15.09-6.8-38.77 17.73-94 42.95c-10.5 4.78-24 7.18-37.44 7.18s-26.93-2.39-37.42-7.18l-94.07-43L85.79 324l-15.22 6.84C63.79 333.93 48 343 48 360s15.79 26.07 22.56 29.15l148 67.59C229 461.52 242.54 464 256 464s26.88-2.48 37.38-7.27l147.92-67.57c6.82-3.08 22.7-12.1 22.7-29.16s-15.77-26.07-22.64-29.2z"></path></svg>
                                         </div>
                                     </div>
                                   </div>
                              </div>
                          </div>
                        </div>
                        <Footer />
                        </div>
                    
                    </div>

                ))}
            </div>
        </>
    )
}

export default DashBoard