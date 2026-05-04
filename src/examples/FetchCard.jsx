import React from 'react'

const FetchCard = ({pj}) => {
  return (
    <div className="card" style={{width: "18rem", marginTop:15}}>
  <img src={pj.image} className="card-img-top" alt={pj.name}/>
  <div className="card-body">
    <h5 className="card-title">{pj.name}</h5>
    <p className="card-text">Status: {pj.status}</p>
    
  </div>
</div>
  )
}

export default FetchCard