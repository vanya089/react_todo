import {combineReducers} from "redux";
import {todoReducer} from "./todo/todoReducer";
import {authReducer} from "./auth/authReducer";
import {shareReducer} from "./share/shareReducer";

const rootReducer = combineReducers({
  todo: todoReducer,
  auth: authReducer,
  share: shareReducer
})
export default  rootReducer
