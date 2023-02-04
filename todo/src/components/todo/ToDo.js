import style from "./ToDo.module.css"
import {FaTrashAlt} from "react-icons/fa";
import {FcCheckmark} from "react-icons/fc";


function ToDo({todo, checkTodo, removeTask, isCheck}) {


  return (
	<div>
	  <div key={todo.userId} className={style.itemTodo}>

		<div className={style.check_wrapper} onClick={() => checkTodo(todo) } defaultChecked={todo.complete}>
		  {
			isCheck && <FcCheckmark className={style.check_inner}/>

		  }
		</div>

		<div
		  className={todo.complete ? style.checkTodo : style.itemTodo}
		>

		  {todo.task}
		</div>

		<FaTrashAlt className={style.deleteBtn} onClick={() => removeTask(todo)}/>

	  </div>
	  <hr/>
	</div>


  );
}


export default ToDo;