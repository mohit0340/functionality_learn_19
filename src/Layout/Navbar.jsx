import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=' bg-[yellow] h-[50px] w-[100%] d-flex'>
      <div className=' d-flex justify-center align-items-center'>
        <img src="" alt="DK" />
        <Link to="/" className=' nav-link'>Diamond King</Link>
      </div>
      <div className=' text-[20px] d-flex justify-content-between align-items-center'>
      <Link to="/" className=' text-[green]'>Home</Link>
      <Link to="/">About</Link>
      <Link to="/">User</Link>
      </div>

    </div>
  )
}

export default Navbar
