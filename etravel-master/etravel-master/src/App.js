import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/navbar"
import HomePage from "./components/home-page"
import Login from "./components/login"
import SignUp from "./components/sign-up"
import BookHotels from "./components/book-hotels"
import BookingHistory from "./components/booking-history"
import Search from './components/search'
import BookFlights from "./components/book-flights"

function App() {
 return (
   <Router>
    <NavBar/>
    <Route path="/" exact component={HomePage} />
    <Route path="/login" exact component={Login}/>
    <Route path="/sign-up" exact component={SignUp}/>
    <Route path="/book-hotels" exact component={BookHotels}/>
    <Route path="/bookingHistory" exact component={BookingHistory}/>
    <Route path="/search" exact component={Search}/>
    <Route path="/book-flights" exact component={BookFlights}/>
   </Router>
 );
}

export default App;
