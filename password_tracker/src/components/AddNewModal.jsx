import React, { useState } from "react";
import axios from "axios";
import "../style/AddVaultModal.css";
import stores from "../store";
const AddNewModal = ({ onClose }) => {
  const [isAddNewItemOpen, setAddNewItemOpen] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [website, setWebsite] = useState("");

  const [vaultName, setVaultName] = useState("");
  const addVaults = stores((state) => state.addVaults);
  const addFileToVault = stores((state) => state.addFileToVault);
  const vaults = stores((state) => state.vaults);
  const selectedVault = stores((state) => state.selectedVaultIndex);

  const handleAddNewItem = () => {
    const file = { email, password, website };
    {
      vaults.map((vault, index) => {

        if (vault.name.id === selectedVault) {
            addFileToVault(selectedVault, file);
            console.log("hello")
        }
      });
    }
    onClose();
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
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
        <button onClick={() => handleAddNewItem()}>Add</button>
      </div>
    </div>
  );
};

export default AddNewModal;
