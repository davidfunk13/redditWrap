import React from "react";
import { Link } from "react-router-dom";
import bannerimg from './images/banner.png'
import bannerimgsmall from './images/bannersmall.png'
const Nav = props => {
  return (

    <div className='nav-wrapper'>
      <img alt='banner' className='banner-img' src={bannerimg} />
      <img alt='banner' className='banner-img-small' src={bannerimgsmall} />
      <div className='link-wrapper'>
        <Link to="/">Home</Link>
        <Link to="/search">Search</Link>
        <Link to="/saved">Saved</Link>
      </div>
    </div>
  );
};

export default Nav;
