import React, { useContext, useEffect } from 'react';
import {PhotoContext} from '../context/PhotoContext'
import Loader from './Loader'
import Gallery from './Gallery'

const Container = ({searchTerm}) => {

    const {images, loading, runSearch} = useContext(PhotoContext);

    useEffect(()=>{
        runSearch(searchTerm)
        // eslint-disable-next-line
    }, [searchTerm])

    return (
        <div className='container'>
            <h2>{searchTerm[0].toUpperCase() + searchTerm.slice(1)} Pictures</h2>
            {loading ? <Loader/> : <Gallery images={images}/>}
        </div>
    )
}

export default Container
