import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Apropos from './pages/Apropos'
import Faq from './pages/Faq'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
// import Footer from './components/Footer'
import './style/SASS/index.scss'


ReactDOM.render(
  
  <Router>
    <Navbar />
    <Routes>
    
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/apropos" element={<Apropos />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    {/* <Footer /> */}
  </Router>,
  document.getElementById('root')
)