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
                                        Verken kensen
                                    </h4>
                                    <div className="table">
                                        <div className="options">
                                             <div className="left">
                                                 <div className="box">
                                                     <div className="skeleton">

                                                     </div>
                                                 </div>
                                             </div>
                                            <div className="right">
                                                <div className="page">
                                                    <div className="skeleton">
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

                        <Footer/>
                       </div>
                </div>
                ))}

        </div>
    )
}

export default Pool;