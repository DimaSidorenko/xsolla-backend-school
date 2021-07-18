const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser")

const app = express();

const uri = process.env.MONGODB_URI;
//const uri = "mongodb://localhost/market-db";

mongoose.connect(uri, { useNewUrlParser : true });

app.use(bodyParser.json());
app.use("/api", require("./api"));

app.listen(process.env.PORT || 5000, ()=>{
    console.log("server is listening");
})
