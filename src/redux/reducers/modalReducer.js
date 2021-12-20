import { ActionType } from '../actions/constant/action-types';

const initialState = {
	open: false
};

export const modalReducer = (state = { ...initialState }, action) => {
	switch (action.type) {
		case ActionType.TOGGLE_MODAL:
			return {
				...state,
				open: !state.open
			};
		default:
			return state;
	}
};
