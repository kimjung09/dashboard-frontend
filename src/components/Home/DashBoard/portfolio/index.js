import React from "react";
import SideList from "../../../item.json";
import {NavLink} from "react-router-dom";
import Footer from "../../Footer/Footer";
import {AiOutlineHome, AiOutlineSearch, AiOutlineArrowLeft, AiOutlineArrowRight, AiFillCaretDown} from 'react-icons/ai'
import {FaExchangeAlt, FaTwitter} from 'react-icons/fa'
import {RiWaterFlashLine} from 'react-icons/ri'
import {BiBookHeart, BiMenu} from 'react-icons/bi'
import {FiMoreHorizontal, FiSettings} from 'react-icons/fi'

const Portfolio = () => {
    return (
        <>

            {SideList.map((item) => (
                <>
                    <div className="filter">
                        <div className="container">
                            <div className="box">
                                <div className="left">
                                    <div className="control">
                                        <div className="item">
                                            <BiMenu size={20}/>
                                        </div>
                                        <div className="item">
                                            <BiMenu size={20}/>
                                        </div>

                                    </div>
                                    <div className="settings">
                                        <div className="item">
                                            <div className="flex">
                                                <BiMenu size={20}/>
                                                <span>{item.Doller}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="network">
                                    <div className="box">
                                        <FaExchangeAlt/>
                                        <div className="title">
                                            {item.Network}
                                        </div>
                                        <AiFillCaretDown/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </>
            ))}
        </>
    )
}

export default Portfolio;