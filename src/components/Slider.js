import React, { useRef } from "react"
import useSlider from "../hooks/useSlider"
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons'
import Footer from "../components/user/footer"
import { useHistory} from "react-router-dom"
import styled from "styled-components";
import {
  tabletPortrait,
  tabletLandscape,
  mobilePortrait,
  mobileLandscape,
  FlexFunc,
  tabletPortraitLarge,} 
  from "../styles/theme.styles"

const Slider = ({ images }) => {
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
  background-color:#A3E335;
  color:white;
  border-radius:5px;
  cursor: pointer;
  border: 1px solid #A3E335;
}
@media ${mobilePortrait} {
  .click-button{
    width:127px;
    height:50px;
    position absolute;
    top:239px;
    left:106px;
    border: 1px solid #A3E335;

  }
}
`
export default Slider