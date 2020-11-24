// import React, { Component } from 'react'
// import axios from 'axios'

import './login.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'



import React, { useState } from "react";
import Axios from "axios";



function Login() {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [data, setData] = useState(null);


  const login = () => {
    Axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "http://localhost:5000/user/login",
    }).then(res => res.data)
    .then(logininfo)
  };

  const logininfo=(data)=>{
    if(data==='Successfully Authenticated'){
      window.location='/'
    }
    else{
      alert('Invalid user data, please try again!')
    }
  }
  const getUser = () => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:5000/user/get",
    }).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  };
  return (
    <div>
          <div className="./login.css"></div>
            <div className="container">
            <h3>Log in</h3>
              <div className="form-group">
                 <label>Username: </label>
                   <input type="text" required className="form-control"
                   placeholder="username"
                   onChange={(e) => setLoginUsername(e.target.value)}/>
              </div>
              <div className="form-group">
                <label>Password: </label>
                <input type="password" required className="form-control"
                placeholder="password"
                onChange={(e) => setLoginPassword(e.target.value)}/>
              </div>
              <div className="form-group">
                <button onClick={login} className="btn btn-primary">Submit</button>
                {data ? <h1>Welcome Back {data.username}</h1> : null}
              </div>
            </div>
          </div>
  );
}

export default Login;

//
// export default class Login extends Component {
//     constructor(props){
//         super(props)
//
//         this.onChangeUsername=this.onChangeUsername.bind(this)
//         this.onChangePassword=this.onChangePassword.bind(this)
//         this.onSubmit=this.onSubmit.bind(this)
//
//         this.state={username:'',password:''}
//     }
//
//     onChangeUsername(e){
//         this.setState({username:e.target.value})
//     }
//
//     onChangePassword(e){
//         this.setState({password:e.target.value})
//     }
//
//     onSubmit(e){
//         e.preventDefault()
//
//         const user={username:this.state.username,password:this.state.password}
//         axios.post('http://localhost:5000/user/login',user)
//           .then(res=>console.log(res.data))
//
//         //window.location='/loggedin'
//     }
//
//   render() {
//     return (
//     <div>
//       <div className="./login.css"></div>
//         <form onSubmit={this.onSubmit} className="container">
//         <h3>Log in</h3>
//           <div className="form-group">
//              <label>Username: </label>
//                <input type="text" required className="form-control" value={this.state.username} onChange={this.onChangeUsername}/>
//           </div>
//           <div className="form-group">
//             <label>Password: </label>
//             <input type="password" className="form-control" value={this.state.password} onChange={this.onChangePassword}/>
//           </div>
//           <div className="form-group">
//             <input type="submit" value="Login" className="btn btn-primary" />
//           </div>
//         </form>
//       </div>
//     )
//   }
// }
