// src/actions/types.js


// src/actions/componentActions.js
import axios from 'axios';
import { ADD_COMPONENT, ADD_COMPONENT_SUCCESS, ADD_COMPONENT_FAILURE } from '../types/types';
// Action creator for adding a component
export const addComponent = async (componentData) => {
    try{
        const response = await fetch('http://localhost:3001/api/newUser', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(componentData),
      });
  
      if (response.status === 201) {
        alert("Form data saved successfully");
        // setFormData({});
      } else {
        alert("Error saving form data");
      }
    } catch (error) {
      alert("Network error:", error);
        }

};
export const addFiles = async (fileData) => {
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
}