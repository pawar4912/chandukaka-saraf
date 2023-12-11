import React from 'react';
import logo from '../images/icons/logo.svg';
import rightArrowIcon from '../images/icons/right-arrow.svg';
import facebookIcon from '../images/icons/social-media/facebook.svg';
import instagramIcon from '../images/icons/social-media/instagram.svg';
import twitterIcon from '../images/icons/social-media/twitter.svg';

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="Logo" className="image" />
          </a>
        </div>
        <div className="col-12 col-md-12 col-lg-12 footer-containt">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-8 position-relative">
              <div className="row">
                <div className="col-xl-4 col-lg-5 col-md-6 col-sm-6 col-6">
                  <div className="row">
                    <div className="col-lg-12">
                      <p className="mb-2">
                        <span>Email: </span>
                        {' '}
                        care@csjwellers.com
                      </p>
                      <p className="mb-4">
                        <span>Phone: </span>
                        {' '}
                        1800 267 0999
                      </p>
                      <p className="address">
                        Sr. No.32/1/B/5, Gunwadi Road, Baramati, Dist - Pune,
                        PIN: 413102
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-8 col-lg-7 col-md-6 col-sm-6 col-6">
                  <div className="row">
                    <div className="col-lg-6">
                      <a href="/aboutus" className="btn btn-link">
                        About us
                      </a>
                      <a href="/news-&-blog" className="btn btn-link">
                        News & Blogs
                      </a>
                      <a href="/contact-us" className="btn btn-link">
                        Contact us
                      </a>
                      <a href="/" className="btn btn-link">
                        Help & Support
                      </a>
                    </div>
                    <div className="col-lg-6">
                      <a href="/privacy-policy" className="btn btn-link">
                        Privacy Policy
                      </a>
                      <a href="/terms-&-conditions" className="btn btn-link">
                        Terms & Condition
                      </a>
                      {/* <a href="/" className="btn btn-link">
                        Shipping Policy
                      </a> */}
                      <a href="/CSR-Policy" className="btn btn-link">
                        CSR Policy
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-7 ">
                  <button type="button" className="mt-3">
                    Find A Store
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-8 col-lg-4">
              <h5 className="mb-3 footer-heading">
                Sign up for our newsletter
              </h5>
              <p className="mb-3 footer-text">
                Be the first to know about our special offers, news, and
                updates.
              </p>
              <div className="sbscribe-wrapper">
                <input
                  type="text"
                  className="w-100 subscribe-input"
                  placeholder="Enter your email ID"
                />
                <button type="button" className="subscribe-btn">
                  Subscribe
                  {' '}
                  <img src={rightArrowIcon} alt="rightArrowIcon" />
                </button>
              </div>
              <div className="social-media-wrapper">
                <h6>Follow us on</h6>
                <img
                  src={facebookIcon}
                  alt="facebookIcon"
                  className="social-media-icon"
                />
                <img
                  src={instagramIcon}
                  alt="instagramIcon"
                  className="social-media-icon"
                />
                <img
                  src={twitterIcon}
                  alt="twitterIcon"
                  className="social-media-icon"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>2023 © Chandukaka Saraf & Sons Pvt. Ltd . Powered by Listany</p>
        </div>
      </div>
      <hr className="footer-hr" />
    </footer>
  );
}

export default Footer;
