import React from 'react';
import logo from './../../resources/images/logo.png'
import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="menu">
                <nav>
                    <ul>
                        <li><a className="active" href="/shop">Shop</a></li>
                        <li><a href="/order">Order Review</a></li>
                        <li><a href="/manage">Manage inventory here</a></li>
                    </ul>
                </nav>
            </div>
            <div className="search-item">
                <div className="search-box">
                    <input type="text" name="search" id="search" placeholder="Type here to search" />
                </div>
                <div className="top-cart">

                </div>
            </div>
        </div>
    );
};

export default Header;