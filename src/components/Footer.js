import React from "react";
import {
  FacebookIcon,
  TwitterIcon,
  RedditIcon,
  LinkedinIcon
} from "react-share";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>Houston Texas 77054</p>
            </div>
            <div className="d-flex">
              <a href="tel:333-333-333">+1(832)226-9260</a>
            </div>
            <div className="d-flex">
              <p>bigbadumhe@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <a className="footer-nav">Home</a>
                <br />
                <a className="footer-nav">About me</a>
                <br />
                <a className="footer-nav">Services</a>
              </div>
              <div className="col">
                <a className="footer-nav">Experience</a>
                <br />
                <a className="footer-nav">Portfolio</a>
                <br />
                <a className="footer-nav">Contacts</a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              <a href = "https://www.linkedin.com/in/blessing-igbadumhe-559514213/">
                  <LinkedinIcon className="mx-3" size={36} />
                </a>

                <a href ="https://www.facebook.com/SexygeniusB">
                  <FacebookIcon className="mx-3" size={36} />
                </a>

                <a href = "https://twitter.com/">
                  <TwitterIcon className="mx-3" size={36} />
                </a>

                <a href = "https://www.reddit.com/">
                  <RedditIcon className="mx-3" size={36} />
                </a>

            </div>
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;Design By Blessing Igbadumhe
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
