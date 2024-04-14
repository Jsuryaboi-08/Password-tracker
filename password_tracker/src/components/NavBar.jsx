import React from 'react'
import '../style/NavBar.css'
const NavBar = () => {
  return (
    <div>
        <div className='nav'>
            <input className='search-tool' type="text" />
            <button>New Item</button>
        </div>
    </div>
  )
}

export default NavBar