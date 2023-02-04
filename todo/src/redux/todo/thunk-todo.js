import {TodoService} from "../../services/todo-service";
import {
  addTodoAction,
  checkAllActon,
  checkTodoAction,
  deleteCheckedAction,
  deleteTodoAction,
  getAllTodoAction
} from "./actions";
import {endLoading, errorAction, startLoading} from "../share/actions";

export const addTodoThunk =
  (todo) =>
	async (dispatch) => {

	  try {
		dispatch(startLoading())
		const data = await TodoService.addTodoService(todo);
		dispatch(addTodoAction(data));
	  } catch (e) {
		if(e?.response?.data) {
		  dispatch(errorAction(e.response.data))
		  return
		}
		dispatch(errorAction(e))
	  } finally {
		dispatch(endLoading())
	  }
	};

export const getAllTodoThunk = () => async (dispatch) => {

  try {
	dispatch(startLoading())
	const data = await TodoService.getAllTodoService();
	dispatch(getAllTodoAction(data))
  } catch (e) {
	if(e?.response?.data) {
	  dispatch(errorAction(e.response.data))
	  return
	}
	dispatch(errorAction(e))
  } finally {
	dispatch(endLoading())
  }
};

export const checkTodoThunk =
  (todo) =>
	async (dispatch) => {
	  try {
		dispatch(startLoading())
		const data = await TodoService.checkTodoService(todo)
		dispatch(checkTodoAction(data))
	  } catch (e) {
		if(e?.response?.data) {
		  dispatch(errorAction(e.response.data))
		  return
		}
		dispatch(errorAction(e))
	  } finally {
		dispatch(endLoading())
	  }
	};


export const checkAllTodoThunk =
  () =>
	async (dispatch) => {
	  try {
		dispatch(startLoading())
		const data = await TodoService.checkAllTodoService()
		dispatch(checkAllActon())
	  } catch (e) {
		if(e?.response?.data) {
		  dispatch(errorAction(e.response.data))
		  return
		}
		dispatch(errorAction(e))
	  } finally {
		dispatch(endLoading())
	  }
	};

export const deleteTodoThunk =
  (todo) =>
	async (dispatch) => {
	  try {
		dispatch(startLoading())
		const data = await TodoService.deleteTodoService(todo._id)
		dispatch(deleteTodoAction(todo._id))
	  } catch (e) {
		if(e?.response?.data) {
		  dispatch(errorAction(e.response.data))
		  return
		}
		dispatch(errorAction(e))
	  } finally {
		dispatch(endLoading())
	  }
	};


export const deleteCheckedThunk =
  (todo) =>
	async (dispatch) => {
	  try {
		dispatch(startLoading())
		const data = await TodoService.deleteCheckedService(todo)
		dispatch(deleteCheckedAction(data))
	  } catch (e) {
		if(e?.response?.data) {
		  dispatch(errorAction(e.response.data))
		  return
		}
		dispatch(errorAction(e))
	  } finally {
		dispatch(endLoading())
	  }
	};