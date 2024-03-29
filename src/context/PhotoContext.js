import { createContext, useState } from "react";
import {apiKey} from '../api/config';
import axios from 'axios';

export const PhotoContext = createContext();

const PhotoContextProvider = (props) => {
    
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    const runSearch = (query) => {
        axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
            .then((response)=>{
                setImages(response.data.photos.photo)
                setLoading(false);
            })
            .catch((error)=>{
                console.log('Error while fetching and parsing the data', error)
            })
    }

    return (
            <PhotoContext.Provider value={{images, runSearch, loading}}>
            {props.children}
        </PhotoContext.Provider>
    )

}

export default PhotoContextProvider;