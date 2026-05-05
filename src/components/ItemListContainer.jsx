import { useState, useEffect } from "react"
import { getProducts, productos } from "../mock/asyncData"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import Input from "../examples/Input"
import Loader from "./Loader"
import { addDoc, collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../service/firebase"
const ItemListContainer = ({greeting, saludo})=> {
    const [data, setData]= useState([])
    const [loading, setLoading]= useState(false)
    const {type}= useParams()



//FIREBASE
    useEffect(()=> {
        setLoading(true)
        //1. CONECTARNOS CON NUESTRA COLLECTION
        const prodColl = type ? query(collection(db, "items"), where("category", "==", type)) : collection(db, "items")
        //2. PEDIR LOS DATOS
        getDocs(prodColl)
        .then((res)=> {
            const list = res.docs.map((doc)=> {
                return {
                    id:doc.id,
                    ...doc.data()
                }
            })
            setData(list)
        })
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    },[type])

    //PROMESA
    // useEffect(()=>{
    //    setLoading(true)
    //     getProducts()
    //     .then((res)=> {
    //         if(type){
    //             //filtrar
    //             setData(res.filter((prod)=> prod.category === type))
    //         }else{
    //             setData(res)
    //         }
    //     })
    //     .catch((error)=> console.log(error)) 
    //     .finally(()=> setLoading(false))
    // }
   
    // ,[type])
    //  console.log(type)
    
    // console.log('ItemListContainer')

    //DESPUES SE BORRA!!!!!!
    // const subirData = ()=> {
    //     console.log('SUBIENDO DATA.....')
    //     const colSubir = collection(db, 'items')
    //     productos.map((prod)=> addDoc(colSubir, prod))
    // }
  
    return(
        <>
        {
            loading 
            ? <Loader text={type ? 'Cargando categoría...' : 'Cargando productos...'}/>
            :  <>
            <h1>{greeting}{type && <span style={{textTransform:'capitalize', color:'purple'}}>{type}</span>}</h1>
            <ItemList data={data}/>
        </>
        }
        {/* DESPUES LO BORRO */}
        {/* <button className="btn btn-danger" onClick={subirData}>SUBIR DATA</button> */}
        </>
       
    )
}

export default ItemListContainer

