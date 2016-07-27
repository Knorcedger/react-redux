import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import Todo from './Todo';
import {toggleTodo} from '../actions';

const TodoList2 = ({todos, onTodoClick}) => (
	<ul>
		{todos.map(todo =>
			<Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
		)}
	</ul>
)

TodoList2.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		completed: PropTypes.bool.isRequired,
		text: PropTypes.string.isRequired
	}).isRequired).isRequired,
	onTodoClick: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
	return {
		todos: state.todos
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		onTodoClick: (id) => {
			console.log('clicked');
			// debugger;
			dispatch(toggleTodo(id))
		}
	}
}

const TodoList = connect(
  mapStateToProps,
	mapDispatchToProps
)(TodoList2);

export default TodoList;
