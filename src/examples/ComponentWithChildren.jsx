import React from 'react'

const ComponentWithChildren = ({children}) => {
  return (
    <div
    style={{
        backgroundColor:'#c4faf8',
        width:'90%',
        height:'30rem',
        borderRadius:'5%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        marginTop:15
    }}
    >
        <h2>Contenido</h2>
        {children}
    </div>
  )
}

export default ComponentWithChildren