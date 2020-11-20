import React, { Component } from 'react'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import './hotel-component.css'

export default function HotelComp(props){
  return(
      <div className="container">
          <div className="./hotel-component.css"></div>
          <div className="arrange">
          <div className="row">
              <div className="column">
                  <a href={props.imgurl}><img src={props.imgurl} alt="Hotel Room" className="image"/></a>
              </div>
              <div className="column">
              <a href={props.url}><h3 className="name">{props.name}</h3></a>
              <span className="country">{props.country}</span>
              <br/>
              <span className="location">{props.location}</span>
              <br/>
              <span className="address">{props.address}</span>
              <br/>
              <br/>
              <span>⭐️ {props.rating} ({props.ratingcount})</span>
              </div>
              <div className="column" id="shift">
              <button className="btn btn-primary">Book now</button>
              <br/>
              <span className="price">₹ {props.price} /per night</span>
              </div>
              </div>
          </div>
      </div>
  )
 }