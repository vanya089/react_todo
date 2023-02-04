const ApiError = require("./ApiError");


function ApiErrorHandler(err, req, res, next) {


  if (err instanceof ApiError) {
	res.status(err.code).json(err)
	return;
  }


  res.status(500).send("Server error")


}

module.exports = ApiErrorHandler