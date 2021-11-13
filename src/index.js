import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import Home from './pages/Home'
// import Forum from './pages/Forum'
// import Login from './pages/Login'
// import Signup from './pages/Signup'
// import Profile from './pages/Profile'
 import Navbar from './components/Navbar'
// import Footer from './components/Footer'
 import './style/SASS/index.scss'


ReactDOM.render(
   
  <Router>
      <Navbar />
    <Routes>    
        <Route exact path="/">
          {/* <Home /> */}
        </Route>
        {/* <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/forum">
          <Forum />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route> */}
      
    </Routes>
    {/* <Footer /> */}
  </Router>,
  document.getElementById('root')
)