import React from "react";
import { Link } from "react-router-dom";
import app from "../images/app.svg";
import advert from "../images/advert.svg";

export default function SignUp() {
  return (
    <div className="signup">
      <h1>We're glad you're here!</h1>
      <div className="dives">
        <div className="signup-card">
          <Link to="/appform">
            <div className="img-wrapper">
              <img src={app} alt="mobile-phone" className="sign-up" />
            </div>
            <button className="button-primary button-big">
              Create your app
            </button>
          </Link>
          <p>I want to create an app to promote my business</p>
        </div>
        <div className="signup-card">
          <Link to="/promotion">
            <div className="img-wrapper">
              <img src ={advert} alt="Happy-volunteer" className="sign-up" />
            </div>
            <button className="button-primary button-big">
              Create your advert
            </button>
          </Link>
          <p>I want to create adverts to promote my  business</p>
        </div>
        {/* <div>
          <Link to="/login">
            <button className="button">Go to login page</button>
          </Link>
        </div> */}
      </div>
    </div>
  );
}
