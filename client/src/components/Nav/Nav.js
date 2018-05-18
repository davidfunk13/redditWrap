import React, { Component } from 'react';
import { Link } from 'react-router-dom'
const Nav = props => {
    return (
        <div className='nav-wrapper'>
            <Link to='/'>Home</Link>
            <Link to='/search'>Search</Link>
            <Link to='/saved'>Saved</Link>

            {props.children}
        </div>
    )
}

export default Nav;
