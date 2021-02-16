import React, {Component} from "react";
import { NavLink, useHistory } from "react-router-dom";
import styled from "styled-components";
import Examples from "./Countries"
import Calender from "../components/user/Calender"
import TagsInput from "../components/user/TagsInput";
import DayIncrement from "../components/user/Date";
import {getAdverts} from  "../state/actionCreators";
import {connect} from "react-redux"
import '../styles.css';
import {
  tabletPortrait,
  tabletLandscape,
  mobilePortrait,
  mobileLandscape,
  FlexFunc,
  tabletPortraitLarge,} 
from "../styles/theme.styles"

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
        margin-top:31px
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
class AdvertForm extends Component {
  constructor(props) {
    super(props)
    let today = new Date();
    this.state = {
      clicks: 0,
      show: true,
      advertName: '',
      websiteUrl: '',
      country: '',
      tags: '',
      days: '',
      date: '',
      dateString: `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`,
    };
  }
  handleOnchange = (e) => {
    this.setState({[e.target.name]:e.target.value})

  }
  handleSubmit(event) {
    event.preventDefault();
  }


  handleDatepickerChange = event => {
    const elementRef = document.querySelector('.date-display')
    elementRef.textContent = event.target.value
    const selectedDate = new Date(event.target.value)
    const today = new Date()

    let numberOfDays = Math.round((selectedDate - today) / (1000 * 3600 * 24))
    this.setState({ clicks: numberOfDays })
  }

  changeDate = clicks => {
    const today = new Date()
    const newDateInMilliseconds = (clicks * 1000 * 3600 * 24) + today.getTime()
    const newDate = new Date(newDateInMilliseconds)
    const newDay = newDate.getDate()
    const newMonth = newDate.getMonth()
    const newYear = newDate.getFullYear()

    this.setState({ dateString: `${newYear}-${newMonth + 1}-${newDay}` })
  }

  IncrementItem = () => {
    this.setState(state => {
      return { clicks: state.clicks + 1 }
    }, () => this.changeDate(this.state.clicks))
  }

  DecreaseItem = () => {
    this.setState(state => {
      return { clicks: state.clicks - 1 }
    }, () => this.changeDate(this.state.clicks))
  }
  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  }
  render() {
    const Logout = e => {
      localStorage.removeItem("token");
    }
    const selectedTags = tags => console.log(tags);
  return (
      <div className="nav">
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
      <h1 className="card--title">Promote your website</h1>
        <>
        <form onSubmit={this.handleSubmit}>
            <label className="form--label">
              <input
              required
              type="text" 
              id="Advert name" 
              name="advertName" 
              value= {this.state.advertName}
              onChange= {this.handleOnchange}
              className="form--input" 
              />
              <span className="input--label">Advert name</span>
              </label>
              <label className="form--label">
              <input 
              required
              type="text" 
              id="website url" 
              name="websiteUrl" 
              value= {this.state.websiteUrl}
              onChange= {this.handleOnchange}
              className="form--input"
              />
              <span className="input--label">Website Url</span>
              </label>
              <label htmlFor="country">Country</label>
              <Examples
                id="country"
                name="country"
                value= {this.state.country}
                className="form--input"
              />
              <label htmlFor="tags">tags</label>
              <TagsInput selectedTags={selectedTags}
                id="tags"
               name="tags"
               value= {this.state.tags}
              />
                <Label htmlFor="Duration">Choose when this ad will end</Label>
                <Div>
                  {
            }
              <DayIncrement IncrementItem={this.IncrementItem} 
              DecreaseItem={this.DecreaseItem} 
              clicks={this.state.clicks} show={this.state.show} 
              name="date"
              value= {this.state.date}
              />
                {
            }
              <Calender dateString={this.state.dateString} datePickerHandler={this.handleDatepickerChange} 
              name="calender"
              value= {this.state.dateString} 
              />
              </Div>
              <label className="form--label">
              <input 
              required
              type="text" 
              id="days"
              value= {this.state.days}
              onChange= {this.handleOnchange}
              name="days" 
              className="form--input"
              />
              <span className="input--label">How many to run per day</span>
               </label>
               <button className="button-primary button-big" id="button" type="submit" onClick={() => history.push("/payment")}>
            Submit
          </button>
            
            </form>
            </>
      </div>
    </StyledAdd>
    </div>
    )

}
}

const mapStateToProps = (state) => {
  return {
    dashboard: state.dashboard
  }
}

const Div = styled.div `
  width: 101%;
  display: flex;
  justify-content: space-between;
  margin-top:9px;
  margin-bottom:10px;

  & .date-display{
      display: grid;
      place-items: center;
      margin-top: auto;
  }
  
  & .date-container{
    display:flex;
    width: 49%;
    height: 50px; 
    margin: unset;
    border: 2px solid #BAC0B1;
    border-radius: 5px;
    background-color: #fff;
    padding: 3px 5px;
    box-shadow: inset 0 3px 6px rgba(0,0,0,0.1);

    label{
      margin-top:1px;
      position: absolute
    }
  }
  & input[type="date"] {
    width: 39%;
    height: 40px; 
    margin: unset;
    border:none;
    padding: 3px 5px;
    background: none;
    box-shadow: none;
 
  }
  & .day-container{
    display:flex;
    width: 40%;
    height: 50px; 
    margin: unset;
    border: 2px solid #BAC0B1;
    border-radius: 5px;
    background-color: #fff;
    padding: 3px 5px;
    box-shadow: inset 0 3px 6px rgba(0,0,0,0.1);

    

  }
  `

const Label = styled.div`
  margin-top:20px;
  margin-left:-46px;
  `
const StyledAdd = styled.div`
.form-container {
  position: relative;
  max-width: 400px;
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

  
    .form--label .input--label {
      position: absolute;
      top: 0px;
      left:7px;
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
      margin-bottom:24px;
      margin-top:10px;
      position: relative;
      right:-4px;
      max-width:344px;
    }
  @media ${mobilePortrait} {
    position:absolute;  
    top:59%;
    left: 48%;
    width:382px;
    height:595px;
}
  @media ${mobilePortrait} {
  .button-primary{
    position: absolute;
    top:90%;
    left:34px;
  }
  @media ${mobilePortrait} {
    form{
      margin-bottom:500px;
    }
}
 `;   
export default connect(mapStateToProps, { getAdverts }) (AdvertForm);