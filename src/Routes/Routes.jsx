import React from 'react'
import {  Route , Routes} from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import User from '../Pages/User';

const AppRoutes = () => {
  return (
    
    <Routes>
      <Route path='/' Component={Home}></Route>
      <Route path='/about' Component={About}></Route>
      <Route path='/user' Component={User}></Route>

    </Routes>
   
  )
}

export default AppRoutes
