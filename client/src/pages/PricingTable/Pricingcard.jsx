import React, { useContext } from "react";
import { PlanContext } from "../context/PlanContext.js"
import "./Pricing.css";
// import { Link } from "react-router-dom";

const Pricingcard = ({ scrollToComponent }) => {
  const { setSelectedPlan } = useContext(PlanContext);

  const handleSelectPlan = (plan) => {
    setSelectedPlan(`I am interested in the ${plan} plan`);
    scrollToComponent("contactus");
  };

  return (
    <div id="pricing">
      <section className="section pt-5 pb-5" id="pricing-plans">
        <div className="top" />
        <div className="container">
          {/* ***** Section Title Start ***** */}
          <div className="row">
            <div className="col-lg-12">
              <div className="center-heading">
                <h2 className="section-title">Join Club Fusion</h2>
              </div>
            </div>
            <div className="offset-lg-3 col-lg-6">
              <div className="center-text">
                <p>Membership Plans</p>
              </div>
            </div>
          </div>
          {/* ***** Section Title End ***** */}
          <div className="row">
            {/* ***** Pricing Item Start ***** */}
            <div className="col-lg-4 col-md-6">
              <div className="pricing-item">
                <div className="pricing-header">
                  <h3 className="pricing-title pricing-title1">SILVER</h3>
                </div>
                <div className="pricing-body">
                  <div className="price-wrapper">
                    <span className="currency"></span>
                    <span className="price">
                      15,999/-
                      <br />
                      <p
                        className="price"
                        style={{ fontSize: "15px", marginTop: "0px" }}
                      >
                        Inclusive of all taxes
                      </p>
                    </span>
                    <span className="period"></span>
                  </div>
                  <ul className="list">
                    <li className="active">
                      2 Complimentary Night Stay With Morning Breakfast
                    </li>
                    <li className="active">
                      2 Complimentary Buffet Meal Voucher For 2 Pax{" "}
                    </li>
                    <li className="active">2 Complimentary Cakes</li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
                <div className="pricing-footer">
                  <p
                    className="btn-primary-line silverb"
                    onClick={() => handleSelectPlan("Silver")}
                  >
                    Select Plan
                  </p>
                </div>
              </div>
            </div>
            {/* ***** Pricing Item End ***** */}
            {/* ***** Pricing Item Start ***** */}
            <div className="col-lg-4 col-md-6">
              <div className="pricing-item active">
                <div className="pricing-header">
                  <h3 className="pricing-title pricing-title2">GOLD</h3>
                </div>
                <div className="pricing-body">
                  <div className="price-wrapper">
                    <span className="currency"></span>
                    <span className="price">
                      25,999/-
                      <br />
                      <p
                        className="price"
                        style={{
                          fontSize: "15px",
                          marginTop: "0px",
                          marginBottom: "4px",
                          paddingBottom: "4px",
                        }}
                      >
                        Inclusive of all taxes
                      </p>
                    </span>
                    {/* <span className="period">inclusive of all taxes</span> */}
                  </div>
                  <ul className="list">
                    <li className="active">
                      International Bookings Available.
                    </li>
                    <li className="active">
                      4 Complimentary Night Stay With Morning Breakfast
                    </li>
                    <li className="active">
                      4 Complimentary Buffet Meal Vouchers For 2 Pax
                    </li>
                    <li className="active">4 Complimentary Cakes. </li>
                    {/* <li className="active">Data Security and Backups</li>
                    <li className="active">1 GB Storage</li>
                    <li>24x7 Great Support</li>
                    <li>Monthly Reports and Analytics</li> */}
                  </ul>
                </div>
                <div className="pricing-footer">
                  <p
                    className="btn-primary-line goldb"
                    onClick={() => handleSelectPlan("Gold")}
                  >
                    Select Plan
                  </p>
                </div>
              </div>
            </div>
            {/* ***** Pricing Item End ***** */}
            {/* ***** Pricing Item Start ***** */}
            <div className="col-lg-4 col-md-6">
              <div className="pricing-item">
                <div className="pricing-header">
                  <h3 className="pricing-title pricing-title3">PLATINUM</h3>
                </div>
                <div className="pricing-body">
                  <div className="price-wrapper">
                    <span className="currency"></span>
                    <span className="price">
                      35,999/-
                      <br />
                      <p
                        className="price"
                        style={{ fontSize: "15px", marginTop: "0px" }}
                      >
                        Inclusive of all taxes
                      </p>
                    </span>
                    {/* <span className="period">inclusive of all taxes</span> */}
                  </div>
                  <ul className="list">
                    <li className="active">
                      Luxurious Stays Available Pan India
                    </li>
                    <li className="active">3 Night Stay Complimentary </li>
                    <li className="active">
                      3 Complimentary Buffet Meal Vouchers For 2 Pax
                    </li>
                    <li className="active">3 Complimentary Cakes</li>
                    {/* <li className="active">Highest Speed</li>
                    <li className="active">Data Security and Backups</li>
                    <li className="active">1 GB Storage</li>
                    <li className="active">24x7 Great Support</li>
                    <li className="active">Monthly Reports and Analytics</li> */}
                  </ul>
                </div>
                <div className="pricing-footer">
                  <p
                    className="btn-primary-line plantinumb"
                    onClick={() => handleSelectPlan("Platinum")}
                  >
                    Select Plan
                  </p>
                </div>
              </div>
            </div>
            {/* ***** Pricing Item End ***** */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricingcard;
