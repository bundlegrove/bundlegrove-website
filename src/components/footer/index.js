import React, { Component } from "react";
import './index.scss';

class Footer extends Component {
  render() {
    return (
      <footer className="bg-footer">
        <div className="footer-inner-container">
          <div className="footer-contents">
            <div className="bg-name">
              BundleGrove, LLC
            </div>

            <div className="vertical-divider"></div>

            <ul className="site-links">
              <li>
                <a className="simple-link" href="/menu">
                  Home
                </a>
              </li>

              <li>
                <a className="simple-link" href="/menu">
                  Gifts
                </a>
              </li>

              <li>
                <a className="simple-link" href="/menu">
                  About
                </a>
              </li>
            </ul>

            <div className="vertical-divider"></div>

            <ul className="social-media-links">
              <li>
                <a className="simple-link" href="/menu">
                  WhatsApp
                </a>
              </li>

              <li>
                <a className="simple-link" href="/menu">
                  Facebook
                </a>
              </li>

              <li>
                <a className="simple-link" href="/menu">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;