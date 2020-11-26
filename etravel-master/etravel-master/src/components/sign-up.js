import React, { Component } from 'react'
import './sign-up.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Axios from 'axios'

export default class Signup extends Component {
  constructor(props){
    super(props)

    this.onChangeTitle=this.onChangeTitle.bind(this)
    this.onChangeGender=this.onChangeGender.bind(this)
    this.onChangeFName=this.onChangeFName.bind(this)
    this.onChangeLName=this.onChangeLName.bind(this)
    this.onChangeDOB=this.onChangeDOB.bind(this)
    this.onChangePassportNumber=this.onChangePassportNumber.bind(this)
    this.onChangePED=this.onChangePED.bind(this)
    this.onChangeTDoc=this.onChangeTDoc.bind(this)
    this.onChangeAddress1=this.onChangeAddress1.bind(this)
    this.onChangeAddress2=this.onChangeAddress2.bind(this)
    this.onChangeCity=this.onChangeCity.bind(this)
    this.onChangeState=this.onChangeState.bind(this)
    this.onChangeZCode=this.onChangeZCode.bind(this)
    this.onChangeMobile=this.onChangeMobile.bind(this)
    this.onChangeEMail=this.onChangeEMail.bind(this)
    this.onChangePassword=this.onChangePassword.bind(this)
    this.onChangeUsername=this.onChangeUsername.bind(this)

    this.onSubmit=this.onSubmit.bind(this)

    this.state={minDate:new Date(),maxDate:new Date(), title:null,gender:null,fname:'',lname:'',dob:new Date(),zcode:0,pnum:'',ped:new Date(),tdoc:null,add1:'',add2:'',city:'',state:null,mobile:0,email:'',username:'',password:''}

  }

  onChangeTitle(e){
    this.setState({title:e.target.value})
}

onChangeGender(e){
    this.setState({gender:e.target.value})
}

onChangeFName(e){
  this.setState({fname:e.target.value})
}

onChangeLName(e){
  this.setState({lname:e.target.value})
}

onChangeZCode(e){
  this.setState({zcode:e.target.value})
}

onChangeDOB(dob){
  this.setState({dob:dob})
}

onChangePED(ped){
  this.setState({ped:ped})
}

onChangePassportNumber(e){
  this.setState({pnum:e.target.value})
}

onChangeTDoc(e){
  this.setState({tdoc:e.target.value})
}

onChangeAddress1(e){
  this.setState({add1:e.target.value})
}

onChangeAddress2(e){
  this.setState({add2:e.target.value})
}

onChangeCity(e){
  this.setState({city:e.target.value})
}

onChangeState(e){
  this.setState({state:e.target.value})
}

onChangeMobile(e){
  this.setState({mobile:e.target.value})
}

onChangeEMail(e){
  this.setState({email:e.target.value})
}

onChangeUsername(e){
  this.setState({username:e.target.value})
}

onChangePassword(e){
  this.setState({password:e.target.value})
}

  onSubmit(event) {
    //window.location='/login'
    event.preventDefault()

    const signup={title:this.state.title,gender:this.state.gender,fname:this.state.fname,lname:this.state.lname,name:this.state.name,dob:this.state.dob,ped:this.state.ped,pnum:this.state.pnum,tdoc:this.state.tdoc,add1:this.state.add1,add2:this.state.add2,city:this.state.city,state:this.state.state,zcode:this.state.zcode,mobile:this.state.mobile,email:this.state.email,username:this.state.username,password:this.state.password}
    console.log(signup)
    Axios({
      method: "POST",
      data: {
        "username": this.state.username,
        "password": this.state.password,
        "title": this.state.title,
        "fName" : this.state.fname,
        "lName" : this.state.lname,
        "dob": this.state.dob,
        "gender" : this.state.gender,
        "add1":this.state.add1,
        "add2":this.state.add2,
        "city":this.state.city,
        "state":this.state.state,
        "zcode":this.state.zcode,
        "mobile":this.state.mobile,
        "email":this.state.email,

      },
      url: "http://localhost:5000/user/add",
    })
    .then(res => res.data)
    .then(this.userinfo)
    .catch()
  }
  userinfo=(data)=>{
    if(data==="User Already Exists"){
      alert('Username unavailable. Please try another one')
    }
    else{
      window.location='/login'
      alert('Your account has been created')
    }
  }

