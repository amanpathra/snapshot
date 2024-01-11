import React from 'react'

const Image = (props) => {
  return (
    <div className='image'>
        <img src={props.url} alt={props.title} />
    </div>
  )
}

export default Image
