import {combineReducers} from 'redux';
import {ADD_TODO, TOGGLE_TODO} from '../actions';

let id = 0;

function todos(state = [], action) {
	console.log(action);
	switch (action.type) {
		case ADD_TODO:
			return [
				...state,
				{
					text: action.text,
					completed: false,
					id: id++
				}
			]
		case TOGGLE_TODO:
			return state.map((todo, index) => {
				if (index === action.index) {
					return Object.assign({}, todo, {
						completed: !todo.completed
					});
				}
				return todo;
			});
		default:
			return state;
	}
};

const todoApp = combineReducers({
	todos
});

export default todoApp;
