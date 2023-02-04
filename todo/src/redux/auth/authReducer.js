import authInitialState from "./authInitialState";


export function authReducer(state = authInitialState, action) {
  switch (action.type) {

	case "IS_LOGIN_ACTION":
	  console.log(action.payload)
	  return {
		...state,
		user: action.payload,
		isLogin: true

		  }

	case "LOGOUT_ACTION":
	  return {
		...state,
		isLogin: false

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