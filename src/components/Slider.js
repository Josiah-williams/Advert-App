import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../images/image1.png';
import image2 from '../images/image2.jpg'
import Footer from "../components/user/footer"
import Navbar from "./user/Navbar";
import styled from 'styled-components'
import { useHistory} from "react-router-dom"
import logo from "../icons/123924428_705557600377412_3955865959784530213_n.jpg";
import {
  mobilePortrait,
} 
  from "../styles/theme.styles"
const Logo3 = styled.div`
.logo {
  z-index: 1;
  padding-top: 37px;
  position: absolute;
  top: -34px;
  left:1px;
  height:101px;
  @media ${mobilePortrait} {
    z-index: 1;
    padding-top: 36px;
    height: 96px;
    width: 89px;
    .img {
      position: sticky;
      top: 0;
    }
  }
}
`
const Click = styled.div`
.click-button{
  width:510px;
  height:67px;
  position:absolute;
  top:412px;
  left:427px;
  background-color: darkslategray;
  color:white;
  border-radius:5px;
  cursor: pointer;
  border: 1px solid darkslategray;
  font-size: xx-large;
}
@media ${mobilePortrait} {
  .click-button{
    width:127px;
    height:60px;
    position absolute;
    top:385px;
    left:114px;
    border: 1px solid darkslategray;
    font-size: inherit;
  }
}`
const CarouselContainer = ({ images, appState, user, logout }) => {
  
  const history = useHistory();
  const abc = path => {
    history.push(path);
  };
        return (
          <div>
            <Logo3>
            <div className="logo-div">
          <img src={logo} className="logo" alt ="" />
          </div>
          </Logo3>
          <Navbar appState={appState} user={user} logout={logout} />
          <Carousel>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-200"
      src={image1}
      alt="First slide"
    />
    <Click><button className="click-button" onClick={() => abc("/Register")}>
            Click here to get started
          </button></Click>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-200"
      src={image2}
      alt="Second slide"
    />
    <Click><button className="click-button" onClick={() => history.push("/Register")}>
            Click here to get started
            </button></Click>
  </Carousel.Item>
</Carousel>
<Footer className="footer" />
</div>
        )
}
export default CarouselContainer
