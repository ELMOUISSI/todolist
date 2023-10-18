import React from 'react'
import { Outlet, Link } from "react-router-dom";


const NavBar = () => {
  return (
    <>
    <nav className='navbar navbar-expand-lg'>
      <ul className='navbar-nav '>
        <li className='nav-item'>
          <Link className='nav-link active' to="/">InscriptionForm</Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link active' to="/ajout">listInscriptions</Link>
        </li>
       
       
       
      </ul>
    </nav>

    <Outlet />
  </>
  )
}

export default NavBar
