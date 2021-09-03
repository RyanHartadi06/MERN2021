const express = require("express");
const router = express.Router();
const {
  index,
  createVoucher,
  actionCreate,
  actionDelete,
  viewEdit,
  actionEdit,
  actionStatus,
} = require("./controller");
const multer = require("multer");
const os = require("os");
router.get("/", index);
router.get("/create", createVoucher);
router.post(
  "/create",
  multer({ dest: os.tmpdir() }).single("image"),
  actionCreate
);
router.get("/edit/:id", viewEdit);
router.put(
  "/update/:id",
  multer({ dest: os.tmpdir() }).single("image"),
  actionEdit
);
router.delete("/delete/:id", actionDelete);

router.put("/status/:id", actionStatus);
module.exports = router;
