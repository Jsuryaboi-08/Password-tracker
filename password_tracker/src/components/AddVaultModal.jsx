import React from 'react'
import { useState } from 'react'
import '../style/AddVaultModal.css'
import { addComponent } from '../store/users/addUser'
const AddVaultModal = ({ onClose, onAddVault }) => {
  const [vaultName, setVaultName] = useState('')

  const handleAddComponent = () => {
    const componentData = {
      Name: vaultName,
      Age: 19,
    };
    addComponent(componentData);
  };
  const handleFormSubmit = async (e) => {
       const formData = {
        Name : vaultName,
        Age: 11,
      };
  
    try {
      const response = await fetch("http://localhost:3001/api/newUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.status === 201) {
        alert("Form data saved successfully");
      
      } else {
        alert("Error saving form data");
      }
    } catch (error) {
      alert("Network error:", error);
    }
};

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>×</span>
        <h2>Add Vault</h2>
        <form>
          <input type="text" placeholder="Vault name" value={vaultName} onChange={(e) => setVaultName(e.target.value)} />
          <button type="submit" onClick={handleAddComponent()}>Add</button>
        </form>
      </div>
    </div>
  )
}

export default AddVaultModal