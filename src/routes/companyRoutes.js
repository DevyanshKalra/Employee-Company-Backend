const express = require("express");
const { getAllContactData, postCompanyInfo,  searchData } = require("../controllers/companyControllers");
const router = express.Router();


router.route("/")
//gets company data in descending order
		.get(getAllContactData)
//posts company's information 
		.post(postCompanyInfo)

router.route('/search')
//search company data in regex
.get(searchData)


module.exports = router;