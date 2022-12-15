const companyModel = require("../models/companyModel");

exports.postCompanyInfo = async (req,res) => {
	try
	{
		//company data is post
		const users = await companyModel.create(req.body);
		res.status(200).json({status:false ,status:true ,users, msg: "created successfully" });
	}
	catch(err)
	{
		console.log(err);
		res.status(500).json({msg: "Internal Server Error"});
	}
}


exports.getAllContactData = async (req,res) => {
	try
	{
		//gets company data in descending order
		const users = await companyModel.find().sort({'numberOfEmployees': -1});
		res.status(200).json({msg: "Companies Found" ,status:true,users});
	}
	catch(err)
	{
		console.log(err);
		res.status(500).json({msg: "Internal Server Error",status:false});
	}
}

exports.searchData = async (req,res) => {
	try
	{
		const companyName = req.query.name;
		//search data with regex in query
		const users = await companyModel.find({companyModel : { $regex : companyName , $options:'i' }});
		res.status(200).json({  msg: "Found successfully" ,status:true ,users});
	}
	catch(err)
	{
		console.log(err);
		res.status(500).json({msg: "Internal Server Error",status:false });
	}
}

