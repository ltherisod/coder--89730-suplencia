import React, { useEffect, useState } from 'react'
import FetchList from './FetchList'
import { useFetch } from '../hooks/useFetch'

const ComponentFetch = () => {
    const{data, loading, error}= useFetch('https://rickandmortyapi.com/api/character')
    const {data:pjs, loading:carganding, error:errors}= useFetch('https://dragonball-api.com/api/characters')
// const [personajes, setPersonajes]= useState([])
//     useEffect(()=>{
//         fetch('https://rickandmortyapi.com/api/character')//1. pedir datos
//         .then((res)=> res.json())//2. traducir la respuesta
//         .then((data)=> setPersonajes(data.results))//3. guardarlo en estado
//         .catch((error)=> console.error(error))
//     },[])

    console.log({pjs, carganding, errors})
  return (
    <div>
        <h1>ComponentFetch</h1>
       {loading ? <p>Cargado data...</p> : <FetchList personajes={data?.results}/>}
    </div>
  )
}

export default ComponentFetch