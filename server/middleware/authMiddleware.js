const jwt = require("jsonwebtoken")

require("dotenv")

module.exports = function (req, res, next)  {
  try {
	const token = req.headers.authorization?.split(' ')[1]
	if (!token) {
	  return res.status(403).json({message: "Not logged in!"})
	}
	const decodedData = jwt.verify(token, process.env.SECRET_KEY)
	req.user = decodedData.userId
	next()
  } catch (error) {
	return next(error)
  }
}

