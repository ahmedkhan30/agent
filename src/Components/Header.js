import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import Menu from "./Menu";
import StickyHeader from "./Stickyheader";
// import Logo from "../images/deluxe-0shadow1.png";
// import Logo from "../images/icon/logo.png"

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = (event) => {
    if (window.scrollY > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(scrolled);
  const Tooggle = (e) => {
    $(".mobile-nav__wrapper").toggleClass("expanded");
  };

  return (
    <>
      <header className="main-header">
        {/* <div className="main-header__top">
          <div className="main-header__top-inner">
            <div className="main-header__top-left">
              <div className="main-menu__social">
                <Link to="#">
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link to="#">
                  <i className="fab fa-facebook"></i>
                </Link>
                <Link to="#">
                  <i className="fab fa-pinterest-p"></i>
                </Link>
                <Link to="#">
                  <i className="fab fa-instagram"></i>
                </Link>
              </div>
            </div>
            <div className="main-header__top-right">
              <ul className="list-unstyled main-header__contact-list">
                <li>
                  <div className="icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="text">
                    <p>30 Commercial Road Fratton, Australia </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="text">
                    <p>
                      <Link to="mailto:info@urbanhomes.com">info@bussinessagent.com</Link>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
        <nav className="main-menu">
          <StickyHeader />
        </nav>
      </header>
      <div
        className={
          scrolled
            ? "stricky-header stricked-menu main-menu stricky-fixed"
            : "stricky-header stricked-menu main-menu"
        }
      >
        <div className="sticky-header__content">
          <StickyHeader />
        </div>
      </div>
      <div className="mobile-nav__wrapper">
        <div className="mobile-nav__overlay mobile-nav__toggler"></div>
        <div className="mobile-nav__content">
          <Link
            to="#"
            className="mobile-nav__close mobile-nav__toggler"
            onClick={Tooggle}
          >
            <i className="fa fa-times"></i>
          </Link>
          <div className="logo-box">
            <Link to="/">
              {/* <img src={Logo} alt="Deluxe" className="w-75" /> */}
            </Link>
          </div>
          <div className="mobile-nav__container">
            <Menu />
          </div>
          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope"></i>
              <Link to="mailto:info@urbanhomes.com">info@urbanhomes.com</Link>
            </li>
            <li>
              <i className="fa fa-phone-alt"></i>
              <Link to="tel:666-888-0000">666 888 1111</Link>
            </li>
          </ul>
          <div className="mobile-nav__top">
            <div className="mobile-nav__social">
              <Link to="#" className="fab fa-twitter"></Link>
              <Link to="#" className="fab fa-facebook-square"></Link>
              <Link to="#" className="fab fa-pinterest-p"></Link>
              <Link to="#" className="fab fa-instagram"></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;