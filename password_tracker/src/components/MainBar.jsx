import React from 'react'
import '../style/MainBar.css'
import asset from  '../assets/profile.jpg'

const MainBar = () => {
  return (
    <div >
        
        <div className='main-bar'>
        <div className='main-bar-component'>
            <img src= {asset} alt="" />
            <div>
            <div>Geen Donald Joel J</div>
            <div>angelinedias53@gmail.com</div>
            </div>
        </div>
        <div className='main-bar-component'>
            <img src= {asset} alt="" />
            <div>
            <div>Geen Donald Joel J</div>
            <div>angelinedias53@gmail.com</div>
            </div>
        </div>
        <div className='main-bar-component'>
            <img src= {asset} alt="" />
            <div>
            <div>Geen Donald Joel J</div>
            <div>angelinedias53@gmail.com</div>
            </div>
        </div>
        <div className='main-bar-component'>
            <img src= {asset} alt="" />
            <div>
            <div>Geen Donald Joel J</div>
            <div>angelinedias53@gmail.com</div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default MainBar