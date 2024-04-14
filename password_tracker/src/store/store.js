// src/reducers/index.js
import { combineReducers } from 'redux';
import componentReducer from './componentReducer';

const rootReducer = combineReducers({
    component: componentReducer,
    // Add other reducers here if needed
});

export default rootReducer;
