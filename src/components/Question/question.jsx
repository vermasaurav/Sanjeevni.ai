import React from 'react'
import questionImage from './../../assests/mingcute_question-fill.svg';
import userImage from './../../assests/Group 7.svg';




const question = () => {
  return (
    <div className='main2'>

    <div className='chats'>
      <div className='chat'>
        <img src={questionImage} className='chatImage'/><p className='txt'>lorem50
          jfdhjkhdfdfjfg gjdfhjgghdfjkgfd hgjdhfjkghdsuigdjn hgdhgijdhgidngd hhdifgsdhuighdsjkfnsd hgidhgisdfh
          jhgijdjgghdfjgdfjk
        </p>
      </div>
      <div className='chat bot'>
        <img src={userImage} className='chatImage'/><p className='txt'>lorem50
          jfdhjkhdfdfjfg gjdfhjgghdfjkgfd hgjdhfjkghdsuigdjn hgdhgijdhgidngd hhdifgsdhuighdsjkfnsd hgidhgisdfh
          jhgijdjgghdfjgdfjk
        </p>
      </div>
    </div>

    </div>
  )
}

export default question;
