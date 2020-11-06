import React, { Component } from 'react'
import "./manage-booking.css"
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

export default class ManageBooking extends Component {
  constructor(props) {
    super(props);

    this.onChangeLastname = this.onChangeLastname.bind(this);
    this.onChangePnrno = this.onChangePnrno.bind(this);
    this.onChangeTicketno = this.onChangeTicketno.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      lastname: '',
      pnrno: 0,
      ticketno: 0
    }
  }

  onChangeLastname(e) {
    this.setState({
      lastname: e.target.value
    });
  }

  onChangePnrno(e) {
    this.setState({
      pnrno: e.target.value
    });
  }

  onChangeTicketno(e) {
    this.setState({
      ticketno: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
  
    const user = {
      lastname: this.state.lastname,
      pnrno: this.state.pnrno,
      ticketno: this.state.ticketno,
      };
  
    console.log(user);
    
    window.location = '/'
  }

  render() {
    return (
      <div>
          <div className="./manage-booking.css"></div>
        <h3>Manage Booking</h3>
        <form onSubmit={this.onSubmit} className="container">
          <div className="form-group"> 
                <label>Lastname: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.lastname}
                    onChange={this.onChangeLastname}
                />
          </div>
          <div className="form-group">
            <label>Booking reference: </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.pnrno}
                onChange={this.onChangePnrno}
                />
          </div>
          <div className="form-group">
            <label>Ticket Number: </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.ticketno}
                onChange={this.onChangeTicketno}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Retrieve Booking" className="btn btn-primary BUTTON_WHZ" />
          </div>
        </form>
      </div>
    )
  }
}