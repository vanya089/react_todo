const ApiError = require("../error/ApiError");

const bcrypt = require("bcrypt")
const {validationResult} = require("express-validator")
const jwt = require("jsonwebtoken")
const User = require("../Components/user")
require("dotenv")


const generateAccessToken = (payload) => {

  return jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: "12h"})
}


class UserController {

  async createNewUser(req, res, next) {
	try {
	  const errors = validationResult(req)
	  if (!errors.isEmpty()) {
		next(ApiError.badRequest("Поля не должны быть пустыми!"))
		return;
	  }
	  const {username, password} = req.body
	  const candidate = await User.findOne({username})
	  if (!candidate) {
		const hashPassword = bcrypt.hashSync(password, 1)
		const user = new User({username, password: hashPassword, userId: Date.now().toString()})
		await user.save()
		return res.status(200).json({message: "Registration successful"})
	  } else {
		next(ApiError.badRequest("Пользователь уже зарегистрирован!"))
	  }
	} catch (e) {
	  next(ApiError.badRequest("Ошибка регистрации!"))
	}
  }


  async loginNewUser(req, res, next) {
	try {
	  const {username, password} = req.body;
	  const user = await User.findOne({username});
	  if (!user) {
		next(ApiError.badRequest("Пользователь не найден!"))
		return;
	  }

	  const validPassword = bcrypt.compareSync(password, user.password);
	  if (!validPassword){
		next(ApiError.badRequest("Неверный пароль!"))
		return;
	  }

	  const token = generateAccessToken({userId: user.userId});
	  return res.json(token);

	} catch (e) {
	  next(ApiError.badRequest("Ошибка входа!"))
	}
  }


  async getUsers(req, res, next) {
	try {
	  const users = await User.find()
	  res.json(users);
	} catch (e) {
	  next(ApiError.badRequest("Ошибка сервера!"))
	}
  }


}

module.exports = new UserController