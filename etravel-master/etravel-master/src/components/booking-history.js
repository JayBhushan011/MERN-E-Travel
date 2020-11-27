// import React, { Component } from 'react'
// import axios from 'axios'

import './login.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import HotelComp from './hotel-component'


import React, { useState } from "react";
import Axios from "axios";



function BookingHistory() {
  const [data, setData] = useState(null);
  var hotel = [];

  const bookingHistory = () => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:5000/user/checkLogIn",
    }).then((res) => {

        if(res.data === "Please Log In"){
        alert(' Please Log In first ');
        window.location = "/login";
        }
        else{

          Axios({method:"GET", url : "http://localhost:5000/user/bookingHistory",
        }).then((res) => {
          console.log(res.data);
          hotel = res.data;
          console.log(hotel);

      })
    }
    
  });
}


  return (
    <div>
              <div className="form-group">
                <button onClick={bookingHistory} className="btn btn-primary"> See your booking history </button>
                {hotel.map(hotel=><HotelComp key={hotel.id} name={hotel.name} country={hotel.country} imgurl={hotel.imgurl} url={hotel.url} location={hotel.location} address={hotel.address} rating={hotel.rating} ratingcount={hotel.ratingcount} price={hotel.price}/>)}
              </div>
            </div>
  );
}

export default BookingHistory;

//
// export default class Login extends Component {
//     constructor(props){
//         super(props)
//
//         this.onChangeUsername=this.onChangeUsername.bind(this)
//         this.onChangePassword=this.onChangePassword.bind(this)
//         this.onSubmit=this.onSubmit.bind(this)
//
//         this.state={username:'',password:''}
//     }
//
//     onChangeUsername(e){
//         this.setState({username:e.target.value})
//     }
//
//     onChangePassword(e){
//         this.setState({password:e.target.value})
//     }
//
//     onSubmit(e){
//         e.preventDefault()
//
//         const user={username:this.state.username,password:this.state.password}
//         axios.post('http://localhost:5000/user/login',user)
//           .then(res=>console.log(res.data))
//
//         //window.location='/loggedin'
//     }
//
//   render() {
//     return (
//     <div>
//       <div className="./login.css"></div>
//         <form onSubmit={this.onSubmit} className="container">
//         <h3>Log in</h3>
//           <div className="form-group">
//              <label>Username: </label>
//                <input type="text" required className="form-control" value={this.state.username} onChange={this.onChangeUsername}/>
//           </div>
//           <div className="form-group">
//             <label>Password: </label>
//             <input type="password" className="form-control" value={this.state.password} onChange={this.onChangePassword}/>
//           </div>
//           <div className="form-group">
//             <input type="submit" value="Login" className="btn btn-primary" />
//           </div>
//         </form>
//       </div>
//     )
//   }
// }
