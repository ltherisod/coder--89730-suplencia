import React, { useState } from 'react'

const Input = () => {
    const [name, setName]= useState('')
    const onChangeHandler = (e)=> {
        console.log(e)
        console.log(e.target)
        console.log(e.target.value)
        setName(e.target.value)

    }
  return (
    <div>
        <h2>Input</h2>
        <input className='form-control' name='nombre' placeholder='Ingresa tu nombre' type='text' onChange={onChangeHandler}/>
        <p>{name}</p>
    </div>
  )
}

export default Input