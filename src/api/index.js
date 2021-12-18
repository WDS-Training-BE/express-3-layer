const router = require("express").Router();

//api module
const user = require("./user");
const auth = require("./auth");

router.use("/user", user);
router.use("/auth", auth);

module.exports = router;
