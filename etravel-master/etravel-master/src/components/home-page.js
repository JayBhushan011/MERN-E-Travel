import React, { Component } from 'react'
import './home-page.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carous from '../carousel'

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="./home-page.component.css"></div>
        <Carous/>
      </div>
    )
  }
}