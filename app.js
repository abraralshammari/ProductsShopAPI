const express = require("express");
const cors = require ("cors");
//To give a browser access to the backend we need to use CORS

const app =express();
app.use(cors());

const data = require ("./data");
app.get("/data", (req,res) => {
    res.json(data);
})

app.get("/", (req,res) => {
    console.log("Hello");
    res.json({message: "Hello world"});
})

app.listen(8000,() => {
    console.log("The application in running on localhost:8000");
});