import { useEffect } from "react"

//creamos el HOC (function)
export const withLogging = (WrappedComponent)=> {

    //2. Creamos el nuevo componente que retorna el HOC

    const ComponentWithLogging = (props)=> {

        //Este es el efecto que se ejecuta cuando el componente aparece en pantalla
        useEffect(()=>{
            console.log(`😱 ${WrappedComponent.name} se montó`)
        },[])

        //Mostar el componente original, mantener sus props original 
        return(
            <WrappedComponent {...props}/>
        )
    }

    //3. retornar el nuevo componente
    return ComponentWithLogging
}