import { ActionType } from '../actions/constant/action-types';

const initialState = {
	tasks: [
		{
			id: 1,
			title: 'task_1',
			description: 'desc_1',
			gift: 'gift_1',
			priority: 'low',
			done: false
		},
		{
			id: 2,
			title: 'task_2',
			description: 'desc_2',
			gift: 'gift_2',
			priority: 'High',
			done: true
		}
	]
};

export const taskReducer = (state = { ...initialState }, action) => {
	switch (action.type) {
		case ActionType.CREATE_TASK:
			return {
				tasks: state.tasks.concat(action.payload)
			};

		default:
			return state;
	}
};
