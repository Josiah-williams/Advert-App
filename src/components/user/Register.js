import React from 'react';
import { Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import { useHistory, withRouter} from "react-router-dom"
// import {axiosWithAuth} from "../../utils/axios"
import axios from "axios"
import styled from "styled-components";
// import AboutPage from './AboutPage';
import {
  tabletPortrait,
  tabletLandscape,
  mobilePortrait,
  mobileLandscape,
  FlexFunc,
  tabletPortraitLarge,} 
from "../../styles/theme.styles"

const Container = styled.div`
  display: flex;
`;
const Column = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 49%;
`;
const RegForm = styled.div`
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
    top:54%;
    left: 47%;
`;



export function Register(props) {
    const history = useHistory();
    function handleSubmit(values, actions) {
        console.log(values);
        axios
          .post(
            `/api/auth/register`,
            values, {headers:{"Content-Type": "application/json"}}
            )
            
          .then(response => {
            history.push("/login");
    
            console.log(response.data);
    
            actions.resetForm();
          })
          .catch(error => console.log(error.res))
          .finally(() => {
            console.log("done");
          });
      }
    
    
    return (
      <Formik
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      initialValues={initialState}
    >
      <RegForm>
      <Form className="form-container">
        <h1 className="card--title">Greenhood adv sign up</h1>
        <label className="form--label">
          <Field
            required
            type="text"
            id="firstname"
            name="firstname"
            className="form--input"
          />{" "}
          <span className="input--label">First name</span>
          <ErrorMessage name="first name" component="div" className="error" />
        </label>
        <label className="form--label">
          <Field
            required
            type="text"
            id="lastname"
            name="last name"
            className="form--input"
          />
          <span className="input--label">Last name</span>
          <ErrorMessage name="lastname" component="div" className="error" />
        </label>
        <label className="form--label">
          <Field
            required
            type="text"
            id="email"
            name="email"
            className="form--input"
          />
          <span className="input--label">email</span>
          <ErrorMessage
            name="email"
            component="div"
            className="error"
          />
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
        <button type="submit" className="button-primary button-big">
          Continue
        </button>
      </Form>
      </RegForm>
    </Formik>
  );
}
const validationSchema =Yup.object().shape({
    first_name:  Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required("Please enter your  first name"),
    last_name:  Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required("Please enter your last name"),
    email:  Yup.string().email('Invalid email').required("Please enter your email"),
    password: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required("Please enter password"),
})

const initialState = {
  first_name: "",
  last_name: "",
  email: "",
  password:"",
}
export default withRouter(Register);
