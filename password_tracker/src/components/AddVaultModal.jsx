import React, { useState } from 'react';
import axios from 'axios';
import '../style/AddVaultModal.css';

const AddVaultModal = ({ onClose }) => {
  const [vaultName, setVaultName] = useState('');

  const handleAddComponent = async (e) => {
    // e.preventDefault(); // Prevent default form submission behavior
    console.log("Submitting form");

    try {
      const response = await axios.post('http://localhost:3001/api/newUser', {
        Name: vaultName,
        Age: 19,
      });

      console.log(response.data);
      // Handle success
      alert('Vault added successfully');
      onClose(); // Close the modal after successful addition
    } catch (error) {
      // Handle error
      console.error('Error adding vault:', error);
      alert('Error adding vault. Please try again.');
    }
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
