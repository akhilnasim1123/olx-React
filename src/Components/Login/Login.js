import React, { useState ,useContext} from 'react';
import {FirebaseContext} from '../../store/FirebaseContext'
import Logo from '../../olx-logo.png';
import './Login.css';
import { useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
function Login() {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('')
  const history = useHistory()
  const {firebase} = useContext(FirebaseContext)
  const handleLogin = (e)=>{
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
      history.push('/')
    }).catch((error)=>{
      alert(error.message)
    })

  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
            onChange={(e)=>{
              setPassword(e.target.value)
            }}

          />
          <br />
          <br />
          <NavLink to='/login'>login</NavLink>
        </form>
        <NavLink to='/signup'>Signup</NavLink>
      </div>
    </div>
  );
}

export default Login;
