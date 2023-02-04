const TodoRouter = require("express")
const PostController = require("./Controllers/todoController")
const UserController = require("./Controllers/userController")
const {check} = require("express-validator")
const authMiddleware = require("./middleware/authMiddleware")

const router = new TodoRouter();

router.post('/registration', [
  check('username', "Username must not be empty"). notEmpty(),
  check('password', "Password must not be less than 4 symbols").isLength({min:4, max: 20})
], UserController.createNewUser);
router.post('/login', UserController.loginNewUser);
router.get('/users', authMiddleware, UserController.getUsers);
router.post('/posts',authMiddleware, PostController.createTodo);
router.get('/getAll',authMiddleware, PostController.getAllTodos);
router.patch('/check',authMiddleware, PostController.checkTodo);
router.patch('/checkAll',authMiddleware, PostController.checkAllTodo);
router.delete('/deleteOne',authMiddleware, PostController.deleteTodo);
router.delete('/deleteChecked',authMiddleware, PostController.deleteChecked);


module.exports = router;
