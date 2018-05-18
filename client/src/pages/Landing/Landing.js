import React from "react";
import {Link} from 'react-router-dom';
import snoo from './images/snoo.png'

const Landing =() => {
  return <Link to='/home'><img className='enter' src={snoo} alt='enter'/></Link>;
};

export default Landing;