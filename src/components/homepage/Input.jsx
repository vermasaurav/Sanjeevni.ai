import {React,useState} from 'react'
import { sendMsg } from '../../Openai';
import send from '../../assests/Group 3 new.svg';
import syncBtn from '../../assests/Group 6 new.svg';
import '../../App.css';


const Input = () => {
  const [input,setInput] = useState("");

  const handledSend = async () => {
    const res = await sendMsg(input);
    console.log(res);
  }
  
  return (
    <>
    <div>
      <input type='text' placeholder='Write your query here....' className='inp' value={input} onChange={(e)=>{setInput(e.target.value)}}/>
    </div>
    <div className='bTn'>
      <button   className='sendBtn' onClick={handledSend}><img src={send} alt='sendImage' className='Sendimg' /></button>
      <button className='syncBtn'><img src={syncBtn} alt='sync' className='syncimg'/></button>
      </div>
      </>
  )
}

export default Input;
