import React from 'react'
import '../style/SASS/faq.scss'
import Navbarsecond from '../components/Navbarsecond'
import data from '../components/FAQdata'
import SingleQuestion from '../components/Question';


export default function Faq() {

    return (
        <div>
        
        <Navbarsecond />

            <div className="main-container">

                {/* FAQ title --start */}
                <h1 className="faq-main-title">La FAQ de Primeur d'Aqui</h1>
                <p className="faq-faded">FAQ</p>
                {/* FAQ title --end */}

                {/* mapping over question-answer data --start */}
                <div className="qa-container">
                        {data.map((item) => {
                            return (
                                <SingleQuestion key={item.id} {...item}></SingleQuestion>
                            );
                        })}                
                </div>
                {/* mapping over question-answer data --end */}


            </div>

            
            
        </div>
    )
}
