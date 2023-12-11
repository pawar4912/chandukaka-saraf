import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/icons/logo.svg";
import heartLogo from "../images/icons/heart.svg";
import userLogo from "../images/icons/user.svg";
import searchLogo from "../images/icons/search.svg";
import shoppingBagLogo from "../images/icons/shopping-bag.svg";
import menuOpen from "../images/icons/open-menu.svg";
import closeMenu from "../images/icons/close.svg";
import { getLiveRateForCSPL } from "../services/FrontApp/index.service";

function Header() {
  const $ = window.jQuery;
  const [rates, setRates] = useState({Platinum: 0, Silver1: 0, Silver2: 0, gold: []})

  const getData = async () => {
    try {
      const result = await getLiveRateForCSPL();
      const {Platinum, Silver1, Silver2, ...gold} = result.data.data;
      setRates({Platinum, Silver1, Silver2, gold });
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData();
  }, [])

  useEffect(() => {
    $(".header-content .open-nav-btn").click(function (e) {
      $(".mobile-menu-overlay").css("width", "100%");
    });
    //close menu
    $(".header-content .close-nav-btn").click(function (e) {
      $(".mobile-menu-overlay").css("width", "0");
    });
  });
  return (
    <>
      <div>
        <header className="page-header">
          <hr className="header-hr d-none d-md-block " />
          <div className="header-content">
            <div className="col-12 col-md-12 col-lg-12 order-2 order-md-2">
              <div className="row">
                <div className="col-12 col-md-12 col-lg-12">
                  <div className="brand-wrapper">
                    <div className="open-nav-btn d-md-none d-lg-none mobile-header-bar">
                      <img
                        src={menuOpen}
                        alt="menu-open"
                        className="menu-open"
                      />
                      <div className="logo">
                        <a href="/">
                          <img src={logo} alt="Logo" className="image" />
                        </a>
                      </div>
                      <div className="header-icon-list">
                        <ul>
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
                              <img
                                src={heartLogo}
                                alt="Logo"
                                className="image"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-12 col-lg-12  d-none d-md-block">
                      <div className="row position-relative">
                        <div className="logo">
                          <a href="/">
                            <img src={logo} alt="Logo" className="image" />
                          </a>
                        </div>
                        <div className="col-8 p-0 position-absolute end-0 h-100">
                          <div className="quick-links-wrapper">
                            <ul className="w-100">
                              <div className="quick-link-items">
                                <li>
                                  <small>GOLD - ₹{ rates.gold['24.00'] ? rates.gold['24.00'] : 0 }</small>
                                </li>
                                <li>
                                  <small>SILVER - ₹{rates.Silver1}</small>
                                </li>
                                <li>
                                  <a href="/find-a-store">FIND A STORE</a>
                                </li>
                                <li>
                                  <a href="/">SUPPORT</a>
                                </li>
                              </div>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-2 col-lg-7 p-0">
                  <div className="mobile-menu-overlay">
                    <div className="close-nav-btn d-lg-none">
                      <img
                        src={closeMenu}
                        alt="close-menu-img"
                        className="menu-close"
                      />
                    </div>
                    <nav className="navbar">
                      <ul className="w-100">
                        <div className="header-searchbar-wrapper w-100">
                          <div className="col-10 search-wrapper">
                            <input
                              type="text"
                              className="search-input col-9 col-md-9"
                              placeholder="Search for a product"
                            />
                            <img
                              src={searchLogo}
                              alt="Logo"
                              className="search-logo"
                            />
                          </div>
                          <div className="col-2">
                            <a href="/" className="shopping-logo">
                              <img
                                src={shoppingBagLogo}
                                alt="Logo"
                                className="image"
                              />
                            </a>
                          </div>
                        </div>
                        <h3 className="drawer-header">POPULAR SEARCHES</h3>
                        <div className="d-lg-none">
                          <li className="w-100">
                            <a href="/" className="menu-link">
                              Fancy Earrings
                            </a>
                          </li>
                          <li className="w-100">
                            <a href="/" className="menu-link">
                              Gift under 10k
                            </a>
                          </li>
                          <li className="w-100">
                            <a href="/" className="menu-link">
                              Every day Necklaces
                            </a>
                          </li>
                          <li className="w-100">
                            <a href="/" className="menu-link">
                              Diamonds Mangalsutra
                            </a>
                          </li>
                          <li className="w-100">
                            <a href="/" className="menu-link">
                              Office wear earrings
                            </a>
                          </li>
                        </div>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-12 order-1 order-md-1 d-none d-md-block ps-0">
              <div className="col-12 col-md-12 col-lg-12">
                <div className="row">
                  <div className="col-12 col-sm-10 col-md-10 col-lg-10">
                    <nav className="navbar">
                      <ul className="w-100">
                        <div className="menu-link-items">
                          <li>
                            <Link to="jewellerys">Jewellery</Link>
                          </li>
                          <li>
                            <Link to="aboutus">About us</Link>
                          </li>
                          <li>
                            <Link to="bullions">Bullion</Link>
                          </li>
                          {/* <li>
                            <Link to="e-gold">E-gold</Link>
                          </li> */}
                         { /* <li>
                            <Link to="gifting">Gifting</Link>
                        </li> */}
                        </div>
                      </ul>
                    </nav>
                  </div>
                  <div className="col-12 col-sm-2 col-md-2 col-lg-2 p-0">
                    <div className="header-icon-list">
                      <ul className="w-100">
                        <li>
                          <a href="/">
                            <img
                              src={searchLogo}
                              alt="Logo"
                              className="image"
                            />
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
          </div>
        </header>
      </div>
    </>
  );
}

export default Header;
