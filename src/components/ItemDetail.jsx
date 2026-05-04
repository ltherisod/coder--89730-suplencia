import React, { useState } from 'react'
import ItemCount from './ItemCount'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
//PARA CONSULTAR/USAR UN CONTEXTO USO E IMPORTO 2 COSAS
//1. EL HOOK DE CONTEXTO
//2. EL CONTEXTO QUE QUIERO UTILIZAR

const ItemDetail = ({detail}) => {
  const {addItem} = useContext(CartContext)
  const [purchase, setPurchase]= useState(false)
  
  const onAdd = (cantidad)=>{
   addItem(detail,cantidad )
   setPurchase(true)
  }
  return (
    <div style={{
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px'
      }}>

        <h2>Detalle de: {detail.name}</h2>
        <img src={detail.img} alt={detail.name}/>
        <p>{detail.description}</p>
        <p>${detail.price},00</p>
        <p>Stock disponible: {detail.stock} unidades</p>
       {purchase 
       ? <div style={{display:'flex', justifyContent:'space-around', alignItems:'center', width:'80%'}}>
          <Link className='btn btn-dark' to='/'>Seguir Comprando</Link>
          <Link className='btn btn-dark' to='/cart'>Ir al carrito</Link>
       </div> 
       : <ItemCount stock={detail.stock} onAdd={onAdd}/>}
    </div>
  )
}

export default ItemDetail