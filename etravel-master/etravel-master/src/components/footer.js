import React, { Component } from 'react'
import './home-page.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

export default class Footer extends Component{
    render(){
        return(
        <div>
            <footer className="bottom-container">
          <p className="structure">
            <a className="footer-link" href="/">Playstore</a>
            <a className="footer-link" href="/">Twitter</a>
            <a className="footer-link" href="/">Facebook</a>
            <a className="footer-link" href="/">Instagram</a>
          </p>
          <h6>All donations towards the Prime Minister's National Relief Fund (PMNRF) are notified for 100% deduction from taxable income under Section 80G of the Income Tax Act, 1961.</h6>
          <h6>Copyright © 2020 JAS Ltd. All rights reserved.</h6>
        </footer>
            </div>)
    }
}