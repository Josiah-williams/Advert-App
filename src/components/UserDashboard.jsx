import React, { useState, useEffect} from "react";
import { connect } from "react-redux";
import  * as actionCreators  from "./state/actionCreators";
import UserAdvert from "./user/UserAdvert";
import styled from "styled-components";

export function UserDashboard({ adverts }) {
    }
return (
      <>

        <h1>your adverts</h1> 

        {
        adverts.map(advert => (
          <UserAdvert
            key={advert.id} 
            advert={advert}
          />
        ))}

        

        
  </>
    )



   export default connect(
    function mapStateToProps(state) {
      console.log(state);
    },
    actionCreators
  )(UserDashboard); 