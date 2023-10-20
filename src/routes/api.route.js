const {
  getAll,
  getOne,
  addOne,
  updateOne,
  deleteOne,
  deleteAll,
} = require("../controller");

const router = require("express").Router();

router.get("/products", getAll);

router.get("/products/:id", getOne);

router.post("/products", addOne);

router.put("/products/:id", updateOne);

router.delete("/products/:id", deleteOne);

router.delete("/products", deleteAll);

module.exports = router;
