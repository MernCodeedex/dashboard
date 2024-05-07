import React from 'react'
import './Header.css'
import Sidebar from './Sidebar'

function Header() {
  return (
    <div >
   
      <nav className='navv'>
     

        <div  className="logo">
          <a href="#" className='phoenix'>phoenix</a>
        </div>
        <div className="search-bar">
          <form className='search' action="/search" method="get">
            <input type="text" name="search" placeholder="Search..." />
          </form>
        </div>
        <ul className='ul'>
          <li><i class="fa-solid fa-circle-half-stroke text-dark"></i></li>
          <li><i class="fa-solid fa-bell"></i></li>
          <li><i class="fa-solid fa-user"></i></li>
        </ul>
        <div className='sidebar'>
        <Sidebar/>
        </div>
      </nav>

      <div className='sidebar2'>
        <Sidebar/>
        </div>
    </div>
  )
}

export default Header