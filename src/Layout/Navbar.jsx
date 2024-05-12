import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [toggle,setToggle]=useState(false)



  const HandleToggle=()=>{
    
    setToggle(recent=>recent==true?false:true)
  }

  return (
    <div className=" bg-[#183D3D] text-white h-[70px] w-[100%] d-flex justify-content-between px-[10px] border-b-2 border-[black]">
      <div className=" ">
      <Link to="/" className=" nav-link d-flex justify-start align-items-center">
        <img src="/images/logomain.png" alt="logo" className=" h-[70px] w-[70px]"/>
       <span className=" font-logo text-[22px]">LeoCoding</span>      
        </Link>
      </div>
      <div className=" text-[19px] hidden md:hidden lg:flex sm:hidden justify-content-end align-items-center">
        <Link to="/" className=" nav-link text-white  text-center w-[100px] ">
          Home
        </Link>
        <Link to="/about" className="nav-link text-white text-center w-[100px] ">About</Link>
        <Link to="/user" className="nav-link text-white text-center w-[100px] ">User</Link>
      </div>



{/* Mobile Menu */}
<div className=" flex lg:hidden md:flex   justify-content-end align-items-center ">
  <MenuIcon onClick={HandleToggle} className="text-[20px] "/>
      <div  className={`text-[19px] py-[20px] px-[10px] text-center w-[250px] ${toggle?"flex":"hidden"} flex-col rounded  align-items-center bg-[#0b1b21] right-3 top-12 absolute`}>
        <Link to="/" className=" nav-link text-white   text-center w-[200px] ">
          Home
        </Link><hr/>
        <Link to="/about" className="nav-link text-white">About</Link>
        <hr/>
        <Link to="/user" className="nav-link text-white">User</Link><hr/>
      </div>
      </div>
      
    </div>
  );
};

export default Navbar;
