import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

export default class LoggedIn extends Component {
  render() {
    return (
      <div>
          <h3>Congratulations, you have succesfully Logged in!</h3>
      </div>
    )
  }
}