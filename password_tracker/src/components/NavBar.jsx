import React, { useState } from 'react';
import '../style/NavBar.css';
import AddNewModal from './AddNewModal';
const NavBar = () => {
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
  
  const handleAddNewItem = () => {
    // Handle form submission here (e.g., sending data to backend, Redux action)
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Website:', website);

    // Clear input fields after submission
    setEmail('');
    setPassword('');
    setWebsite('');

    // Close the popup after submission
    setAddNewItemOpen(false);
  };

  return (
    <div>
      <div className='nav'>
        <input className='search-tool' type="text" />
        <button onClick={handleAddNewItemClick}>New Item</button>
      </div>

      {/* Popup for adding a new item */}
      {isAddNewItemOpen && (
        <AddNewModal onClose={handleAddNewItemCancel}></AddNewModal>
      )}
    </div>
  );
};

export default NavBar;
