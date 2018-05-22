import React, { Component } from 'react';
import placeholder from './images/placeholder.png'

const SelfCard = props => {
    return (
        <div className='card-container'>
            <img className='post-image' src={placeholder} alt="" />
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



export { SelfCard }