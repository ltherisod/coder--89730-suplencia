import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Item = ({producto}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={producto.img}/>
      <Card.Body>
        <Card.Title>{producto.name}</Card.Title>
        <Card.Text>
        $ {producto.price},00
        </Card.Text>
        {/* <Link className='btn btn-dark' to={'/item/' + producto.id}>Ver más</Link> */}
         <Link className='btn btn-dark' to={`/item/${producto.id}`}>Ver más</Link>
      </Card.Body>
    </Card>
  )
}

export default Item