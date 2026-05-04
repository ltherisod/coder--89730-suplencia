import { useState, useEffect } from "react"
import { getProducts } from "../mock/asyncData"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import Input from "../examples/Input"
import Loader from "./Loader"
const ItemListContainer = ({greeting, saludo})=> {
    const [data, setData]= useState([])
    const [loading, setLoading]= useState(false)
    const {type}= useParams()

    useEffect(()=>{
       setLoading(true)
        getProducts()
        .then((res)=> {
            if(type){
                //filtrar
                setData(res.filter((prod)=> prod.category === type))
            }else{
                setData(res)
            }
        })
        .catch((error)=> console.log(error)) 
        .finally(()=> setLoading(false))
    }
   
    ,[type])
     console.log(type)
    
    console.log('ItemListContainer')
  
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
        </>
       
    )
}

export default ItemListContainer

