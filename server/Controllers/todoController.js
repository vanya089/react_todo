const Todo = require("../Components/todo")
const ApiError = require("../error/ApiError");


class TodoController {
  async createTodo(req, res, next) {
	try {

	  const {task, complete} = req.body;
	  let userId = req.user
	  const todo = await Todo.create({userId,  task, complete});
	  res.json(todo);
	} catch (e) {
	  next(ApiError.badRequest("Ошибка при создании задачи!"))
	}
  }

  async getAllTodos(req, res, next) {
	try {
	  let userId = req.user
	  let allTasks = await Todo.find({userId})
	  return res.json(allTasks);
	} catch (e) {

	  next(ApiError.badRequest("Ошибка сервера!"))
	}
  }

  async checkTodo(req, res, next) {
	try {
	  const {_id, complete} = req.body
	  let userId = req.user
	  const result = await Todo.findOneAndUpdate({_id,userId}, {complete}, {new: true})
	  res.status(200).json(result)
	} catch (e) {
	  next(ApiError.badRequest("Ошибка при выделении!"))
	}
  }

  async checkAllTodo(req, res, next) {
	try {
	  let userId = req.user
	  const result = await Todo.updateMany({userId ,complete: false},{ $set: {  complete: true}} )
	  console.log(result)
	  res.status(200).json({message: 'success'})
	} catch (e) {
	  next(ApiError.badRequest("Ошибка при выделении!"))
	}
  }

  async deleteTodo(req, res, next) {
	try {
	  const _id = req.query._id
	  const result = await Todo.deleteOne({_id})
	  res.status(200).json(result)
	} catch (e) {
	  next(ApiError.badRequest("Ошибка при удалении!"))
	}

  }


  async deleteChecked(req, res, next) {
	try {
	  let userId = req.user
	  const complete = true
	  const result = await Todo.deleteMany({userId, complete})
	  res.status(200).json(result)
	} catch (e) {

	  next(ApiError.badRequest("Ошибка при удалении отмеченных задач!"))
	}

  }

}

module.exports = new TodoController;