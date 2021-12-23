import { ActionType } from './constant/action-types';
import uuid from 'react-uuid';

export const getTasks = () => {
	return {
		type: ActionType.GET_TASKS
	};
};
export const createTask = ({ title, description, gift, priority }) => {
	return {
		type: ActionType.CREATE_TASK,
		payload: {
			id: uuid(),
			title,
			description,
			gift,
			priority,
			status: 'started'
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

export const changeStatusTask = (id) => {
	return {
		type: ActionType.CHANGE_STATUS,
		payload: {
			id
		}
	};
};

export const setFilterDoneTasks = () => {
	return {
		type: ActionType.FILTER_DONE_TASKS
	};
};
