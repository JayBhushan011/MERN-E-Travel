import React, { Component } from 'react'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import HotelComp from './hotel-component'
import HotelsData from './hoteldata'

export default function Hotels(){
  const hotelComponents = HotelsData.map(hotel=><HotelComp key={hotel.id} name={hotel.name} country={hotel.country} imgurl={hotel.imgurl} url={hotel.url} location={hotel.location} address={hotel.address} rating={hotel.rating} ratingcount={hotel.ratingcount} price={hotel.price}/>)
    return (
      <div>
        <div className="./hotel-component.css"></div>
        {hotelComponents}
      </div>
    )
}