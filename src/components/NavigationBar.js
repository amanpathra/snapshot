import React from 'react'

const NavigationBar = (props) => {

    const handleClick = (e) => {
        props.setSearch(e.target.innerHTML)
    }

    return (
        <div className='navigationBar'>
            <button className='navBtn' onClick={handleClick}>Mountain</button>
            <button className='navBtn' onClick={handleClick}>Beaches</button>
            <button className='navBtn' onClick={handleClick}>Bird</button>
            <button className='navBtn' onClick={handleClick}>Food</button>
            <button className='navBtn' onClick={handleClick}>Flowers</button>
            <button className='navBtn' onClick={handleClick}>Rivers</button>
            <button className='navBtn' onClick={handleClick}>Streets</button>
            <button className='navBtn' onClick={handleClick}>Skyline</button>
        </div>
    )
}

export default NavigationBar
