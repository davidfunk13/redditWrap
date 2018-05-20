import React from 'react';

const SearchContainer = (props) => {
    return (
        <div className='search-results-container'>
            {props.children}
        </div>
    )
}

export default SearchContainer;