import  {  useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../service/firebase'
import EmptyCart from './EmptyCart'
import { Link } from 'react-router-dom'





const Checkout = () => {
  const [buyer, setBuyer]= useState({})
  const [secondMail, setSecondMail]= useState('')
  const [errors, setErrors]= useState(null)
   const [orderId, setOrderId]= useState('')
   const [loading, setLoading]= useState(false)
  const {cart, total, totalConImp, clear}= useContext(CartContext)

  
        const buyerData = (e)=> {
            setBuyer(
                {
                    ...buyer,
                    [e.target.name]: e.target.value
                }
            )
        }

const terminarCompra = (e)=> {
    //PREVENIR PARA QUE NO RECARGUE
e.preventDefault()
if(!buyer.name || !buyer.lastname || !buyer.mail || !buyer.address || !secondMail ){
    setErrors('Por favor complete los campos')
}else if(buyer.mail !== secondMail){
    setErrors('Los correos no coinciden')
}else{
    setErrors(null)
    setLoading(true)
//antes de generar esto
let orden = {
    comprador: buyer,
    carrito:cart,
    total:total(),
    totalConImp: totalConImp(),
    fecha: serverTimestamp()

}

const orderColl= collection(db, "orders")
//Agrewgar el doc
addDoc(orderColl, orden)
.then((res)=>{
    clear()//borro el carrito
    setOrderId(res.id)//guardo el id
} )
.catch((error)=> console.log(error))
.finally(()=> setLoading(false))
}


}

console.log(buyer, 'comprador')

//SI ESTA VACIO EL CARRITO
if(!cart.length && !orderId){
    return <EmptyCart/>
}

  return (
    <>
     
       {
        orderId 
        ? <div>
            <h1>Muchas gracias por tu compra! 🍻</h1>
            <h2>Tu orden es la : {orderId}</h2>
            <Link className='btn btn-dark' to='/'>Volver a Home</Link>
        </div>
        :  <div>
                <h1>Complete con sus datos</h1>
                {errors && <span style={{color:'red', fontWeight:'bold'}}>{errors}</span>}
                <form className='p-4 border rounded shadow-sm bg-light' onSubmit={terminarCompra} >
                    <input className='form-control' name='name' type='text' placeholder='Ingresa tu nombre' onChange={buyerData}/>
                    <input className='form-control' name='lastname' type='text' placeholder='Ingresa tu apellido' onChange={buyerData}/>
                    <input className='form-control' name='address' type='text' placeholder='Ingresa su direccion' onChange={buyerData}/>
                    <input className='form-control' name='mail' type='email' placeholder='Ingresa tu correo' onChange={buyerData}/>
                    <input className='form-control' name='secondmail' type='email' placeholder='Repetí tu correo' onChange={(e)=> setSecondMail(e.target.value)} />
                    <button type='submit' className='btn btn-success' disabled={loading}>{loading ? "Porcesando compra..." : "Terminar Compra"}</button>
                </form>
         </div>
     
       }
    
    </>
  )
}

export default Checkout