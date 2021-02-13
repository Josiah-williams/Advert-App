import React from "react";
import { Link } from "react-router-dom";
import money from "../images/money.svg";

export default function payment() {
  return (
    <div className="signup">
      <h1>Buy Now</h1>
      <div className="dives">
        <div className="signup-card">
        <a target="_blank" href="https://paystack.com/buy/unlimited-weekend-vbahtd">
            <div className="img-wrapper">
              <img src={money} alt="money" className="sign-up" />
            </div>
            <button className="button-primary button-big">
              weekend Unlimited
            </button>
          </a>
          <p>Spend just 100 naira for the weekend for unlimited ads clicks</p>
        </div>
        <div className="signup-card">
        <a target="_blank" href="https://paystack.com/buy/500-clicks-mcyaew">
            <div className="img-wrapper">
              <img src ={money} alt="money" className="sign-up" />
            </div>
            <button className="button-primary button-big">
              500 clicks
            </button>
          </a>
          <p>Increase sales with greenhood ads for just 20kobo per click, 500 Clicks for just #100
          </p>
        </div>
      </div>
    </div>
  );
}