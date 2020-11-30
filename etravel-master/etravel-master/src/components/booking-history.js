import './login.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import HotelComp from './hotel-component'


import React, { useState } from "react";
import Axios from "axios";
var hotel = [];


export default function BookingHistory() {
  const [data,setData] = useState(null);


  const bookingHistory = () => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:5000/user/checkLogIn",
    }).then((res) => {

        if(res.data === "Please Log In"){
        alert('Please Log In first');
        window.location = "/login";
        }
        else{

          Axios({method:"GET", url : "http://localhost:5000/user/bookingHistory",
        }).then((res) => {

          hotel = res.data;
          setData(hotel);
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