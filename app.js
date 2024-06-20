const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./routes/router');
const mongoose = require('mongoose');
const config = require("./config");
const port = config.env.port;

app.use(cors());
app.use(express.json());
app.use(router);




// get response

// app.get("/", (req, res) => {
//     res.status(200).json('hello world');
// });

app.listen(port, () => {
    console.log(`server started at port no ${port}`);
});