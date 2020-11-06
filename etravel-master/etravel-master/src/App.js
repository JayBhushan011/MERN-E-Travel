import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/navbar"
import HomePage from "./components/home-page"
import ManageBooking from "./components/manage-booking"
import Login from "./components/login"
import LoggedIn from "./components/loggedin"
import SignUp from "./components/sign-up"
import BookFlights from "./components/book-flights"
import Flights from "./components/flights"
 
function App() {
 return (
   <Router>
    <NavBar/>
    <Route path="/" exact component={HomePage} />
    <Route path="/manage-booking" exact component={ManageBooking}/>
    <Route path="/login" exact component={Login}/>
    <Route path="/loggedin" exact component={LoggedIn}/>
    <Route path="/sign-up" exact component={SignUp}/>
    <Route path="/book-flights" exact component={BookFlights}/>
    <Route path="/flights" exact component={Flights}/>
   </Router>
 );
}
 
export default App;