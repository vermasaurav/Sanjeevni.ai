import { React, useState } from 'react'
import send from '../../assests/sendIcon.svg';
import syncBtn from '../../assests/syncIcon.svg';
import '../../App.css';

const Input = ({ setInputValue, setInitialui, responseGenerate }) => {
  const [input, setInput] = useState('');
  const handleSendClick = () => {
    setInputValue(input);
    setInitialui(false);
    responseGenerate(input, setInput);
    setInput('');
  };
  return (
    <>
      <div className='inp-main'>

        <input type='text' placeholder='Write your query here....' className='inp' value={input} onChange={(e) => { setInput(e.target.value) }} />

        <button className='sendBtn' onClick={handleSendClick}><img src={send} alt='sendImage' className='Sendimg' /></button>


        <button className='syncBtn' onClick={()=>setInitialui(true)}><img src={syncBtn} alt='sync' className='syncimg' /></button>

      </div>
    </>
  )
}

export default Input;
