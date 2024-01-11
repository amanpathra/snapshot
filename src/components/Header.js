import React from 'react'
import SearchBar from './SearchBar'
import NavigationBar from './NavigationBar'

const Header = (props) => {
    return (
        <div className='header'>
            <h1>SnapShot</h1>
            <SearchBar setSearch={props.setSearch}/>
            <NavigationBar setSearch={props.setSearch}/>
        </div>
    )
}

export default Header