import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './book-flights.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default class BookingFlights extends Component {
    constructor(props){
        super(props)
            
            this.handleChange1 = this.handleChange1.bind(this)
            this.handleChange2 = this.handleChange2.bind(this)
            this.changeHandler1 = this.changeHandler1.bind(this)
            this.changeHandler2 = this.changeHandler2.bind(this)
            this.onChangeFrom = this.onChangeFrom.bind(this)
            this.onChangeTo = this.onChangeTo.bind(this)
            this.onChangeNumber = this.onChangeNumber.bind(this)

            this.state = {
              startDate: new Date(),
              endDate: new Date(),
              isRadioSelected: true,
              isSelected1: true,
              from:'',
              to:'',
              number:1
            }

            this.onSubmit=this.onSubmit.bind(this)
    }

    changeHandler1(){
        this.setState({isRadioSelected:false}) //https://stackoverflow.com/questions/56170568/how-to-link-a-text-field-with-a-radio-button
    }

    changeHandler2(){
        this.setState({isSelected1:false})
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

      onChangeFrom(e){
        this.setState({from:e.target.value})
      }

      onChangeTo(e){
        this.setState({to:e.target.value})
      }

      onChangeNumber(e){
        this.setState({number:e.target.value})
      }

      onSubmit(e){
          e.preventDefault()
          //window.location='/flights'
          const bookflight = {OneWay:this.state.isRadioSelected,depdate:this.state.startDate,arrdate:this.state.endDate,from:this.state.from,to:this.state.to,number:this.state.number}
          console.log(bookflight)
      }

  render() {
    return (
        <div>
          <div className="./book-flights.css"></div>
            <div className="box">
             <div className="arrange">
              <h1 className="subheading">JAS Airways</h1>
              <h3>Book Flights</h3>
              <form onSubmit={this.onSubmit}>
                <div className="row">
                  <div className="col">
                    <label><input type="radio" name="trip" required/> One Way</label>
                  </div>
                  <div className="col">
                  <label className="radio"><input type="radio" name="trip" onChange={this.changeHandler1} required/> Round Trip</label>
                </div>
              </div>
              <div>
                <div className="row">
                  <div className="col">
                    <label>Departure Date *</label>
                    <br/>
                    <DatePicker required selected={this.state.startDate} showMonthDropdown startDate={this.state.startDate} placeholderText="Departure Date" onChange={this.handleChange1} showYearDropdown name="startdate" dateFormat="dd/MM/yyyy" selectsStart startDate={this.state.startDate} endDate={this.state.endDate} placeholder="Departure Date"/>
                  </div>
                    <div className="col">
                      <label>{this.state.isRadioSelected ? 'Not required':'Arrival Date *'}</label>
                      <DatePicker disabled={this.state.isRadioSelected} selected={this.state.endDate} showMonthDropdown className="calendar" placeholderText="Arrival Date" endDate={this.state.endDate} onChange={this.handleChange2} showYearDropdown name="enddate" dateFormat="dd/MM/yyyy" selectsEnd startDate={this.state.endtDate} endDate={this.state.endDate} minDate={this.state.startDate} placeholder="Arrival Date"/>
                    </div>
                  </div>
                </div>
              <br/>
              <div className="row">
                <div className="col">
                  <div className="form-row align-items-center">
                    <div className="col-auto my-1">
                      <label className="mr-sm-2" name="location1" for="From">From *</label>
                      <select className="custom-select mr-sm-2" onChange={this.onChangeFrom} required>
                        <option selected>From</option>
                        <option onChange={this.changeHandler2} value="Delhi">Delhi (DEL)</option>
                        <option value="Hyderabad">Hyderabad (HYD)</option>
                        <option value="Bengaluru">Bengaluru (BGL)</option>
                        <option value="Chennai">Chennai (CHE)</option>
                        <option value="Mumbai">Mumbai (BOM)</option>
                        <option value="Kolkata">Kolkata (CAL)</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="form-row align-items-center">
                    <div className="col-auto my-1">
                      <label className="mr-sm-2" name="location2" for="to">To *</label>
                        <select className="custom-select mr-sm-2" onChange={this.onChangeTo} required>
                          <option selected>To</option>
                          <option disabled={this.state.isSelected1} value="Delhi">Delhi (DEL)</option>
                          <option value="Hyderabad">Hyderabad (HYD)</option>
                          <option value="Bengaluru">Bengaluru (BGL)</option>
                          <option value="Chennai">Chennai (CHE)</option>
                          <option value="Mumbai">Mumbai (BOM)</option>
                          <option value="Kolkata">Kolkata (CAL)</option>
                        </select>
                      </div>
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
                  <button type="submit" value="register" class="btn btn-primary">Search Flights</button>
                </form>
              </div>
            </div>
          </div>
    )
  }
}