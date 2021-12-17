import React from "react";
import "./widget.css"
import {AiOutlineArrowLeft,AiOutlineArrowRight } from 'react-icons/ai'

import {FiSettings} from 'react-icons/fi';


const Widgets = () => {

    // token 검색
    return (
        <div className="Widgets">
                <div className="Container">
                        <div className="Body">
                            <div className="Box">
                                {/* 검색 적용 */}
                                <div className="Search">
                                    <svg className="icon" stroke="currentColor" fill="currentColor" stroke-width="0"
                                         viewBox="0 0 512 512" className="icon" height="1.5em" width="1.5em"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M337.509 305.372h-17.501l-6.571-5.486c20.791-25.232 33.922-57.054 33.922-93.257C347.358 127.632 283.896 64 205.135 64 127.452 64 64 127.632 64 206.629s63.452 142.628 142.225 142.628c35.011 0 67.831-13.167 92.991-34.008l6.561 5.487v17.551L415.18 448 448 415.086 337.509 305.372zm-131.284 0c-54.702 0-98.463-43.887-98.463-98.743 0-54.858 43.761-98.742 98.463-98.742 54.7 0 98.462 43.884 98.462 98.742 0 54.856-43.762 98.743-98.462 98.743z"></path>
                                    </svg>
                                    <div className="form">
                                            <h1>Search by account, token, ENS...</h1>
                                        <div className="indicators"></div>
                                    </div>
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
                                        <div className="Title">
                                           <h4>Token Watchlist</h4>

                                            <div className="page">
                                                <button>
                                                    1
                                                </button>
                                            <span>1/1</span>
                                            <button>2</button>
                                            </div>
                                        </div>
                                        <div className="whiteList">
                                           <a href="">
                                               <div className="item">
                                                   <img />
                                                   <div className="title">
                                                       <span className="top">ROBO</span>
                                                       <span className="bottom">Ethereum</span>
                                                   </div>
                                               </div>
                                               <div className="pay">
                                                   1
                                               </div>
                                           </a>
                                            <a href="">

                                            </a>
                                        </div>
                                </div>
                            </div>
                            <div className="Box">
                               <div className="Network">
                                   <div className="form">
                                      <div className="title">
                                          <h4>Network Fee</h4>
                                      </div>
                                       <div className="box">
                                           1
                                       </div>
                                   </div>
                                   <div className="graph">
                                   </div>
                               </div>
                            </div>
                            <div className="Box">
                                <div className="container">
                                    <div className="row">
                                        <h4>Zapper Learn - Recent articles</h4>
                                    </div>
                                    <div className="site">
                                        <div className="form">
                                            <a href="https://learn.zapper.fi/articles/a-primer-on-daos" target="_blank" rel="noreferrer">
                                                <div className="box">
                                                    <div className="icon">
                                                        🤝
                                                    </div>
                                                    <div className="sub">
                                                        A Primer on DAOs
                                                    </div>
                                                    <div className="read">5 min. read</div>
                                                    <div className="form">
                                                        <a href="https://learn.zapper.fi/articles/a-primer-on-daos" target="_blank" rel="noreferrer">
                                                            <div className="box">
                                                                <div className="icon">
                                                                    🤝
                                                                </div>
                                                                <div className="sub">
                                                                    A Primer on DAOs
                                                                </div>
                                                                <div className="read">5 min. read</div>

                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="form">
                                                        <a href="https://learn.zapper.fi/articles/a-primer-on-daos" target="_blank" rel="noreferrer">
                                                            <div className="box">
                                                                <div className="icon">
                                                                    🪙
                                                                </div>
                                                                <div className="sub">
                                                                    Breaking Down the Steps of Token Approval
                                                                </div>
                                                                <div className="read">5 min. read</div>

                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className="form">
                                                        <a href="https://learn.zapper.fi/articles/a-primer-on-daos" target="_blank" rel="noreferrer">
                                                            <div className="box">
                                                                <div className="icon">
                                                                    🏦
                                                                </div>
                                                                <div className="sub">
                                                                    What is a Vault?
                                                                </div>
                                                                <div className="read">5 min. read</div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="Trend">
                                        <div className="form">
                                            <div className="nation">
                                                <h4>
                                                    🔥 Pool trend by volume (24h)
                                                </h4>
                                                <div className="page">
                                                    <button>
                                                        <AiOutlineArrowLeft />
                                                    </button>
                                                    <div className="number">
                                                        <span>1/156</span>
                                                    </div>
                                                    <button>
                                                        <AiOutlineArrowRight/>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="border">
                                                        <div className="item">
                                                            <div className="left">
                                                                <img
                                                                    src="https://storage.googleapis.com/zapper-fi-assets/apps/sushiswap.png"
                                                                    className="mr-3">
                                                                </img>
                                                                <div className="right">
                                                         <span className="title">
                                                         UNI-V2 PYR / ETH
                                                         </span>
                                                                    <span>
                                                               Uniswap
                                                           </span>
                                                                </div>
                                                            </div>
                                                            <div className="percent">
                                                         <span>
                                                             +2.2%
                                                         </span>
                                                                <div className="won">
                                                                    +
                                                                    ₩211,401,716.14
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="border">
                                                        <div className="item">
                                                            <div className="left">
                                                                <img
                                                                    src="https://storage.googleapis.com/zapper-fi-assets/apps/sushiswap.png"
                                                                    className="mr-3">
                                                                </img>
                                                                <div className="right">
                                                                    <div className="won">
                                                                        +
                                                                        ₩211,401,716.14
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="border">
                                                            <div className="item">
                                                                <div className="left">
                                                                    <img
                                                                        src="https://storage.googleapis.com/zapper-fi-assets/apps/sushiswap.png"
                                                                        className="mr-3">
                                                                    </img>
                                                                    <div className="right">
                                                         <span className="title">
                                                         UNI-V2 PYR / ETH
                                                         </span>
                                                                        <span>
                                                               Uniswap
                                                           </span>
                                                                    </div>
                                                                </div>
                                                                <div className="percent">
                                                         <span>
                                                             +2.2%
                                                         </span>
                                                                    <div className="won">
                                                                        +
                                                                        ₩211,401,716.14
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="border">
                                                            <div className="item">
                                                                <div className="left">
                                                                    <img
                                                                        src="https://storage.googleapis.com/zapper-fi-assets/apps/sushiswap.png"
                                                                        className="mr-3">
                                                                    </img>
                                                                    <div className="right">
                                                         <span className="title">
                                                         UNI-V2 PYR / ETH
                                                         </span>
                                                                        <span>
                                                               Uniswap
                                                           </span>
                                                                    </div>
                                                                </div>
                                                                <div className="percent">
                                                         <span>
                                                             +2.2%
                                                         </span>
                                                                    <div className="won">
                                                                        +
                                                                        ₩211,401,716.14
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="border">
                                                            <div className="item">
                                                                <div className="left">
                                                                    <img
                                                                        src="https://storage.googleapis.com/zapper-fi-assets/apps/sushiswap.png"
                                                                        className="mr-3">
                                                                    </img>
                                                                    <div className="right">
                                                         <span className="title">
                                                         UNI-V2 PYR / ETH
                                                         </span>
                                                                        <span>
                                                               Uniswap
                                                           </span>
                                                                    </div>
                                                                </div>
                                                                <div className="percent">
                                                         <span>
                                                             +2.2%
                                                         </span>
                                                                    <div className="won">
                                                                        +
                                                                        ₩211,401,716.14
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="border">
                                                            <div className="item">
                                                                <div className="left">
                                                                    <img
                                                                        src="https://storage.googleapis.com/zapper-fi-assets/apps/sushiswap.png"
                                                                        className="mr-3">
                                                                    </img>
                                                                    <div className="right">
                                                         <span className="title">
                                                         UNI-V2 PYR / ETH
                                                         </span>
                                                                        <span>
                                                               Uniswap
                                                           </span>
                                                                    </div>
                                                                </div>
                                                                <div className="percent">
                                                         <span>
                                                             +2.2%
                                                         </span>
                                                                    <div className="won">
                                                                        +
                                                                        ₩211,401,716.14
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                <div className="Box">
                                    <div className="form">
                                    <div className="group">
                                        <div className="title">
                                            <h4>Network Fee &nbsp;</h4>
                                        </div>
                                        <div className="fee">
                                            <div className="container">
                                                <div className="flex">
                                                    <span className="title">Standard</span>
                                                    <span className="min">~3min</span>
                                                </div>
                                                <div className="flex">
                                                    <span className="title">112</span>
                                                    <div className="description">
                                                        ₩32,545.14
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="container">
                                                <div className="flex">
                                                    <span className="title">Standard</span>
                                                    <span className="min">~3min</span>
                                                </div>
                                                <div className="flex">
                                                    <span className="title">112</span>
                                                    <div className="description">
                                                        ₩32,545.14
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="trend">
                                        <h4>Gas Trend (1w)</h4>
                                    </div>

                                </div>
                                </div>
                        </div>
                  </div>
        </div>

    )
}


export default Widgets;