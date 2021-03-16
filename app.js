const express = require("express");
//To give a browser access to the backend we need to use CORS
const cors = require ("cors");





//route
const dataRoutes = require("./API/products/routes");


//initialize app
const app =express();

//middleware
app.use(cors());
app.use(express.json());

//routes
app.use("/data" , dataRoutes);  //to look for the route with the path similar to the request's.


app.get("/", (req,res) => {
    console.log("Hello");
    res.json({message: "Hello world"});
})

app.listen(8000,() => {
    console.log("The application in running on localhost:8000");
});