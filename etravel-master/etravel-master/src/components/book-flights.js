import React, { Component } from 'react'
import './book-hotels.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'
import FlightComp from './FlightComp'

export default class BookingHotels extends Component {
    constructor(props){
        super(props)

        this.onChangeoriginLocation = this.onChangeoriginLocation.bind(this)
        this.onChangedestinationLocation = this.onChangedestinationLocation.bind(this)
        this.onChangedepartureDate = this.onChangedepartureDate.bind(this)
        this.onChangenumberOfAdults = this.onChangenumberOfAdults.bind(this)
        this.onChangenonStop = this.onChangenonStop.bind(this)



            this.state = {
              originLocation : "",
              destinationLocation : "",
              departureDate : "",
              numberOfAdults : "",
              nonStop: "",
              finalinfo: []

            }

            this.onSubmit=this.onSubmit.bind(this)
    }



      onChangeoriginLocation(e){
        this.setState({originLocation:e.target.value})
      }
      onChangedestinationLocation(e){
        this.setState({destinationLocation:e.target.value})
      }
      onChangedepartureDate(e){
        this.setState({departureDate:e.target.value})
      }
      onChangenumberOfAdults(e){
        this.setState({numberOfAdults:e.target.value})
      }
      onChangenonStop(e){
        this.setState({nonStop:e.target.value})
      }



      onSubmit(e){
          e.preventDefault()
          const searchinfo={originLocation: this.state.originLocation,
                          destinationLocation: this.state.destinationLocation,
                          departureDate: this.state.departureDate,
                          numberOfAdults: this.state.numberOfAdults,
                          nonStop: this.state.nonStop}
          axios.post('http://localhost:5000/flights',searchinfo)
          .then(res=>res.data)
          .then(this.buildlist)
          .catch()
          console.log(this.state.finalinfo);
      }


      buildlist=(data)=>{
        this.setState({finalinfo:data})
      }

      redirect(e){
        e.preventDefault()
        axios({
          method: "GET",
          withCredentials: true,
          url: "http://localhost:5000/user/checkLogIn",
        }).then((res) => {
          if(res.data === "Please Log In"){
            alert(' Please Log In first ');
            window.location = "/login";
          }
          else{
            const hotelBooked = {hotelBooked : "5fba1b311930e90ec6c1088a"}
            axios.post('http://localhost:5000/user/addToHistory',hotelBooked)
            .then(res=>res.data)
            alert('Your reservation is confirmed. You will get a confirmation email');
          }
        });

      }

  render() {
    return (

      <div>
                <div className="./login.css"></div>
                  <div className="container">
                  <h3>Search Flights</h3>
                  <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                       <label>Origin Location: </label>
                         <input type="text" required className="form-control"
                         placeholder="Origin Location"
                         onChange={this.onChangeoriginLocation}/>
                    </div>
                    <div className="form-group">
                      <label>Destination Location: </label>
                      <input type="text" required className="form-control"
                      placeholder="Destination Location"
                      onChange={this.onChangedestinationLocation}/>
                    </div>

                    <div className="form-group">
                       <label>Departure Date (YYYY-MM-DD) </label>
                         <input type="text" required className="form-control"
                         placeholder="Departure Date"
                         onChange={this.onChangedepartureDate}/>
                    </div>

                    <div className="form-group">
                       <label>Number Of Adults </label>
                         <input type="text" required className="form-control"
                         placeholder="Number Of Adults"
                         onChange={this.onChangenumberOfAdults}/>
                    </div>

                    <div className="form-group">
                       <label>Non-Stop (True/False) </label>
                         <input type="text" required className="form-control"
                         placeholder=" Non Stop "
                         onChange={this.onChangenonStop}/>
                    </div>



                    <div className="form-group">
                      <button type="submit" className="btn btn-primary">Submit</button>








                    </div>
                    </form>

                    {this.state.finalinfo.map(flight=><FlightComp originLocationCode={flight.originLocationCode} destinationLocationCode={flight.destinationLocationCode} numberOfBookableSeats={flight.numberOfBookableSeats} numberOfStops={flight.numberOfStops} price={flight.price}/>)}
                  </div>
                </div>

            )}};











