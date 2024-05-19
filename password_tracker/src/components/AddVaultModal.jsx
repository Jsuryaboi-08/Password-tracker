import React, { useState } from 'react';
import axios from 'axios';
import {v4 as uuidv4} from 'uuid';
import '../style/AddVaultModal.css';
import stores from '../store';
const AddVaultModal = ({ onClose }) => {
  const [vaultName, setVaultName] = useState('');
  const addVaults = stores((state) => state.addVaults);

  const handleAddComponent = async (index) => {
    // e.preventDefault(); // Prevent default form submission behavior
    const name = {id: uuidv4() , name : vaultName};
    addVaults(name);
    onClose();
  };

  return (
    <div className="popup">
    <div className="popup-content">
    <span className="close" onClick={onClose}>×</span>
        <h2>Add Vault</h2>
        <form onSubmit={handleAddComponent}>
          <input type="text" placeholder="Vault name" value={vaultName} onChange={(e) => setVaultName(e.target.value)} />
          <button type="submit" >Add</button>
        </form>
    </div>
  </div>
  );
};

export default AddVaultModal;
