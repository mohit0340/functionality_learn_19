import React from 'react'
import Navbar from './Navbar'


const Layout = ({children}) => {
  return (
    <div className='bg-[#040D12] text-white h-[100vh] ' >
       
        <Navbar></Navbar>
        <div className='flex'>
          
          <div className=''>
        {children}
        </div>
        </div>
    </div>
  )
}

export default Layout
