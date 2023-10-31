import React from "react";
import { RiMenu3line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";

import "./navbar.css";

function Navbar() {
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <p>
            <a href="#home">Home </a>
            <a href="#wgpt3">What is GPT3? </a>
            <a href="#possibility">Open AI</a>
            <a href="#features">Case Study </a>
            <a href="#blog">Library </a>
          </p>
        </div>
        <div className="gpt3__navbar-sign">
          <p>Sign in</p>
          <button type="button">Sign up</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
