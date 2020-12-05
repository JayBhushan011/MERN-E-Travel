import React, { Component, useState } from 'react';
import './navbar.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import Axios from 'axios'

export default class Navbar extends Component{
  constructor(props){
    super(props)
    this.state={username:''}
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount(){
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:5000/user/get",
    }).then(res=>this.setState({username:res.data.username}))
    document.body.style.backgroundColor = "#fbeec1"
  }
  handleClick(){
    Axios({
      method:"GET",
      withCredentials:true,
      url:"http://localhost:5000/user/logout",
    }).catch()
  }
  render(){
    return (
      <div className="component">
        <div className="main">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">{/*Used these components from using bootstrap*/}
            <div className="./navbar.component.css"></div>
            <div className="navlogo"><a href="/"><img src="logo.png" width="30%" alt="JAS Logo"></img></a><p className="navlogotext">JAS</p></div>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item dropdown active">
                  <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Contact</a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a className="dropdown-item" href="/cncs">Contact and Customer Support</a>{/*https://getbootstrap.com/docs/4.0/components/dropdowns/*/}
                      <a className="dropdown-item" href="/faqs">FAQs</a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="/feedback">Feedback</a>
                    </div>
                </li>
                <li class="nav-item active">
                <a class="nav-link" href="/">Home<span class="sr-only">(current)</span></a>
              </li>
                <li class="nav-item active">
                  <a class="nav-link" href="/book-hotels">Book Hotels<span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link" href="/book-flights">Book Flights<span class="sr-only">(current)</span></a>
                </li>
                {/*<li class="nav-item active">
                  <a class="nav-link" href="/bookingHistory">Booking History<span class="sr-only">(current)</span></a>
    </li>*/}
                <li className="nav-item active">
                  <a className="nav-link" href="/search">Search<span className="sr-only">(current)</span></a>
                </li>
              </ul>

              <ul className="navbar-nav ml-auto">
              <li class="nav-item active">
                  <a class="nav-link" href="/login">Log In<span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link" href="/sign-up">Sign Up<span class="sr-only">(current)</span></a>
                </li>

                <li className="nav-item dropdown active">
                  <a  className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link" href="/">{typeof(this.state.username)==='string'&& this.state.username.length>0 &&'Welcome '+ this.state.username}<span className="sr-only">(current)</span></a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" onClick={this.handleClick} href="/">Log out</a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
       </div>
      </div>
)
}
}
