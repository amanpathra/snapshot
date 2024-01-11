import React from 'react'

const SearchBar = (props) => {

    const srchBtnClick = (e) => {
        props.setSearch(e.target.previousElementSibling.value)
    }

    return (
        <div className='searchBar'>
            <input type="text" placeholder='Search your topic'/>
            <button onClick={srchBtnClick}>Search</button>
        </div>
    )
}

export default SearchBar
