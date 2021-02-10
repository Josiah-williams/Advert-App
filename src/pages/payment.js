import React from "react";
import { Link } from "react-router-dom";
import money from "../images/money.svg";

export default function payment() {
  return (
    <div className="signup">
      <h1>Buy Now</h1>
      <div className="dives">
        <div className="signup-card">
          <Link to="/appform">
            <div className="img-wrapper">
              <img src={money} alt="money" className="sign-up" />
            </div>
            <button className="button-primary button-big">
              weekend Unlimited
            </button>
          </Link>
          <p>Buy unlimited weekend plan</p>
        </div>
        <div className="signup-card">
          <Link to="/promotion">
            <div className="img-wrapper">
              <img src ={money} alt="money" className="sign-up" />
            </div>
            <button className="button-primary button-big">
              500 clicks
            </button>
          </Link>
          <p>Buy 500 clicks</p>
        </div>
      </div>
    </div>
  );
}