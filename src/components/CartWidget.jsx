const CartWidget = (props)=> {
   
    return(
        <div>
            <span>🛒</span>
            <span style={{color:'red', fontWeight:'bold'}} >{props.compras}</span>
        </div>
    )
}

export default CartWidget