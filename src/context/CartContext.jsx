import { useState, createContext} from "react";


//1. Creamos el contexto
export const CartContext = createContext()


//2. Creamos al proveedor

export const CartProvider = ({children})=> {
    const [cart, setCart]= useState([])

    //herramientas para poder interactuar con el carrito 
    //agregar un prod al carrito
    const addItem = (item, qty)=> {
        // console.log({...item, quantity:qty})
        if(isInCart(item.id)){
                //existe, sumo cantidades
                setCart(
                    cart.map((prod)=>{
                        if(prod.id === item.id){
                            //sumar cantidades
                            return {...prod, quantity: prod.quantity + qty}
                        }else{
                            //no los modificamos
                            return prod
                        }
                    })
                )
        }else{
        //NO EXISTE EN EL CARRITO Y LO AGREGO
            setCart([...cart, {...item, quantity:qty}])
        }
    }


    //borrar carrito
    const clear = ()=> {
        setCart([])
    }

    //eliminar un item del carrito
    const removeItem = (id)=> {
        setCart(cart.filter((prod)=> prod.id !== id))
    }

    //SI EXISTE EN EL CARRITO

    const isInCart = (id)=> {
        return cart.some((prod)=> prod.id === id)
    }


    //cart total

    const total = ()=> {
        return cart.reduce((acc, prod)=> acc += (prod.quantity * prod.price),0)
    }
    //   const totalConImp = ()=> {
    //     return cart.reduce((acc, prod)=> acc += (prod.quantity * prod.price),1.5)
    // }

    const totalQuantity = ()=>{
        return cart.reduce((acc, prod)=> acc += prod.quantity, 0)
    }

    return(
        <CartContext.Provider value={{cart, clear, addItem, removeItem, total, totalQuantity}}>
            {children}
        </CartContext.Provider>
    )
}