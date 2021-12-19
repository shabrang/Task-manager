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
