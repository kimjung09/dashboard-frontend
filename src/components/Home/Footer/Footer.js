import React from "react";
import {FaExchangeAlt, FaTwitter} from 'react-icons/fa'
import "../Home.css"
import SideList from "../../item.json";

const Footer = () => {
    return (
        <div className="footer">
            {SideList.map((item) => (
            <footer className="container">
                <div className="body">
                    <a href="https://zapper.canny.io/" className="link mr-5">Functieverzoek</a>
                    <a href="https://zapper.canny.io/" className="link mr-5">{item.Bug}</a>
                    <a href="https://zapper.canny.io/" className="link mr-5">{item.Onder}</a>

                    <div className="flex">
                        <a><FaTwitter/>{item.Twitter}</a>
                        <a><FaTwitter/>{item.Discord}</a>
                        <a><FaTwitter/>{item.WeChat}</a>
                    </div>
                </div>
            </footer>
            ))}
        </div>
    )
}

export default Footer;