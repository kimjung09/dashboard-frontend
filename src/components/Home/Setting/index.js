import React from 'react'
import {AiOutlineHome,AiOutlineSearch,AiOutlineArrowLeft,AiOutlineArrowRight,AiFillCaretDown } from 'react-icons/ai'
import {FaExchangeAlt,FaTwitter} from 'react-icons/fa'
import {MdOutlineSwapHoriz} from 'react-icons/md'
import {FiMoreHorizontal,FiSettings} from 'react-icons/fi';
import SideList from "../../item.json";
import Footer from "../Footer/Footer";
import SideBar from "../SideBar";


const Setting = ({match}) => {
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
                                      <img src="https://zapper.fi/images/networks/avalanche-icon.png"/>
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
                                                          <img
                                                              src="https://storage.googleapis.com/zapper-fi-assets/tokens/ethereum/0x0000000000000000000000000000000000000000.png"/>
                                                          <div className="token">
                                                              <div className="title">ETH</div>
                                                          </div>
                                                      </div>
                                                      <div className="form">
                                                          <input step="any" className="input" placeholder="0"
                                                                 value="0"/>
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
                                                                  <MdOutlineSwapHoriz/>
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
                                                              <FaExchangeAlt/>
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
                                                          <FaExchangeAlt/>
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
                  <Footer/>

              </div>
          ))}

      </div>
  )
}

export default Setting