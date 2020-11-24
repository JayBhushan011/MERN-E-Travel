import React, { Component } from 'react'
import './book-hotels.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'
import HotelComp from './hotel-component'

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
              number:1,
              finalinfo:[]
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
          const searchinfo={location:this.state.location,checkin:this.state.startDate,checkout:this.state.endDate,number:this.state.number}
          axios.post('http://localhost:5000/hotel/search',searchinfo)
          .then(res=>res.data)
          .then(this.buildlist)
          .catch()
      }

      buildlist=(data)=>{
        console.log(data)
        this.setState({finalinfo:data})
      }
  render() {
    return (
        <div>
          <div className="./book-hotels.css"></div>
            <div className="box container">
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
                <option value="Addison">Addison</option>
                <option value="Adjuntas">Adjuntas</option>
                <option value="Akasaka">Akasaka</option>
                <option value="Alcobendas">Alcobendas</option>
                <option value="Amsterdam">Amsterdam</option>
                <option value="Anasco">Anasco</option>
                <option value="Asakusa">Asakusa</option>
                <option value="Azabujuban">Azabujuban</option>
                <option value="Bal Harbour">Bal Harbour</option>
                <option value="Bali">Bali</option>
                <option value="Baltimore">Baltimore</option>
                <option value="Banyuwedang">Banyuwedang</option>
                <option value="Barbera del Valles">Barbera del Valles</option>
                <option value="Barcelona">Barcelona</option>
                <option value="Barking">Barking</option>
                <option value="Bass Hill">Bass Hill</option>
                <option value="Bavaro">Bavaro</option>
                <option value="Bedford Park">Bedford Park</option>
                <option value="Beijing">Beijing</option>
                <option value="Berlin">Berlin</option>
                <option value="Bivigliano">Bivigliano</option>
                <option value="Blankenfelde">Blankenfelde</option>
                <option value="Bondi">Bondi</option>
                <option value="Boqueron">Boqueron</option>
                <option value="Boston">Boston</option>
                <option value="Boulogne-Billancourt">Boulogne-Billancourt</option>
                <option value="Branson">Branson</option>
                <option value="Burlingame">Burlingame</option>
                <option value="Bussum">Bussum</option>
                <option value="Caguas">Caguas</option>
                <option value="Caldes de Montbui">Caldes de Montbui</option>
                <option value="Calella">Calella</option>
                <option value="Calistoga">Calistoga</option>
                <option value="Callantsoog">Callantsoog</option>
                <option value="Cancun">Cancun</option>
                <option value="Candidasa">Candidasa</option>
                <option value="Cap Cana">Cap Cana</option>
                <option value="Carmel">Carmel</option>
                <option value="Castelldefels">Castelldefels</option>
                <option value="Castle Hill">Castle Hill</option>
                <option value="Catonsville">Catonsville</option>
                <option value="Cerdanyola del Valles">Cerdanyola del Valles</option>
                <option value="Champaign">Champaign</option>
                <option value="Chatswood">Chatswood</option>
                <option value="Chessy">Chessy</option>
                <option value="Chicago">Chicago</option>
                <option value="Chingford">Chingford</option>
                <option value="Chiyoda">Chiyoda</option>
                <option value="Clermont">Clermont</option>
                <option value="Coogee">Coogee</option>
                <option value="Coral Gables">Coral Gables</option>
                <option value="Corbera de Llobregat">Corbera de Llobregat</option>
                <option value="Cornella de Llobregat">Cornella de Llobregat</option>
                <option value="Cuautitlan Izcalli">Cuautitlan Izcalli</option>
                <option value="Culebra">Culebra</option>
                <option value="Cutler Ridge">Cutler Ridge</option>
                <option value="Dallas">Dallas</option>
                <option value="Daytona Beach">Daytona Beach</option>
                <option value="Daytona Beach Shores">Daytona Beach Shores</option>
                <option value="Dolo">Dolo</option>
                <option value="Dorado">Dorado</option>
                <option value="Doral">Doral</option>
                <option value="Dubai">Dubai</option>
                <option value="Dublin">Dublin</option>
                <option value="Eastern Creek">Eastern Creek</option>
                <option value="Edgecliff">Edgecliff</option>
                <option value="Edgware">Edgware</option>
                <option value="Edogawa">Edogawa</option>
                <option value="El Prat de Llobregat">El Prat de Llobregat</option>
                <option value="Esperanza">Esperanza</option>
                <option value="Esplugues de Llobregat">Esplugues de Llobregat</option>
                <option value="Fajardo">Fajardo</option>
                <option value="Farmers Branch">Farmers Branch</option>
                <option value="Florence">Florence</option>
                <option value="Florida">Florida</option>
                <option value="Flushing">Flushing</option>
                <option value="Frankfurt">Frankfurt</option>
                <option value="Gava">Gava</option>
                <option value="Ginza">Ginza</option>
                <option value="Gretna">Gretna</option>
                <option value="Griesheim">Griesheim</option>
                <option value="Guayanilla">Guayanilla</option>
                <option value="Haberfield">Haberfield</option>
                <option value="Hana">Hana</option>
                <option value="Hawaii">Hawaii</option>
                <option value="Hialeah Gardens">Hialeah Gardens</option>
                <option value="Hoenow">Hoenow</option>
                <option value="Hollister">Hollister</option>
                <option value="Hong Kong">Hong Kong</option>
                <option value="Honolulu">Honolulu</option>
                <option value="Indianapolis">Indianapolis</option>
                <option value="Isabela">Isabela</option>
                <option value="Isla de Vieques">Isla de Vieques</option>
                <option value="Isla Verde">Isla Verde</option>
                <option value="Istanbul">Istanbul</option>
                <option value="Kabukicho">Kabukicho</option>
                <option value="Kahului">Kahului</option>
                <option value="Kapalua">Kapalua</option>
                <option value="Katwoude">Katwoude</option>
                <option value="Kedewatan">Kedewatan</option>
                <option value="Kendall">Kendall</option>
                <option value="Kerobokan">Kerobokan</option>
                <option value="Kihei">Kihei</option>
                <option value="Kissimmee">Kissimmee</option>
                <option value="Kojimachi">Kojimachi</option>
                <option value="La Garriga">La Garriga</option>
                <option value="La Jolla">La Jolla</option>
                <option value="Lahaina">Lahaina</option>
                <option value="Las Vegas">Las Vegas</option>
                <option value="Lavern">Lavern</option>
                <option value="Legian">Legian</option>
                <option value="Lido di Ostia">Lido di Ostia</option>
                <option value="Lido di Venezia">Lido di Venezia</option>
                <option value="Linthicum Heights">Linthicum Heights</option>
                <option value="Lloret de Mar">Lloret de Mar</option>
                <option value="London">London</option>
                <option value="Los Angeles">Los Angeles</option>
                <option value="Madrid">Madrid</option>
                <option value="Martorell">Martorell</option>
                <option value="Marunouchi">Marunouchi</option>
                <option value="Mascot">Mascot</option>
                <option value="Mayaguez">Mayaguez</option>
                <option value="Memphis">Memphis</option>
                <option value="Meolo">Meolo</option>
                <option value="Mexico City">Mexico City</option>
                <option value="Miami">Miami</option>
                <option value="Miami Beach">Miami Beach</option>
                <option value="Miami Gardens">Miami Gardens</option>
                <option value="Miami Lakes">Miami Lakes</option>
                <option value="Miami Springs">Miami Springs</option>
                <option value="Milford Mill">Milford Mill</option>
                <option value="Mississauga">Mississauga</option>
                <option value="Molins de Rei">Molins de Rei</option>
                <option value="Mollet del Valles">Mollet del Valles</option>
                <option value="Montreal">Montreal</option>
                <option value="Morfelden-Walldorf">Morfelden-Walldorf</option>
                <option value="Napa">Napa</option>
                <option value="Naucalpan">Naucalpan</option>
                <option value="Neu-Isenburg">Neu-Isenburg</option>
                <option value="New Delhi">New Delhi</option>
                <option value="New Orleans">New Orleans</option>
                <option value="New York City">New York City</option>
                <option value="Nishinippori">Nishinippori</option>
                <option value="Nishishinjuku">Nishishinjuku</option>
                <option value="North Narrabeen">North Narrabeen</option>
                <option value="North Vancouver">North Vancouver</option>
                <option value="Nusa Dua">Nusa Dua</option>
                <option value="Ocean City">Ocean City</option>
                <option value="Offenbach">Offenbach</option>
                <option value="Orlando">Orlando</option>
                <option value="Osaki">Osaki</option>
                <option value="Ostia Antica">Ostia Antica</option>
                <option value="Panama">Panama</option>
                <option value="Paris">Paris</option>
                <option value="Pekutatan">Pekutatan</option>
                <option value="Pemuteran">Pemuteran</option>
                <option value="Pennant Hills">Pennant Hills</option>
                <option value="Philadelphia">Philadelphia</option>
                <option value="Phoenix">Phoenix</option>
                <option value="Plano">Plano</option>
                <option value="Playa del Carmen">Playa del Carmen</option>
                <option value="Playa Maroma">Playa Maroma</option>
                <option value="Ponce">Ponce</option>
                <option value="Prato">Prato</option>
                <option value="Punta Cana">Punta Cana</option>
                <option value="Punta Cuna">Punta Cuna</option>
                <option value="Pupuan">Pupuan</option>
                <option value="Purmerend">Purmerend</option>
                <option value="Rincon">Rincon</option>
                <option value="Rio Grande">Rio Grande</option>
                <option value="Riviera Maya">Riviera Maya</option>
                <option value="Rome">Rome</option>
                <option value="Rooty Hill">Rooty Hill</option>
                <option value="Roppongi">Roppongi</option>
                <option value="Rutherford">Rutherford</option>
                <option value="San Diego">San Diego</option>
                <option value="San Francisco">San Francisco</option>
                <option value="San Juan">San Juan</option>
                <option value="Sant Andreu de la Barca">Sant Andreu de la Barca</option>
                <option value="Sant Esteve Sesrovires">Sant Esteve Sesrovires</option>
                <option value="Sant Joan Despi">Sant Joan Despi</option>
                <option value="Sant Just Desvern">Sant Just Desvern</option>
                <option value="Santa Susanna">Santa Susanna</option>
                <option value="Sanur">Sanur</option>
                <option value="Sayan">Sayan</option>
                <option value="Schiphol">Schiphol</option>
                <option value="Schoneck">Schoneck</option>
                <option value="SeaTac">SeaTac</option>
                <option value="Seattle">Seattle</option>
                <option value="Seminyak">Seminyak</option>
                <option value="Sentosa Island">Sentosa Island</option>
                <option value="Sevres">Sevres</option>
                <option value="Shibakoen">Shibakoen</option>
                <option value="Shimbashi">Shimbashi</option>
                <option value="Singapore">Singapore</option>
                <option value="Singaraja">Singaraja</option>
                <option value="Sitges">Sitges</option>
                <option value="South San Francisco">South San Francisco</option>
                <option value="St. Helena">St. Helena</option>
                <option value="Stanmore">Stanmore</option>
                <option value="Stratford City">Stratford City</option>
                <option value="Suginami">Suginami</option>
                <option value="Sunny Isles Beach">Sunny Isles Beach</option>
                <option value="Sweetwater">Sweetwater</option>
                <option value="Sydney">Sydney</option>
                <option value="Tabanan">Tabanan</option>
                <option value="Takanawa">Takanawa</option>
                <option value="Tanjung Benoa">Tanjung Benoa</option>
                <option value="Terrey Hills">Terrey Hills</option>
                <option value="Tlalnepantla">Tlalnepantla</option>
                <option value="Toa Baja">Toa Baja</option>
                <option value="Tokyo">Tokyo</option>
                <option value="Toluca">Toluca</option>
                <option value="Toronto">Toronto</option>
                <option value="Tsukiji">Tsukiji</option>
                <option value="Tuban">Tuban</option>
                <option value="Tukwila">Tukwila</option>
                <option value="Tulamben">Tulamben</option>
                <option value="Ueno">Ueno</option>
                <option value="Uluwatu">Uluwatu</option>
                <option value="Ungasan">Ungasan</option>
                <option value="Vaciamadrid">Vaciamadrid</option>
                <option value="Vancouver">Vancouver</option>
                <option value="Venice">Venice</option>
                <option value="Viladecans">Viladecans</option>
                <option value="Vilanova i la Geltru">Vilanova i la Geltru</option>
                <option value="Vincennes">Vincennes</option>
                <option value="Wailea">Wailea</option>
                <option value="White Marsh">White Marsh</option>
                <option value="Windsor">Windsor</option>
                <option value="Windsor Mill">Windsor Mill</option>
                <option value="Wolli Creek">Wolli Creek</option>
                <option value="Woodlawn">Woodlawn</option>
                <option value="Xpu-Ha">Xpu-Ha</option>
                <option value="Yaesu">Yaesu</option>
                <option value="Yotsuya">Yotsuya</option>
                <option value="Yountville">Yountville</option>
                <option value="Yoyogi">Yoyogi</option>
                <option value="Yurakucho">Yurakucho</option>
                <option value="Zaandam">Zaandam</option>
                <option value="Zwanenburg">Zwanenburg</option>
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
                      <br/>
                      <DatePicker required selected={this.state.endDate} showMonthDropdown className="calendar" endDate={this.state.endDate} onChange={this.handleChange2} showYearDropdown name="enddate" dateFormat="dd/MM/yyyy" selectsEnd startDate={this.state.endtDate} endDate={this.state.endDate} minDate={this.state.startDate} placeholder="Arrival Date"/>
                    </div>
                  </div>
                </div>
                <br/>
                <div className="center">
                  <label for="Numofpassengers">Number of guests *</label>
                    <div className="col-auto my-1">
                      <input required type="number" id="numpassengers" name="numpassengers" min="1" max="20" onChange={this.onChangeNumber}></input>
                    </div>
                  </div>
                <br/>
                  <button type="submit" value="search" className="btn btn-primary">Search Hotels</button>
                </form>
              </div>
              {this.state.finalinfo.length===0 && <h1>Please enter data</h1>}
              {this.state.finalinfo.length>0 && this.state.finalinfo.map(hotel=><HotelComp key={hotel.id} name={hotel.name} country={hotel.country} imgurl={hotel.imgurl} url={hotel.url} location={hotel.location} address={hotel.address} rating={hotel.rating} ratingcount={hotel.ratingcount} price={hotel.price}/>)}
            </div>
          </div>
    )
  }
}