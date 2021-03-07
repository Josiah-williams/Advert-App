import React, { useState, useEffect,useContext} from "react";
import UserAdvert from "./user/UserAdvert";
import styled from "styled-components";
import { userContext } from "../context/userContext"
import {
  tabletPortrait,
  tabletLandscape,
  mobilePortrait,
  mobileLandscape,
  FlexFunc,
  tabletPortraitLarge,} 
from "../styles/theme.styles"

export default function UserDashboard() {
  const adverts = useContext(userContext);
  const [advertlist, getadverts] = useState([])
  useEffect(() => {
    getadverts()
  }, [])
  console.log(adverts)
  if (!adverts) { return null }
  return (
  <div>
    
    {adverts.map(advert => {
        return (
          <div key={advert.id}>
          <h2>your adverts</h2> 
          <h4>{advert.advertName}</h4>
          <h4>{advert.websiteUrl}</h4>
          <h4>{advert.country}</h4>
          <h4>{advert.tags}</h4>
          <h4>{advert.date}</h4>
          <h4>{advert.dateString}</h4>
          <h4>{advert.days}</h4>
          <div>
            <button onClick={() => useContext.updateAdvert(advert)}>
              Update
            </button>
            </div>
            <div>
              {" "}
              <button onClick={() => useContext.deleteAdvert(advert)}>
                Delete
              </button>
            </div>
            {useContext.currentId ? (
              <div>
                 <StyledAdd>
      <div className="form-container">
      <h1 className="card--title">Promote your website</h1>
        <>
        <form onSubmit={context.onSubmit}>
            <label className="form--label">
              <input
              required
              type="text" 
              id="Advert name" 
              name= {"advertName"} 
              value= {context.updateAdvert.advertName}
              onChange= {context.onChangeChange}
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
              value= {context.updateAdvert.websiteUrl}
              onChange= {context.handleChange}
              className="form--input"
              />
              <span className="input--label">Website Url</span>
              </label>
              <label htmlFor="country">Country</label>
              <Examples
                id="country"
                name="country"
                value= {context.updateAdvert.country}
                className="form--input"
              />
              <label htmlFor="tags">tags</label>
              <TagsInput selectedTags={selectedTags}
                id="tags"
               name="tags"
               value= {context.updateAdvert.tags}
              />
                <Label htmlFor="Duration">Choose when context ad will end</Label>
                <Div>
                  {
            }
              <DayIncrement IncrementItem={context.IncrementItem} 
              DecreaseItem={context.DecreaseItem} 
              clicks={context.updateAdvert.clicks} show={context.updateAdvert.show} 
              name="date"
              value= {context.updateAdvert.date}
              />
                {
            }
              <Calender dateString={context.updateAdvert.dateString} datePickerHandler={context.handleDatepickerChange} 
              name="calender"
              value= {context.updateAdvert.dateString} 
              />
              </Div>
              <label className="form--label">
              <input 
              required
              type="text" 
              id="days"
              value= {context.updateAdvert.days}
              onChange= {context.handleChange}
              name="days" 
              className="form--input"
              />
              <span className="input--label">How many to run per day</span>
               </label>
               <button className= "button-primary button-big" id= "button" type= "submit" onClick={() => history.push("/payment")}>
            Update
          </button>
            
            </form>
            </>
      </div>
    </StyledAdd>
         </div>
            ) : (
              <div></div>
            )}
         </div>
  )
 })}
    </div>
  )
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