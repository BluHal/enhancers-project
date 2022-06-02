const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

//Setup Mongodb connection
const uri = process.env.MONGO_URI;
mongoose.connect(uri, { useNewUrlParser: true, dbName: "Cities" });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connected");
});

const citiesRouter = require("./routes/cities");
app.use("/getCitiesInfo", citiesRouter);

app.listen(port, console.log(`server is listening on port ${port}...`));
