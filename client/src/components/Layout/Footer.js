import React from "react";
import { Link } from "react-router-dom";
import { scroller } from "react-scroll";
import "./Footer.css";

const Footer = () => {
  const scrollToContact = () => {
    scroller.scrollTo("contact", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div>
      <footer className="new_footer_area bg_color">
        <div className="new_footer_top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div
                  className="f_widget company_widget wow fadeInLeft"
                  data-wow-delay="0.2s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.2s",
                    animationName: "fadeInLeft",
                  }}
                >
                  {/* Company Widget Content */}
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div
                  className="f_widget about-widget pl_70 wow fadeInLeft"
                  data-wow-delay="0.4s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.4s",
                    animationName: "fadeInLeft",
                  }}
                >
                  <h3 className="f-title f_600 t_color f_size_18 contact">
                    Contact
                  </h3>
                  <ul className="list-unstyled f_list">
                    <li>
                      <a href="/">
                        Address - office no. 109, 1st floor,Noida,Uttar Pradesh
                      </a>
                    </li>
                    <li>
                      <a href="/">email - info@meharhospitalityservices.com</a>
                    </li>
                    <li>
                      <a href="/">Company Ph Number</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div
                  className="f_widget about-widget pl_70 wow fadeInLeft quicklinks"
                  data-wow-delay="0.6s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.6s",
                    animationName: "fadeInLeft",
                  }}
                >
                  <h3 className="f-title f_600 t_color f_size_18">
                    Quicklinks
                  </h3>
                  <ul className="list-unstyled f_list">
                    <li>
                      <a href="/">
                        <p>Home</p>
                      </a>
                    </li>
                    <li>
                      <Link to="/aboutus">
                        <p>About</p>
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <p onClick={scrollToContact}>Contact us</p>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div
                  className="f_widget social-widget pl_70 wow fadeInLeft"
                  data-wow-delay="0.8s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.8s",
                    animationName: "fadeInLeft",
                  }}
                >
                  {/* <h3 className="f-title f_600 t_color f_size_18">
                    Team Solutions
                  </h3>
                  <div className="f_social_icon">
                    <a href="/" className="fab fa-facebook">
                      .
                    </a>
                    <a href="/" className="fab fa-twitter">
                      .
                    </a>
                    <a href="/" className="fab fa-linkedin">
                      .
                    </a>
                    <a href="/" className="fab fa-pinterest">
                      .
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="footer_bg">
            <div className="footer_bg_one" />
            <div className="footer_bg_two" />
          </div>
        </div>
        <div className="footer_bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-sm-7">
                <p className="mb-0 f_400">
                  © MEHAR HOSPITALITY SERVICES Inc.. 2024 All rights reserved.
                </p>
              </div>
              <div className="col-lg-6 col-sm-5 text-right">
                <p>
                  Designed and Developed by - <i className="icon_heart" />{" "}
                  <a href="https://www.linkedin.com/in/puneet-chhabra">
                    <h6 style={{ fontSize: "10px" }}>Puneet Chhabra</h6>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
