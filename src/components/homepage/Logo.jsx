import React from 'react';
import logoImg from '../../assests/logo.svg';
import '../../App.css';

const Logo = () => {
  return (
    <div>
      <img src={logoImg} alt='logoImage' className='logo' />
    </div>
  )
}

export default Logo;
