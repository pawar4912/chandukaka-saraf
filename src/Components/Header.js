import React from "react";
import logo from "../images/icons/logo.svg";

const Header = () => {
  return (
    <>
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
                        <text >GOLD - ₹5,767</text>
                      </li>
                      <li>
                        <text >SILVER - ₹5,767</text>
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
          <div className="col-12 col-md-12 col-lg-7">
            <nav className="navbar">

            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
