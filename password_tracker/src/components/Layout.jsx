import React from 'react'
import '../style/DisplayBar.css'
import asset from  '../assets/profile.jpg'
import NavBar from './NavBar' 
const Layout = () => {
  return (
    <div className='display-bar'>
        <NavBar></NavBar>   
        <div className='big-display'>
        <div className='layout-component'>
            <img src= {asset} alt="" />
            <div>
            <div>Geen Donald Joel J</div>
            </div>
        </div>
        </div>
        <div className='details-cover'>
        <div className='user-details'>
            <div>username</div>
            <div>angelinedias53@gmail.com</div>
        </div>
        <div className='password'>
            <div>Password</div>
            <div>********</div>
        </div>
        </div>
        <div className='extra-info'>
            <div>website</div>
            <div className='link'>amazon.com</div>
        </div>
    </div>
  )
}

export default Layout