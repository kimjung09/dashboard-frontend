import React from "react";
import "../Home.css"
import { NavLink} from "react-router-dom";
import {AiOutlineHome,AiOutlineSearch,AiOutlineArrowLeft,AiOutlineArrowRight,AiFillCaretDown } from 'react-icons/ai'
import {FaExchangeAlt,FaSearch} from 'react-icons/fa'
import {BiBookHeart,BiMenu} from 'react-icons/bi'
import {RiWaterFlashLine} from 'react-icons/ri'
import {MdOutlineSwapHoriz} from 'react-icons/md'
import {FiMoreHorizontal,FiSettings} from 'react-icons/fi';
import {BsCoin} from 'react-icons/bs'
import SideList from "../../item.json";
import Footer from "../Footer/Footer";

const Pool = () => {
    const activeStyle = {
        color: 'green',
        fontSize: '2rem'
    }
    return (
        <div className="Home-container">
            {SideList.map((item) => (
                <div className="DashBoard">
                    <div className="Wrapper">
                        <div className="Body">
                            <div className="Border">
                                <div className="Container">
                                    <div className="title">
                                        <div className="grid">
                                            <div className="text">
                                                <>
                                                    <h1>
                                                        {item.Pool}
                                                    </h1>
                                                    <p>
                                                        {item.SubTitle}
                                                    </p>
                                                    <a href="">
                                                        {item.More}
                                                    </a>
                                                </>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="select">
                            <div className="Body">
                                <div className="tab">
                                    <div className="item">
                                        <img src="https://zapper.fi/images/networks/ethereum-icon.png"/>
                                        <div className="title">{item.Ethereum}</div>
                                    </div>
                                    <div className="item">
                                        <img src="https://zapper.fi/images/networks/avalanche-icon.png" />
                                        <div className="title">{item.Avalanche}</div>
                                    </div>
                                    <div className="item">
                                        <img src="https://zapper.fi/images/networks/binance-smart-chain-icon.png"/>
                                        <div className="title">{item.BSC}</div>
                                    </div>
                                    <div className="item">
                                        <img src="https://zapper.fi/images/networks/fantom-icon.png"/>
                                        <div className="title">{item.Fantom}</div>
                                    </div>
                                    <div className="item">
                                        <img src="https://zapper.fi/images/networks/polygon-icon.png"/>
                                        <div className="title">{item.Polygon}</div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        </div>
                    <div className="Explore">
                        <div className="Container">
                            <div className="full">
                                <div className="explore">
                                   <div className="header">
                                       <h4> Explore Opportunities</h4>
                                   </div>
                                </div>
                                <div className="table">
                                    <thead>
                                      <tr role="row">
                                          <th>#</th>
                                          <th colspan="1" className="no-flex">
                                              Available Pools
                                          </th>
                                          <th colSpan="1" >
                                              Available Pools
                                          </th>
                                          <th colSpan="1" >
                                              Available Pools
                                          </th>
                                          <th colSpan="1">
                                              Available Pools
                                          </th>
                                      </tr>
                                    </thead>

                                    <tbody role="rowgroup">
                                      <tr role="row">
                                          <td className="no-flex" width="50">21</td>
                                          {/*} <td className="box">
                                          {/*    <div className="flex">*/}
                                          {/*     <div className="logo">*/}
                                          {/*        <div className="group">*/}
                                          {/*            <img src="https://storage.googleapis.com/zapper-fi-assets/tokens/ethereum/0x0000000000000000000000000000000000000000.png"*/}

                                          {/*            />*/}
                                          {/*            <img src="https://storage.googleapis.com/zapper-fi-assets/tokens/ethereum/0x0000000000000000000000000000000000000000.png"/>*/}
                                          {/*        </div>*/}
                                          {/*     </div>*/}
                                          {/*    </div>*/}
                                          {/*</td>*/}
                                          <td className="cell" role="cell">
                                               <div>₩610,609,474,381</div>
                                          </td>
                                          <td className="cell" role="cell">
                                              <div className="cell_SecondaryText">0.05% (1w)</div>
                                              <div>% (1y)</div>
                                          </td>
                                      </tr>

                                    </tbody>
                                </div>
                            </div>

                        </div>
                    </div>
                    <Footer />

                </div>

            ))}
        </div>
    )
}

export default Pool;