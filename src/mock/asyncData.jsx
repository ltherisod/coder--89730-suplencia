const productos= [
    {
        id:'01',
        name:'Random 1',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nesciunt voluptates optio modi impedit! Sequi, corrupti. Quaerat, vero? Quis iure quod, ea impedit totam optio magnam! Aut omnis nihil consequuntur!',
        stock:20,
        price:25000,
        category:'nuevos',
        img:'https://picsum.photos/200'
    },
        {
        id:'02',
        name:'Random 2',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nesciunt voluptates optio modi impedit! Sequi, corrupti. Quaerat, vero? Quis iure quod, ea impedit totam optio magnam! Aut omnis nihil consequuntur!',
        stock:50,
        price:45000,
        category:'mas vendidos',
        img:'../img/darth-vader.png'
    },
     {
        id:'03',
        name:'Random 3',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nesciunt voluptates optio modi impedit! Sequi, corrupti. Quaerat, vero? Quis iure quod, ea impedit totam optio magnam! Aut omnis nihil consequuntur!',
        stock:20,
        price:35000,
        category:'ofertas',
        img:'https://i.postimg.cc/qRC9NHLx/D-NQ-NP-2X-790947-MLU74201862127-012024-F.webp'
    },
    {
        id:'04',
        name:'Random 4',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nesciunt voluptates optio modi impedit! Sequi, corrupti. Quaerat, vero? Quis iure quod, ea impedit totam optio magnam! Aut omnis nihil consequuntur!',
        stock:15,
        price:25000,
        category:'nuevos',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjEgjGu7SUxB4Ggx9sAYNoW5X4xQnO1E-WOA&'
    }
]

let error = false
export const getProducts = ()=> {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                reject('No hay data')
            }else{
                resolve(productos)
            }
        },3000)
    }
    )
}
export const getOneProduct = (id)=> {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                reject('No hay data')
            }else{
                // resolve(productos[0])
                let prod= productos.find((prd)=> prd.id === id)
                resolve(prod)
            }
        },3000)
    }
    )
}