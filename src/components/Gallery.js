import React from 'react'
import Image from './Image'

const Gallery = (props) => {
  return (
    <div className='gallery'>
        {props.images.map(image => {
            const {farm, server, id, secret, title} = image;
            const url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
            return <Image url={url} key={id} alt={title}/>
        })}
    </div>
  )
}

export default Gallery
