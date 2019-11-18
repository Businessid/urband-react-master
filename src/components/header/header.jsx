import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserAlt, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../header/header.component.css";
import Logo from "../../assets/img/logo_5.png";
import BurgerMenu from "../header/burgerMenu.component";

import { connect } from "react-redux";
import * as actionCreators from "../../../src/store/actions/";

library.add(faUserAlt, faCartPlus);

class Header extends Component {
  state = {
    isToken: localStorage.getItem("urbandtoken") ? true : false
  };

  componentDidMount() {
    this.props.fetchMenues();
  }

  gotologout = () => {
    localStorage.removeItem("urbandtoken");
    this.setState({
      isToken: localStorage.getItem("urbandtoken") ? true : false
    });
  };

  render() {
    return (
      <div className="AppHeader">
        <header className="header header-magic-line headroom headroom--not-bottom headroom--pinned headroom--top">
          <div className="tim-container clearfix">
            <div className="header-magic-line-inner clearfix d-flex full-wrap">
              <div id="site-logo" className="float-left">
                <NavLink to="/" className="logo-main">
                  <img src={Logo} alt="hero urband" />
                </NavLink>
              </div>
              <div className="d-flex full-wrap nav-wrap">
                <div className="nav">
                  <ul className="group" id="header-menu-magic-line">
                    {this.props.menues.some(el => el.title === "Home") && (
                      <li>
                        <NavLink
                          to="/index"
                          activeClassName="selected"
                          className="in-array"
                        >
                          Home
                        </NavLink>
                      </li>
                    )}
                    {this.props.menues.some(el => el.title === "Studio") && (
                      <li className="menu-item-has-children in-array">
                        Studio
                        <ul className="sub-menu">
                          <li>
                            <Link to="/artist">Artists</Link>
                          </li>
                          <li>
                            <Link to="/clients">Clients</Link>
                          </li>
                        </ul>
                      </li>
                    )}
                    {this.props.menues.some(el => el.title === "Radio") && (
                      <li>
                        <NavLink
                          to="/radio"
                          className="in-array"
                          activeClassName="selected"
                        >
                          Radio
                        </NavLink>
                      </li>
                    )}
                    {this.props.menues.some(el => el.title === "Events") && (
                      <li className="menu-item-has-children">
                        <NavLink
                          to="/event-list"
                          activeClassName="selected"
                          className="in-array"
                        >
                          Events
                        </NavLink>
                      </li>
                    )}

                    {this.props.menues.some(el => el.title === "About") && (
                      <li>
                        <NavLink
                          to="/who-we-are"
                          activeClassName="selected"
                          className="in-array"
                        >
                          About
                        </NavLink>
                      </li>
                    )}

                    {/* <li>
                      <NavLink exact to="/vlog" className="in-array">
                        Vlog
                      </NavLink>
                    </li> */}
                    {this.props.menues.some(el => el.title === "Gallery") && (
                      <li>
                        <NavLink
                          to="/gallery"
                          activeClassName="selected"
                          className="in-array"
                        >
                          Gallery
                        </NavLink>
                      </li>
                    )}
                    {this.props.menues.some(el => el.title === "Purchase") && (
                      <li className="menu-item-has-children in-array">
                        Purchase
                        <ul className="sub-menu">
                          <li>
                            <Link to="/event-tickets">Event Tickets</Link>
                          </li>
                          <li>
                            <Link to="/coming-soon">Studio Bookings</Link>
                          </li>
                          <li>
                            <Link to="/store">Merchandise</Link>
                          </li>
                        </ul>
                      </li>
                    )}
                    <li>
                      <NavLink
                        to="/contact"
                        className="in-array"
                        activeClassName="selected"
                      >
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </div>

                <ul className="d-inline-flex avathar-sec DNone768">
                  <li className="d-flex mr-4">
                    {this.state.isToken ? (
                      <Link to="/cart">
                        <span>Cart</span>
                        <FontAwesomeIcon
                          icon={faCartPlus}
                          className="ico-user"
                        />
                      </Link>
                    ) : (
                      ""
                    )}
                  </li>
                  <li className="d-flex">
                    {!this.state.isToken ? (
                      <Link to="/login">
                        <span>Log In</span>
                        <FontAwesomeIcon
                          icon={faUserAlt}
                          className="ico-user"
                        />
                      </Link>
                    ) : (
                      ""
                    )}
                    {this.state.isToken ? (
                      <Link onClick={this.gotologout}>
                        <span>Log Out</span>
                        <FontAwesomeIcon
                          icon={faUserAlt}
                          className="ico-user"
                        />
                      </Link>
                    ) : (
                      ""
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
        <BurgerMenu />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchMenues: () => dispatch(actionCreators.fetchMenues())
  };
};

const mapStateToProps = state => {
  return {
    menues: state.menues.items
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
