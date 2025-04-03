import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";


const CartContext = createContext()

export const CartProvider = ({children})=>{
    const [products,setProducts] = useState([])

    useEffect(()=>{
        async function getProducts(){
            try{
                const response = await 
                axios.get("https://dummyjson.com/products")
                const updatedProducts = response.data.products.map(product=> ({
                    ...product,
                    stock: product.stock,

                }))
                setProducts(updatedProducts)
            }
            catch(error){
                console.error('Error fetching products',error)
            }
        }
        getProducts()
    })
    return (
        <CartContext.Provider value={{products}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)