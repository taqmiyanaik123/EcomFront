import React from 'react'
import { useCart } from '../context/CartContext'

export const Cart = () => {
  const {cart,addToCart,removeFromCart} = useCart()
  return (
    <div className='p-6 w-full h-auto relative top-10'>
      <h2 className='text-2xl font-bold'>BuyBazaar </h2>
      {cart.length === 0 ? (
        <p className='mt-4'>Your cart is empty.</p>
      ):(
        <div className='mt-4'>
          {cart.map((item)=>(
            <div key={item.id} className='p-4 border-b flex justify-between items-center'>
              <div>
                <h3 className='text-lg font-semibold'>{item.title}</h3>
                <p>Brand : {item.brand}</p>
                <p>Price : rs.{item.price}</p>
                <p>Quantity : {item.quantity}</p>
                <p>SubTotal : rs.{(item.price * item.quantity).toFixed(2)}</p>
                <p>Stock Left : {item.stock}</p>
              </div>
              <div className='flex gap-2'>
                <button className='px-3 py-1 shadow-md text-black text-2xl border border-gray-600 pb-2 rounded-lg trasition duration-500 hover:translate-y-2' onClick={()=>addToCart(item)}>+</button>
                <button className='px-3 py-1 shadow-md text-black text-2xl border border-gray-600 pb-2 rounded-lg trasition duration-500 hover:translate-y-2' onClick={()=>removeFromCart(item.id)}>-</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
