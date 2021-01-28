import React, { useState } from "react";
import "../styles/Header.css";
import Logo from "../images/logo.svg";
import hamburgerIcon from "../images/icon-hamburger.svg";
import closeIcon from "../images/icon-close.svg";

function Header() {
  const [menuStatus, setMenuStatus] = useState("deactive");
  const [burgerStatus, setBurgerStatus] = useState("active");
  const [closeStatus, setCloseStatus] = useState("deactive");

  function changeBurgerStatus() {
    if (burgerStatus === "active") {
      setBurgerStatus("deactive");
      setCloseStatus("active");
      setMenuStatus("active");
      return false;
    }
  }
  function changeCloseStatus() {
    if (closeStatus === "active") {
      setBurgerStatus("active");
      setCloseStatus("deactive");
      setMenuStatus("deactive");
      return false;
    }
  }

  return (
    <div className="Header">
      <nav className="nav">
        <img class="nav-logo" src={Logo} alt="logo" />
        <div className="nav-left-side">
          <ul className="list-group">
            <li className="list-group-item">Features</li>
            <li className="list-group-item">Pricing</li>
            <li className="list-group-item">Resources</li>
          </ul>
        </div>
        <div className="nav-right-side">
          <button id="button" class="login">
            Login
          </button>
          <button id="button" class="register hover-effective">
            Sign Up
          </button>
          <img
            onClick={changeBurgerStatus}
            id="hamburger"
            className={`${burgerStatus}`}
            src={hamburgerIcon}
            alt="hamburger"
          />
          <img
            onClick={changeCloseStatus}
            id="close-icon"
            className={`${closeStatus}`}
            src={closeIcon}
            alt="close"
          />
        </div>
      </nav>
      <nav className={`nav-mobile ${menuStatus}`}>
        <ul className="nav-group">
          <li className="nav-group-item">Features</li>
          <li className="nav-group-item">Pricing</li>
          <li className="nav-group-item">Resources</li>
        </ul>
        <div className="nav-mobile-buttons">
          <button id="button" class="login">
            Login
          </button>
          <button id="button" class="register hover-effective">
            Sign Up
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Header;
