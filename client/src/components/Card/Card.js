import React, { Component } from 'react';
import placeholder from './images/placeholder.png'

const Card = props => {
    return (
        <div className='card-container'>
            <div className='post-image'>
                <img src={placeholder} alt="" />
            </div>
            <div className='post-info'>
            <div>
                <h1>Post Title:</h1>
                <p className='post-title'>{props.title}</p>
            </div>
                <p className='post-author'>{props.author}</p>
                {/* <p className='post-author'>{props.}</p> */}
            </div>
            {props.children}
        </div>

    )
}



export default Card