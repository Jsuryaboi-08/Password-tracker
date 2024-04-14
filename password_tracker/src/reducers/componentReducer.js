// src/reducers/componentReducer.js
import {
    ADD_COMPONENT,
    ADD_COMPONENT_SUCCESS,
    ADD_COMPONENT_FAILURE,
} from '../actions/types';

const initialState = {
    components: [],
    loading: false,
    error: null,
};

const componentReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COMPONENT:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case ADD_COMPONENT_SUCCESS:
            return {
                ...state,
                loading: false,
                components: [...state.components, action.payload],
            };
        case ADD_COMPONENT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default componentReducer;
