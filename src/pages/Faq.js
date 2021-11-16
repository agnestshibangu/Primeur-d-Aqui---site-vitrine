import React from 'react'
import '../style/SASS/faq.scss'
import Navbarsecond from '../components/Navbarsecond'
import data from '../components/FAQdata';

export default function Faq() {
    return (
        <div>
        
        <Navbarsecond />

            <div className="main-container">

                <h1 className="faq-main-title">La FAQ de Primeur d'Aqui</h1>
                <p className="faq-faded">FAQ</p>


                <div className="qa-container"></div>

                {data.map((item) => {
                    const {id, question, answer} = item;
                    return <div className="qa-element" key={id}>
                        <div className="qa-element-question">
                            <p className="question">{question}</p>
                            <div className="fa-icon-plus">{answer}</div>
                        </div>

                        <p className="answer"></p>
                        
                    </div>

                })}



            </div>

            
            
        </div>
    )
}
