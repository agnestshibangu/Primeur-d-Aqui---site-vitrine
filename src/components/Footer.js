import React from 'react'
import '../style/SASS/footer.scss'
import '../style/SASS/index.scss'
import { Link } from 'react-router-dom'
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebookSquare } from 'react-icons/fa'

export default function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-upper-part"> 
                <p className="contact-phone">Paniers bios en livraison gratuite à domicile. Pour tout renseignement, contacter Adrien au <span className="phone-number">06.24.84.51.90</span></p>
            </div>

            <div className="bar-footer" />

            <div className="footer-lower-part">
                <div className="links-footer-container">
                        <Link className="navbar-link-footer" to="/">accueil</Link>
                        <Link className="navbar-link-footer" to="/blog">blog</Link>
                        <Link className="navbar-link-footer" to="/apropos">a propos</Link>
                        <Link className="navbar-link-footer" to="/faq">faq</Link>
                        <Link className="navbar-link-footer" to="/contact">contact</Link>
                    </div>
                

                <div className="social-media-icons-container">
                    <div className="circle-icon"><FaInstagram className="fa-icon" /></div>
                    <div className="circle-icon"><FaLinkedin className="fa-icon" /></div>
                    <div className="circle-icon"><FaFacebookSquare className="fa-icon" /></div>
                </div>
            </div>


         

        </div>


    )
}
