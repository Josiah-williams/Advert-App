import React from "react";
import app from "../images/app.svg";
import advert from "../images/advert.svg";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import logo from "../icons/123924428_705557600377412_3955865959784530213_n.jpg";
import {
  tabletPortrait,
  tabletLandscape,
  mobilePortrait,
  mobileLandscape,
  FlexFunc,
  tabletPortraitLarge,} 
from "../styles/theme.styles"

const Logo4 = styled.div`
.logo {
  z-index: 1;
  padding-top: 37px;
  position: absolute;
  top: -34px;
  left:1px;
  height:101px;
  @media ${mobilePortrait} {
    z-index: 1;
    padding-top: 38px;
    height: 96px;
    width: 89px;
    .img {
      position: sticky;
      top: 0;
    }
  }
}
`
const Link2Link = styled.div`
width: 100%;
.navbar-container {
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    background: #528E6F;

    ul {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 10px;
      
      @media ${mobilePortrait} {
        z-index: 1;
        padding-top: 10px;
        margin-top:25px
      }
    }
    }
      li {
        padding: 0 15px;

       


      }
    }
  }
}
.logo-div {
  @media ${mobilePortrait} {
    z-index: 1;
    padding-top: 10px;
    .img {
      position: sticky;
      top: 0;
    }
  }
}

.nav--button {
  .plain-text();
  text-transform: capitalize;
  border: none;
  background: none;
  transition: color 0.3s ease-in-out;
  font-weight: bold;
  &:hover,
  &:focus {
    color: @nav-item-highlight;
  }
}
.nav--links {
  .plain-text();
  text-decoration: none;
  text-transform: capitalize;
  background: none;
  font-weight: bold;
  color:#F9FAF9;
  
  &:hover,
  &:focus,
  &.active {
    color: #A3E335;
  }
}
}
.nav--link {
  .plain-text();
  text-decoration: none;
  text-transform: capitalize;
  border: none;
  background: none;
  font-weight: bold;
  color:  #F9FAF9;

  &:hover,
  &:focus,
  &.active {
    color: #A3E335;
  }
}

@media ${tabletPortrait} {
  background-position: -180px 50px;
}
@media ${tabletLandscape} {
  background-position: bottom left;
}
@media ${mobileLandscape} {
  background-image: none;
}
@media ${mobilePortrait} {
  background-image: none;
  display: flex;
  flex-direction: column;
}
`;
export default function AppinfoContainer() {
  const history = useHistory();
  const Logout = e => {
    localStorage.removeItem("token");
    history.push("/login");
  }
  return (
    <div className="signup">
       <Logo4>
            <div className="logo-div">
          <img src={logo} className="logo" />
          </div>
          </Logo4>
       <Link2Link>
        <header className="navbar-container">
        <nav>
          <div className="logo-div">
          </div>
         
          <ul className="right-navbar">
            <li>
              <Link className="nav--link" to="/Dashboard" replace>
                Dashboard
              </Link>
            </li>
            <li>
              <Link className="nav--links" onClick={Logout}>
                Log Out
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      </Link2Link>
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
          <p>I want to create adverts to promote my business</p>
        </div>
      </div>
    </div>
  );
}

