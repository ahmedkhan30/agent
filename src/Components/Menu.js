import React from "react";
import { Link } from "react-router-dom";
const Menu = () => {
  const Scroll = () => {
    window.scroll(0, 0);
  };

  return (
    <>
      <ul className="main-menu__list">
        <li className='navoption'>
          <Link to="/services" onClick={Scroll}>
            Form a US Company
          </Link>
          <ul class="shadow-box">
            <li className='navoption'>
              <Link to="/landlord" onClick={Scroll}>
                Registered Agent
              </Link>
            </li>
            <li className='navoption'>
              <Link to="/investors" onClick={Scroll}>
                Form a non LLC
              </Link>
            </li>
            <li className='navoption'>
              <Link to="/companies" onClick={Scroll}>
                Form an S coorporation
              </Link>
            </li>
            <li className='navoption'>
              <Link to="/companies" onClick={Scroll}>
                Form a C coorporation
              </Link>
            </li>
            <li className='navoption'>
              <Link to="/companies" onClick={Scroll}>
                Form an LLC
              </Link>
            </li>
            <li className='navoption'>
              <Link to="/companies" onClick={Scroll}>
                Form a non Profit
              </Link>
            </li>
          </ul>
        </li>
        <li className='navoption'>
          <Link to="/about" onClick={Scroll}>
            US Banking
          </Link>
          <ul class="shadow-box">
            <li className='navoption'>
              <Link to="/landlord" onClick={Scroll}>
                Open a US Business Bank Account Remotly
              </Link>
            </li>
            <hr />
            <li className='navoption'>
              <Link to="/investors" onClick={Scroll}>
                Open a US Business Personal Bank Account Remotly
              </Link>
            </li>
            <hr  className="text-danger"/>
            <li className='navoption'>
              <Link to="/companies" onClick={Scroll}>
                Open a US Business Bank Account without EIN or SSN
              </Link>
            </li>
          </ul>
        </li>
        <li className='navoption'>
          <Link to="/accomodation" onClick={Scroll}>
            Business Tools
          </Link>
          <ul class="shadow-box">
            <li className='navoption'>
              <Link to="/landlord" onClick={Scroll}>
                Virtual Assistant
              </Link>
            </li>
            <li className='navoption'>
              <Link to="/investors" onClick={Scroll}>
                Virtual Office
              </Link>
            </li>
            <li className='navoption'>
              <Link to="/companies" onClick={Scroll}>
                Form an LLC
              </Link>
            </li>
            <li className='navoption'>
              <Link to="/companies" onClick={Scroll}>
                Mail Forwarding
              </Link>
            </li>
            <li className='navoption'>
              <Link to="/companies" onClick={Scroll}>
                Busniness Address
              </Link>
            </li>
            <li className='navoption'>
              <Link to="/companies" onClick={Scroll}>
                Phone Service
              </Link>
            </li>
          </ul>
        </li>
        <li class="dropdown">
          <Link to="/services" onClick={Scroll}>
            Other Services
          </Link>
          <ul class="shadow-box">
            <li className='navoption'>
              <Link to="/landlord" onClick={Scroll}>
                Import & Export Service
              </Link>
            </li>
            <li className='navoption'>
              <Link to="/investors" onClick={Scroll}>
                Form an LLC
              </Link>
            </li>
            <li className='navoption'>
              <Link to="/companies" onClick={Scroll}>
                Equipment Sourcing & Supplying
              </Link>
            </li>
            <li className='navoption'>
              <Link to="/companies" onClick={Scroll}>
                Sell your products in the US
              </Link>
            </li>
            <li className='navoption'>
              <Link to="/companies" onClick={Scroll}>
                Buy the right equipment from the US
              </Link>
            </li>
            <li className='navoption'>
              <Link to="/companies" onClick={Scroll}>
                Engineering Services
              </Link>
            </li>
          </ul>
        </li>
        <li className='navoption'>
          <Link to="/contact" onClick={Scroll}>
            Go Offshare
          </Link>
          <ul class="shadow-box">
            <li className='navoption'>
              <Link to="/landlord" onClick={Scroll}>
                Form a Company offshare
              </Link>
            </li>
            <li className='navoption'>
              <Link to="/investors" onClick={Scroll}>
                Form an LLC
              </Link>
            </li>
            <li className='navoption'>
              <Link to="/companies" onClick={Scroll}>
                Open Bank offshare
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
};
export default Menu;
