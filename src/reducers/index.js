import {combineReducers} from 'redux';
import {SHOW_LOADER, HIDE_LOADER} from '../actions';

function loader(state = {show: false}, action) {
	console.log(action);
	switch (action.type) {
		case SHOW_LOADER:
			return {show: true};
		case HIDE_LOADER:
			return {show: false};
		default:
			return state;
	}
}

// let id = 0;
//
// function todos(state = [], action) {
// 	console.log(action);
// 	switch (action.type) {
// 		case ADD_TODO:
// 			return [
// 				...state,
// 				{
// 					text: action.text,
// 					completed: false,
// 					id: id++
// 				}
// 			]
// 		case TOGGLE_TODO:
// 			return state.map((todo, index) => {
// 				if (index === action.index) {
// 					return Object.assign({}, todo, {
// 						completed: !todo.completed
// 					});
// 				}
// 				return todo;
// 			});
// 		default:
// 			return state;
// 	}
// };

const app = combineReducers({
	loader
});

export default app;
