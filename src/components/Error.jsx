import React from 'react'
import {Link} from 'react-router-dom'

const Error = () => {
  return (
    <div style={{
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px'
      }}>
        <img alt='error' src='https://i.postimg.cc/G3grHRxq/grumpy-cat-404-bandana.jpg'/>
        <Link to='/' className='btn btn-dark'>Volver a Home</Link>
      </div>
  )
}

export default Error