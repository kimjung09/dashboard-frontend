import React from "react";
import "../Adress/Address.css"
import {FaSearch} from 'react-icons/fa'
import {BiBookHeart} from 'react-icons/bi'

import SideList from "../../item.json";
import Footer from "../Footer/Footer";

const Address = () => {

    return (
        <div className="Address">
            {SideList.map((item) => (
                <div className="Wrapper">
                    <div className="container">
                        <div className='grid'>
                            Address Book
                        </div>
                    </div>
                    <div className="bundle">
                        <div className="watchlist">
                            <p>My Bundles</p>
                            <div className="list">
                                <div className="add">
                                    <div className="bundle">+</div>
                                    <p>Create Bundle</p>
                                </div>
                            </div>
                            <p className="wallets">Connected Wallets</p>
                            <div className="wallets_list">
                                <a className="item">
                                    <div className="left">
                                        <div className="image">
                                            <canvas width="30" height="30" alt="ds"></canvas>
                                        </div>
                                        <div className="address">enter</div>

                                    </div>
                                </a>
                            </div>
                            <p className="wallets_title">
                                Watched Wallets
                            </p>
                            <form className='form'>
                                <div className="select">
                                    <FaSearch className="icon" />
                                    <div className="holder">
                                        Add ENS domain, valid ETH or BTC address
                                    </div>
                                </div>
                                <div className="button">
                                    <button>Add</button>
                                </div>
                            </form>
                            <div className="empty-state">
                                <div className="icon">
                                    <BiBookHeart size={56} />
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                         viewBox="0 0 512 512" className="close-icon" height="1em" width="1em"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path>
                                    </svg>
                                </div>
                                <div className="title">
                                    You don't watch any address yet.
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            ))}
        </div>
    )
}

export default Address;