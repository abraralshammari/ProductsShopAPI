const express = require("express");
const cors = require ("cors");
//To give a browser access to the backend we need to use CORS

const app =express();
app.use(cors());

let data = require ("./data");
app.get("/data", (req,res) => {
    res.json(data);
})
// delete id=1
app.delete("/data/:dataId", (req,res) => {
    const {dataId} = req.params;
    //we need to find the product before we delete it
    //we add + before dataId to convert it to a number
    const foundData = data.find((cv) => cv.id ===+dataId);
    if (foundData) {
        data = data.filter((cv) => cv.id !== +foundData);
        res.status(204).end();
        //To end a response without sending anything back we will use the end method.
    } else {
        res.status(404);
        res.json({ message: "A product with this ID doesn't Exist"});
    }

});

app.get("/", (req,res) => {
    console.log("Hello");
    res.json({message: "Hello world"});
})

app.listen(8000,() => {
    console.log("The application in running on localhost:8000");
});