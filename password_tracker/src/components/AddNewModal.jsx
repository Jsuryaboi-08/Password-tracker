import React, { useState } from 'react';
import axios from 'axios';
import '../style/AddVaultModal.css';

const AddNewModal = ({ onClose}) => {
    const [isAddNewItemOpen, setAddNewItemOpen] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [website, setWebsite] = useState('');
    const handleAddNewItemClick = () => {
        setAddNewItemOpen(true); // Show the popup when the button is clicked
      };
    
      const handleAddNewItemCancel = () => {
        setAddNewItemOpen(false); // Close the popup when canceled
        // Clear input fields when closing the popup
        setEmail('');
        setPassword('');
        setWebsite('');
      };
  const [vaultName, setVaultName] = useState('');

  const handleAddNewItem = async () => {
    // e.preventDefault(); // Prevent default form submission behavior
    const fileData = {Email : email, Password: password, Website: website}
    console.log(fileData);

    try {
        const response = await fetch("http://localhost:3001/api/uploadFile/"+localStorage.getItem("name"), {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(fileData),
        });
    }catch (err) {
        alert("Network error", err);
    }
  };

  return (
    <div className="popup">
    <div className="popup-content">
      <span className="close" onClick={onClose}>&times;</span>
      <h2>Add New Item</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="text"
        placeholder="Website"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
      />
      <button onClick={handleAddNewItem}>Add</button>
    </div>
  </div>
  );
};

export default AddNewModal;
