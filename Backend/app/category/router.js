const express = require("express");
const router = express.Router();
const {
  index,
  createCategory,
  actionCreate,
  viewEdit,
  actionEdit,
} = require("./controller");

router.get("/", index);
router.get("/create", createCategory);
router.post("/create", actionCreate);
router.get("/edit/:id", viewEdit);
router.post("/update/:id", actionEdit);

module.exports = router;