  render() {
    const selectionRange = {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    }
    return (
      <div>
          <div className="./enroll.css"></div>
          <div className="container">
            <h4>JAS Account Registration</h4>
            <h5>Required Account Information</h5>
          <form onSubmit={this.onSubmit}>
            <div class="form-group">
              <div class="form-row align-items-center">
                <div class="col-auto my-1">
                  <label class="mr-sm-2" for="inlineFormCustomSelect">Title *</label>
                  <select className="custom-select mr-sm-2" id="inlineFormCustomSelect" value={this.state.title} onChange={this.onChangeTitle}>
                  <option selected>Please select..</option>
                  <option value="Master">Master</option>
                  <option value="Miss">Miss</option>
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Ms">Ms</option>
                  </select>
                </div>
              </div>

              <div className="form-row align-items-center">
                <div className="col-auto my-1">
                  <label className="mr-sm-2" for="inlineFormCustomSelect">Gender *</label>
                  <select className="custom-select mr-sm-2" id="inlineFormCustomSelect" value={this.state.gender} onChange={this.onChangeGender}>
                  <option selected>Please select..</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Others">Others</option>
                  </select>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <label>First name *</label>
                  <input type="text" class="form-control"  value={this.state.Fname} onChange={this.onChangeFName} maxlength="30"/>
                  <label className="blue">(As per passport)</label>
                </div>
                <div className="col">
                  <label>Last name *</label>
                  <input type="text" class="form-control"  value={this.state.lname} onChange={this.onChangeLName} maxlength="30"/>
                  <label className="blue">(As per passport)</label>
                </div>
              </div>

                  <label>Date of Birth (MM/DD/YYYY) *</label>
                  <br/>
                  <DatePicker maxDate={this.state.maxDate}  selected={this.state.dob} onChange={this.onChangeDOB} showYearDropdown dateFormatCalendar="MMMM" yearDropdownItemNumber={15} scrollableYearDropdown/>
              <br/>
              <br/>
              <h5>Travel Document:</h5>
              <div class="row">
                <div class="col">
                  <label>Passport Number *</label>
                  <input type="text" class="form-control"  value={this.state.pnum} onChange={this.onChangePassportNumber} maxlength="8"/>
                </div>
                <div class="col">
                  <label>Passport Expiry Date (MM/DD/YYYY) *</label>
                  <br/>
                  <DatePicker minDate={this.state.minDate}  ranges={[selectionRange]} selected={this.state.ped} onChange={this.onChangePED} showYearDropdown dateFormatCalendar="MMMM" yearDropdownItemNumber={15} scrollableYearDropdown/>
                </div>
              </div>
              <br/>
              <h5>I understand and agree that if I do not upload copy of my above mentioned travel document (Passport/Government issued photo ID) to validate my account within 45 days then I shall only be able to accrue FR Points but not able to redeem FR Points.</h5>
              <br/>
              <label>Upload copy of travel document *</label>
              <br/>
              <input type="file" id="img" name="img" accept="image/*"  value={this.state.tdoc} onChange={this.onChangeTDoc}></input>
              <br/>
              <br/>
              <h5>Communication Address:</h5>
              <br/>
              <div class="form-group">
    <label for="inputAddress">Address *</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"  value={this.state.add1} onChange={this.onChangeAddress1}/>
  </div>
  <div class="form-group">
    <label for="inputAddress2">Address 2 *</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"  value={this.state.add2} onChange={this.onChangeAddress2}/>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">City *</label>
      <input type="text" class="form-control" id="inputCity"  value={this.state.city} onChange={this.onChangeCity} maxlength="30"/>
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">State *</label>
      <select id="inputState" class="form-control"  value={this.state.state} onChange={this.onChangeState}>
        <option selected>Choose..</option>
        <option value="Andhra Pradesh">Andhra Pradesh</option>
<option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
<option value="Arunachal Pradesh">Arunachal Pradesh</option>
<option value="Assam">Assam</option>
<option value="Bihar">Bihar</option>
<option value="Chandigarh">Chandigarh</option>
<option value="Chhattisgarh">Chhattisgarh</option>
<option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
<option value="Daman and Diu">Daman and Diu</option>
<option value="Delhi">Delhi</option>
<option value="Lakshadweep">Lakshadweep</option>
<option value="Puducherry">Puducherry</option>
<option value="Goa">Goa</option>
<option value="Gujarat">Gujarat</option>
<option value="Haryana">Haryana</option>
<option value="Himachal Pradesh">Himachal Pradesh</option>
<option value="Jammu and Kashmir">Jammu and Kashmir</option>
<option value="Jharkhand">Jharkhand</option>
<option value="Karnataka">Karnataka</option>
<option value="Kerala">Kerala</option>
<option value="Madhya Pradesh">Madhya Pradesh</option>
<option value="Maharashtra">Maharashtra</option>
<option value="Manipur">Manipur</option>
<option value="Meghalaya">Meghalaya</option>
<option value="Mizoram">Mizoram</option>
<option value="Nagaland">Nagaland</option>
<option value="Odisha">Odisha</option>
<option value="Punjab">Punjab</option>
<option value="Rajasthan">Rajasthan</option>
<option value="Sikkim">Sikkim</option>
<option value="Tamil Nadu">Tamil Nadu</option>
<option value="Telangana">Telangana</option>
<option value="Tripura">Tripura</option>
<option value="Uttar Pradesh">Uttar Pradesh</option>
<option value="Uttarakhand">Uttarakhand</option>
<option value="West Bengal">West Bengal</option>
      </select>
    </div>
    </div>
    <div class="form-group">
      <label for="inputZip">Zipcode *</label>
      <input  type="number" class="form-control" maxlength="6" min="0" id="inputZip" value={this.state.zcode} onChange={this.onChangeZCode} />
    </div>
    <div class="form-group">
      <label for="inputMobile">Mobile Number *</label>
      <input  type="number" class="form-control" id="inputMobile" maxlength="10" min="0" value={this.state.mobile} onChange={this.onChangeMobile} />
    </div>
    <h5>If your age is 12 years and above, then please provide your own unique mobile number and email address/ID.</h5>
    <h5>Please ensure that the phone number / email id you provide is not linked to any existing member (If you are a child, you may provide your parents number).</h5>

    <div className="row">
                <div className="col">
                  <label>Email address *</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"  value={this.state.email} onChange={this.onChangeEMail}/>
                  <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="col">
                  <label>Username *</label>
                  <input type="text" className="form-control" placeholder="Enter Username"  value={this.state.username} onChange={this.onChangeUsername}></input>
                </div>
                <div className="col">
                  <label>Password *</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"  value={this.state.password} onChange={this.onChangePassword}/>
                </div>
              </div>
      </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">I have read and agreed to the terms and conditions of JAS Users Registration</label>
  </div>
  <br/>
  <button type="submit" value="register" class="btn btn-primary">Submit</button>
</form>
<br/>
<br/>
</div>
</div>
    )
  }
}
