import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/icons/logo.svg';
import heartLogo from '../images/icons/heart.svg';
import userLogo from '../images/icons/user.svg';
import searchLogo from '../images/icons/search.svg';
import shoppingBagLogo from '../images/icons/shopping-bag.svg';

function Header() {
  return (
    <>
      <hr className="header-hr" />
      <header className="page-header">
        <div className="header-content">
          <div className="col-12 col-md-12 col-lg-12">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-5">
                <div className="logo">
                  <a href="/">
                    <img src={logo} alt="Logo" className="image" />
                  </a>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-7 p-0">
                <div className="quick-links-wrapper">
                  <ul className="w-100">
                    <div className="quick-link-items">
                      <li>
                        <text>GOLD - ₹5,767</text>
                      </li>
                      <li>
                        <text>SILVER - ₹5,767</text>
                      </li>
                      <li>
                        <a href="#">FIND A STORE</a>
                      </li>
                      <li>
                        <a href="#">SUPPORT</a>
                      </li>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-12">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-7">
                <nav className="navbar">
                  <ul className="w-100">
                    <div className="menu-link-items">
                      <li>
                        <Link to="jwellery">Jwellery</Link>
                      </li>
                      <li>
                        <Link to="about-us">About us</Link>
                      </li>
                      <li>
                        <Link to="bullion">Bullion</Link>
                      </li>
                      <li>
                        <Link to="e-gold">E-gold</Link>
                      </li>
                      <li>
                        <Link to="gifting">Gifting</Link>
                      </li>
                    </div>
                  </ul>
                </nav>
              </div>
              <div className="col-12 col-md-6 col-lg-5 p-0">
                <div className="header-icon-list">
                  <ul className="w-100">
                    <li>
                      <a href="/">
                        <img src={searchLogo} alt="Logo" className="image" />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <img
                          src={shoppingBagLogo}
                          alt="Logo"
                          className="image"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <img src={heartLogo} alt="Logo" className="image" />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <img src={userLogo} alt="Logo" className="image" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
