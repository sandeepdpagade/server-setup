const express = require("express");
const app = express();
const port = 5000;
const router = require("./router/auth");

app.use("/api/auth", router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
