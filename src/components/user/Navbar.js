import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons" 
// import Modal from "./Modal/Modal";
import logo from "../../icons/123924428_705557600377412_3955865959784530213_n.jpg";
import styled from 'styled-components';
import {
  tabletPortrait,
  tabletLandscape,
  mobilePortrait,
  mobileLandscape,
  FlexFunc,
  tabletPortraitLarge,} 
from "../../styles/theme.styles"

export default function Navbar({ appState, user, logout }) {
  const history = useHistory();
  if (!appState) {
    return (
      <Link2Link>
      <header className="navbar-container">
        <nav>
          <div className="logo-div">
            <img src={logo} className="logo" />
          </div>
         
          <ul className="right-navbar">
            <li>
              <NavLink className="nav--link" to="/login" replace>
                Log in
              </NavLink>
            </li>
            <li>
              <NavLink className="nav--links" exact to="/Register" replace>
                Register
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      </Link2Link>
    );
  } else {
    if (user.user_type === "volunteer") {
      return (
        <section className="navbar-container">
          <nav>
            <div>
              {/* <img src={logo} className="logo" /> */}
            </div>

            <ul>
              <li>
                <NavLink
                  className="nav--link"
                  to="/volunteer/dashboard"
                  replace
                >
                  Accepted pickups
                </NavLink>
              </li>
              <li>
                <NavLink className="nav--link" to="/volunteer/pickups" replace>
                  Available pickups
                </NavLink>
              </li>
              <li>
                {/* <Modal /> */}
              </li>
              <li>
                <button className="nav--button" onClick={() => logout(history)}>
                  Log out
                </button>
              </li>
            </ul>
          </nav>
        </section>
      );
    } else if (user.user_type === "business") {
      return (
        <section className="navbar-container">
          <nav>
            <div>
              {/* <img src={logo} className="logo" /> */}
            </div>
            <ul>
              <li>
                <button className="nav--button" onClick={() => logout(history)}>
                  Log out
                </button>
              </li>
              <li>
                <NavLink className="nav--link" to="/business/dashboard" replace>
                  Listed pickups
                </NavLink>
              </li>
              <li>
                {/* <Modal /> */}
              </li>
            </ul>
          </nav>
        </section>
      );
    }
  }
}

{
  /* <nav className="NavBar">
          <Modal />
          <NavLink exact to="/login" activeClassName="active" replace>LOGIN</NavLink> 
          <NavLink exact to="/volunteer/pickups" activeClassName="active" replace>PICKUPS</NavLink>
          <NavLink exact to="/volunteer/dashboard" activeClassName="active" replace>DASHBOARD</NavLink>
          <NavLink exact to="/business/dashboard" activeClassName="active" replace>DASHBOARD</NavLink> 
        </nav> */
}

const Link2Link = styled.div`
width: 100%;
.navbar-container {
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    ul {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 10px;
      
      @media ${mobilePortrait} {
        z-index: 1;
        padding-top: 10px;
        margin-top:40px
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
  border: 3px solid #A3E335;
  height: 200px;
  width: 200px;
  .plain-text();
  text-decoration: none;
  text-transform: capitalize;
  background: none;
  font-weight: bold;
  color:  #F9FAF9;
  
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