import React from "react";
import "./Footer.css";
import styled, { keyframes } from "styled-components";

const Footer = () => {
  const flowAnimation = keyframes`
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

  const HR = styled.hr`
    border: none;
    height: 3px;
    background: linear-gradient(
      to right,
      red,
      orange,
      yellow,
      green,
      blue,
      indigo,
      violet
    );
    animation: ${flowAnimation} 40s linear infinite;
  `;
  return (
    <div className="footer_color">
      <HR></HR>
      <div className="footer_options">
        <div className="footer_option">
          <h5>
            <b>About HostX</b>
          </h5>
          <br />
          {/* 1 */}
          <div className="anchor">
            <a className="anchors" href="#">
              About Us
            </a>
            <br />
            <a className="anchors" href="#">
              Newsroom
            </a>
            <br />
            <a className="anchors" href="#">
              Investor Relations
            </a>
            <br />
            <a className="anchors" href="#">
              {" "}
              Careers
            </a>
            <br />
            <a className="anchors" href="#">
              Corporate Responsibility
            </a>
            <br />
            <a className="anchors" href="#">
              Trust Center
            </a>
            <br />
            <a className="anchors" href="#">
              {" "}
              Legal{" "}
            </a>
          </div>
        </div>
        {/* 2 */}
        <div className="footer_option">
          <h5>
            <b>Help Center</b>
          </h5>
          <br />

          <div className="anchor">
            <a className="anchors" href="#">
              Newsroom
            </a>
            <br />
            <a className="anchors" href="#">
              Community
            </a>
            <br />
            <a className="anchors" href="#">
              {" "}
              Careers
            </a>
            <br />
            <a className="anchors" href="#">
              HostX Blog
            </a>
            <br />
            <a className="anchors" href="#">
              Contact Us
            </a>
            <br />
            <a className="anchors" href="#">
              Report Abuse
            </a>
            <br />
            <a className="anchors" href="#">
              Resources
            </a>
          </div>
        </div>
        <div className="footer_option">
          <h5>
            <b>Resources</b>
          </h5>
          <br />
          {/* 3 */}

          <div className="anchor">
            <a className="anchors" href="#">
              Webmail
            </a>
            <br />
            <a className="anchors" href="#">
              {" "}
              WHOIS
            </a>
            <br />
            <a className="anchors" href="#">
              HostX Mobile App
            </a>
            <br />
            <a className="anchors" href="#">
              ICANN Confirmation
            </a>
            <br />
            <a className="anchors" href="#">
              Corporate Domains
            </a>
            <br />
            <a className="anchors" href="#">
              Redeem Code
            </a>
          </div>
        </div>

        {/* 4 */}
        <div className="footer_option">
          <h5>
            <b>Partner Programs</b>
          </h5>
          <br />

          <div className="anchor">
            <a className="anchors" href="#">
              Affiliates
            </a>
            <br />
            <a className="anchors" href="#">
              Reseller Programs
            </a>
            <br />
            <a className="anchors" href="#">
              {" "}
              HostX Pro
            </a>
          </div>
        </div>
        {/* 5 */}
        <div className="footer_option">
          <h5>
            <b>Account</b>
          </h5>
          <br />

          <div className="anchor">
            <a className="anchors" href="#">
              My Products
            </a>
            <br />
            <a className="anchors" href="#">
              Renewals & Billing
            </a>
            <br />
            <a className="anchors" href="#">
              Create Account
            </a>
          </div>
        </div>
        <div className="footer_option">
          <h5>
            <b>Shopping</b>
          </h5>
          <br />

          <div className="anchor">
            <a className="anchors" href="#">
              Domain Search
            </a>
            <br />
            <a className="anchors" href="#">
              Websites
            </a>
            <br />
            <a className="anchors" href="#">
              {" "}
              WordPress
            </a>
            <br />
            <a className="anchors" href="#">
              Hosting
            </a>
            <br />
            <a className="anchors" href="#">
              Web Security
            </a>
            <br />
            <a className="anchors" href="#">
              Web Security
            </a>
            <br />
            <a className="anchors" href="#">
              Phone Numbers
            </a>
            <br />
            <a className="anchors" href="#">
              Promos
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
