import React from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import Menu from "./Menu";
// import Logo from "../images/deluxe-0shadow1.png";
const StickyHeader = () => {
  const Tooggle = (e) => {
    $(".mobile-nav__wrapper").toggleClass("expanded");
  };

  return (
    <>
      <div className="main-menu__wrapper">
        <div className="main-menu__wrapper-inner">
          <div className="main-menu__left">
            <div className="main-menu__logo">
              <Link to="/">
              <h1>Bussiness Agent</h1>
              </Link>
            </div>
          </div>
          <div className="main-menu__main-menu-box">
            <Link to="#" className="mobile-nav__toggler" onClick={Tooggle}>
              <i className="fa fa-bars"></i>
            </Link>
            <Menu />
          </div>
          <div className="main-menu__right ms-5">
            <div className="main-menu__search-cart-btn">
              <div className="main-menu__btn-box">
                <Link to="/signin" className="menu main-menu__list ">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default StickyHeader;
