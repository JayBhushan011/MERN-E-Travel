
import React, { Component } from 'react'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import './FlightComponent.css'


export default function FlightComp(props){
  return(
      <div className="container">
          <div className="./hotel-component.css"></div>
          <div className="arrange">
          <div className="row">

              <div className="column">
              <h3 className="name">{props.originLocationCode} to {props.destinationLocationCode}</h3>
              <span className="country">Bookable Seats: {props.numberOfBookableSeats}</span>
              <br/>
              <span className="location">Stops : {props.numberOfStops}</span>
              <br/>

              </div>
              <div className="column" id="shift">
              <button onClick={props.redirect} type="submit" value="book" className="btn btn-primary">Book now</button>
              <br/>
              <span className="price">₹ {props.price*89}</span>
              </div>
              </div>
          </div>
      </div>
  )
  }
