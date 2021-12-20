
import React from "react";
import SideList from "../../item.json";

import "./Dash.css"


const DashBoard = (match) => {
    return (
        <>
            <div className="Dashboard">
                    <div className="account">
                        <div className="Title">
                            <div className="text">
                                {SideList.map((item) => (
                                    <>
                                        {item.DashBoard}
                                    </>
                                 ))}
                             </div>
                        </div>
                        <div className="Body">
                          <div className="top">
                            <div className="bundle">
                                <div className="item">
                                     <div className="pic"></div>
                                     <p>0xa33c...3c9d</p>
                                </div>
                                <div className="plus">
                                    <div className="item">
                                    </div>
                                      <div className="flex">
                                            <p>No Bundles</p>
                                            <button>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" color="inherit" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg> 
                                            </button>
                                        </div>
                                  
                                </div>
                            </div>
                          </div>
                          <div className="center">
                              <div className="title">
                                  Net Worth
                              </div>
                              <div className="pay">
                                  $0.00
                              </div>
                              <div className="edit">
                                  <div className="box"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1.2rem" width="1.2rem" xmlns="http://www.w3.org/2000/svg"><path d="M149.9 302.2c-39.1 0-70.7 31-70.7 69.3 0 30.3-27.3 46.2-47.2 46.2C53.7 446 90.7 464 126.3 464c52.1 0 94.3-41.4 94.3-92.4 0-38.4-31.6-69.4-70.7-69.4zM473.1 85.7l-31.6-31c-9.2-9-24-9-33.2 0L197 261.8l64.8 63.5 211.2-207c9.3-9 9.3-23.6.1-32.6z"></path></svg></div>
                                  <div className="box"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1.2rem" width="1.2rem" xmlns="http://www.w3.org/2000/svg"><path d="M256 388c-72.597 0-132-59.405-132-132 0-72.601 59.403-132 132-132 36.3 0 69.299 15.4 92.406 39.601L278 234h154V80l-51.698 51.702C348.406 99.798 304.406 80 256 80c-96.797 0-176 79.203-176 176s78.094 176 176 176c81.045 0 148.287-54.134 169.401-128H378.85c-18.745 49.561-67.138 84-122.85 84z"></path></svg></div>

                              </div>
                          </div>
                          <div className="tabs">
                              <button>portfolio</button>
                              <button>NFTs</button>
                              <button>History</button>

                          </div>
                        </div>
                        <div className="filter">
                            <div className="left">
                                <div className="menu">
                                    <div className="item"></div>
                                    <div className="item"></div>

                                </div>
                                <div className="drop">
                                    <span>$0.010</span>
                                </div>
                            </div>
                            <div className="right">
                                <div className="network">
                                   <h1>Networks (9)</h1>
                                   <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1.1em" width="1.1em" xmlns="http://www.w3.org/2000/svg"><path d="M128 192l128 128 128-128z"></path></svg>
                                </div>
                                <div className="bundle">
                                           1
                                </div>
                            </div>
                        </div>

                    </div>

            </div>

        </>
    )
}

export default DashBoard
