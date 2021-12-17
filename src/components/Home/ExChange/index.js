import React from "react";
import {NavLink} from "react-router-dom";
import SideList from "../../item.json";
import "../Home.css"
import "../../../App.css"
import {AiOutlineHome, AiOutlineSearch, AiOutlineArrowLeft, AiOutlineArrowRight, AiFillCaretDown} from 'react-icons/ai'
import {FaExchangeAlt, FaTwitter} from 'react-icons/fa'
import "../../../App.css"
import {BiBookHeart, BiMenu} from 'react-icons/bi'
import Footer from "../Footer/Footer";

const ExChange = () => {
    return (
        <>
            <div className="ExChange">
                    <div className="Body">
                        <div className="Border">
                            <div className="Container">
                                <div className="title">
                                    <div className="grid">
                                        <div className="text">
                                           <span>ExChange</span>
                                            <p className="top">
                                                Verwissel in meer dan 2000 tokens met de beste aanhalingstekens uit meer dan 20 bronnen.
                                            </p>
                                            <a href="https://learn.zapper.fi/articles/what-is-a-decentralized-exchange">
                                                Meer informatie
                                            </a>
                                        </div>
                                    </div>
                                   
                                </div>
                                <div className="Ether">
                                   <div className="form">
                                        <div className="item">
                                            <img src="https://zapper.fi/images/networks/ethereum-icon.png"/>
                                            <h1>Ethereum</h1>
                                        </div>
                                        <div className="item">
                                            <img src="https://zapper.fi/images/networks/avalanche-icon.png" />
                                            <h1>Avalanche</h1>
                                        </div>
                                        <div className="item">
                                            <img src="https://zapper.fi/images/networks/binance-smart-chain-icon.png" />
                                            <h1>BSC</h1>
                                        </div>
                                        <div className="item">
                                            <img src="https://zapper.fi/images/networks/fantom-icon.png" />
                                            <h1>Fantom</h1>
                                        </div>
                                        <div className="item">
                                            <img src="https://zapper.fi/images/networks/polygon-icon.png" />
                                            <h1>Polygon</h1>
                                        </div>
                                        
                                    </div>    
                                </div>
                                <div className="exchange">
                                   <div className="center">
                                       <div className="box">
                                           <div className="form">
                                                <div className="section">
                                                    <div className="change">
                                                        <div className="van">
                                                            <div className="title">
                                                                <h1>Van</h1>
                                                                <p>Saldo : 0</p>
                                                            </div>
                                                            <div className="buy">
                                                                <div className="token">
                                                                    <img src="https://zapper.fi/images/other/default-icon.png"/>
                                                                    <div className="form">
                                                                        <h1>ETH</h1>
                                                                        <div className="flex">
                                                                            <svg stroke="currentColor"
                                                                                 fill="currentColor" stroke-width="0"
                                                                                 viewBox="0 0 512 512" className="icon "
                                                                                 height="1.1em" width="1.1em"
                                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                                <path
                                                                                    d="M128 192l128 128 128-128z"></path>
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="input">
                                                                    <input step="any" className="input" placeholder="0" value="0"/>
                                                                    <div className="support">
                                                                        ≈ $0.00
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="middle">
                                                            <div className='row'>
                                                                <div className="center">
                                                                <button>
                                                                    <svg stroke="currentColor" fill="currentColor"
                                                                         stroke-width="0" viewBox="0 0 24 24"
                                                                         className="icon " height="1.5em" width="1.5em"
                                                                         xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            d="M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z"></path>
                                                                    </svg>
                                                                </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="tot">
                                                            <div className="row">
                                                                <span>tot</span>
                                                            </div>
                                                            <div className="select">
                                                                <div className="container">
                                                                   <div className="form">
                                                                       <div className="title">
                                                                           Select Token
                                                                       </div>
                                                                       <div className="flex">
                                                                           <svg stroke="currentColor"
                                                                                fill="currentColor" stroke-width="0"
                                                                                viewBox="0 0 512 512" className="icon "
                                                                                height="1.1em" width="1.1em"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                               <path
                                                                                   d="M128 192l128 128 128-128z"></path>
                                                                           </svg>
                                                                       </div>
                                                                   </div>
                                                                </div>
                                                                <div className="right"></div>
                                                            </div>

                                                        </div>

                                                    </div>
                                                    <div className="transaction">
                                                        <div className="content">
                                                            <h1>Transactie installigen</h1>
                                                        </div>
                                                        <div className="settings">
                                                            <div className="slipage">
                                                             <a href="https://learn.zapper.fi/articles/what-is-slippage">
                                                                 Slippage Tolerantie
                                                             </a>
                                                            </div>
                                                            <div className="percent">
                                                                3.00%
                                                            </div>
                                                            <div className="slipage">
                                                                <a href="https://learn.zapper.fi/articles/how-to-revoke-token-allowances">
                                                                    Toestemming
                                                                </a>
                                                            </div>
                                                            <div className="percent">
                                                                Exacte bedrag
                                                            </div>
                                                            <div className="slipage"></div>
                                                            <div className="hr"></div>
                                                            <h1>Geschatte Poortprijs</h1>
                                                            <p>-</p>
                                                        </div>
                                                    </div>

                                                </div>
                                               <div className="footer">
                                                   <button>
                                                      <span>Submit</span>
                                                   </button>
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
};

export default ExChange