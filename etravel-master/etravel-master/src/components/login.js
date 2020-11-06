import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './login.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

export default class Login extends Component {
    constructor(props){
        super(props)

        this.onChangeUsername=this.onChangeUsername.bind(this)
        this.onChangePassword=this.onChangePassword.bind(this)
        this.onSubmit=this.onSubmit.bind(this)

        this.state={username:'',password:''}
    }

    onChangeUsername(e){
        this.setState({username:e.target.value})
    }

    onChangePassword(e){
        this.setState({password:e.target.value})
    }

    onSubmit(e){
        e.preventDefault()

        const login={username:this.state.username,password:this.state.password}
        console.log(login)

        window.location='/loggedin'
    }

  render() {
    return (
    <div>
      <div className="./login.css"></div>
        <form onSubmit={this.onSubmit} className="container">
        <h3>Log in</h3>
          <div className="form-group"> 
             <label>Username: </label>
               <input type="text" required className="form-control" value={this.state.username} onChange={this.onChangeUsername}/>
          </div>
          <div className="form-group">
            <label>Password: </label>
            <input type="password" className="form-control" value={this.state.password} onChange={this.onChangePassword}/>
          </div>
          <div className="form-group">
            <input type="submit" value="Login" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}