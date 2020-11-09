import React, { Component } from 'react'
import './book-hotels.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default class BookingFlights extends Component {
    constructor(props){
        super(props)
            
            this.handleChange1 = this.handleChange1.bind(this)
            this.handleChange2 = this.handleChange2.bind(this)
            this.onChangeLocation = this.onChangeLocation.bind(this)
            this.onChangeNumber = this.onChangeNumber.bind(this)

            this.state = {
              startDate: new Date(),
              endDate: new Date(),
              location:'',
              number:1
            }

            this.onSubmit=this.onSubmit.bind(this)
    }

    handleChange1(date) {
        this.setState({
          startDate: date
        })
      }

      handleChange2(date) {
        this.setState({
          endDate: date
        })
      }

      onChangeLocation(e){
        this.setState({location:e.target.value})
      }

      onChangeNumber(e){
        this.setState({number:e.target.value})
      }

      onSubmit(e){
          e.preventDefault()
          window.location='/flights'
          const bookflight = {checkin:this.state.startDate,checkout:this.state.endDate,location:this.state.location,number:this.state.number}
          console.log(bookflight)
      }

  render() {
    return (
        <div>
          <div className="./book-hotels.css"></div>
            <div className="box">
             <div className="arrange">
              <h1 className="subheading">JAS Travels</h1>
              <h3>Book Hotels</h3>
              <form onSubmit={this.onSubmit}>
              <div>
              <label className="mr-sm-2" name="location" for="Location">Location *</label>
              <div className="form-row align-items-center">
              <div className="col-auto my-1">
              <select className="custom-select mr-sm-2" onChange={this.onChangeLocation} required>
                <option selected disabled value="">Where are you going?</option>
                <option value="Delhi">Delhi (DEL)</option>
                <option value="Hyderabad">Hyderabad (HYD)</option>
                <option value="Bengaluru">Bengaluru (BGL)</option>
                <option value="Chennai">Chennai (CHE)</option>
                <option value="Mumbai">Mumbai (BOM)</option>
                <option value="Kolkata">Kolkata (CAL)</option>
               </select>
               </div>
               </div>
                <div className="row">
                  <div className="col">
                    <label>Check In Date *</label>
                    <br/>
                    <DatePicker required selected={this.state.startDate} showMonthDropdown startDate={this.state.startDate} onChange={this.handleChange1} showYearDropdown name="startdate" dateFormat="dd/MM/yyyy" selectsStart startDate={this.state.startDate} endDate={this.state.endDate} placeholder="Departure Date"/>
                  </div>
                    <div className="col">
                      <label>Check Out Date *</label>
                      <DatePicker required selected={this.state.endDate} showMonthDropdown className="calendar" endDate={this.state.endDate} onChange={this.handleChange2} showYearDropdown name="enddate" dateFormat="dd/MM/yyyy" selectsEnd startDate={this.state.endtDate} endDate={this.state.endDate} minDate={this.state.startDate} placeholder="Arrival Date"/>
                    </div>
                  </div>
                </div>
                <br/>
                <div className="center">
                  <label for="Numofpassengers">Number of passengers *</label>
                    <div className="col-auto my-1">
                      <input required type="number" id="numpassengers" name="numpassengers" min="1" max="20" onChange={this.onChangeNumber}></input>
                    </div>
                  </div>
                <br/>
                  <button type="submit" value="register" class="btn btn-primary">Search Hotels</button>
                </form>
              </div>
            </div>
          </div>
    )
  }
}