import React, {Component} from 'react'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import HotelComp from './hotel-component'
import HotelData from './hoteldata'
import axios from 'axios'

export default class Search extends Component{
    constructor(props){
        super(props)
        this.onChange=this.onChange.bind(this)
        this.state={search:''}
    }
    redirect(e){
        e.preventDefault()
        axios({
          method: "GET",
          withCredentials: true,
          url: "http://localhost:5000/user/checkLogIn",
        }).then((res) => {
          if(res.data === "Please Log In"){
            alert(' Please Log In first ');
            window.location = "/login";
          }
          else{
            const hotelBooked = {hotelBooked : "5fba1b311930e90ec6c1088a"}
            axios.post('http://localhost:5000/user/addToHistory',hotelBooked)
            .then(res=>res.data)
            alert('Thank you for choosing JAS Travels');
          }
        })};

    onChange(e){
        this.setState({search:e.target.value})
        }
        render(){
            const {search}=this.state
            const filteredHotels=HotelData.filter(hotel=>{return hotel.name.toLocaleLowerCase().indexOf(search.toLocaleLowerCase())!==-1})// Used https://www.youtube.com/watch?v=RM_nXOyHwN0
        return(
            <div className="flyout">
            <div className="container">
              <h3>Search</h3>
                <div className="form-group">
                <input onChange={this.onChange} value={this.state.search} className="form-control" type="search" placeholder="Search Hotels"/>
            </div>
            </div>
            {filteredHotels.map(hotel=><HotelComp key={hotel.id} name={hotel.name} country={hotel.country} imgurl={hotel.imgurl} url={hotel.url} location={hotel.location} address={hotel.address} rating={hotel.rating} ratingcount={hotel.ratingcount} price={hotel.price} redirect={this.redirect}/>)}
            </div>
        )
    }
}