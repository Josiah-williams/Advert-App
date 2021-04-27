import React from "react";
import * as emailjs from 'emailjs-com';
import { Field, Label, Control, Input, Button, Icon, Textarea, Notification } from 'rbx';
import { Formik, Form, ErrorMessage} from 'formik';
import styled from "styled-components";
import ImageUpload from "../assets/ImageUpload"
import Popup from "../components/user/popup"
import { NavLink, useHistory } from "react-router-dom";
import {
  tabletPortrait,
  tabletLandscape,
  mobilePortrait,
  mobileLandscape,
  FlexFunc,
  tabletPortraitLarge,} 
from "../styles/theme.styles"

const Label2 = styled.div`
margin-bottom:-11px
`
const Link2Link = styled.div`
width: 100%;
.navbar-container {
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position:absolute;
    right:1px;
    top:11px;
    padding: 5px;
    background: #528E6F;

    ul {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 10px;
      
      @media ${mobilePortrait} {
        z-index: 1;
        padding-top: 10px;
        margin-top:-13px;
        padding-right:0px
      }
    }
    }
      li {
        padding: 0 15px;

       


      }
    }
  }
}
.logo-div {
  @media ${mobilePortrait} {
    z-index: 1;
    padding-top: 10px;
    .img {
      position: sticky;
      top: 0;
    }
  }
}

.nav--button {
  .plain-text();
  text-transform: capitalize;
  border: none;
  background: none;
  transition: color 0.3s ease-in-out;
  font-weight: bold;
  &:hover,
  &:focus {
    color: @nav-item-highlight;
  }
}
.nav--links {
  .plain-text();
  text-decoration: none;
  text-transform: capitalize;
  background: none;
  font-weight: bold;
  color:#F9FAF9;
  
  &:hover,
  &:focus,
  &.active {
    color: #A3E335;
  }
}
}
.nav--link {
  .plain-text();
  text-decoration: none;
  text-transform: capitalize;
  border: none;
  background: none;
  font-weight: bold;
  color:  #F9FAF9;

  &:hover,
  &:focus,
  &.active {
    color: #A3E335;
  }
}

@media ${tabletPortrait} {
  background-position: -180px 50px;
}
@media ${tabletLandscape} {
  background-position: bottom left;
}
@media ${mobileLandscape} {
  background-image: none;
}
@media ${mobilePortrait} {
  background-image: none;
  display: flex;
  flex-direction: column;
}
`;
class Appform extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    appName: '',
    url: '',
    color: '',
    logo:'',
    message: '',
    loading: false,
    popupMessage: '',
    popupIsOpen: false,
    responseStatus: false
  };

  this.handleSubmit = this.handleSubmit.bind(this);
  this.resetForm = this.resetForm.bind(this);
  this.handleChange = this.handleChange.bind(this);
}

handleSubmit(event) {
  event.preventDefault();
  const {appName,url,color,logo,message,loading,popupMessage,popupIsOpen,responseStatus} = this.state;
  const templateParams ={
    from_appName: appName,
    from_url: url,
    from_color: color,
    from_logo:logo,
    to_name: '/*YOUR NAME OR COMPANY*/',
    subject,
    message_html: message,
  };
  emailjs.send(
    'gmail',
    'template_jediij5',
    templateParams,
   'user_8HB9F6zF1rnuKuXUiyaHw'
 )
 this.resetForm();
};
  
resetForm() {
  this.setState({
    appName: '',
    url: '',
    color: '',
    logo:'',
  });
  }

  handleChange = (e) => {
    this.setState({[e.target.name]:e.target.value})

  }
  closeFeedback = () => {
    this.setState({feedbackIsOpen:false })
  }
  render() {
    const Logout = e => {
    localStorage.removeItem("token");
    };
    const { appName, url, color, logo, message, loading, popupMessage, popupIsOpen, responseStatus, sentMessage } = this.state;
    return (
      <div className="app">
      <Link2Link>
        <header className="navbar-container">
        <nav>
          <div className="logo-div">
          </div>
         
          <ul className="right-navbar">
            <li>
              <NavLink className="nav--link" to="/UserDashboard" replace>
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink className="nav--links" onClick={Logout} to="/login" replace>
                Log Out
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      </Link2Link>
    <StyledAdd>
      <div className="form-container">   
      <h1 className="card--title">Create your App</h1>       
        <>
        <form onSubmit={this.handleSubmit}>
            <label className="form--label">
              <input
                required
                type="text"
                id="App Name"
                name="appName"
                value= {appName}
                onChange= {this.handleChange}
                className="form--input"
              />
              <span className="input--label">App name</span>
              <Label2 htmlFor="itemForm__description">logo</Label2>
              </label>
              <ImageUpload
               type="image"
               id="logo"
               name="logo"
               value={logo}
               className="form--input"
              />
              <label className="form--label">
              <input
                required
                type="text"
                id="url"
                name="url"
                value= {url}
                onChange= {this.handleChange}
                className="form--input"
                />
                <span className="input--label">Url</span>
                </label>
                <label className="form--label">
              <input
                required
                type="text"
                id="color"
                name="color"
                value= {color}
                onChange= {this.handleChange}
                className="form--input"
              />
              <span className="input--label">Color</span>
               </label>
               <button type="submit" className="button-primary button-big">
          submit
        </button>
              
            </form>
          
            <Popup 
            flag={this.state.responseStatus}
            messsage={this.state.feedbackMessage}
            handleclick={this.closeFeedback}
            isOpen={this.state.feedbackIsOpen}
          />
          </>
      </div>
    </StyledAdd>
    </div>
    )
  }
}


const StyledAdd = styled.div`
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

    .form--label .input--label {
      position: absolute;
      top: 0px;
      left:5px;
      transition: top 0.3s ease-in-out, left 0.3s ease-in-out, color 0.3s ease-in-out;
      pointer-events: none;
    }

    .form--input:focus ~ .input--label,
    .form--input:valid ~ .input--label,
    .form--input:hover ~ .input--label {
      top: -30px;
      left: 5px;
      color: rgba(31, 32, 65, 0.75);
}
    .form--input{
      margin-bottom:10px;
      margin-top:-12px;
    }
  @media ${mobilePortrait} {
    top:58%;
    left: 47%;
}
`;
      
export default Appform