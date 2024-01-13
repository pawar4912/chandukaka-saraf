import React, { useState } from "react";
import orderIcon from '../../images/icons/sidebar/orders-icon.svg';
import personalDetailsIcon from '../../images/icons/sidebar/personal-details-icon.svg';
import addressBookIcon from '../../images/icons/sidebar/address-book-icon.svg';
import heartIcon from '../../images/icons/sidebar/heart.svg';
import helpIcon from '../../images/icons/sidebar/help-icon.svg';
import logoutIcon from '../../images/icons/sidebar/logout-icon.svg';
import web from "../../images/Group265.png";
import { SwipeableDrawer } from "@mui/material";
import { Link } from "react-router-dom";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';


export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const openDrawer = () => {
    setIsOpen(true)
  }
  const closeDrawer = () => {
    setIsOpen(false)
  }

  return (
    <>
      <div className="sidebar">
        <div className="d-none d-md-block">
          <ul className="menu-wrapper">
            <li className="w-100 d-flex profile-wrapper">
              <img className="profile-img" src={web} />
              <div className="profile-info">
                <b className="name">Hi Smita</b>
                <small style={{whiteSpace: 'nowrap'}}>+91 9480000032</small>
              </div>
            </li>
            <div className="sidebar-menu">
              <li className="w-100">
                <Link to="/myorder" className="menu-link">
                  <img
                    src={orderIcon}
                    alt="Logo"
                    className="image"
                  />
                  MY ORDERS
                </Link>
              </li>
              <li className="w-100">
                <Link to="/personal-details" className="menu-link">
                  <img
                    src={personalDetailsIcon}
                    alt="Logo"
                    className="image"
                  />
                  PERSONAL DETAILS
                </Link>
              </li>
              <li className="w-100">
                <Link to="/address-book" className="menu-link">
                  <img
                    src={addressBookIcon}
                    alt="Logo"
                    className="image"
                  />
                  ADDRESS BOOK
                </Link>
              </li>
              <li className="w-100">
                <Link to="/wishlist" className="menu-link w-100 link-with-open-new">
                  <img
                    src={heartIcon}
                    alt="Logo"
                    className="image"
                  />
                  WISHLIST
                  <OpenInNewIcon className="new-tab-icon" />
                </Link>
              </li>
              <li className="w-100">
                <Link to="/contact-us" className="menu-link w-100 link-with-open-new">
                  <img
                    src={helpIcon}
                    alt="Logo"
                    className="image"
                  />
                  SUPPORT
                  <OpenInNewIcon className="new-tab-icon" />
                </Link>
              </li>
            </div>
            <li className="w-100 sign-out">
              <a href="#" className="menu-link">
                <img
                  src={logoutIcon}
                  alt="Logo"
                  className="image"
                />
                SIGN OUT
              </a>
            </li>
          </ul>
        </div>
        <div className=" d-md-none d-lg-none">
          <SwipeableDrawer className="mobile-drawer" open={isOpen} onOpen={openDrawer} onClose={closeDrawer} swipeAreaWidth={100}>
            <ul className="menu-wrapper">
              <li className="w-100 d-flex profile-wrapper">
                <div className="profile-section w-100 d-flex">
                  <img className="profile-img" src={web} />
                  <div className="profile-info">
                    <b className="name">Hi Smita</b>
                    <small>+91 9480000032</small>
                  </div>
                </div>
              </li>
              <div className="sidebar-menu">
                <li className="w-100">
                  <a href="#" className="menu-link">
                    <img
                      src={orderIcon}
                      alt="Logo"
                      className="image"
                    />
                    MY ORDERS
                  </a>
                </li>
                <li className="w-100">
                  <a href="#" className="menu-link">
                    <img
                      src={personalDetailsIcon}
                      alt="Logo"
                      className="image"
                    />
                    PERSONAL DETAILS
                  </a>
                </li>
                <li className="w-100">
                  <a href="#" className="menu-link">
                    <img
                      src={addressBookIcon}
                      alt="Logo"
                      className="image"
                    />
                    ADDRESS BOOK
                  </a>
                </li>
                <li className="w-100">
                  <a href="#" className="menu-link">
                    <img
                      src={heartIcon}
                      alt="Logo"
                      className="image"
                    />
                    WISHLIST
                  </a>
                </li>
                <li className="w-100">
                  <a href="#" className="menu-link">
                    <img
                      src={helpIcon}
                      alt="Logo"
                      className="image"
                    />
                    SUPPORT
                  </a>
                </li>
              </div>
              <li className="w-100 sign-out">
                <a href="#" className="menu-link">
                  <img
                    src={logoutIcon}
                    alt="Logo"
                    className="image"
                  />
                  SIGN OUT
                </a>
              </li>
            </ul>
          </SwipeableDrawer>
        </div>
      </div>
    </>
  )
}
