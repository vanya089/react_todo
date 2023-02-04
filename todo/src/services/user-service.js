import {api} from "../api/api";

export class UserService {
  static async registrationUserService(values) {
	const {data} = await api.post("/registration/", values);
	return data;
  }

  static async loginUserService(values) {
	const {data} = await api.post("/login/", values);
	return data;
  }

}