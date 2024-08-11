const express = require("express");
const cors = require("cors");
const BlogModel = require("./model");

const app = express();
var PORT = 3001;
app.use(express.json());
app.use(cors());
require("./connection");
//Write missing code here

app.post("/add", async (req, res) => {
  try {
    console.log(req.body);
    const result = await BlogModel(req.body).save();
    res.send({ message: "Employee added" });
  } catch (error) {
    console.log(error);
  }
});

// Write GET API Code
app.get("/get", async (req, res) => {
  try {
    const blogs = await BlogModel.find();
    res.send(blogs);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error fetching blogs" });
  }
});

app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
