const express = require("express");
const { getAllTokenData, postEmployeeInfo } = require("../controllers/employeeControllers");
const router = express.Router();


router.route("/")
//search employee by company name
		.get(getAllTokenData)
//posts employee data
		.post(postEmployeeInfo)


module.exports = router;