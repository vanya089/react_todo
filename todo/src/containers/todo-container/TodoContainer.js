import {useEffect, useMemo, useState} from "react";
import obama from "../../assets/obama.gif"
import {useDispatch, useSelector} from "react-redux";
import style from "./TodoContainer.module.css";
import ToDoForm from "../../components/todo-form/ToDoForm";
import ToDo from "../../components/todo/ToDo";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import {
  addTodoThunk,
  checkAllTodoThunk,
  checkTodoThunk,
  deleteCheckedThunk, deleteTodoThunk,
  getAllTodoThunk
} from "../../redux/todo/thunk-todo";
import {logOutDis} from "../../redux/auth/thunk-auth";

function TodoContainer() {
  const [viewOptions, setViewOptions] = useState("all")


  const dispatch = useDispatch()
  const {todo, isLoading} = useSelector((state) => state.todo)


  useEffect(() => {
	dispatch(getAllTodoThunk())
  }, [])


  const filteredTasks = useMemo(() => {
	switch (viewOptions) {
	  case "all":
		return todo;
	  case "checked":
		return todo.filter((todo) => todo.complete === true);
	  case "unchecked":
		return todo.filter((todo) => todo.complete === false);
	  default:
		return
	}
  }, [viewOptions, todo])


  const addTodo = (userInput) => {
	if (userInput) {
	  const newItem = {
		task: userInput,
		complete: false
	  }
	  dispatch(addTodoThunk(newItem))
	}
  }
  const checkAll = (todo) => {

	dispatch(checkAllTodoThunk(todo))

  }


  const deleteChecked = (todo) => {
	dispatch(deleteCheckedThunk(todo))

  }
  const removeTask = (todo) => {
	dispatch(deleteTodoThunk(todo))

  }
  const checkTodo = (todo) => {
	dispatch(checkTodoThunk(todo))
  }


  const logOut = () => {
	dispatch(logOutDis())
  }


  return (
	<div className={style.App}>
	  <div className={style.logOut} onClick={logOut}>logout</div>
	  {isLoading && <div className={style.loader}><img src={obama} alt="loader"/></div>}
	  <br/>
	  <h1>Your todos list</h1>

	  <div className={style.container}>
		<ToDoForm addTask={addTodo}/>
		<div className={style.containerForms}>
		  {filteredTasks.map((todo) => {
			return (
			  <ToDo
				todo={todo}
				key={todo._id}
				isCheck={todo.complete}
				text={todo.task}
				checkTodo={checkTodo}
				removeTask={removeTask}
			  />
			)
		  })}
		</div>


		{
		  todo.length > 0 &&
		  <div className={style.filter}>
			{
			  todo.length > 0 &&

			  <ButtonGroup className={style.btnGroup} aria-label="Basic example">
			  <span onClick={() => checkAll(todo)}
					className={style.counterTodo}>{todo.filter(element => element.complete === false).length}tasks left</span>
				<Button className={viewOptions === "all" ? style.borderBtn : style.btn} variant="secondary"
						onClick={() => setViewOptions("all")}>All</Button>
				<Button className={viewOptions === "unchecked" ? style.borderBtn : style.btn} variant="secondary"
						onClick={() => setViewOptions("unchecked")}>ToDo</Button>
				<Button className={viewOptions === "checked" ? style.borderBtn : style.btn} variant="secondary"
						onClick={() => setViewOptions("checked")}>Completed</Button>
			  </ButtonGroup>

			}
			{
			  todo.some(element => element.complete === true) &&
			  <div className={style.clearButton} onClick={() => deleteChecked(todo)}>
				Clear completed
			  </div>
			}


		  </div>
		}


	  </div>


	</div>
  );
}

export default TodoContainer;
