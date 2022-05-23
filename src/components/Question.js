import React, { useState } from 'react';
import '../style/SASS/faq.scss'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ question, answer }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className='question-element'>
      <header className='question-element-header'>
        <h4>{question}</h4>
        <button className='btn-plus-minus' onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p className="answer">{answer}</p>}
    </article>
  );
};

export default Question;