const { ProductModel } = require("../mongo");

const getAll = async (req, res) => {
  const queryName = req.query.name;

  const allProducts = await ProductModel.find({
    name: new RegExp(queryName, "i"),
  });

  res.json(allProducts);
};

const getOne = async (req, res) => {
  const prodId = req.params.id;

  const oneProd = await ProductModel.find({ _id: prodId });

  res.json(oneProd);
};

const addOne = async (req, res) => {
  const prodInfo = req.body;

  const checkProd = await ProductModel.findOne({ name: prodInfo.name });

  if (!!checkProd) {
    res.send("Product already exist.");
    return;
  }
  const addProd = new ProductModel(prodInfo);

  await addProd.save();

  res.json(addProd);
};

const updateOne = async (req, res) => {
  const prodId = req.params.id;

  const updatedProd = await ProductModel.findOneAndUpdate(
    { _id: prodId },
    req.body
  );

  if (!updatedProd) {
    res.send("Product not found!");
    return;
  }

  res.send(updatedProd);
};

const deleteOne = async (req, res) => {
  const prodId = req.params.id;

  const deletedProd = await ProductModel.findOneAndDelete({ _id: prodId });

  if (!deletedProd) {
    res.send("No product found!");
    return;
  }

  res.send("Deleted!");
};

const deleteAll = async (req, res) => {
  try {
    await ProductModel.deleteMany();
  } catch (err) {
    res.send(err);
  }
  res.send("Deleted all products.");
};

module.exports = {
  getAll,
  getOne,
  addOne,
  updateOne,
  deleteAll,
  deleteOne,
};
