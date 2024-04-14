import React from 'react'
import { useState } from 'react'
import '../style/AddVaultModal.css'

const AddVaultModal = ({ onClose, onAddVault }) => {
  const [vaultName, setVaultName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onAddVault(vaultName)
    setVaultName('')
    onClose()
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>×</span>
        <h2>Add Vault</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Vault name" value={vaultName} onChange={(e) => setVaultName(e.target.value)} />
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  )
}

export default AddVaultModal