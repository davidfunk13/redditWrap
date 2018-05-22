import React from 'react';
import placeholder from './images/placeholder.png'

const UndefinedCard = props => {
    return (
        <div data={props.type} className='card-container'>
            <img className='post-image' src={placeholder} alt="" />
            <div className='post-info'>
                <div>
                    <h1>Post Title:</h1>
                    <p className='post-title'>{props.title}</p>
                </div>
                <p className='post-author'>{props.author}</p>
            </div>
            {props.children}
        </div>

    )
}



export { UndefinedCard }