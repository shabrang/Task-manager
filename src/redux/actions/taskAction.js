import { ActionType } from './constant/action-types';
import uuid from 'react-uuid';

export const getTask = (id) => {
	return {
		type: ActionType.GET_TASK,
		payload: {
			id
		}
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

export const editTask = (id, params = {}) => {
	return {
		type: ActionType.EDIT_TASK,
		payload: {
			id,
			params
		}
	};
};

export const deleteTask = (id) => {
	return {
		type: ActionType.DELETE_TASK,
		payload: {
			id
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

export const clearTaskItem = () => {
	return {
		type: ActionType.CLEAR_TASK_ITEM
	};
};
