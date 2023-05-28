import React from 'react'
import { Link } from 'react-router-dom';
import {HashLink} from "react-router-hash-link";

const Header=()=> {
  return <nav>
    <h1>Portal</h1>
    <main>
      <HashLink to={"/#Home"}>Home</HashLink>
      <HashLink to={"/#About US"}>About US</HashLink>
      <Link to={"/Contact"}>Contact</Link>
      <HashLink to={"/#Brands"}>Brands</HashLink>
    
      <Link to={"/Services"}>Services</Link>
      

    </main>
  </nav> ;
  
};

export default Header
