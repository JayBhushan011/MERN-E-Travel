import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/navbar"
import HomePage from "./components/home-page"
import ManageBooking from "./components/manage-booking"
import Login from "./components/login"
import LoggedIn from "./components/loggedin"
import SignUp from "./components/sign-up"
import BookHotels from "./components/book-hotels"
import BookingHistory from "./components/booking-history"

function App() {
 return (
   <Router>
    <NavBar/>
    <Route path="/" exact component={HomePage} />
    <Route path="/manage-booking" exact component={ManageBooking}/>
    <Route path="/login" exact component={Login}/>
    <Route path="/loggedin" exact component={LoggedIn}/>
    <Route path="/sign-up" exact component={SignUp}/>
    <Route path="/book-hotels" exact component={BookHotels}/>
    <Route path="/bookingHistory" exact component={BookingHistory}/>

   </Router>
 );
}

export default App;
