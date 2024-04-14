import React from 'react'
import { useState } from 'react'
import {connect} from 'react-redux'
import '../style/Sidebar.css'
import { addComponent } from '../store/users/addUser';
import plus from '../assets/plus.png'
const Sidebar = () => {
  const [isProfileOpen, setProfileOpen] = useState(false);
  const [isVaultsOpen, setVaultsOpen] = useState(false);
    const handleAddComponent = () => {
        const componentData = {
            name: 'New Component',
            description: 'A new component description',
        };
        addComponent(componentData);
  };
  
  return (
    <div className="sidebar dark">
      <div className="header">
        <h1 className="app-name">Pass</h1>
        <div className="menu-icon">...</div>
      </div>
      <div className="profile">
        <button className="dropdown-btn" onClick={() => setProfileOpen(!isProfileOpen)}>
          <img src="profile-image-placeholder.jpg" alt="Profile" className="profile-image" />
          Profile
          <i className={`fa fa-caret-down ${isProfileOpen ? 'open' : ''}`}></i>
        </button>
        <div className={`dropdown-container ${isProfileOpen ? 'show' : ''}`}>
          <a href="#">
            <img src="All-items-image-placeholder.jpg" alt="All Items" className="profile-image" />
            All Items
            </a>
          <a href="#">
          <img src="Favorites-image-placeholder.jpg" alt="Favorites" className="profile-image" />
            Favourites
            </a>
          <a href="#">
          <img src="Watchtower-image-placeholder.jpg" alt="Watchtower" className="profile-image" />
            Watchtower</a>
          <div className='button-flex'>
          <div className="dropdown-btn" onClick={() => setVaultsOpen(!isVaultsOpen)}>
            Vaults
            <i className={`fa fa-caret-down ${isVaultsOpen ? 'open' : ''}`}></i>
            
          </div>
          <button className='vaultAdd' onClick={handleAddComponent()}><img src= {plus} alt="" /></button>
          </div>
          <div className={`dropdown-container ${isVaultsOpen ? 'show' : ''}`}>
            <a href="#">
              <img src="private-vault-image-placeholder.jpg" alt="Private" className="vault-image" />
              Private
            </a>
            <a href="#">
              <img src="bank-vault-image-placeholder.jpg" alt="Bank" className="vault-image" />
              Bank
            </a>
            <a href="#">
              <img src="sons-vault-image-placeholder.jpg" alt="Son's Vault" className="vault-image" />
              Son's Vault
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar