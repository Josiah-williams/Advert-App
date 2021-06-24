import React from 'react';
import { Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import { useHistory,NavLink, withRouter} from "react-router-dom"
import axiosWithAuth from "../../utils/axios"
// import axios from "axios"
import styled from "styled-components";
import logo from "../../icons/123924428_705557600377412_3955865959784530213_n.jpg";
// import AboutPage from './AboutPage';
import {
  mobilePortrait,
} 
from "../../styles/theme.styles"

const Logo3 = styled.div`
.logo {
  z-index: 1;
  padding-top: 37px;
  position: absolute;
  top: -199px;
  left:-243px;
  height:100px;
  width:117px;
  @media ${mobilePortrait} {
    z-index: 1;
    padding-top: 36px;
    height: 94px;
    width: 100px;
    margin-left:236px;
    margin-top:25px;
    .img {
      position: sticky;
      top: 0;
    }
  }
}
`;
const Button1 = styled.div`
.button-primary {
  font-family: Montserrat, sans-serif;
  font-size: 20px;
  color: #1f2041;
  background: linear-gradient(180deg, #A3E335 0%, #8ba4f9 100%);
  vertical-align: middle;
  border-radius: 7px;
  border: 1px solid #A3E335;
  color: white;
  position: relative;
  z-index: 1;
  top:-5px;
  width:134%;
  cursor: pointer;

  @media ${mobilePortrait} {
    width:110%;
}
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
  top: 57%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media ${mobilePortrait} {
    top:54%;
    left: 47%;
    position:fixed;
  }
  h2{
    font-size:19px;
    margin-top:-199px;
    margin-right:-705px;
    color:white;
  
  @media ${mobilePortrait} {
    padding-left:40px;
    display:none
  }
}
  h3{
    border:2px solid #A3E335;
    background:#A3E335;
    color:white;
    cursor:pointer;
    border-radius:5px;
    font-size:19px;
    text-transform: unset;
    width:70px;
    height:29px;
    margin-top:-32px;
    position: relative;
    left: 509px;

    @media ${mobilePortrait} {
      margin-left:-293px;
      margin-top:-163px;
  }
  }
  h1{
    @media ${mobilePortrait} {
      font-size:21px;
      margin-left:17px;
  }
`;



export function Register(props) {
    const history = useHistory();
    function handleSubmit(values, actions) {
      console.log(values)
        axiosWithAuth()
          .post(
            `/api/auth/register`,
            values, {headers:{"Content-Type": "application/json"}}
            )
            
          .then(response => {
            localStorage.setItem("token", response.data.token);
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
      initialValues={initialState}>
      {({handleSubmit, values}) => (
            <RegForm>
            <Form className="form-container">
           <Logo3>
            <div className="logo-div">
          <img src={logo} className="logo" alt ="" />
          <h2>Already have an account?</h2><NavLink className="B-link" to="/login" replace><h3>Log in</h3></NavLink>
          </div>
          </Logo3>
              <h1 className="card--title">Greenhood adv sign up</h1>
              <label className="form--label">
                <Field
                  required
                  type="text"
                  id="first_name"
                  name="first_name"
                  className="form--input"
                  values={values.first_name}
                />
                <span className="input--label">First name</span>
                <ErrorMessage name="first name" component="div" className="error" />
              </label>
              <label className="form--label">
                <Field
                  required
                  type="text"
                  id="last_name"
                  name="last_name"
                  className="form--input"
                  values={values.last_name}
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
                  values={values.email}
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
                  values={values.password}
                />
                <span className="input--label">Password</span>
                <ErrorMessage name="password" component="div" className="error" />
              </label>
              <Button1>
              <button onClick={handleSubmit} type="submit" className="button-primary button-big">
                Continue
              </button>
              </Button1>
            </Form>
            </RegForm>
            )       
    }
  
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
  first_name: '',
  last_name: '',
  email: '',
  password: '',
}
export default withRouter(Register);
