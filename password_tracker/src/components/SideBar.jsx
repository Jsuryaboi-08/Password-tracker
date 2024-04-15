import React, { useState,useEffect } from 'react';
import { connect } from 'react-redux';
import { addComponent } from '../store/users/addUser';
import '../style/Sidebar.css';
import plus from '../assets/plus.png';
import AddVaultModal from './AddVaultModal';
import axios from 'axios';
const Sidebar = () => {

  const [isProfileOpen, setProfileOpen] = useState(false);
  const [isVaultsOpen, setVaultsOpen] = useState(false);
  const [isAddVaultOpen, setAddVaultOpen] = useState(false); // State to manage the popup visibility
  const [selectedVault, setSelectedVault] = useState(null);
  const [getVaults,setVaults] = useState([]);
  const [name, setName] = useState("");

  const handleVaults = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/usernames");
      setVaults(response.data);
      
    } catch (error) {
      console.error("Error fetching vaults:", error);
    }
  };
  const handleClick = (vault) => {
    setName(vault);
    localStorage.setItem("name", name);
  }
  useEffect(() => {
    handleVaults();
  }, [getVaults]);
 

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
          <div className={`dropdown-container ${isVaultsOpen ? 'show' : ''}`} >
          {getVaults.map((vault) => (
              <a
                onClick={() => handleClick(vault)}
                href="#"
                className={`vault-item ${
                  selectedVault === vault ? "selected" : ""
                }`}
              >
                <img
                  src="sons-vault-image-placeholder.jpg"
                  alt="Son's Vault"
                  className="vault-image"
                />
                {vault}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Popup for adding a new vault */}
      {isAddVaultOpen && (
          <AddVaultModal onClose={handleAddVaultCancel}></AddVaultModal>
      )}
    </div>
  );
};

export default Sidebar;
