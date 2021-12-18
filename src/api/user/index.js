const router = require("express").Router();

const userController = require("./user.controller");

router.get("/", userController.getUser);

router.get("/:userID", validateSignIn, userController.getUserOnNeed);

router.post("/", userController.postUser);

module.exports = router;
