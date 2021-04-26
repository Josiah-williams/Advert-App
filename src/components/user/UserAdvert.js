import React, { useRef } from "react"
import useSlider from "../hooks/useSlider"
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons'
import Footer from "../components/user/footer"
import { useHistory} from "react-router-dom"
import styled from "styled-components";
import Navbar from "./user/Navbar";
import {
  tabletPortrait,
  tabletLandscape,
  mobilePortrait,
  mobileLandscape,
  FlexFunc,
  tabletPortraitLarge,} 
  from "../styles/theme.styles"

const Slider = ({ images, appState, user, logout }) => {
  const history = useHistory();
  const slideImage = useRef(null)
  const slideText = useRef(null)
  const { goToPreviousSlide, goToNextSlide } = useSlider(
    slideImage,
    slideText,
    images
  )

  return (
    <div className="slider" ref={slideImage}>
      <Navbar appState={appState} user={user} logout={logout} />
      <div className="slider--content">
        <button onClick={goToPreviousSlide} className="slider__btn-left">
        <CaretLeftOutlined />
        </button>
        <Click><button className="click-button" onClick={() => history.push("/Register")}>
            Click here to get started
          </button></Click>
        <div className="slider--feature">
          <p className="feature--text"></p>
        </div>
        <button onClick={goToNextSlide} className="slider__btn-right">
          <CaretRightOutlined />
        </button>
        <Footer className="footer" />
      </div>
    </div>
  )
}
const Click = styled.div`
.click-button{
  width:510px;
  height:67px;
  position:absolute;
  top:495px;
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
    height:50px;
    position absolute;
    top:147px;
    left:114px;
    border: 1px solid darkslategray;
    font-size: inherit;
  }
}
`
export default Slider