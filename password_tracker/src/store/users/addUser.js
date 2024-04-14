// src/actions/types.js


// src/actions/componentActions.js
import axios from 'axios';
import { ADD_COMPONENT, ADD_COMPONENT_SUCCESS, ADD_COMPONENT_FAILURE } from '../types/types';
// Action creator for adding a component
export const addComponent = (componentData) => {
    return async (dispatch) => {
        // Dispatch the initial action
        dispatch({ type: ADD_COMPONENT });

        try {
            // Make an API call to the backend to add the component
            const response = await axios.post('/api/newUser', componentData);
            // Dispatch the success action with the new component data
            dispatch({
                type: ADD_COMPONENT_SUCCESS,
                payload: response.data,
            });
        } catch (error) {
            // Dispatch the failure action with the error
            dispatch({
                type: ADD_COMPONENT_FAILURE,
                payload: error,
            });
        }
    };
};
