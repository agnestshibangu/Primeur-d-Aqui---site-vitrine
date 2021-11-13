import React from 'react'
import { Link } from 'react-router-dom'
import '../style/SASS/navbar.scss'


export default function Navbar() {
    return (
        <div className="navbar-container">
            <Link className="navbar-link"  to="/">accueil
            <div className="animated-bar"/>
            </Link>
            <Link className="navbar-link"  to="/">blog
            <div className="animated-bar"/>
            </Link>
            <Link className="navbar-link"  to="/">a propos
            <div className="animated-bar"/>
            </Link>
            <Link className="navbar-link"  to="/">faq
            <div className="animated-bar"/>
            </Link>
            <Link className="navbar-link"  to="/">contact
            <div className="animated-bar"/>
            </Link>
        </div>
    )
}
