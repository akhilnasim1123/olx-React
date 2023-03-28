import React, { useContext, useEffect } from 'react';
import './App.css';
import Login from './Pages/Login'
import { BrowserRouter as Router,Route } from "react-router-dom";
import  SignupPage from './Pages/Signup'
import Create from './Pages/Create'
import View from './Pages/ViewPost'
/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import { AuthContext, FirebaseContext } from './store/FirebaseContext';
import Post from './store/PostContext';

function App() {
  const {setUser} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  })
  return (
    <div>
      <Post>
<Router>
  {/* <Routes> */}
    <Route exact path='/'>
    <Home />
    </Route>
    <Route path='/signup'>
    < SignupPage />
    </Route>
    <Route path='/login'>
    < Login />
    </Route>
    <Route path='/create'>
    < Create />
    </Route>
    <Route path='/view'>
    < View />
    </Route>
  {/* </Routes> */}
</Router>
</Post>
    </div>
  );
}

export default App;
