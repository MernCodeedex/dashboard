import React from 'react'
import './Header.css'

function Header() {
  return (
    <div>
      <nav className='navv'>
        <div class="logo">
          <a href="#">phoenix</a>
        </div>
        <div class="search-bar">
          <form action="/search" method="get">
            <input type="text" name="search" placeholder="Search..." />
          </form>
        </div>
        <ul>
          <li><i class="fa-solid fa-circle-half-stroke text-dark"></i></li>
          <li><i class="fa-solid fa-bell"></i></li>
          <li><i class="fa-solid fa-user"></i></li>
        </ul>

      </nav>
    </div>
  )
}

export default Header