import React from "react";

//importing photo from files

//import css files
import ".././assets/css/bootstrap.min.css";

import ".././assets/css/animate.css";

import ".././assets/css/owl.carousel.css";

import ".././assets/css/font-awesome.css";

import ".././assets/css/themify-icons.css";

import ".././assets/css/flaticon.css";

//revolution layer styles

import ".././assets/revolution/css/layers.css";

import ".././assets/revolution/css/settings.css";

import ".././assets/css/prettyPhoto.css";

import ".././assets/css/shortcodes.css";

import ".././assets/css/main.css";

import ".././assets/css/responsive.css";

function HomeScreen() {
  return (
    <div>
      {/* Header */}
      <header id="masthead" className="header ttm-header-style-classic">
        <div className="ttm-topbar-wrapper ttm-bgcolor-darkgrey ttm-textcolor-white clearfix">
          <div className="container">
            <div className="ttm-topbar-content">
              <ul className="top-contact ttm-highlight-left text-left">
                <li>
                  <i className="fa fa-clock-o"></i>
                  <strong>Open Hours:</strong> Mon - Sat 9.00 - 18.00
                </li>
              </ul>
              <div className="topbar-right text-right">
                <ul className="top-contact">
                  <li>
                    <i className="fa fa-envelope-o"></i>
                    <a href="mailto:info@example.com.com">
                      info@elitecapitaltrading.com
                    </a>
                  </li>
                  <li>
                    <i className="fa fa-phone"></i>+61 480 053 176
                  </li>
                </ul>
                <div className="ttm-social-links-wrapper list-inline"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="ttm-header-wrap">
          <div
            id="ttm-stickable-header-w"
            className="ttm-stickable-header-w clearfix"
          >
            <div id="site-header-menu" className="site-header-menu">
              <div className="site-header-menu-inner ttm-stickable-header">
                <div className="container">
                  <div className="site-branding">
                    <a
                      className="home-link"
                      href="index-2.html"
                      title="Internationalmarketagency.com"
                      rel="home"
                    >
                      <h2>Elite Capital</h2>
                    </a>
                  </div>
                  <div id="site-navigation" className="site-navigation">
                    <div className="header-btn">
                      <a
                        className="ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-style-border ttm-btn-color-black"
                        href="register.html"
                      >
                        OPEN AN ACCOUNT
                      </a>
                    </div>
                    <div className="ttm-rt-contact">
                      <div className="ttm-header-icons">
                        <div className="ttm-header-icon ttm-header-search-link">
                          <a href="#">
                            <i className="ti ti-search"></i>
                          </a>
                          <div className="ttm-search-overlay">
                            <form
                              method="get"
                              className="ttm-site-searchform"
                              action="#"
                            >
                              <div className="w-search-form-h">
                                <div className="w-search-form-row">
                                  <div className="w-search-input">
                                    <input
                                      type="search"
                                      className="field searchform-s"
                                      name="s"
                                      placeholder="Type Word Then Enter..."
                                    />
                                    <button type="submit">
                                      <i className="ti ti-search"></i>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ttm-menu-toggle">
                      <input type="checkbox" id="menu-toggle-form" />
                      <label
                        for="menu-toggle-form"
                        className="ttm-menu-toggle-block"
                      >
                        <span className="toggle-block toggle-blocks-1"></span>
                        <span className="toggle-block toggle-blocks-2"></span>
                        <span className="toggle-block toggle-blocks-3"></span>
                      </label>
                    </div>
                    <nav id="menu" className="menu">
                      <ul className="dropdown">
                        <li className="active">
                          <a href="index-2.html">Home</a>
                        </li>
                        <li>
                          <a href="aboutus.html">About</a>
                        </li>
                        <li>
                          <a href="#">Investment Solutions</a>
                          <ul>
                            <li>
                              <a href="asset.html">Asset Management</a>
                            </li>
                            <li>
                              <a href="investment.html">Wealth Management</a>
                            </li>
                            <li>
                              <a href="realestate.html">
                                Real Estate Investing
                              </a>
                            </li>
                            <li>
                              <a href="minning.html">Resource Minning</a>
                            </li>
                            <li>
                              <a href="advisory.html">Global Advisory</a>
                            </li>
                            <li>
                              <a href="retirement.html">Retirement Services</a>
                            </li>
                          </ul>
                        </li>

                        <li>
                          <a href="contact-us.html">Contact Us</a>
                        </li>

                        <li>
                          <a href="#">Client Portal</a>
                          <ul>
                            <li>
                              <a href="login.html">Login</a>
                            </li>
                            <li>
                              <a href="register.html">Open an account</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default HomeScreen;
