const router = require("express").Router();

router.get("/", (_req, res) => {
  res.json({
    message: "Welcome to DressStore application.",
  });
});

module.exports = router;
