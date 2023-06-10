import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faGlobe,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header">
        <h2 className="logo">hostx</h2>
        <div className="header__button">
          <div className="icon__section">
            <FontAwesomeIcon className="icon" icon={faGear} />
            <p className="icon__text">shared control panel</p>
          </div>
        </div>
        <div className="header__button">
          <div className="icon__section">
            <FontAwesomeIcon className="icon" icon={faGlobe} />
            <p className="icon__text">Vps control panel</p>
          </div>
        </div>
        <button className="free-trial">FREE TRIAL</button>
        <Link to="/login" className="login">
          LOGIN
        </Link>
      </header>
      <hr className="custom__hr" />
      <div className="header" id="header__second">
        <div className="number">
          <FontAwesomeIcon className="phn__icon" icon={faPhoneVolume} />
          <p>(20) 123 456 7890</p>
        </div>
        <div className="routes">
          <Link className="routes__name" to="/">
            Home
          </Link>
          <Link className="routes__name" to="/vps">
            VPS hosting Servers
          </Link>
          <Link className="routes__name" to="/shared">
            Shared Hosting Servers
          </Link>
          <Link className="routes__name" to="/dedicated">
            Dedicated Hosting Servers
          </Link>
          <Link className="routes__name" to="/contactus">
            Contact
          </Link>
          <Link className="routes__name" to="/signup">
            Signup
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
