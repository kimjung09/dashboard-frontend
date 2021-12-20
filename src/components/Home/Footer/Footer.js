// eslint-disable-next-line
import React from "react";
import {FaTwitter,FaDisCord, FaWeChat} from 'react-icons/fa'
import SideList from "../../item.json";
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer">
            {SideList.map((item) => (
            <footer className="container">
                    <a href="https://zapper.canny.io/" className="link mr-5">Functieverzoek</a>
                    <a href="https://zapper.canny.io/" className="link mr-5">{item.Bug}</a>
                    <a href="https://zapper.canny.io/" className="link mr-5">{item.Onder}</a>
                    <div className="flex">
                        <a><FaTwitter/>
                            {item.Twitter}
                        </a>
                        <a>
                            <FaTwitter/>
                            {item.Discord}</a>
                        <a>
                            <FaTwitter/>
                            {item.WeChat}
                        </a>
                </div>
            </footer>
            ))}
        </div>
    )
}

export default Footer;