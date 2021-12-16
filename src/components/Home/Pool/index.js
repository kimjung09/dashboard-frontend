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
        <div className="Pool">
            {SideList.map((item) => (
                <div className="Body">
                    <div className="Wrapper">
                            <div className="top">
                                 <div className="title">
                                     <div className="container">
                                     <div className="pool">
                                         <h1>Liquid</h1>
                                         <p>liquiditeit toevoegen om transactiekosten te verdienen, prikkels, stemrecht, enz. </p>
                                     </div>
                                     <div className="more">
                                         <a href="https://learn.zapper.fi/articles/what-is-a-liquidity-pool">
                                             Meer informatie
                                         </a>
                                     </div>
                                     </div>
                                 </div>
                            </div>
                        <div className="form">
                            <div className="container">
                                <div className="row">
                                    <h4>
                                        Explore Opportunities
                                    </h4>
                                    <div className="table">
                                        <div className="options">
                                             <div className="filter">
                                                 <div className="box">
                                                         <div className="flex">
                                                         <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="icon " height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M337.509 305.372h-17.501l-6.571-5.486c20.791-25.232 33.922-57.054 33.922-93.257C347.358 127.632 283.896 64 205.135 64 127.452 64 64 127.632 64 206.629s63.452 142.628 142.225 142.628c35.011 0 67.831-13.167 92.991-34.008l6.561 5.487v17.551L415.18 448 448 415.086 337.509 305.372zm-131.284 0c-54.702 0-98.463-43.887-98.463-98.743 0-54.858 43.761-98.742 98.463-98.742 54.7 0 98.462 43.884 98.462 98.742 0 54.856-43.762 98.743-98.462 98.743z"></path></svg>
                                                         <div className="right">
                                                           <h1>Filter by Token protocol</h1>    
                                                        </div>
                                                     </div>
                                                 </div>
                                             </div>
                                            <div className="right">
                                                <div className="page">
                                                    <div className="skeleton">
                                                        1
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <table role="table" cellSpacing="0">
                                            <thead>
                                               <tr role="row">
                                                   <th className="no-flex">#</th>
                                                   <th colspan="1" role="columnheader" title="Toggle SortBy">
                                                       <div className="false">
                                                           Beschikbare Pools
                                                       </div>
                                                   </th>
                                                   <th colSpan="1" role="columnheader" title="Toggle SortBy">
                                                       <div className="false">
                                                           Beschikbare Pools
                                                       </div>
                                                   </th>
                                                   <th colSpan="1" role="columnheader" title="Toggle SortBy">
                                                       <div className="false">
                                                           Beschikbare Pools
                                                       </div>
                                                   </th>

                                               </tr>
                                            </thead>
                                            <tbody role="rowgroup">
                                               <tr row="row">
                                                   <td className="no-flex" width="50">1</td>
                                               </tr>
                                            </tbody>
                                        </table>
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

export default Pool;