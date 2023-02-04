import TodoContainer from "./containers/todo-container/TodoContainer";
import {Navigate, Route, Routes} from "react-router-dom";
import Login from "./components/authorization/login/Login";
import Registration from "./components/authorization/registration/Registration";
import {useDispatch, useSelector} from "react-redux";
import ErrorBoundary from "./error/ErrorBoundary";




function App() {

  const {isLogin} = useSelector((state) => state.auth)



  return (
	<div>
	  <ErrorBoundary>
		<Routes>
		  <Route path={"/"} element={<Navigate to={"/login"} replace/>}/>
		  <Route path={"/todos"} element={
			isLogin ? <TodoContainer/> : <Navigate to="/login"/> }/>
		  <Route
			path="/login"
			element={isLogin ? <Navigate to="/todos"/> : <Login/>}
		  />
		  <Route path="/registration" element={<Registration/>}/>
		</Routes>
	  </ErrorBoundary>

	</div>

  )

}

export default App;
