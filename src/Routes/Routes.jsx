import React from 'react'
import {  Route , Routes} from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import User from '../Pages/User';

const Routes = () => {
  return (
    
    <Routes>
      <Route path='/' Component={Home}>Home</Route>
      <Route path='/about' Component={About}>Home</Route>
      <Route path='/user' Component={User}>Home</Route>

    </Routes>
   
  )
}

export default Routes
