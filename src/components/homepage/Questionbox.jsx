import React from 'react'
import './Questionbox.css';
import QuestionIcon from '../../assests/questionIcon.svg';
const Questionbox = ({message}) => {
  return (
    <div className='question-box'>
    <img src={QuestionIcon} width='28px'/>
    <p>{message}</p>
    </div>
  )
}

export default Questionbox;
