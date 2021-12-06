import React from "react";
import SideList from "../../item.json";
import "../Home.css"
import {AiOutlineHome,AiOutlineSearch,AiOutlineArrowLeft,AiOutlineArrowRight,AiFillCaretDown } from 'react-icons/ai'

import {FiMoreHorizontal,FiSettings} from 'react-icons/fi';

const Widgets = () => {
    return (
        <div className="Widgets">
            {SideList.map((item) => (
                <div className="Container">
                    <div className="Body">
                        <div className="Bottom">
                            <div className="Box">
                                <div className="Search">
                                    <AiOutlineSearch className="icon" size={20}/>
                                    <input type="search" placeholder="search" />
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
                                                    <h4>{item.Token}</h4>
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
                                        <div className="title">
                                            <h4>Network Fee &nbsp;</h4>
                                        </div>
                                      <div className="fee">
                                        <div className="container">
                                             <div className="flex">
                                               <span className="title">Standard</span>
                                                 <span className="min">~3min</span>
                                             </div>
                                            <div className="end">
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
                                              <div className="end">
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
                            <div className="Learn">
                                <div className="container">
                                  <div className="row">
                                     <h4>Zapper Learn - Recent articles</h4>
                                  </div>
                                    <div className="site">
                                      <div className="form">
                                          <a href="https://learn.zapper.fi/articles/a-primer-on-daos" target="_blank">
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
                                            <a href="https://learn.zapper.fi/articles/a-primer-on-daos" target="_blank">
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
                                            <a href="https://learn.zapper.fi/articles/a-primer-on-daos" target="_blank">
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
                                </div>
                            </div>
                            <div className="Trend">
                                 <div className="form">
                                     <div className="pagenation">
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
            ))}

        </div>
    )
}

export default Widgets;