import React from 'react'
import { Link } from 'react-router-dom'
import '../style/SASS/navbar.scss'
import '../style/SASS/index.scss'
// import Logo from '../style/images-logos/pdaqui-logo.png'

export default function Navbar() {
    return (
        <div className="navbar-container">
            {/* <div className="logo-container">
                <img className="navbar-logo" src={Logo} alt="" />

            </div> */}
            <div className="link-container">
                <Link className="navbar-link" to="/"><div className="animated-bar" />accueil
                </Link>
                {/* <Link className="navbar-link" to="/blog"><div className="animated-bar" />blog
                </Link> */}
                <Link className="navbar-link" to="/apropos"><div className="animated-bar" />a propos
                </Link>
                <Link className="navbar-link" to="/faq"><div className="animated-bar" />faq
                </Link>
                <Link className="navbar-link" to="/contact"><div className="animated-bar" />contact
                </Link>

                <div className="smartphone-navbar">
                    <div className="smartphone-navbar-dash"/>
                    <div className="smartphone-navbar-dash"/>
                    <div className="smartphone-navbar-dash"/>

                </div> 
            </div>
        </div>


    )
}
