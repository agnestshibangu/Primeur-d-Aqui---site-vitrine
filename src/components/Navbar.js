import React from 'react'
import { Link } from 'react-router-dom'
import '../style/SASS/navbar.scss'
// import Logo from '../style/images-logos/pdaqui-logo.png'

export default function Navbar() {
    return (
        <div className="navbar-container">
            {/* <div className="logo-container">
                <img className="navbar-logo" src={Logo} alt="" />

            </div> */}
            <div className="link-container">
                <Link className="navbar-link" to="/">accueil<div className="animated-bar" />
                </Link>
                <Link className="navbar-link" to="/blog">blog<div className="animated-bar" />
                </Link>
                <Link className="navbar-link" to="/apropos">a propos<div className="animated-bar" />
                </Link>
                <Link className="navbar-link" to="/faq">faq<div className="animated-bar" />
                </Link>
                <Link className="navbar-link" to="/contact">contact<div className="animated-bar" />
                </Link>
            </div>
        </div>


    )
}
