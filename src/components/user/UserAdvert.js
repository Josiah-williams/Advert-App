import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";

const UserAdvert = props => {
        return (
            <Link to={`/UserDashboard`}>
              <div className="item-card-container">
              <StyledForm className="styled-card">
              <h4>{props.item.advertName}</h4>
          <h4>{props.advert.websiteUrl}</h4>
          <h4>{props.advert.country}</h4>
          <h4>{props.advert.tags}</h4>
          <h4>{props.advert.date}</h4>
          <h4>{props.advert.dateString}</h4>
          <h4>{props.advert.days}</h4>
        </StyledForm>
        </div>
    </Link>
  );
};

const mapStateToProps = state => {
    return {
      };
    };
    export default connect(mapStateToProps)(
        UserAdvert
      );
  const StyledForm = styled.div`
  border: 1px solid black;
  box-shadow: 0px 0px 22px -1px rgba(87, 81, 87, 0.65);
  background-color:#CFDEF3;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  align-self: flex-start;
  max-width: 350px;
  margin: 20px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 5px 1px 20px grey;
  font-size: 1.1rem;
  transition: 0.5s;
  color: black;
  img {
    width: 100%;
  }
  &:hover {
    transform: scale(1.05);
  }
`;
const StyledButton = styled.button`
  padding: 8px 8px;
  background-color: #2da561;
  color: #fff;
  width: 30%;
  border: 1px solid #2da561;
  padding: 0.6rem;
  line-height: 1;
  background-color: 250ms;
  margin: 30 40 40 0;
  border-radius: 2px;
  font-size: 1rem;
  display: flex-box;
  justify-content: space-between;
  @media screen and (max-width: 500px) {
    text-align: center;
    margin: 0 auto;
    font-size: 1.5rem;
  }
  :hover {
    cursor: pointer;
    background-color: white;
    color: #2da562;
    border: 1px solid #2da562;
  }`