import React, { useEffect, useState } from 'react'
import '../style/MainBar.css'
import axios from 'axios'
import asset from  '../assets/profile.jpg'

const MainBar = () => {
    const [getFiles, setFiles] = useState([]);
    const handleFiles = async () => {
        try {
            console.log(localStorage.getItem("name"));

            const response = await axios.get(`http://localhost:3001/api/files/${localStorage.getItem("name")}`);
            setFiles(response.data);
            console.log(response.data)
        } catch (error) {
            console.log("Error fetching files:", error);
        }
    }

    useEffect(() => {
        handleFiles();
      }, [getFiles]);
  return (
    <div >
        
        <div className='main-bar'>
        {getFiles.map((file) => (
            <div className='main-bar-component'>
                <img src= {asset} alt="" />
                <div>
                <div>{file.Email}</div>
                <div>{file.Website}</div>
                </div>
            </div>
        ))
        }
        </div>
    </div>
  )
}

export default MainBar