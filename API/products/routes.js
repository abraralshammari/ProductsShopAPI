const express = require("express");
const router = express.Router();

const {dataCreate , dataList , dataUpdate , dataDelete} = require("./controllers");

// product Create
router.post("/", dataCreate);

// product List
router.get("/", dataList);

// product Update
router.put("/:dataId", dataUpdate );

// product Delete
router.delete("/:dataId", dataDelete);

module.exports = router;