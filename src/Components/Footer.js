import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div>
      <footer className="footer d-block">
        <div
          className="footer__content justify-content-center m-auto"
          style={{ backgroundColor: "rgb(0, 0, 0)" }}
        >
          <p>
            <Link to="/" className="footer__logo">
              <img
                alt="Playmaker logo"
                src="/images/logo/1671699238logo.png"
              />
            </Link>
          </p>
          <div className="footer__social">
            <ul className="social__list">
              <li className="social__item">
                <Link to="https://www.instagram.com/" target="_blank">
                  <img alt="Social icon" src="/images/instagram-icon.png" />
                </Link>
              </li>
              <li className="social__item">
                <Link to="https://google.com/" target="_blank">
                  <img alt="Social icon" src="/images/youtube-icon.png" />
                </Link>
              </li>
              <li className="social__item">
                <Link to="https://twitter.com/" target="_blank">
                  <img alt="Social icon" src="/images/twitter-icon.png" />
                </Link>
              </li>
              <li className="social__item">
                <Link to="https://pintrest.com/" target="_blank">
                  <img alt="Social icon" src="/images/spotify-icon.png" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__menu">
            <ul className="footer-menu__list">
              <li className="footer-menu__item">
                <Link to="/about">About Us </Link>
              </li>
              <li className="footer-menu__item">
                <Link to="/faqs">Faqs </Link>
              </li>
              <li className="footer-menu__item">
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
