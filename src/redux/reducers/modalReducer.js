import { ActionType } from '../actions/constant/action-types';

const initialState = {
	open: false,
	showDetail: false
};

export const modalReducer = (state = { ...initialState }, action) => {
	switch (action.type) {
		case ActionType.TOGGLE_MODAL:
			return {
				...state,
				open: !state.open
			};
		case ActionType.TOGGLE_SHOW_DETAIL_TASK:
			return {
				...state,
				showDetail: !state.showDetail
			};
		default:
			return state;
	}
};
