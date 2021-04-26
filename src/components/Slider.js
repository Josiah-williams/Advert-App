import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../images/image1.png';
import image2 from '../images/image2.jpg'
import Footer from "../components/user/footer"
import Navbar from "./user/Navbar";
import styled from 'styled-components'
import { useHistory} from "react-router-dom"
import {
  tabletPortrait,
  tabletLandscape,
  mobilePortrait,
  mobileLandscape,
  FlexFunc,
  tabletPortraitLarge,} 
  from "../styles/theme.styles"

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
    top:371px;
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
