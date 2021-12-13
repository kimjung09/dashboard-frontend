import React from "react";
import "../Home.css"
import { NavLink} from "react-router-dom";
import {AiOutlineHome,AiOutlineSearch,AiOutlineArrowLeft,AiOutlineArrowRight,AiFillCaretDown } from 'react-icons/ai'
import {FaExchangeAlt,FaTwitter} from 'react-icons/fa'
import {BiBookHeart,BiMenu} from 'react-icons/bi'
import {RiWaterFlashLine} from 'react-icons/ri'
import {MdOutlineSwapHoriz} from 'react-icons/md'
import {FiMoreHorizontal,FiSettings} from 'react-icons/fi';
import {BsCoin} from 'react-icons/bs'
import SideList from "../../item.json";
import Footer from "../Footer/Footer";
import SideBar from "../SideBar/index";

const Quests = ({match}) => {
    const activeStyle = {
        color: 'green',
        fontSize: '2rem'
    }


    return (
        <div className="Home-container">
            <SideBar/>
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
                                                        {item.ExChange}
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
                        <div className="Board">
                            <div className="Container">
                                <div className="Card">
                                    <div className="Form">
                                        <div className="Section">
                                            <div className="mb-6">
                                                <div className="invest">
                                                    <div className="row">
                                                        <div className="flex-1">
                                                            From
                                                        </div>
                                                        <div className="subtitle">
                                                            Balance: 0
                                                        </div>
                                                    </div>
                                                    <div className="card">
                                                        <div className="container">
                                                            <img src="https://storage.googleapis.com/zapper-fi-assets/tokens/ethereum/0x0000000000000000000000000000000000000000.png"/>
                                                            <div className="token">
                                                                <div className="title">ETH</div>
                                                            </div>
                                                        </div>
                                                        <div className="form">
                                                            <input step="any" class="input" placeholder="0" value="0"/>
                                                            <div className="support">
                                                                ~ \ 0.00
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="change">
                                                    <div className="row">
                                                        <div className="center">
                                                            <button className="swap" disabled>
                                                                <div className="flex">
                                                                    <MdOutlineSwapHoriz />
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="row">
                                                        <div className="text">
                                                            To
                                                        </div>

                                                    </div>
                                                    <div className="select">
                                                        <div className="container">
                                                            <div className="title">
                                                                Select Token
                                                            </div>
                                                            <div className="flex">
                                                                <FaExchangeAlt />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="transaction">
                                                <div className="settings">
                                                    Transaction Settings
                                                </div>
                                                <div className="form">
                                                    <a href="https://learn.zapper.fi/articles/what-is-slippage">
                                                        Slippage Tolerance &nbsp;
                                                    </a>
                                                    <div className="percent">
                                                        2.00%
                                                        <div className="button">
                                                            <FaExchangeAlt />
                                                        </div>
                                                    </div>

                                                    <div className="allow">
                                                        <a href="https://learn.zapper.fi/articles/how-to-revoke-token-allowances">
                                                            Allowance
                                                        </a>
                                                        <div className="exact">
                                                            Exact Amount
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="gas">
                                                    Estimated Gas Free
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="footers">
                                        <button>
                                            <span>Exchange</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />

                </div>
            ))}
            <div className="Widgets">
                {SideList.map((item) => (
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
                                            sdsdsds
                                        </div>
                                    </div>
                                </div>
                                <div className="Box"></div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>

        </div>
    )
}

export default Quests;