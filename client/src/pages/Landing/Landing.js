import React from "react";
import { Link } from 'react-router-dom';
import snoo from './images/snoo.png'

const Landing = () => {
  return (
    <div className='welcome-wrapper'>
      <img className='enter' src={snoo} alt='enter' />
    </div>
  )
};

export default Landing;