import React from 'react'
import Navbarsecond from '../components/Navbarsecond'
import '../style/SASS/contact.scss'

import { BsEnvelope } from 'react-icons/bs'
import { BsChatSquare } from 'react-icons/bs'
import { BsTelephone } from 'react-icons/bs'
import { BsHouse } from 'react-icons/bs'

export default function Contact() {
    return (
        <div>
            <Navbarsecond />

            <div className="container-contact">

                {/* <h1>contactez primeur d'aqui</h1> */}

                {/* FAQ title --start */}
                <h1 className="faq-main-title">contactez primeur d'aqui</h1>
                <p className="faq-faded">contact</p>
                {/* FAQ title --end */}

                <div className="two-containers-aligned">

                    <div className="container-aligned-contact-info">


                        <div className="contact-item">
                            <div className="round-icon-box"><BsEnvelope /></div>
                            <p className="contact-info">34, rue Fouré 44000 Nantes</p>
                        </div>

                        <div className="contact-item">
                            <div className="round-icon-box"><BsChatSquare /></div>
                            <p className="contact-info">facebook</p>
                        </div>

                        <div className="contact-item">
                            <div className="round-icon-box"><BsTelephone /></div>
                            <p className="contact-info">06.24.84.51.90</p>
                        </div>

                        <div className="contact-item">
                            <div className="round-icon-box"><BsHouse /></div>
                            <p className="contact-info">prendre rendez-vous</p>
                        </div>

                    </div>

                    <div className="container-aligned-form">

                        <h4>Une question ? Un devis ? Laisse-nous votre message ! </h4>

                        <div className="box-aligned-inputs">

                            <input className="form-input-aligned" type="text" value="nom &amp; prénom" placeholder="nom et prénom" required></input>

                            <input className="form-input-aligned" type="text" value="email" placeholder="email" required></input>

                        </div>

                        <input className="form-input" type="text" value="email" placeholder="email" required></input>

                        <input className="form-input" type="text" value="object" placeholder="objet" required></input>

                        <input className="form-input" type="text" value="phonenumber" placeholder="numéro de téléphone" required></input>

                        <textarea className="form-input form-input-textarea" value="message" placeholder="Message" type="textarea" cols="40" rows="5"></textarea>

                        <button className="contact-form-submit-button">submit</button>




                    </div>



                </div>



            </div>
        </div>
    )
}
