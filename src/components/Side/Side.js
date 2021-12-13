import React from "react";
import "../Home/Home.css"
import { NavLink} from "react-router-dom";
import {AiOutlineHome,AiOutlineSearch,AiOutlineArrowLeft,AiOutlineArrowRight,AiFillCaretDown } from 'react-icons/ai'
import {FaExchangeAlt,FaTwitter} from 'react-icons/fa'
import {BiBookHeart,BiMenu} from 'react-icons/bi'
import {RiWaterFlashLine} from 'react-icons/ri'
import {MdOutlineSwapHoriz} from 'react-icons/md'
import {FiMoreHorizontal,FiSettings} from 'react-icons/fi';
import {BsCoin} from 'react-icons/bs'
import SideList from "../item.json";
import Footer from "../Home/Footer/Footer";
import SideBar from "../Home/SideBar";

const ExChange = ({match}) => {
    const activeStyle = {
        color: 'green',
        fontSize: '2rem'
    }


    return (
        <div className="DashBoard">
            <div className="Container">
                <div className="header">
                    <div className="title">
                   dsd
                    </div>
                </div>
                <div className="bottom"></div>
            </div>
        </div>
    )
}

export default ExChange;