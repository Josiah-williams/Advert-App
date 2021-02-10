import * as types from "./actionTypes";
import {axiosWithAuth} from "../utils/axios";
import axios from "axios"

export const changeHandler = e => dispatch => {
	dispatch({
	  type: types.INPUT_CHANGE,
	  payload: [e.target.name, e.target.value]
	});
  };
  
//login
export const login = (credentials, history) => dispatch => {
	dispatch({ type: types.LOGIN_START });
	   axiosWithAuth()
	   .post(
		   "/auth/login", 
		   credentials)
	  .then(res =>{
		dispatch({ type: types.LOGIN });
		localStorage.setItem("token", res.data.token);
		history.push(`/home`);
	  })
	  .catch(err => {
		console.log(err);
	  })
	  .finally(() => {
		  console.log("login sucessful")
		dispatch({ type: types.LOGIN_END });
	  });
  };

  //logoout
export const logout = history => dispatch => {
	localStorage.removeItem("token");
	localStorage.removeItem("user");
	localStorage.removeItem("type")
	dispatch({ type:types.LOG_OUT})
	history.push("/login");
  };
export const addadverts = () => dispatch => {
	function handleSubmit(credentials, setCredentials) {
    console.log(credentials, setCredentials)
    credentials.user_id = 1;
    axiosWithAuth()
      .post(
        "/api/auth/addAdverts",
        credentials
      )
      .then(res => {
        setNewitemId(res.data);
		setCredentials.resetForm();
		history.push("/UserDashboard")
		
		dispatch({
			type: types.POST_ADVERTS_SUCCESS,
			payload: response.data
		  });
		})
      .catch(error => {
		console.log(error.message);
		dispatch({
			type: types.POST_ADVERTS_FAILURE,
			payload: error.response.data.Error
		  });
      })
      .finally(() => {
        setCredentials.setSubmitting(false);
      })}};