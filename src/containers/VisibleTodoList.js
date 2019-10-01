import { bindActionCreators } from "redux";
import { getVisibileTodos } from "../selector";
import * as TodoActions from "../actions";
import { connect } from "react-redux";
import TodoList from "../components/TodoList";

const mapStateToProps = state => ({
  filteredTodos: getVisibileTodos(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch)
});

const visibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default visibleTodoList;