// import './book-flights.css'
// import 'jquery/dist/jquery.min.js'
// import 'bootstrap/dist/js/bootstrap.min.js'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import React, { useState } from "react";
// import Axios from "axios";
// import Table from 'react-bootstrap/Table'
// import RenderData from './FlightComp'
// var data = [];
//
//
//
//
// function BookFlights() {
//
//   const [loginUsername, setLoginUsername] = useState("");
//   const [loginPassword, setLoginPassword] = useState("");
//   const [departureDate, setDepartureDate] = useState("");
//   const [numberOfAdults, setNumberOfAdults] = useState("");
//   const [nonStop, setNonStop] = useState("");
//
//
//   const login = () => {
//     Axios({
//       method: "POST",
//       data: {
//         originLocation: loginUsername,
//         destinationLocation: loginPassword,
//         departureDate: departureDate,
//         numberOfAdults: numberOfAdults,
//         nonStop: nonStop
//       },
//       withCredentials: true,
//       url: "http://localhost:5000/flights",
//     }).then(res => {
//     res.data.forEach(function(object){
//       data.push(object)
//     });
//   });
//   // console.log(data);
//
//   };
//
//
//   return (
//
//     <div>
//           <div className="./login.css"></div>
//             <div className="container">
//             <h3>Search Flights</h3>
//
//               <div className="form-group">
//                  <label>Origin Location: </label>
//                    <input type="text" required className="form-control"
//                    placeholder="Origin Location"
//                    onChange={(e) => setLoginUsername(e.target.value)}/>
//               </div>
//               <div className="form-group">
//                 <label>Destination Location: </label>
//                 <input type="text" required className="form-control"
//                 placeholder="Destination Location"
//                 onChange={(e) => setLoginPassword(e.target.value)}/>
//               </div>
//
//               <div className="form-group">
//                  <label>Departure Date (YYYY-MM-DD) </label>
//                    <input type="text" required className="form-control"
//                    placeholder="Number of Adults"
//                    onChange={(e) => setDepartureDate(e.target.value)}/>
//               </div>
//
//               <div className="form-group">
//                  <label>Number Of Adults </label>
//                    <input type="text" required className="form-control"
//                    placeholder="Number Of Adults"
//                    onChange={(e) => setNumberOfAdults(e.target.value)}/>
//               </div>
//
//               <div className="form-group">
//                  <label>Non-Stop (True/False) </label>
//                    <input type="text" required className="form-control"
//                    placeholder=" Non Stop "
//                    onChange={(e) => setNonStop(e.target.value)}/>
//               </div>
//
//
//
//               <div className="form-group">
//                 <button onClick={ function(event){ login()} } className="btn btn-primary">Submit</button>
//                 {console.log(data)}
//                 {data.map(flight=><RenderData originLocationCode={flight.originLocationCode} destinationLocationCode={flight.destinationLocationCode} numberOfBookableSeats={flight.numberOfBookableSeats} numberOfStops={flight.numberOfStops} price={flight.price}/>)}
//
//                 <Table striped bordered hover variant="dark" className="table">
//                     <thead>
//                       <tr>
//                         <th> Origin Location Code </th>
//                         <th> Destination Location Code </th>
//                         <th> Number Of Bookable Seats </th>
//                         <th> Price </th>
//                         <th> Number Of Stops </th>
//                         <th> Non Stop </th>
//                       </tr>
//                     </thead>
//                     <tbody>
//
//
//
//                     </tbody>
//                   </Table>
//
//
//
//
//               </div>
//             </div>
//           </div>
//   );
// }
//
// export default BookFlights;
