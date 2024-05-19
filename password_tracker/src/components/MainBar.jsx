import React, { useEffect, useState } from "react";
import "../style/MainBar.css";
import axios from "axios";
import asset from "../assets/profile.jpg";
import stores from "../store";
const MainBar = () => {
  const [getFiles, setFiles] = useState([]);
  const vaults = stores((state) => state.vaults);
  const selectedVaultIndex = stores((state) => state.selectedVaultIndex);

  console.log(selectedVaultIndex);
  return (
    <div className="main-bar">
      <div className="main-bar-component">
        {vaults.map((vault) => (
          <>
            {selectedVaultIndex === vault.name.id && vault.files.map((file, index) => {
              return <div key={index}>
                <p>{file.email}</p>
                <p>{file.website}</p>
              </div> 
            })
          }
          </>
        ))}
      </div>
      <div className="main-bar"></div>
    </div>
  );
};

export default MainBar;
