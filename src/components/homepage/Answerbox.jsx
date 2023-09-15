import React from 'react'
import AnswerIcon from '../../assests/answerIcon.svg';
import './Answerbox.css'
const Answerbox = ({ messages }) => {
    return (
        <div className='answer-box'>

            <img src={AnswerIcon} width='28px' />
            <p>{messages}</p>
        </div>
    )
}

export default Answerbox
