const userService = require("./user.service");

module.exports = {
	getUser: async (req, res) => {
		try {
			let result = await userService.getUser(req.query.userAge);
			res.json(result);
		} catch (error) {
			res.json(error.message);
		}
	},
	getUserOnNeed: (req, res) => {
		//object destructing
		const { userID } = req.params;

		const result = userService.getUserOnNeed(userID);
		res.json(result);
	},
	postUser: (req, res) => {
		const result = userService.postUser();
		res.json(result);
	},
};
