import { ActionType } from './constant/action-types';

export const toggleModal = () => {
	return {
		type: ActionType.TOGGLE_MODAL,
		payload: {}
	};
};

export const toggleShowDetail = () => {
	return {
		type: ActionType.TOGGLE_SHOW_DETAIL_TASK,
		payload: {}
	};
};
