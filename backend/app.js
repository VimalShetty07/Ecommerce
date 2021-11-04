const express = require('express');
const app = express();

app.use(express.json())

const product = require('./routes/productRoute');
const user  = require('./routes/userRoute');

app.use("/api/v1",product);
app.use("/api/v2",user);

module.exports = app;