import React, { useEffect, useState } from 'react'
import '../style/DisplayBar.css'
import asset from  '../assets/profile.jpg'
import NavBar from './NavBar' 
import axios from 'axios'
const Layout = () => {
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
    <div className='display-bar'>
        <NavBar></NavBar>   
        <div className='big-display'>
        <div className='layout-component'>
            <img src= {asset} alt="" />
            <div>
            <div>Geen Donald Joel J</div>
            </div>
        </div>
        </div>
        <div className='details-cover'>
        
        </div>
    </div>
  )
}

export default Layout