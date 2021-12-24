import { ActionType } from '../actions/constant/action-types';

const initialState = {
	tasks: [
		{
			id: 1,
			title: 'task_1',
			description: 'desc_1',
			gift: 'gift_1',
			priority: 'low',
			status: 'started'
		},
		{
			id: 2,
			title: 'task_2',
			description: 'desc_2',
			gift: 'gift_2',
			priority: 'high',
			status: 'started'
		}
	],
	filterDoneTasks: [],
	taskItem: {}
};

export const taskReducer = (state = { ...initialState }, action) => {
	console.log(state);
	switch (action.type) {
		case ActionType.GET_TASK:
			let task = state.tasks.find((task) => task.id === action.payload.id);
			return {
				...state,
				taskItem: { ...task }
			};
		case ActionType.CREATE_TASK:
			return {
				...state,
				tasks: [ ...state.tasks, action.payload ]
			};
		case ActionType.CHANGE_STATUS:
			let index = state.tasks.findIndex((task) => task.id === action.payload.id);
			if (index > -1) {
				state.tasks[index].status = 'done';
			}
			return {
				...state,
				tasks: [ ...state.tasks ]
			};
		case ActionType.FILTER_DONE_TASKS:
			const doneTasks = state.tasks.filter((task) => task.status === 'done');
			return {
				...state,
				filterDoneTasks: [ ...doneTasks ]
			};
		case ActionType.EDIT_TASK:
			let indexTask = state.tasks.findIndex((task) => task.id === action.payload.id);
			Object.assign(state.tasks[indexTask], action.payload.params);

			return {
				...state,
				tasks: [ ...state.tasks ]
			};
		case ActionType.CLEAR_TASK_ITEM:
			console.log('ssssssssssssssssss');
			return {
				...state,
				taskItem: {}
			};
		default:
			return state;
	}
};
