import {useState} from "react";
import style from "./ToDoForm.module.css"


function ToDoForm({addTask}) {
  const [userInput, setUserInput] = useState("");


  const handleChange = (e) => {
	setUserInput(e.currentTarget.value)
  }


  const handleSubmit = (e) => {
	e.preventDefault()
	addTask(userInput)
	setUserInput("")
  }

  const handleKeyPress = (e) => {
	if (e === "Enter") {
	  handleSubmit(e)
	}
  }


  return (


	<div>
	  <div className={style.form_wrapper}>
		<form className={style.form_wrapper} onSubmit={handleSubmit}>
		  <input className={style.form}
				 value={userInput}
				 type="text"
				 onChange={handleChange}
				 onKeyDown={handleKeyPress}
				 placeholder={`Enter your task name here`}
		  />

		</form>
	  </div>


	</div>

  );
}


export default ToDoForm;