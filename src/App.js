import React, { useEffect } from "react";
import { Switch, Route, Link, NavLink, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {  logout, } from "./state/actionCreators";
import Login from "./components/user/Login"
import Register from "./components/user/Register"
import "./CSS/App.css"
import Navbar from "./components/user/Navbar"
import Promotion from "./components/AdvertForm"
import Images from './components/images'
import Slider from './components/Slider'
import AppForm from './components/AppForm'
// import privateRoute from "../../utils/privateRoute";
import Date from "./components/user/Date";
import TagsInput from "./components/user/TagsInput"
// import './App.css'
import Svg from "./components/AppinfoContainer";

function App({ appState, user, checkToken, logout }) {
  
  const history = useHistory();
  useEffect(() => {
  }, []);
  return (
    <div className="App">
    <Navbar appState={appState} user={user} logout={logout} />

    <div className="container">
    <Switch>
    <Route exact path="/">
    <Slider images={Images}/>
          </Route>
      <Route exact path="/login">
        <Login />
      </Route>
        <Route exact path ="/Register">
          <Register />
          </Route>
          <Route exact path="/promotion">
            <Promotion />
          </Route>
          <Route exact path="/appform">
            <AppForm />
          </Route>
          <Route exact path="/date">
            <Date />
            </Route>
          <Route exact path="/tags">
            <TagsInput />
            </Route>
            <Route exact path="/home">
            <Svg />
            </Route>

          </Switch>
          </div>
          </div>

  );
}
function mapStateToProps(state) {
  return {
    appState: state.appState,
    user: state.user
  };
}
export default connect(mapStateToProps, { logout })(App);