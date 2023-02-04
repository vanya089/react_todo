import style from "./login.module.css"
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {loginDis} from "../../../redux/auth/thunk-auth";



export default function Login() {

  const dispatch = useDispatch()
  const loginFunc = async (e) => {
	e.preventDefault()
	const formData = new FormData(e.target)
	dispatch(loginDis(
	  formData.get("email"),
	  formData.get("password")
	))
  }




  return (
	<div>

	  <div className={style.logPage} onSubmit={loginFunc}>
		<form>
		  <input type="email" id="email" name="email" placeholder="Enter your email"/>
		  <input type="password" id="password" name="password" placeholder="Enter your password"/>
		  <button className={style.loginButton} name="log">Login</button>
		  <Link className={style.link} to="/registration"> Registration </Link>
		</form>
	  </div>
	</div>
  )
}