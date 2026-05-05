import React, { useEffect, useState } from 'react'
import { getOneProduct } from '../mock/asyncData'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import Loader from './Loader'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../service/firebase'

const ItemDetailContainer = () => {
    const [detail, setDetail]= useState({})
    const [loading, setLoading] = useState(true)
// const param= useParams()
// console.log(param, 'Param')
const {id}= useParams()

//FIREBASE
useEffect(()=>{
    //1. CREAR UNA REFERENCIA
    const docRef = doc(db, "items", id)
    //2. TRAER EL DOC
    getDoc(docRef)
    .then((res)=> setDetail({id: res.id, ...res.data()}))
    .catch((error)=> console.log(error))
    .finally(()=> setLoading(false))
},[id])
//PROMESA
    // useEffect(()=>{
    //     getOneProduct(id)
    //     .then((res)=> setDetail(res))
    //     .catch((error)=> console.log(error))
    //     .finally(()=> setLoading(false))
    // },[id])
  return (
    <>
        {loading ? <Loader text='Cargando detalle...'/>:<ItemDetail detail={detail}/>}
    </>
  )
}

export default ItemDetailContainer