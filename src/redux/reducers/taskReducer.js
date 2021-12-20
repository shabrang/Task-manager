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
			priority: 'high',
			done: true
		}
	]
};

export const taskReducer = (state = { ...initialState }, action) => {
	switch (action.type) {
		case ActionType.CREATE_TASK:
			return {
				...state,
				tasks: [ ...state.tasks, action.payload ]
			};
		case ActionType.IS_DONE:
			let index = state.tasks.findIndex((task) => task.id === action.payload.id);
			if (index > -1) {
				state.tasks[index].done = true;
			}
			return {
				...state,
				tasks: [ ...state.tasks ]
			};
		default:
			return state;
	}
};
