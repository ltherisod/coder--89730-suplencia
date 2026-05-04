import { Badge } from "react-bootstrap";
import { BsCart4 } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidgetRI = (props)=> {
    const {cart} = useContext(CartContext)
      console.log(cart, 'contexto')
   console.log('CartWidget')
    return(
        <div>
           <BsCart4 fontSize={'1.5rem'}/>
           <Badge bg="danger">{props.compras}</Badge>
        </div>
    )
}

export default CartWidgetRI