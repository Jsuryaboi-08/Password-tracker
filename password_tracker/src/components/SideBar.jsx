import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addComponent } from '../store/users/addUser';
import '../style/Sidebar.css';
import plus from '../assets/plus.png';

const Sidebar = () => {

  const [isProfileOpen, setProfileOpen] = useState(false);
  const [isVaultsOpen, setVaultsOpen] = useState(false);
  const [isAddVaultOpen, setAddVaultOpen] = useState(false); // State to manage the popup visibility
  const [selectedVault, setSelectedVault] = useState(null);


  const handleAddComponent = () => {
    const componentData = {
      Name: 'New Component',
      Age: 19,
    };
    addComponent(componentData);
  };

  const handleAddVaultClick = () => {
    setAddVaultOpen(true); // Show the popup when the button is clicked
  };

  const handleAddVaultCancel = () => {
    setAddVaultOpen(false); // Close the popup when canceled
  };
  const handleVaultItemClick = (vaultName) => {
    setSelectedVault(vaultName);
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
            Watchtower
          </a>
          <div className="button-flex">
            <div className="dropdown-btn vaultu" onClick={() => setVaultsOpen(!isVaultsOpen)}>
              Vaults
              <i className={`fa fa-caret-down ${isVaultsOpen ? 'open' : ''}`}></i>
            </div>
            <button className="vaultAdd" onClick={handleAddVaultClick}>
              <img src={plus} alt="" />
            </button>
          </div>
          <div className={`dropdown-container ${isVaultsOpen ? 'show' : ''}`}>
          <a href="#" onClick={() => handleVaultItemClick('Private')}
   className={`vault-item ${selectedVault === 'Private' ? 'selected' : ''}`}>
  <img src="private-vault-image-placeholder.jpg" alt="Private" className="vault-image" />
  Private
</a>
<a href="#" onClick={() => handleVaultItemClick('Bank')}
   className={`vault-item ${selectedVault === 'Bank' ? 'selected' : ''}`}>
  <img src="bank-vault-image-placeholder.jpg" alt="Bank" className="vault-image" />
  Bank
</a>
<a href="#" onClick={() => handleVaultItemClick("Son's Vault")}
   className={`vault-item ${selectedVault === "Son's Vault" ? 'selected' : ''}`}>
  <img src="sons-vault-image-placeholder.jpg" alt="Son's Vault" className="vault-image" />
  Son's Vault
</a>
          </div>
        </div>
      </div>

      {/* Popup for adding a new vault */}
      {isAddVaultOpen && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={handleAddVaultCancel}>&times;</span>
            <h2>Add New Vault</h2>
            <input type="text" placeholder="Vault Name" />
            <button>Add</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
