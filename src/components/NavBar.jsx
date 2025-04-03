import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className=' bg-gray-800 text-white p-4 fixed top-0 w-full shadow-md flex flex-col justify-between md:flex-row'>
        <h1 className='text-xl font-bold cursor-pointer'>
            <Link>BuyBazaar</Link>
        </h1>
        <div className='flex flex-col gap-10 text-center text-lg md:flex-row'>
            <Link to='/' className='transform transition duration-500 hover:scale-150'>Home</Link>
            <Link to='/contact' className='navbar-btn'>Contact</Link>
            <Link to='/about' className='navbar-btn'>About</Link>
            <Link to='/cart' className='navbar-btn'>Carts</Link>
            <Link to='/login' className='navbar-btn'>Login</Link>
        </div>
    </nav>
  )
}

export default NavBar