import React, { useState } from "react";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import Styled from 'styled-components';
import {axiosWithAuth} from "../../utils/axios"
import { Switch, Route, Link, useHistory,withRouter } from "react-router-dom";
import {
  tabletPortrait,
  tabletLandscape,
  mobilePortrait,
  mobileLandscape,
  FlexFunc,
  tabletPortraitLarge,} 
from "../../styles/theme.styles"


const FormDiv =Styled.div`
.form-container {
  position: relative;
  max-width: 380px;
  min-width: 300px;
  width: 90%;
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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media ${mobilePortrait} {
    left:47%
}

`;

export function Login(props) {
    const history = useHistory();
    
    function handleSubmit(values, actions) {
      console.log(values);
      axiosWithAuth()
         .post(
           `${process.env.REACT_APP_BACKEND_URL}/api/auth/login`, 
           credentials)
        .then(res =>{
        localStorage.setItem("token", res.data.token);
        actions.resetForm();
        history.push(`/AppinfoContainer`);
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
          <h1 className="card--title">Login</h1>
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
          <button className="button-primary button-big" id="button" type="submit">
            LOGIN
          </button>
        </Form>
        </FormDiv>
      </Formik>
      
    );
  }
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("please enter your name"),
    password: Yup.string().required("please enter a password")
  });

  const initialState = {
    username: "",
    password: ""
  };


export default withRouter(Login);