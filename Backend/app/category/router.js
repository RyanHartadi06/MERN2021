const express = require("express");
const router = express.Router();
const {
  index,
  createCategory,
  actionCreate,
  viewEdit,
  actionEdit,
  actionDelete,
} = require("./controller");
const {isLogin} = require('../middleware/auth');

router.use(isLogin);
router.get("/", index);
router.get("/create", createCategory);
router.post("/create", actionCreate);
router.get("/edit/:id", viewEdit);
router.put("/update/:id", actionEdit);
router.delete("/delete/:id", actionDelete);

module.exports = router;
