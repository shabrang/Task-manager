import { ActionType } from './constant/action-types';

export const toggleModal = () => {
	return {
		type: ActionType.TOGGLE_MODAL,
		payload: {}
	};
};
