import todoInitialState from "./TodoinitialState";


export function todoReducer(state = todoInitialState, action) {
  switch (action.type) {
	case "ADD_TODO":
	  return {
		...state,
		todo: [...state.todo, action.payload]
	  }


	case "GET_ALL_TODO":
	  const newState = {...state}
	  const todos = action.payload
	  newState.todo = todos;
	  return newState

	case "CHECK_TODO":
	  const {_id} = action.payload;
	  return {
		...state,
		todo: state.todo.map(todo => {
			if (todo._id === _id) {
			  return action.payload
			}
			return todo
		  }
		)
	  }

	case "DELETE_TODO":
	  console.log({"action.payload": action.payload, "state.todo": state.todo})
	  return {
		...state,
		todo: [...state.todo.filter((todo) => todo._id !== action.payload)]
	  }

	case "DELETE_CHECKED":
	  return {
		...state,
		todo: [...state.todo.filter((todo) => todo.complete === false)]
	  }

	case "CHECK_ALL":
	  return {
		...state,
		todo: state.todo.map(todo => {
			return {
			  ...todo,
			  complete: true
			}
		  }
		)
	  }

	case "LOADER_START":
	  return {
		...state,
		isLoading: true
	  }

	case "LOADER_END":
	  return {
		...state,
		isLoading: false
	  }


	default:
	  return state
  }
}