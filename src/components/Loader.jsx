import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loader = ({text}) => {
  return (
    <div style={{width:'100%', height:'85vh', display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
        <Spinner animation='grow' variant='dark'/>
        <span>{text}</span>
    </div>
  )
}

export default Loader