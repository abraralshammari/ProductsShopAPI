let data = require("../../data");
//will parse the body as JSON data
const slugify = require("slugify");

//create
exports.dataCreate = (req, res) => {
    const id = data[data.length - 1].id + 1;
    const slug = slugify(req.body.name, { lower: true });
    const newData = { id, slug, ...req.body };
    data.push(newData);
    res.status(201).json(newData);
  };

  //list
  exports.dataList = (req,res) => res.json(data); 

  //update
  exports.dataUpdate = (req, res) => {
    const { dataId } = req.params;
    const foundData = data.find((cv) => cv.id === +dataId);
    if (foundData) {
      for (const key in req.body) foundData[key] = req.body[key];
      res.status(204).end();
    } else {
      res.status(404).json({ message: "data not found" });
    }
  };

  //delet
  exports.dataDelete = (req,res) => {
    const {dataId} = req.params;
    //we need to find the product before we delete it
    //we add + before dataId to convert it to a number
    const foundData = data.find((cv) => cv.id ===+dataId);
    if (foundData) {
        data = data.filter((cv) => cv.id !== +foundData);
        res.status(204).end();
        //To end a response without sending anything back we will use the end method.
    } else {
        res.status(404).json({ message: "A product with this ID doesn't Exist"});
    }

};