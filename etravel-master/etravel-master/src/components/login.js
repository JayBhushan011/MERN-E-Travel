import './login.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import React, { useState } from "react";
import Axios from "axios";

function Login() {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [data] = useState(null);

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
      alert('You have logged in');
      window.location='/'
    }
    else{
      alert('Invalid username or password. Please try again!')
    }
  }
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
              <p>New user? <a href="/sign-up">Sign Up</a></p>
              <div className="form-group">
                <button onClick={login} className="btn btn-primary">Submit</button>
                {data ? <h1>Welcome Back {data.username}</h1> : null}
              </div>
            </div>
          </div>
  );
}

export default Login;