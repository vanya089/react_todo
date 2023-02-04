import {api} from "../api/api";
import {TokenService} from "./token-service";

export class TodoService {
  static async addTodoService(values) {
	console.log(values)
	const {data} = await api.post("/posts/", values, {
	  headers: {
		"Authorization": TokenService.getToken("token")
	  }

	});
	return data;
  }

  static async getAllTodoService() {
	const {data} = await api.get("/getAll/",{
	  headers: {
		"Authorization": TokenService.getToken("token")
	  }

	});
	return data;
  }

  static async checkTodoService(values) {
	const {data} = await api.patch("/check", {
		...values,
		complete: !values.complete
	  },
	  {
		headers: {
		  "Authorization": TokenService.getToken("token")
		}
	  });
	return data;
  }


  static async checkAllTodoService(values) {
	const {data} = await api.patch("/checkAll",
	  {}, {
		headers: {
		  "Authorization": TokenService.getToken("token")
		}
	  });
	return data;
  }


  static async deleteTodoService(id) {
	console.log(id)
	const {data} = await api.delete(`/deleteOne?_id=${id}`, {
	  headers: {
		"Authorization": TokenService.getToken("token")
	  }

	});
	return data;
  }


  static async deleteCheckedService(values) {
	console.log(values)
	const {data} = await api.delete("/deleteChecked", {
	  headers: {
		"Authorization": TokenService.getToken("token")
	  }

	});
	return data;
  }


}