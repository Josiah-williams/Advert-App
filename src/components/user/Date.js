import React, { Component, useState, useRef } from 'react';
import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons'
import styled from 'styled-components'
import {
  tabletPortrait,
  tabletLandscape,
  mobilePortrait,
  mobileLandscape,
  FlexFunc,
  tabletPortraitLarge,} 
  from "../../styles/theme.styles"

const DayIncrement = props => {
  return <div className="day-container">
      <label htmlfor="days">Days</label> 
       <Button1 onClick={props.IncrementItem}><PlusCircleOutlined /></Button1>
        <Button2 onClick={props.DecreaseItem}><MinusCircleOutlined /></Button2>
       
        {
      /* <button onClick={this.ToggleClick}>
       { this.state.show ? 'Hide number' : 'Show number' }
      </button> */
    }
        {props.show ? <H2>{props.clicks}</H2> : ''}
      </div>;
};

const Button1 = styled.div`
  display: flex;
  flex-direction: row;
  gap:16px;
  position: absolute;
  right:243px;
  top:420px;
  font-size: 20px;

  @media ${mobilePortrait}{
    position: absolute;
    right:227px;
    font-size: 27px;
  }
`
const H2 = styled.div`
  position:absolute;
  left:40px;  
  top:423px;
`
const Button2 = styled.div`
display: flex;
flex-direction: row;
position: absolute;
right:272px;
top:420px;
font-size: 20px;

@media ${mobilePortrait}{
  position: absolute;
  right:259px;
  font-size: 27px;
}
`
export default DayIncrement;
