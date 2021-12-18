const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routing management
const api = require("./src/api");

app.use("/api/v1", api);

app.listen(3000, () => {
	console.log("Server is running at port 3000");
});
