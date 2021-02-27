import React, { useState, useEffect,useContext} from "react";
import UserAdvert from "./user/UserAdvert";
import styled from "styled-components";
import { userContext } from "../context/userContext"

export default function UserDashboard() {
  const adverts = useContext(userContext);
  const [advertlist, getadverts] = useState([])
  useEffect(() => {
    getadverts()
  }, [adverts])
  console.log(adverts)
  if (!adverts) { return null }
return (
  <div>
    <h2>your adverts</h2> 


     {adverts.map(advert => {
        return (
          <div>
          
          <h4>{advert.advertName}</h4>
          <h4>{advert.websiteUrl}</h4>
          <h4>{advert.country}</h4>
          <h4>{advert.tags}</h4>
          <h4>{advert.date}</h4>
          <h4>{advert.dateString}</h4>
          <h4>{advert.days}</h4>
          </div>
          
        );
       
     }
     )}  
  </div>
     
)
    
      
         
      
}
  