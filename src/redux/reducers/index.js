import { combineReducers } from 'redux';

import { taskReducer } from './taskReducer';
import { modalReducer } from './modalReducer';

const reducers = combineReducers({
	taskReducer,
	modalReducer
});

export default reducers;
