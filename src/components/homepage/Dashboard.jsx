import React from 'react';
import '../../App.css';

const Dashboard = () => {
  return (
    <div className='main'>

    <div className='upperText'>
    
    Welcome, <span className='bluetxt'>Discover</span> the Healing Power of <br/>
    Ayurveda with <span className='greentxt'>Sanjeevni</span>
    
    </div>
    

      <div className='part1'>
        <div className='line1'>What Ayurvedic remedies can help with <br/>migraine headaches?</div>
        <div className='line2'>What remedies does Ayurveda offer for <br/>digestive disorders like acidity?</div>
      </div>




      <div className='part2'>
        <div className='line2'>What are Ayurvedic approaches to <br/> to managing anxiety and stress?</div>
        <div className='line1'>What herbs can alleviate symptoms of <br/> irritable bowel syndrome (IBS)? </div>
      </div>

    </div>
  )
}

export default Dashboard;
