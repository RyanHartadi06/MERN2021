const express = require("express");
const router = express.Router();
const {
  index,
  createNominal,
  actionCreate,
  actionDelete,
  viewEdit,
  actionEdit,
} = require("./controller");

router.get("/", index);
router.get("/create", createNominal);
router.post("/create", actionCreate);
router.get("/edit/:id", viewEdit);
router.put("/update/:id", actionEdit);
router.delete("/delete/:id", actionDelete);

module.exports = router;
