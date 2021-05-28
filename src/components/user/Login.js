import React, { useState } from "react";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import Styled from 'styled-components';
import logo from "../../icons/123924428_705557600377412_3955865959784530213_n.jpg";
// import {axiosWithAuth} from "../../utils/axios"
import axios from 'axios'
import styled from "styled-components";
import { Switch, Route, Link,NavLink, useHistory,withRouter } from "react-router-dom";
import {
  tabletPortrait,
  tabletLandscape,
  mobilePortrait,
  mobileLandscape,
  FlexFunc,
  tabletPortraitLarge,} 
from "../../styles/theme.styles"

const Button = styled.div`
.button-primary{
  @media ${mobilePortrait} {
   margin-top:18px;
}
}
.button-big{
  max-width: 320px;
    width: 136%;
    min-width: 240px;
    height: 44px;
  @media ${mobilePortrait} {
    width:110%
}
}
`
const Card = styled.div`
.card--title{
    font-size: 24px;
    color: #1f2041;
    display: block;
    text-align: start;
    margin-bottom: 35px;
    margin-left: 36px;
    @media ${mobilePortrait} {
      font-size:22px;
      margin-left:22px;
  }
}
`
const Logo2 = styled.div`
.logo {
  z-index: 1;
  padding-top: 37px;
  position: absolute;
  top: -189px;
  left:109px;
  height:136px;
  width:117px;
  @media ${mobilePortrait} {
    z-index: 1;
    padding-top: 36px;
    height: 118px;
    width: 95px;
    .img {
      position: sticky;
      top: 0;
    }
  }
}
h1{
  font-size: 24px;
  margin-left:76px;
  margin-top:-94px;
  @media ${mobilePortrait} {
    margin-top:-114px;
    font-size:20px;
}
}
`;
const FormDiv =Styled.div`
.form-container {
  position: relative;
  max-width: 380px;
  min-width: 300px;
  width: 90%;
  height:64%;
  padding: 40px 30px 30px;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  margin: 20px 10px;
  display: flex;
  flex-flow: row wrap;
  justify-content: start;
  position: absolute;
  top: 61%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media ${mobilePortrait} {
    left:47%
}
h2{
  font-size:19px;
  @media ${mobilePortrait} {
    font-size:15px
}
}
.B-link{
  color:#A3E335;
  font-size:19px;
  margin-left:6px;
  cursor: pointer;
  font-weight: unset;
  @media ${mobilePortrait} {
    position:relative;
    top: -37px;
    left:187px;
}
}
`;

export function Login(props) {
    const history = useHistory();
    
    function handleSubmit(values, actions) {
      console.log(values);
      axios
         .post(
           `/api/auth/login`, values, {headers:{"Content-Type": "application/json"}}
        )
        .then(res =>{
        localStorage.setItem("token", res.data.token);
        actions.resetForm();
        history.push(`/info`);
        })
        .catch(err => {
        console.log(err);
        })
        .finally(() => {
          console.log("login sucessful")
        });
      };
    
    function handleType() {
      setType(!type);
    }
  
    return (
      
      <Formik
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        initialValues={initialState}
      >
        <FormDiv>
        <Form className="form-container">
       <Logo2>
        <div className="logo-div">
          <img src={logo} className="logo" />
          <h1>Greenhood</h1>
          </div>
          </Logo2>
          <Card>
          <h1 className="card--title">Log in to your account </h1>
          </Card>
          <label className="form--label">
            <Field
              required
              type="text"
              name="email"
              required
              className="form--input"
            />
            <span className="input--label">email</span>
            <ErrorMessage name="email" component="div" className="error" />
          </label>
          <label className="form--label">
            <Field
              required
              type="password"
              id="password"
              name="password"
              className="form--input"
            />
            <span className="input--label">Password</span>
            <ErrorMessage name="password" component="div" className="error" />
          </label>
          <Button>
          <button className="button-primary button-big" id="button" type="submit">
            Log In
          </button>
          </Button>
          <h2>New to Greenhood Adverts?</h2> <NavLink className="B-link" to="/Register" replace><u>
          Sign Up
          </u></NavLink>
        </Form>
        </FormDiv>
      </Formik>
      
    );
  }
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("please enter your email"),
    password: Yup.string().required("please enter a password")
  });

  const initialState = {
    email: "",
    password: ""
  };


export default withRouter(Login);