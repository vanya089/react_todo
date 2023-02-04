import style from "../registration/registration.module.css"
import {useDispatch} from "react-redux";
import {RegistrationDis} from "../../../redux/auth/thunk-auth";




export default function Registration() {
  const dispatch = useDispatch()


  const registrationFunc = async (e) => {
	e.preventDefault()
	const formData = new FormData(e.target)
	dispatch(RegistrationDis(
	  formData.get('email'),
	  formData.get('password')
	))
  }

  return (
	<div>
	  <div className={style.logPage} >
		<form onSubmit={registrationFunc}>
		  <input type='email' id='email' name='email' placeholder='Enter your email'/>
		  <input type='password' id='password' name='password' placeholder='Enter your password'/>
		  <button className={style.loginButton} name='log'>Registration</button>
		</form>
	  </div>
	</div>
  )
}