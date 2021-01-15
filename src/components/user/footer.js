import React from 'react';
import styled from 'styled-components';
import { mobilePortrait, mobileLandscape } from '../../styles/theme.styles';

const StyledDiv = styled.div`
  background: #528E6F;
  display: flex;
  padding: 10px 5px 15px 5px;
  justify-content: center;
  color: #ffffff;
  margin-top: 20px;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 2.5rem; /* Footer height */
  align-items: center;
  @media ${mobilePortrait} {
    height: 2.7rem;
    margin-top: 0;
  }

  a {
    margin: 0 1rem;
    transition: transform 250ms;
    display: inline-block;
    color: #ffffff;
  }

  a:hover {
    transform: translateY(-3px);
  }
  .copy-right {
    margin-right: 16%;
  }
  .tagline {
    text-align: left;
    margin-right: 15%;
  }
    .tagline {
      margin-right: 10%;
    }
    .copy-right {
      margin-right: 10%;
    }
  }
    .tagline {
      margin-right: 5%;
    }
    .copy-right {
      margin-right: 5%;
    }
  }
    .tagline {
      margin-right: 3.5%;
    }
    .copy-right {
      margin-right: 3.5%;
    }
    a {
      margin: 0 0.5rem;
    }
    font-size: 14px;
  }
  @media only screen and (max-width: 705px) {
    .tagline {
      /* display: none; */
      position: absolute;
      width: 104vw;
      background-color: #528E6F;
      color: white;
      bottom: 39px;
      height: 267px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      /* @media ${mobileLandscape} {
        bottom: 39px;
      } */
    }
    a {
      margin: 0 1rem;
    }
    justify-content: space-evenly;
  }
  @media only screen and (max-width: 400px) {
    a {
      margin: 0 0.4rem;
      font-size: 12px;
    }
  }
  @media only screen and (max-width: 359px) {
    a {
      margin: 0 0.2rem;
      font-size: 10px;
    }
  }
`;

export default function Footer() {
  return (
    <StyledDiv>
      <div className="tagline">
        Built by Greenhood ads
      </div>
      <div className="copy-right"> &copy; 2020 Greenhood</div>
    </StyledDiv>
  );
}
