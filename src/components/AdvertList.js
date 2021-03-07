import React from "react";
import { axiosWithAuth } from "./src/utils/axios";
import { withRouter } from "react-router-dom";
import UserDashboard from "./UserDashboard"

class advertList extends React.Component {
    constructor() {
        super()

        this.state = {
            adverts: [],
            advertsUpdate: {
                clicks: 0,
                show: true,
                advertName: '',
                websiteUrl: '',
                country: '',
                tags: '',
                days: '',
                date: '',
                dateString: `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`,
            },
                currentId: null,
                curentUserId: null,


        }
    }

    setadverts = () => {
        this.setState({ adverts: this.state.adverts})
    }
  
    setadvertsUpdate = () => {
        this.setState({advertsUpdate: this.state.advertsUpdate})
    }
  
    setcurrentId = () => {
        this.setState({ currentId: this.state.currentId})
    }
  
    setcurrentUserId = () => {
        this.setState({currentUserId: this.state.setcurrentUserid})
    }

    componentDidUpdate(prevState){
        axiosWithAuth()
        .get(`${process.env.REACT_APP_BACKEND_URL}/api/adverts`)
      .then(resp => {
        this.setadverts(resp.data);
      });
  } [adverts];

  deleteAdverts = ({ id }) => {
    axiosWithAuth()
      .delete(
        `${process.env.REACT_APP_BACKEND_URL}/api/adverts/delete/${id}`
      )
      .then(resp => {
        alert(resp.data.message);
      })
      .catch(err => {
        debugger;
      });
  };
  
  updateAdvert = advert => {
      setcurrentId(advert.id)
      setcurrentUserid(advert.user_id)
  };

  handleSubmit = e => {
      e.preventDefault();
      axiosWithAuth()
      .put(
        `${process.env.REACT_APP_BACKEND_URL}/api/adverts/update/${id}`,
        itemsUpdate
      )

      .then(resp => {
        setcurrentId(null);
      })
      .catch(err => {
        debugger;
      });
  };


  handleChange = e => {
      setadvertsUpdate({ ...advertsUpdate, [e.target.name]: e.target.value });
  };

  obj = {
      adverts: this.state.adverts,
      updateAdvert: this.updateAdvert,
      deleteAdverts: this.deleteAdverts,
      currentId: this.currentId,
      handleSubmit: this.handleSubmit,
      advertsUpdate: this.advertsUpdate,
      handleChange: this.handleChange
  };
  
  render () {
      return (
          <div>
              <userContext.Provider value={obj}>
                <UserDashboard />
              </userContext.Provider>
          </div>
      );
  } 


  } 
  export default withRouter(advertList);
