const db = require("../../models/db.json");

module.exports = {
	getUser: async (reqQuery) => {
		let userButWithCondition = await db.users.map((user, index) => {
			return user.age <= reqQuery ? user : {};
		});

		return {
			users: userButWithCondition,
		};
	},
	getUserOnNeed: (userID) => {
		return {
			user: db.users[0],
		};
	},
	postUser: () => {
		return {
			msg: "ok",
		};
	},
};
