import React from 'react'

const DinamicComponent = (props) => {
    const {image, title, description, button}= props
  return (
    <div className='card' style={{width:'18rem', marginTop:15}}>
        <img className='card-img-top' alt={title} src={image}/>
        <div className='card-body'>
            <p className='card-title'>{title}</p>
            <p className='card-text'>{description}</p>
            <button className='btn btn-primary'>{button}</button>
        </div>
    </div>
  )
}

export default DinamicComponent