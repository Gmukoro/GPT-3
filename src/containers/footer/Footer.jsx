import React from "react";
import gpt3Logo from "../../assets/logo.svg";
import "./feature.css";

function Footer() {
  return (
    <div className="gpt3__footer section padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do You Want to Step into The Future Before Others?
        </h1>
      </div>
      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="logo" />
          <p>Gona, All Rights Reserved</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Content</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p>Gona, Abuja, Nigeria</p>
          <p>+(234)8136774417</p>
          <p>Gona@gmail.com</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>Copyright &#169; 2023 Gona. All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
