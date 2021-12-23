const express = require("express");
const router = express.Router();
const {
  index,
  createBank,
  actionCreate,
  actionEdit,
  viewEdit,actionDelete
} = require("./controller");
const {isLogin} = require('../middleware/auth');

router.use(isLogin);
router.get("/", index);
router.get("/create", createBank);
router.post("/send", actionCreate);
router.get("/edit/:id", viewEdit);
router.put("/update/:id", actionEdit);
router.delete("/delete/:id", actionDelete);

module.exports = router;
