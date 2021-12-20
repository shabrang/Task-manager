import { ActionType } from './constant/action-types';
import uuid from 'react-uuid';

export const createTask = ({ title, description, gift, priority }) => {
	return {
		type: ActionType.CREATE_TASK,
		payload: {
			id: uuid,
			title,
			description,
			gift,
			priority,
			done: false
		}
	};
};

export const editTask = (id, params) => {
	return {
		type: ActionType.EDIT_TASK,
		payload: {
			id,
			params
		}
	};
};

export const isDoneTask = (id) => {
	return {
		type: ActionType.IS_DONE,
		payload: {
			id
		}
	};
};
